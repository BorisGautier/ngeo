// The MIT License (MIT)
//
// Copyright (c) 2021 Camptocamp SA
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

import {LitElement, html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import AngularServices from 'ngeo/services';
import {MessageType} from 'ngeo/message/Message.js';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';
import loadingSvg from 'gmf/icons/spinner.svg';
import {gmfBackgroundlayerStatus} from 'gmf/backgroundlayerselector/status.js';
import {Subscription} from 'rxjs';
// @ts-ignore
import user, {User, UserState} from 'ngeo/store/user.ts';
// @ts-ignore
import qruri from 'qruri';

/** Type definition for PasswordValidator */
type PasswordValidator = {
  isPasswordValid: (val: string) => boolean;
  notValidMessage: string;
};

@customElement('ngeo-auth-component')
export default class ngeoAuthComponent extends LitElement {
  @property({type: String}) loginInfoMessage = '';
  @property({type: Object}) private passwordValidator: PasswordValidator = null;
  @state() private isLoading = false;
  @state() private disconnectedShown = false;
  @state() private resetPasswordShown = false;
  @state() private twoFactorAuth = false; // TODO: gmfTwoFactorAuth
  @state() private allowPasswordChange = false; // TODO: gmfAuthenticationConfig
  @state() private allowPasswordReset = false; // TODO: gmfAuthenticationConfig
  @state() private changingPassword = false;
  @state() private userMustChangeItsPassword = false;
  @state() private error = false;
  @state() private otpImage = '';
  @state() private gmfUser: User = null;
  private changingPasswordUsername_ = '';
  private subscriptions_: Subscription[] = [];

  connectedCallback() {
    super.connectedCallback();
    this.subscriptions_.push(
      user.getProperties().subscribe({
        next: (properties: User) => {
          this.gmfUser = properties;
          this.setOtpImage_();
          this.checkUserMustChangeItsPassword_();
          this.onUserStateUpdate_(user.getState());
        },
      })
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.subscriptions_.forEach((sub) => sub.unsubscribe());
  }

  render() {
    return html`
      ${this.gmfUser.is_intranet
        ? html`
            <div class="form-group">
              <span>You are recognized as an intranet user.</span>
            </div>
          `
        : ''}
      ${this.gmfUser.username !== null
        ? html`
            <div>
              <div class="form-group">
                <span>Logged in as</span>
                <strong>${this.gmfUser.username}</strong>.
              </div>

              ${!this.changingPassword
                ? html`
                    <form name="logoutForm" role="form" @submit=${(evt: Event) => this.logout(evt)}>
                      <div class="form-group">
                        <input type="submit" class="form-control btn prime" value="Logout" />
                      </div>
                      <div class="form-group">
                        <input
                          ?hidden="${!this.allowPasswordChange}"
                          type="button"
                          class="form-control btn btn-default"
                          value="Change password"
                          @click=${() => (this.changingPassword = true)}
                        />
                      </div>
                    </form>
                  `
                : ''}
            </div>
          `
        : ''}
      ${this.loginInfoMessage
        ? html`
            <div class="alert alert-warning">
              <span>${this.loginInfoMessage}</span>
            </div>
          `
        : ''}
      ${this.disconnectedShown
        ? html`
            <div class="alert alert-warning">
              You are not logged in any more. The Interface has been reloaded.
            </div>
          `
        : ''}
      ${this.gmfUser.username === null && !this.changingPassword
        ? html`
            <div>
              <form name="loginForm" role="form" @submit=${(evt: Event) => this.login(evt)}>
                <div class="form-group">
                  <input type="text" class="form-control" name="login" placeholder="Username" />
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" name="password" placeholder="Password" />
                </div>
                ${this.twoFactorAuth
                  ? html`
                      <div class="form-group">
                        {{'The following field should be kept empty on first login:' | translate}}
                        <input
                          type="text"
                          autocomplete="off"
                          class="form-control"
                          name="otp"
                          placeholder="Authentication code"
                        />
                      </div>
                    `
                  : ''}
                <div class="form-group">
                  <input type="submit" class="form-control btn prime" value="Connect" />
                </div>
                ${this.isLoading
                  ? html`
                      <div class="login-spinner">
                        <i class="fa fa-spin svg-lit-element"> ${unsafeSVG(loadingSvg)} </i>
                      </div>
                    `
                  : ''}
                <div ?hidden="${!this.allowPasswordReset}" class="form-group">
                  <a @click=${(evt: Event) => this.resetPassword(evt)} href="">Password forgotten?</a>
                </div>
              </form>

              ${this.resetPasswordShown
                ? html` <div class="alert alert-info">
                    A new password has just been sent to you by e-mail.
                  </div>`
                : ''}
            </div>
          `
        : ''}
      ${this.changingPassword
        ? html`
            <div>
              ${this.userMustChangeItsPassword
                ? html` <div class="alert alert-warning">You must change your password</div>`
                : ''}

              <form name="changePasswordForm" role="form" @submit=${(evt: Event) => this.changePassword(evt)}>
                <div class="form-group">
                  <input type="password" class="form-control" name="oldpassword" placeholder="Old password" />
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" name="newpassword" placeholder="New password" />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    name="newpasswordconfirm"
                    placeholder="Confirm new password"
                  />
                </div>
                ${this.gmfUser.otp_uri
                  ? html`
                      <div class="form-group">
                        <label>Two factor authentication QR code:</label>
                        <div><img class="" src="${this.otpImage}" /></div>
                      </div>
                    `
                  : ''}
                ${this.gmfUser.two_factor_totp_secret
                  ? html`
                      <div class="form-group">
                        <label>Two factor authentication key:</label>
                        <code>${this.gmfUser.two_factor_totp_secret}</code>
                      </div>
                    `
                  : ''}
                ${this.twoFactorAuth
                  ? html`
                      <div class="form-group">
                        <input
                          type="text"
                          autocomplete="off"
                          class="form-control"
                          name="otp"
                          placeholder="Authentication code"
                        />
                      </div>
                    `
                  : ''}

                <div class="form-group">
                  <input type="submit" class="form-control btn prime" value="Change password" />
                </div>
                <div class="form-group">
                  <input
                    type="button"
                    class="form-control btn btn-default"
                    value="Cancel"
                    @click=${() => this.changePasswordReset()}
                  />
                </div>
              </form>
            </div>
          `
        : ''}

      <div ?hidden="${!this.error}" class="auth-error help-block"></div>
    `;
  }
  // Disable shadow DOM
  protected createRenderRoot() {
    return this;
  }

  /**
   * @private
   */
  setOtpImage_() {
    if (this.gmfUser.otp_uri) {
      this.otpImage = qruri(this.gmfUser.otp_uri, {
        margin: 2,
      });
    }
  }

  /**
   * @param {UserState} userState state of the user.
   * @private
   */
  onUserStateUpdate_(userState: UserState) {
    if (userState === UserState.LOGGED_IN) {
      this.changingPassword = false;
      this.userMustChangeItsPassword = false;
    } else if (userState === UserState.DISCONNECTED) {
      this.disconnectedShown = true;
    }
  }

  checkUserMustChangeItsPassword_() {
    if (this.gmfUser.is_password_changed !== false) {
      return;
    }
    this.changingPasswordUsername_ = this.gmfUser.username;
    this.changingPassword = true;
    this.userMustChangeItsPassword = true;
  }

  // METHODS THAT CALL THE AUTHENTICATION SERVICE METHODS

  /**
   * Calls the authentication service changePassword method.
   * @param evt
   */
  changePassword(evt: Event) {
    evt.preventDefault();

    const errors = [];
    const form = evt.target as HTMLFormElement;
    const oldPwd = form.oldPwdVal.value;
    const newPwd = form.newPwdVal.value;
    const confPwd = form.newPwdConfVal.value;
    const otpVal = form.otp.value;

    // Validation - Passwords are required.
    if (oldPwd === '') {
      errors.push('The old password is required.');
    }
    if (newPwd === '') {
      errors.push('The new password is required.');
    }
    if (confPwd === '') {
      errors.push('The password confirmation is required.');
    }

    if (errors.length) {
      this.setError_(errors);
    } else {
      // Default validation - Passwords must be new and must also match.
      if (oldPwd === newPwd) {
        errors.push('The old and new passwords are the same.');
      }
      if (newPwd !== confPwd) {
        errors.push("The passwords don't match.");
      }
      // Custom validation - If a passwordValidaor is set, use it to validate the new password.
      if (this.passwordValidator) {
        if (!this.passwordValidator.isPasswordValid(oldPwd)) {
          errors.push(this.passwordValidator.notValidMessage);
        }
      }

      if (errors.length) {
        this.setError_(errors);
      } else {
        // Send request with current credentials, which may fail if the old password given is incorrect.
        let username;
        if (this.userMustChangeItsPassword) {
          username = this.changingPasswordUsername_;
        } else {
          username = this.gmfUser.username;
        }
        console.assert(username);
        AngularServices.auth
          .changePassword(username, oldPwd, newPwd, confPwd, otpVal)
          .then(() => {
            this.changePasswordReset();
            this.setError_(['Your password has successfully been changed.'], MessageType.INFORMATION);
          })
          .catch(() => {
            /* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
            // Reset the values cannot be done via Event values
            const oldPwd = document.querySelector('input[name = "oldpassword"]') as HTMLInputElement;
            const otp = document.querySelector('input[name = "otp"]') as HTMLInputElement;
            oldPwd.value = '';
            otp.value = '';

            this.setError_(['Incorrect old password.']);
          });
      }
    }
  }

  /**
   * Calls the authentication service login method.
   * @param evt Event from the form submit action.
   */
  login(evt: Event) {
    evt.preventDefault();

    this.manualLoginLogout_();

    this.isLoading = true;
    const errors = [];
    const form = evt.target as HTMLFormElement;
    const loginVal = (form.login as HTMLInputElement).value;
    const pwdVal = (form.password as HTMLInputElement).value;

    if (loginVal === '') {
      errors.push('The username is required.');
    }
    if (pwdVal === '') {
      errors.push('The password is required.');
    }
    if (errors.length) {
      this.isLoading = false;
      this.setError_(errors);
    } else {
      AngularServices.auth
        .login(loginVal, pwdVal)
        .then(() => {
          this.resetError_();
        })
        .catch(() => {
          this.setError_(['Incorrect credentials or disabled account.']);
        })
        .finally(() => {
          this.isLoading = false;
          form.reset();
        });
    }
  }

  /**
   * Calls the authentication service logout method.
   * @param evt Event from the form submit action.
   */
  logout(evt: Event) {
    evt.preventDefault();

    this.manualLoginLogout_();

    this.isLoading = true;
    AngularServices.auth
      .logout()
      .then(() => {
        this.resetError_();
      })
      .catch(() => {
        this.setError_(['Could not log out.']);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  /**
   * Effects on manual try to login/logout.
   */
  manualLoginLogout_() {
    // Set the user could lead to a new background.
    gmfBackgroundlayerStatus.touchedByUser = true;
  }

  /**
   * Calls the authentication service resetPassword method.
   * @param evt Event from the form submit action.
   */
  resetPassword(evt: Event) {
    this.isLoading = true;

    const resetBtn = evt.target as HTMLFormElement;
    const form = resetBtn.parentNode.parentNode as HTMLFormElement;
    const login = form.login.value;

    if (login === '') {
      this.isLoading = false;
      this.setError_(['Please, input a login...']);
      return;
    }

    AngularServices.auth
      .resetPassword(login)
      .then(() => {
        this.resetPasswordShown = true;
        this.resetError_();
      })
      .catch(() => {
        this.setError_(['An error occurred while resetting the password.']);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  // OTHER METHODS

  /**
   * Reset the changePassword values and error.
   */
  changePasswordReset() {
    this.resetError_();
    this.changingPassword = false;
    this.userMustChangeItsPassword = false;

    /* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
    const oldPwd = document.querySelector('input[name = "oldpassword"]') as HTMLInputElement;
    const newPwd = document.querySelector('input[name = "newpassword"]') as HTMLInputElement;
    const newPwdConf = document.querySelector('input[name = "newpasswordconfirm"]') as HTMLInputElement;
    oldPwd.value = '';
    newPwd.value = '';
    newPwdConf.value = '';
  }

  /**
   * Set an error notification
   * @param errors List of errors
   * @param messageType Type of message
   */
  setError_(errors: string[], messageType?: MessageType) {
    if (messageType == undefined) {
      messageType = MessageType.ERROR;
    }
    if (this.error) {
      this.resetError_();
    }
    this.error = true;
    const container = document.querySelector('.auth-error');

    errors.forEach((error) => {
      const options: import('ngeo/message/Message.js').Message = {
        msg: error,
        target: container,
      };
      if (messageType) {
        options.type = messageType;
      }
      AngularServices.notification.notify(options);
    });
  }

  /**
   * Reset the error notification
   */
  resetError_() {
    AngularServices.notification.clear();
    this.error = false;
  }
}
