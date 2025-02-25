// The MIT License (MIT)
//
// Copyright (c) 2017-2021 Camptocamp SA
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

// @ts-nocheck
// The MIT License (MIT)
//
// Copyright (c) 2017-2021 Camptocamp SA
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

/* global Cesium */

import angular from 'angular';
import * as olEasing from 'ol/easing';
import {toRadians} from 'ol/math';
import olcsCore from 'olcs/core';

/**
 * @type {angular.IModule}
 * @hidden
 */
const myModule = angular.module('ngeoOlcsControls3d', []);

/**
 * @private
 * @hidden
 * @param {number} older Older
 * @param {number} newer Newer
 * @returns {boolean} ?
 */
function shouldUpdate(older, newer) {
  return Number.isFinite(newer) && (!Number.isFinite(older) || Math.abs(newer - older) > 0.05);
}

/**
 * @hidden
 */
export const Controller = class {
  /**
   * @ngInject
   * @param {JQuery} $element The element
   * @param {import('ngeo/olcs/Service').OlcsService} ngeoOlcsService The ol-cesium service.
   */
  constructor($element, ngeoOlcsService) {
    /**
     * @type {JQuery}
     * @private
     */
    this.element_ = $element;

    /**
     * @type {?import('olcs/contrib/Manager').default}
     */
    this.ol3dm = null;

    /**
     * @type {number}
     */
    this.minTilt = -1;

    /**
     * @type {number}
     * @private
     */
    this.maxTilt = -1;

    /**
     * @type {?JQuery}
     * @private
     */
    this.tiltRightEl_ = null;

    /**
     * @type {?JQuery}
     * @private
     */
    this.tiltLeftEl_ = null;

    /**
     * @type {?JQuery}
     * @private
     */
    this.rotation3dEl_ = null;

    /**
     * @type {?JQuery}
     * @private
     */
    this.angle3dEl_ = null;

    /**
     * @type {number}
     * @private
     */
    this.previousRotation_ = -1;

    /**
     * @type {?Cesium.Matrix4}
     * @private
     */
    this.previousViewMatrix_ = null;

    /**
     * @type {number}
     * @private
     */
    this.animationFrameRequestId_ = -1;

    /**
     * @type {import('ngeo/olcs/Service').OlcsService}
     * @private
     */
    this.olcsService_ = ngeoOlcsService;
  }

  updateWidget_() {
    if (!this.ol3dm) {
      throw new Error('Missing ol3dm');
    }
    if (!this.rotation3dEl_) {
      throw new Error('Missing rotation3dEl_');
    }
    if (!this.angle3dEl_) {
      throw new Error('Missing angle3dEl_');
    }
    if (!this.tiltRightEl_) {
      throw new Error('Missing tiltRightEl_');
    }
    if (!this.tiltLeftEl_) {
      throw new Error('Missing tiltLeftEl_');
    }
    const newRotation = this.ol3dm.getOl3d().getOlView().getRotation();
    if (shouldUpdate(this.previousRotation_, newRotation)) {
      this.rotateElement_(this.rotation3dEl_, newRotation);
      this.previousRotation_ = newRotation;
    }

    const newViewMatrix = this.ol3dm.getCesiumViewMatrix();
    if (!Cesium.Matrix4.equalsEpsilon(this.previousViewMatrix_, newViewMatrix, 1e-5)) {
      const newTilt = this.ol3dm.getTiltOnGlobe(); // this is expensive!!
      if (newTilt != undefined && Number.isFinite(newTilt || 0)) {
        this.rotateElement_(this.angle3dEl_, newTilt);
        this.previousViewMatrix_ = Cesium.Matrix4.clone(newViewMatrix);

        // if min or max tilt is reached, disable the tilting buttons
        const buffer = 0.01; // rad
        if (newTilt - this.minTilt < buffer) {
          this.tiltRightEl_.addClass('ngeo-right-inactive');
        } else if (this.tiltRightEl_.hasClass('ngeo-right-inactive')) {
          this.tiltRightEl_.removeClass('ngeo-right-inactive');
        }
        if (this.maxTilt - newTilt < buffer) {
          this.tiltLeftEl_.addClass('ngeo-left-inactive');
        } else if (this.tiltLeftEl_.hasClass('ngeo-left-inactive')) {
          this.tiltLeftEl_.removeClass('ngeo-left-inactive');
        }
      }
    }

    this.animationFrameRequestId_ = requestAnimationFrame(() => this.updateWidget_());
  }

  $onDestroy() {
    if (this.animationFrameRequestId_) {
      cancelAnimationFrame(this.animationFrameRequestId_);
    }
  }

  $onInit() {
    if (this.minTilt === undefined) {
      this.minTilt = 0;
    }
    if (this.maxTilt === undefined) {
      this.maxTilt = (7 * Math.PI) / 16;
    }
    if (!this.ol3dm) {
      this.ol3dm = this.olcsService_.getManager() || null;
    }
    this.tiltRightEl_ = this.element_.find('.ngeo-tilt-right');
    this.tiltLeftEl_ = this.element_.find('.ngeo-tilt-left');
    this.rotation3dEl_ = this.element_.find('.ngeo-rotation3d');
    this.angle3dEl_ = this.element_.find('.ngeo-angle3d');
    this.updateWidget_();
  }

  /**
   * @param {JQuery} element Element to rotate.
   * @param {(number|undefined)} angle Angle in radians
   * @private
   */
  rotateElement_(element, angle) {
    const r = `rotate(${angle}rad)`;
    element.css({
      '-moz-transform': r,
      '-webkit-transform': r,
      '-o-transform': r,
      '-ms-transform': r,
      'transform': r,
    });
  }

  /**
   * @param {number} angle Angle in degrees.
   */
  rotate(angle) {
    if (!this.ol3dm) {
      throw new Error('Missing ol3dm');
    }
    this.ol3dm.setHeading(toRadians(angle));
  }

  /**
   * @param {number} angle Angle in degrees.
   */
  tilt(angle) {
    if (!this.ol3dm) {
      throw new Error('Missing ol3dm');
    }
    angle = toRadians(angle);
    const tiltOnGlobe = Number(this.ol3dm.getTiltOnGlobe());
    if (tiltOnGlobe + angle < this.minTilt) {
      angle = this.minTilt - tiltOnGlobe;
    } else if (tiltOnGlobe + angle > this.maxTilt) {
      angle = this.maxTilt - tiltOnGlobe;
    }
    const scene = this.ol3dm.getCesiumScene();
    olcsCore.rotateAroundBottomCenter(scene, angle);
  }

  /**
   * @param {number} delta 1 to zoom out and 1 to zoom in.
   */
  zoom(delta) {
    if (!this.ol3dm) {
      throw new Error('Missing ol3dm');
    }
    const view = this.ol3dm.getOlView();
    const cur = view.getResolution();
    const newResolution = view.constrainResolution(cur, delta);
    if (view.getAnimating()) {
      view.cancelAnimations();
    }
    view.animate({
      resolution: newResolution,
      duration: 250,
      easing: olEasing.easeOut,
    });
  }
};

