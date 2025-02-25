// The MIT License (MIT)
//
// Copyright (c) 2016-2022 Camptocamp SA
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import angular from 'angular';
import 'bootstrap/js/src/alert';

import ngeoMessagePopup, {MessagePopup} from 'ngeo/message/Popup';
import ngeoMessageMessage, {MessageType} from 'ngeo/message/Message_OLD'; // TODO: Use new ts file when convert done
import 'ngeo/sass/font.scss';

/**
 * A message to display by the disclaimer service.
 *
 * @typedef {Object} Message
 * @property {number} [delay=7000] The delay in milliseconds the message is shown
 * @property {boolean} [popup=false] Whether the message should be displayed inside a popup window or not.
 * @property {string} msg The message text to display.
 * @property {string} [layerUid] The OpenLayers layer identifier.
 * @property {JQuery|Element|string} [target] The target element (or selector to get the element) in which
 *    to display the message. If not defined, then the default target of the notification service is used.
 * @property {string} [type='info'] The type of message.
 */

/**
 * Provides methods to display any sort of messages, disclaimers, errors,
 * etc. Requires Bootstrap library (both CSS and JS) to display the alerts
 * properly.
 *
 * @hidden
 */
export class MessageDisclaimerService extends ngeoMessageMessage {
  /**
   * @param {angular.ISCEService} $sce Angular sce service.
   * @param {angular.gettext.gettextCatalog} gettextCatalog Gettext service.
   * @param {import('ngeo/message/Popup').PopupFactory} ngeoCreatePopup Popup service.
   * @ngInject
   */
  constructor($sce, gettextCatalog, ngeoCreatePopup) {
    super();

    /**
     * @private
     * @type {angular.ISCEService}
     */
    this.sce_ = $sce;

    /**
     * @type {angular.gettext.gettextCatalog}
     * @private
     */
    this.gettextCatalog_ = gettextCatalog;

    /**
     * @private
     * @type {import('ngeo/message/Popup').PopupFactory}
     */
    this.createPopup_ = ngeoCreatePopup;

    const container = angular.element('<div class="ngeo-disclaimer"></div>');
    angular.element(document.body).append(container);

    /**
     * @type {JQuery}
     * @private
     */
    this.container_ = container;

    /**
     * Cache of messages.
     *
     * @type {Object<string, JQuery|import('ngeo/message/Popup').MessagePopup>}
     * @private
     */
    this.messages_ = {};

    /**
     * @type {Object<string, number>}
     * @private
     */
    this.messagesConsumerCount_ = {};

    /**
     * @type {Object<string, boolean>}
     * @private
     */
    this.uids_ = {};
  }

  /**
   * Show disclaimer message string or object or list of disclaimer message
   * strings or objects.
   *
   * @param {string | Message | (string | Message)[]} object
   *     A message or list of messages as text or configuration objects.
   */
  alert(object) {
    this.show(object);
  }

  /**
   * Close disclaimer message string or object or list of disclaimer message
   * strings or objects.
   *
   * @param {string | Message | (string | Message)[]} object
   *     A message or list of messages as text or configuration objects.
   */
  close(object) {
    const msgObjects = this.getMessageObjects(object);
    msgObjects.forEach((message) => this.closeMessage_(message));
  }

