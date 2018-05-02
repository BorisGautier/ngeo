(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{294:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.LitElementI18n=exports.setupI18n=void 0;const i18next_1=__importDefault(__webpack_require__(211)),loc_i18next_1=__importDefault(__webpack_require__(845)),i18next_xhr_backend_1=__importDefault(__webpack_require__(847)),lit_1=__webpack_require__(440),i18next_browser_languagedetector_1=__importDefault(__webpack_require__(848)),detectionOptions={order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lang",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"]};exports.setupI18n=function setupI18n(){i18next_1.default.use(i18next_xhr_backend_1.default).use(i18next_browser_languagedetector_1.default).init({ns:["app"],defaultNS:"app",debug:!0,detection:detectionOptions,fallbackLng:!1,interpolation:{escapeValue:!1},backend:{loadPath:"/.build/locale/webcomponent/{{lng}}/{{ns}}.json"}});const localize=loc_i18next_1.default.init(i18next_1.default);i18next_1.default.on("languageChanged",(lang=>{document.documentElement.lang=lang,localize("[data-i18n]")}))};class LitElementI18n extends lit_1.LitElement{connectedCallback(){this.i18nLanguageChangedCallback_=()=>this.requestUpdate(),i18next_1.default.on("languageChanged",this.i18nLanguageChangedCallback_),super.connectedCallback()}disconnectedCallback(){i18next_1.default.off("languageChanged",this.i18nLanguageChangedCallback_),super.disconnectedCallback()}}exports.LitElementI18n=LitElementI18n},434:function(module,exports,__webpack_require__){var ___EXPOSE_LOADER_IMPORT___=__webpack_require__(857),___EXPOSE_LOADER_GLOBAL_THIS___=__webpack_require__(289),___EXPOSE_LOADER_IMPORT_MODULE_LOCAL_NAME___=___EXPOSE_LOADER_IMPORT___.default;void 0===___EXPOSE_LOADER_GLOBAL_THIS___.gmf&&(___EXPOSE_LOADER_GLOBAL_THIS___.gmf={}),void 0===___EXPOSE_LOADER_GLOBAL_THIS___.gmf.user&&(___EXPOSE_LOADER_GLOBAL_THIS___.gmf.user=___EXPOSE_LOADER_IMPORT_MODULE_LOCAL_NAME___),module.exports=___EXPOSE_LOADER_IMPORT___},480:function(module,exports,__webpack_require__){__webpack_require__(481),__webpack_require__(642),__webpack_require__(643),__webpack_require__(864),__webpack_require__(870),__webpack_require__(872),__webpack_require__(871),__webpack_require__(866),__webpack_require__(873),__webpack_require__(867),__webpack_require__(868),__webpack_require__(874),module.exports=__webpack_require__(849)},548:function(module,exports){},643:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(121)},849:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(121).configure)([__webpack_require__(850)],module,!1)}).call(this,__webpack_require__(198)(module))},850:function(module,exports,__webpack_require__){var map={"./auth/component.stories.ts":851};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=850},851:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0}),exports.WithUser=exports.Empty=void 0,__webpack_require__(852);const user_1=__importStar(__webpack_require__(434));exports.default={title:"Auth component",component:"ngeo-auth-component"};const Template=args=>(user_1.default.setUser(args.user,user_1.UserState.READY),`\n    <ngeo-auth-component\n      loginInfoMessage="${args.loginInfoMessage}">\n    </ngeo-auth-component>`),defaultProperties={loginInfoMessage:"",user:null};exports.Empty=Template.bind({}),exports.Empty.args={...defaultProperties},exports.Empty.args.user=user_1.default.getEmptyUserProperties(),exports.WithUser=Template.bind({}),exports.WithUser.args={...defaultProperties};const login=user_1.default.getEmptyUserProperties();login.username="George",exports.WithUser.args.user=login},852:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const lit_1=__webpack_require__(440),decorators_js_1=__webpack_require__(865),i18n_1=__webpack_require__(294),services_1=__importDefault(__webpack_require__(853)),Message_1=__webpack_require__(854),unsafe_svg_1=__webpack_require__(869),spinner_svg_1=__importDefault(__webpack_require__(855)),status_1=__webpack_require__(856),user_1=__importStar(__webpack_require__(434)),qruri_1=__importDefault(__webpack_require__(858)),i18next_1=__importDefault(__webpack_require__(211)),config_1=__importDefault(__webpack_require__(860));let ngeoAuthComponent=class ngeoAuthComponent extends i18n_1.LitElementI18n{constructor(){super(...arguments),this.loginInfoMessage="",this.passwordValidator=null,this.isLoading=!1,this.disconnectedShown=!1,this.resetPasswordShown=!1,this.twoFactorAuth=!1,this.allowPasswordChange=!1,this.allowPasswordReset=!1,this.changingPassword=!1,this.userMustChangeItsPassword=!1,this.error=!1,this.otpImage="",this.gmfUser=null,this.changingPasswordUsername_="",this.subscriptions_=[]}connectedCallback(){super.connectedCallback(),this.subscriptions_.push(user_1.default.getProperties().subscribe({next:properties=>{this.gmfUser=properties,this.setOtpImage_(),this.checkUserMustChangeItsPassword_(),this.onUserStateUpdate_(user_1.default.getState())}})),this.subscriptions_.push(config_1.default.getConfig().subscribe({next:configuration=>{this.twoFactorAuth=configuration.gmfTwoFactorAuth;const config=configuration.gmfAuthenticationConfig;this.allowPasswordChange=config.allowPasswordChange,this.allowPasswordReset=config.allowPasswordReset}}))}disconnectedCallback(){super.disconnectedCallback(),this.subscriptions_.forEach((sub=>sub.unsubscribe()))}render(){return lit_1.html`
      ${this.gmfUser.is_intranet?lit_1.html`
            <div class="form-group">
              <span>${i18next_1.default.t("You are recognized as an intranet user.")}</span>
            </div>
          `:""}
      ${null!==this.gmfUser.username?lit_1.html`
            <div>
              <div class="form-group">
                <span>${i18next_1.default.t("Logged in as")}</span>
                <strong>${this.gmfUser.username}</strong>.
              </div>

              ${this.changingPassword?"":lit_1.html`
                    <form name="logoutForm" role="form" @submit=${evt=>this.logout(evt)}>
                      <div class="form-group">
                        <input type="submit" class="form-control btn prime" value=${i18next_1.default.t("Logout")} />
                      </div>
                      <div class="form-group">
                        <input
                          ?hidden="${!this.allowPasswordChange}"
                          type="button"
                          class="form-control btn btn-default"
                          value=${i18next_1.default.t("Change password")}
                          @click=${()=>this.changingPassword=!0}
                        />
                      </div>
                    </form>
                  `}
            </div>
          `:""}
      ${this.loginInfoMessage?lit_1.html`
            <div class="alert alert-warning">
              <span>${this.loginInfoMessage}</span>
            </div>
          `:""}
      ${this.disconnectedShown?lit_1.html`
            <div class="alert alert-warning">
              ${i18next_1.default.t("You are not logged in any more. The Interface has been reloaded.")}
            </div>
          `:""}
      ${null!==this.gmfUser.username||this.changingPassword?"":lit_1.html`
            <div>
              <form name="loginForm" role="form" @submit=${evt=>this.login(evt)}>
                <div class="form-group">
                  <input type="text" class="form-control" name="login" placeholder=${i18next_1.default.t("Username")} />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder=${i18next_1.default.t("Password")}
                  />
                </div>
                ${this.twoFactorAuth?lit_1.html`
                      <div class="form-group">
                        ${i18next_1.default.t("The following field should be kept empty on first login:")}
                        <input
                          type="text"
                          autocomplete="off"
                          class="form-control"
                          name="otp"
                          placeholder=${i18next_1.default.t("Authentication code")}
                        />
                      </div>
                    `:""}
                <div class="form-group">
                  <input type="submit" class="form-control btn prime" value=${i18next_1.default.t("Connect")} />
                </div>
                ${this.isLoading?lit_1.html`
                      <div class="login-spinner">
                        <i class="fa fa-spin svg-lit-element"> ${unsafe_svg_1.unsafeSVG(spinner_svg_1.default)} </i>
                      </div>
                    `:""}
                <div ?hidden="${!this.allowPasswordReset}" class="form-group">
                  <a @click=${evt=>this.resetPassword(evt)} href=""
                    >${i18next_1.default.t("Password forgotten?")}</a
                  >
                </div>
              </form>

              ${this.resetPasswordShown?lit_1.html` <div class="alert alert-info">
                    ${i18next_1.default.t("A new password has just been sent to you by e-mail.")}
                  </div>`:""}
            </div>
          `}
      ${this.changingPassword?lit_1.html`
            <div>
              ${this.userMustChangeItsPassword?lit_1.html` <div class="alert alert-warning">${i18next_1.default.t("You must change your password")}</div>`:""}

              <form name="changePasswordForm" role="form" @submit=${evt=>this.changePassword(evt)}>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    name="oldpassword"
                    placeholder=${i18next_1.default.t("Old password")}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    name="newpassword"
                    placeholder=${i18next_1.default.t("New password")}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    name="newpasswordconfirm"
                    placeholder=${i18next_1.default.t("Confirm new password")}
                  />
                </div>
                ${this.gmfUser.otp_uri?lit_1.html`
                      <div class="form-group">
                        <label>${i18next_1.default.t("Two factor authentication QR code:")}</label>
                        <div><img class="" src="${this.otpImage}" /></div>
                      </div>
                    `:""}
                ${this.gmfUser.two_factor_totp_secret?lit_1.html`
                      <div class="form-group">
                        <label>${i18next_1.default.t("Two factor authentication key:")}</label>
                        <code>${this.gmfUser.two_factor_totp_secret}</code>
                      </div>
                    `:""}
                ${this.twoFactorAuth?lit_1.html`
                      <div class="form-group">
                        <input
                          type="text"
                          autocomplete="off"
                          class="form-control"
                          name="otp"
                          placeholder=${i18next_1.default.t("Authentication code")}
                        />
                      </div>
                    `:""}

                <div class="form-group">
                  <input type="submit" class="form-control btn prime" value=${i18next_1.default.t("Change password")} />
                </div>
                <div class="form-group">
                  <input
                    type="button"
                    class="form-control btn btn-default"
                    value="Cancel"
                    @click=${()=>this.changePasswordReset()}
                  />
                </div>
              </form>
            </div>
          `:""}

      <div ?hidden="${!this.error}" class="auth-error help-block"></div>
    `}createRenderRoot(){return this}setOtpImage_(){this.gmfUser.otp_uri&&(this.otpImage=qruri_1.default(this.gmfUser.otp_uri,{margin:2}))}onUserStateUpdate_(userState){userState===user_1.UserState.LOGGED_IN?(this.changingPassword=!1,this.userMustChangeItsPassword=!1):userState===user_1.UserState.DISCONNECTED&&(this.disconnectedShown=!0)}checkUserMustChangeItsPassword_(){!1===this.gmfUser.is_password_changed&&(this.changingPasswordUsername_=this.gmfUser.username,this.changingPassword=!0,this.userMustChangeItsPassword=!0)}changePassword(evt){evt.preventDefault();const errors=[],form=evt.target,oldPwd=form.oldPwdVal.value,newPwd=form.newPwdVal.value,confPwd=form.newPwdConfVal.value,otpVal=form.otp.value;if(""===oldPwd&&errors.push(i18next_1.default.t("The old password is required.")),""===newPwd&&errors.push(i18next_1.default.t("The new password is required.")),""===confPwd&&errors.push(i18next_1.default.t("The password confirmation is required.")),errors.length)this.setError_(errors);else if(oldPwd===newPwd&&errors.push(i18next_1.default.t("The old and new passwords are the same.")),newPwd!==confPwd&&errors.push(i18next_1.default.t("The passwords don't match.")),this.passwordValidator&&(this.passwordValidator.isPasswordValid(oldPwd)||errors.push(i18next_1.default.t(this.passwordValidator.notValidMessage))),errors.length)this.setError_(errors);else{let username;username=this.userMustChangeItsPassword?this.changingPasswordUsername_:this.gmfUser.username,console.assert(username),services_1.default.auth.changePassword(username,oldPwd,newPwd,confPwd,otpVal).then((()=>{this.changePasswordReset(),this.setError_([i18next_1.default.t("Your password has successfully been changed.")],Message_1.MessageType.INFORMATION)})).catch((()=>{const oldPwd=document.querySelector('input[name = "oldpassword"]'),otp=document.querySelector('input[name = "otp"]');oldPwd.value="",otp.value="",this.setError_([i18next_1.default.t("Incorrect old password.")])}))}}login(evt){evt.preventDefault(),this.manualLoginLogout_(),this.isLoading=!0;const errors=[],form=evt.target,loginVal=form.login.value,pwdVal=form.password.value;""===loginVal&&errors.push(i18next_1.default.t("The username is required.")),""===pwdVal&&errors.push(i18next_1.default.t("The password is required.")),errors.length?(this.isLoading=!1,this.setError_(errors)):services_1.default.auth.login(loginVal,pwdVal).then((()=>{this.resetError_()})).catch((()=>{this.setError_([i18next_1.default.t("Incorrect credentials or disabled account.")])})).finally((()=>{this.isLoading=!1,form.reset()}))}logout(evt){evt.preventDefault(),this.manualLoginLogout_(),this.isLoading=!0,services_1.default.auth.logout().then((()=>{this.resetError_()})).catch((()=>{this.setError_([i18next_1.default.t("Could not log out.")])})).finally((()=>{this.isLoading=!1}))}manualLoginLogout_(){status_1.gmfBackgroundlayerStatus.touchedByUser=!0}resetPassword(evt){this.isLoading=!0;const login=evt.target.parentNode.parentNode.login.value;if(""===login)return this.isLoading=!1,void this.setError_([i18next_1.default.t("Please, input a login...")]);services_1.default.auth.resetPassword(login).then((()=>{this.resetPasswordShown=!0,this.resetError_()})).catch((()=>{this.setError_([i18next_1.default.t("An error occurred while resetting the password.")])})).finally((()=>{this.isLoading=!1}))}changePasswordReset(){this.resetError_(),this.changingPassword=!1,this.userMustChangeItsPassword=!1;const oldPwd=document.querySelector('input[name = "oldpassword"]'),newPwd=document.querySelector('input[name = "newpassword"]'),newPwdConf=document.querySelector('input[name = "newpasswordconfirm"]');oldPwd.value="",newPwd.value="",newPwdConf.value=""}setError_(errors,messageType){null==messageType&&(messageType=Message_1.MessageType.ERROR),this.error&&this.resetError_(),this.error=!0;const container=document.querySelector(".auth-error");errors.forEach((error=>{const options={msg:error,target:container};messageType&&(options.type=messageType),services_1.default.notification.notify(options)}))}resetError_(){services_1.default.notification.clear(),this.error=!1}};__decorate([decorators_js_1.property({type:String})],ngeoAuthComponent.prototype,"loginInfoMessage",void 0),__decorate([decorators_js_1.property({type:Object})],ngeoAuthComponent.prototype,"passwordValidator",void 0),__decorate([decorators_js_1.state()],ngeoAuthComponent.prototype,"isLoading",void 0),__decorate([decorators_js_1.state()],ngeoAuthComponent.prototype,"disconnectedShown",void 0),__decorate([decorators_js_1.state()],ngeoAuthComponent.prototype,"resetPasswordShown",void 0),__decorate([decorators_js_1.state()],ngeoAuthComponent.prototype,"twoFactorAuth",void 0),__decorate([decorators_js_1.state()],ngeoAuthComponent.prototype,"allowPasswordChange",void 0),__decorate([decorators_js_1.state()],ngeoAuthComponent.prototype,"allowPasswordReset",void 0),__decorate([decorators_js_1.state()],ngeoAuthComponent.prototype,"changingPassword",void 0),__decorate([decorators_js_1.state()],ngeoAuthComponent.prototype,"userMustChangeItsPassword",void 0),__decorate([decorators_js_1.state()],ngeoAuthComponent.prototype,"error",void 0),__decorate([decorators_js_1.state()],ngeoAuthComponent.prototype,"otpImage",void 0),__decorate([decorators_js_1.state()],ngeoAuthComponent.prototype,"gmfUser",void 0),ngeoAuthComponent=__decorate([decorators_js_1.customElement("ngeo-auth-component")],ngeoAuthComponent),exports.default=ngeoAuthComponent},853:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default={auth:void 0,notification:void 0}},854:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"MessageType",(function(){return MessageType})),__webpack_require__.d(__webpack_exports__,"default",(function(){return _default}));var MessageType={ERROR:"error",INFORMATION:"information",SUCCESS:"success",WARNING:"warning"},_default=function(){function _default(){}var _proto=_default.prototype;return _proto.showMessage=function showMessage(message){},_proto.show=function show(object){this.getMessageObjects(object).forEach(this.showMessage,this)},_proto.error=function error(message){this.show(this.getMessageObjects(message,MessageType.ERROR))},_proto.info=function info(message){this.show(this.getMessageObjects(message,MessageType.INFORMATION))},_proto.success=function success(message){this.show(this.getMessageObjects(message,MessageType.SUCCESS))},_proto.warn=function warn(message){this.show(this.getMessageObjects(message,MessageType.WARNING))},_proto.getMessageObjects=function getMessageObjects(object,opt_type){var msgObjects=[],defaultType=MessageType.INFORMATION;if("string"==typeof object)msgObjects.push({msg:object,type:void 0!==opt_type?opt_type:defaultType});else if(Array.isArray(object))object.forEach((function(msg){if("string"==typeof object)msgObjects.push({msg:msg,type:void 0!==opt_type?opt_type:defaultType});else{if("string"==typeof msg)throw new Error("Wrong msg type");void 0!==opt_type&&(msg.type=opt_type),msgObjects.push(msg)}}));else{var msgObject=object;void 0!==opt_type&&(msgObject.type=opt_type),void 0===msgObject.type&&(msgObject.type=defaultType),msgObjects.push(msgObject)}return msgObjects},_default}()},855:function(module,exports){module.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle style="opacity:1;fill-opacity:1;stroke:#000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" cx="256" cy="48" r="48"></circle><circle style="opacity:1;fill-opacity:1;stroke:#000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" cx="109.17" cy="108.313" r="43"></circle><circle style="opacity:1;fill-opacity:1;stroke:#000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" cx="46.537" cy="257.328" r="38"></circle><circle style="opacity:1;fill-opacity:1;stroke:#000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" cx="108.028" cy="403.972" r="33"></circle><circle style="opacity:1;fill-opacity:1;stroke:#000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" cx="255.794" cy="463.935" r="28"></circle><circle style="opacity:1;fill-opacity:1;stroke:#000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" cx="402.894" cy="402.936" r="23"></circle><circle style="opacity:1;fill-opacity:1;stroke:#000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" cx="463.623" cy="256.106" r="18"></circle></svg>'},856:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"gmfBackgroundlayerStatus",(function(){return gmfBackgroundlayerStatus}));var gmfBackgroundlayerStatus={touchedByUser:!1}},857:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UserModel=exports.UserState=void 0;const rxjs_1=__webpack_require__(436);var UserState;!function(UserState){UserState.LOGGED_IN="logged in",UserState.LOGGED_OUT="logged out",UserState.DISCONNECTED="disconnected",UserState.READY="ready",UserState.NOT_INITIALIZED="not initialized"}(UserState=exports.UserState||(exports.UserState={}));class UserModel{constructor(){this.properties_=new rxjs_1.BehaviorSubject(this.getEmptyUserProperties()),this.state_=UserState.NOT_INITIALIZED}getProperties(){return this.properties_}getState(){return this.state_}setUser(properties,state){this.checkUserProperties_(properties)&&null!==state&&(this.state_=state,this.properties_.next(properties))}getEmptyUserProperties(){return{email:null,is_intranet:null,functionalities:null,is_password_changed:null,roles:null,username:null,otp_key:null,otp_uri:null,two_factor_totp_secret:null}}checkUserProperties_(properties){if(null==properties)return console.error("New properties of the user must be an object"),!1;let isValid=!0;return Object.keys(this.getEmptyUserProperties()).forEach((key=>{Object.keys(properties).includes(key)||(console.error(`User is missing property ${key}`),isValid=!1)})),isValid}}exports.UserModel=UserModel;const user=new UserModel;exports.default=user},860:function(module,exports,__webpack_require__){var ___EXPOSE_LOADER_IMPORT___=__webpack_require__(861),___EXPOSE_LOADER_GLOBAL_THIS___=__webpack_require__(289),___EXPOSE_LOADER_IMPORT_MODULE_LOCAL_NAME___=___EXPOSE_LOADER_IMPORT___.default;void 0===___EXPOSE_LOADER_GLOBAL_THIS___.gmf&&(___EXPOSE_LOADER_GLOBAL_THIS___.gmf={}),void 0===___EXPOSE_LOADER_GLOBAL_THIS___.gmf.config&&(___EXPOSE_LOADER_GLOBAL_THIS___.gmf.config=___EXPOSE_LOADER_IMPORT_MODULE_LOCAL_NAME___),module.exports=___EXPOSE_LOADER_IMPORT___},861:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ConfigModel=exports.buildStyle=void 0;const Style_1=__importStar(__webpack_require__(875)),Circle_1=__importDefault(__webpack_require__(219)),RegularShape_1=__importDefault(__webpack_require__(295)),Fill_1=__importDefault(__webpack_require__(163)),Stroke_1=__importDefault(__webpack_require__(143)),rxjs_1=__webpack_require__(436);__webpack_require__(862),exports.buildStyle=function buildStyle(styleDescriptor){if(styleDescriptor instanceof Style_1.default)return styleDescriptor;if(styleDescriptor){if(Array.isArray(styleDescriptor)){const result=[];for(const style of styleDescriptor)result.push(buildStyle(style));return result}{const style={};Object.assign(style,styleDescriptor);const sd=styleDescriptor;if(sd.fill&&(style.fill=new Fill_1.default(sd.fill)),sd.stroke&&(style.stroke=new Stroke_1.default(sd.stroke)),sd.circle){const circleStyle={};Object.assign(circleStyle,sd.circle),sd.circle.fill&&(circleStyle.fill=new Fill_1.default(sd.circle.fill)),sd.circle.stroke&&(circleStyle.stroke=new Stroke_1.default(sd.circle.stroke)),style.image=new Circle_1.default(circleStyle),delete style.circle}else if(sd.regularShape){const regularShapeStyle={};Object.assign(regularShapeStyle,sd.regularShape),sd.regularShape.fill&&(regularShapeStyle.fill=new Fill_1.default(sd.regularShape.fill)),sd.regularShape.stroke&&(regularShapeStyle.stroke=new Stroke_1.default(sd.regularShape.stroke)),sd.regularShape.angle&&(sd.regularShape.angle=sd.regularShape.angle/180*Math.PI),sd.regularShape.rotation&&(sd.regularShape.rotation=sd.regularShape.angle/180*Math.PI),style.image=new RegularShape_1.default(regularShapeStyle),delete style.regularShape}return new Style_1.default(style)}}return Style_1.createDefaultStyle};class ConfigModel{constructor(){this.configuration_=new rxjs_1.Subject}getConfig(){return this.configuration_}setConfig(config){this.configuration_.next(config)}}exports.ConfigModel=ConfigModel;const config=new ConfigModel;exports.default=config},874:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(881),esm=__webpack_require__(4),i18next=(__webpack_require__(825),__webpack_require__(211)),i18n=__webpack_require__(294);const parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},i18next:i18next.default,locale:"en",locales:{en:"English",fr:"Français"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object(i18n.setupI18n)(),Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[480,2,3]]]);