/**
 * @param {angular.IAttributes} $attrs Attributes.
 * @param {string} ngeoOlcsControls3dTemplateUrl Template function.
 * @returns {string} Template URL.
 * @ngInject
 * @private
 * @hidden
 */
function ngeoOlcsControls3dTemplateUrlInjectable($attrs, ngeoOlcsControls3dTemplateUrl) {
  if (ngeoOlcsControls3dTemplateUrl) {
    return ngeoOlcsControls3dTemplateUrl;
  }
  const templateUrl = $attrs['ngeoOlcsControls3dTemplateUrl'];
  return templateUrl ? templateUrl : 'ngeo/olsc/controls3d';
}

myModule.run(
  /**
   * @ngInject
   * @param {angular.ITemplateCacheService} $templateCache
   */
  ($templateCache) => {
    // @ts-ignore: webpack
    $templateCache.put('ngeo/olsc/controls3d', require('./controls3d.html'));
  }
);

/**
 * Provides the "ngeoOlcsControls3d" component, a widget for
 * controlling the 3D camera.
 *
 * Example:
 *
 *     <ngeo-olcs-controls3d ng-if="$ctrl.manager && $ctrl.manager.is3dEnabled()">
 *     </ngeo-olcs-controls3d>
 *
 * By default the directive uses "controls3d.html" as its templateUrl. This
 * can be changed by redefining the "ngeoOlcsControls3dTemplateUrl" value.
 *
 * See our live example: [../examples/simple3d.html](../examples/simple3d.html)
 *
 * @htmlAttribute {olcs.contrib.Manager} ngeo-olcs-manager The OL-Cesium manager.
 * @type {angular.IComponentOptions}
 * @ngdoc component
 * @ngname ngeoOlcsControls3d
 */
const olscControls3dComponent = {
  bindings: {
    'minTilt': '<?',
    'maxTilt': '<?',
    'ol3dm': '<?',
  },
  controller: Controller,
  templateUrl: ngeoOlcsControls3dTemplateUrlInjectable,
};

myModule.component('ngeoOlcsControls3d', olscControls3dComponent);

myModule.value('ngeoOlcsControls3dTemplateUrl', '');

export default myModule;