  /**
   * Show the message.
   *
   * @param {Message} message Message.
   * @protected
   * @override
   */
  showMessage(message) {
    const gettextCatalog = this.gettextCatalog_;
    const type = message.type;
    console.assert(typeof type == 'string', 'Type should be set.');

    // No need to do anything if message already displayed.
    const uid = this.getMessageUid_(message);
    if (this.uids_[uid]) {
      return;
    }

    this.uids_[uid] = true;

    if (message.popup === true) {
      // display the message in a popup, i.e. using the ngeo create popup
      const popup = this.createPopup_();
      const content = this.sce_.trustAsHtml(message.msg);
      popup.open({
        autoDestroy: true,
        content: content,
        title: '&nbsp;',
      });

      // Watch the open property
      popup.scope.$watch('open', (newVal) => {
        if (!newVal) {
          this.closeMessage_(message);
        }
      });

      this.messages_[uid] = popup;
    } else {
      // get an already displayed compatible message.
      const compatibleMessageUid = this.getCompatibleMessageUid_(message);
      if (this.messages_[compatibleMessageUid]) {
        // we already have a message
        this.messagesConsumerCount_[compatibleMessageUid]++;
        return;
      }

      // display the message using a bootstrap dismissible alert
      const classNames = ['alert', 'fade', 'alert-dismissible', 'show'];
      switch (type) {
        case MessageType.ERROR:
          classNames.push('alert-danger');
          break;
        case MessageType.INFORMATION:
          classNames.push('alert-info');
          break;
        case MessageType.SUCCESS:
          classNames.push('alert-success');
          break;
        case MessageType.WARNING:
          classNames.push('alert-warning');
          break;
        default:
          break;
      }

      const el = angular.element(`<div role="alert" class="${classNames.join(' ')}"></div>`);
      const button = angular.element(
        `<button type="button" class="close" data-dismiss="alert" aria-label="${gettextCatalog.getString(
          'Close'
        )}"><span aria-hidden="true" class="fa fa-times"></span></button>`
      );
      const msg = angular.element('<span />').html(message.msg);
      el.append(button).append(msg);

      let container;

      if (message.target) {
        container = angular.element(message.target);
      } else {
        container = this.container_;
      }

      container.append(el);
      el.addClass('show');

      // Listen when the message gets closed to cleanup the cache of messages
      el.on('closed.bs.alert', () => {
        this.closeMessage_(message, true);
      });
      this.messages_[compatibleMessageUid] = el;
      this.messagesConsumerCount_[compatibleMessageUid] = 1;
    }
  }

  /**
   * @param {Message} message Message.
   * @returns {string} The uid.
   * @private
   */
  getMessageUid_(message) {
    return `${message.msg}-${message.type}-${message.layerUid}`;
  }

  /**
   * @param {Message} message Message.
   * @returns {string} The uid.
   * @private
   */
  getCompatibleMessageUid_(message) {
    return `${message.msg}-${message.type}`;
  }

  /**
   * Close the message.
   *
   * @param {Message} message Message.
   * @param {boolean} force Force close the message.
   * @protected
   */
  closeMessage_(message, force = false) {
    const uid = this.getMessageUid_(message);

    // (1) No need to do anything if message doesn't exist
    if (!this.uids_[uid]) {
      return;
    }
    delete this.uids_[uid];
    const compatibleMessageUid = this.getCompatibleMessageUid_(message);
    if (force) {
      this.messagesConsumerCount_[compatibleMessageUid] = 0;
    } else {
      this.messagesConsumerCount_[compatibleMessageUid]--;
    }
    if (this.messagesConsumerCount_[compatibleMessageUid] > 0) {
      // the message is still used
      return;
    }

    const obj = this.messages_[compatibleMessageUid];

    // (2) Close message (popup or alert)
    if (obj instanceof MessagePopup) {
      // (2.1) Close popup, if not already closed
      /**
       * @type {MessagePopup}
       */
      const mpObj = obj;
      if (mpObj.getOpen()) {
        mpObj.setOpen(false);
      }
    } else if (obj) {
      // (2.2) Check if the message hasn't been closed using the UI, i.e. by
      //       clicking the close button. If not, then close it.
      const jqueryObj = /** @type {JQuery} */ (obj);
      if (jqueryObj.hasClass('show')) {
        jqueryObj.alert('close');
      }
    } else {
      console.log(`No disclaimer found for  '${message}'.`);
    }

    // (3) Remove message from cache since it's closed now.
    delete this.messages_[compatibleMessageUid];
    delete this.messagesConsumerCount_[compatibleMessageUid];
  }
}

/**
 * @type {angular.IModule}
 * @hidden
 */
const myModule = angular.module('ngeoDisclaimer', [ngeoMessagePopup.name]);

myModule.service('ngeoDisclaimer', MessageDisclaimerService);

export default myModule;
