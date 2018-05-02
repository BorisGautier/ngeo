/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"mobilegeolocation": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([27,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/mobilegeolocation.css":
/*!****************************************!*\
  !*** ./examples/mobilegeolocation.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/mobilegeolocation.js":
/*!***************************************!*\
  !*** ./examples/mobilegeolocation.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _mobilegeolocation_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobilegeolocation.css */ "./examples/mobilegeolocation.css");
/* harmony import */ var _mobilegeolocation_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mobilegeolocation_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ngeo_map_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngeo/map/module */ "./src/map/module.js");
/* harmony import */ var ngeo_geolocation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngeo/geolocation/component */ "./src/geolocation/component.js");
// The MIT License (MIT)
//
// Copyright (c) 2015-2021 Camptocamp SA
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











/** @type {angular.IModule} **/
const appmodule = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('app', ['gettext', ngeo_geolocation_component__WEBPACK_IMPORTED_MODULE_7__["default"].name, ngeo_map_module__WEBPACK_IMPORTED_MODULE_6__["default"].name]);

/**
 * @param {angular.IScope} $scope Scope.
 * @param {import('ngeo/map/FeatureOverlayMgr').FeatureOverlayMgr} ngeoFeatureOverlayMgr The ngeo feature
 *     overlay manager service.
 * @class
 * @ngInject
 */
function MainController($scope, ngeoFeatureOverlayMgr) {
  /**
   * @type {import('ol/Map').default}
   */
  this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_2__["default"]({
    layers: [
      new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_4__["default"]({
        source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_5__["default"](),
      }),
    ],
    view: new ol_View__WEBPACK_IMPORTED_MODULE_3__["default"]({
      center: [0, 0],
      zoom: 4,
    }),
  });

  ngeoFeatureOverlayMgr.init(this.map);
}

appmodule.controller('MainController', MainController);

appmodule.constant('ngeoGeolocationOptions', {
  positionFeatureStyle: {
    circle: {
      radius: 6,
      fill: {color: 'rgba(230, 100, 100, 1)'},
      stroke: {color: 'rgba(230, 40, 40, 1)', width: 2},
    },
  },
  accuracyFeatureStyle: {
    fill: {color: 'rgba(100, 100, 230, 0.3)'},
    stroke: {color: 'rgba(40, 40, 230, 1)', width: 2},
  },
  zoom: 17,
  autoRotate: true,
});

/* harmony default export */ __webpack_exports__["default"] = (module);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/ol/Geolocation.js":
/*!****************************************************************************!*\
  !*** delegated ./node_modules/ol/Geolocation.js from dll-reference vendor ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(1027);

/***/ }),

/***/ "./src/geolocation/component.js":
/*!**************************************!*\
  !*** ./src/geolocation/component.js ***!
  \**************************************/
/*! exports provided: Controller, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_map_FeatureOverlayMgr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/map/FeatureOverlayMgr */ "./src/map/FeatureOverlayMgr.js");
/* harmony import */ var ngeo_message_Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/message/Notification */ "./src/message/Notification.js");
/* harmony import */ var ol_easing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/easing */ "./node_modules/ol/easing.js");
/* harmony import */ var ol_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/events */ "./node_modules/ol/events.js");
/* harmony import */ var ol_Feature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_Geolocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/Geolocation */ "./node_modules/ol/Geolocation.js");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_geom_Point__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/geom/Point */ "./node_modules/ol/geom/Point.js");
/* harmony import */ var ol_geom_Polygon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/geom/Polygon */ "./node_modules/ol/geom/Polygon.js");
/* harmony import */ var ngeo_options__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngeo/options */ "./src/options.js");
Controller.$inject = ["$scope", "$element", "gettextCatalog", "ngeoFeatureOverlayMgr", "ngeoNotification", "ngeoGeolocationOptions"];











var myModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoGeolocation', [ngeo_map_FeatureOverlayMgr__WEBPACK_IMPORTED_MODULE_1__["default"].name, ngeo_message_Notification__WEBPACK_IMPORTED_MODULE_2__["default"].name]);
var GeolocationEventType = {
  ERROR: 'geolocation-error'
};

function geolocationComponent() {
  return {
    restrict: 'A',
    scope: {
      'map': '<ngeoGeolocationMap',
      'loading': '=ngeoGeolocationLoading'
    },
    controller: 'ngeoGeolocationController',
    bindToController: true
  };
}

myModule.directive('ngeoGeolocation', geolocationComponent);
function Controller($scope, $element, gettextCatalog, ngeoFeatureOverlayMgr, ngeoNotification, ngeoGeolocationOptions) {
  this.options = ngeoGeolocationOptions;
  $element.on('click', this.toggleTracking.bind(this));
  this.$scope_ = $scope;
  this.notification_ = ngeoNotification;
  this.ngeoFeatureOverlayMgr_ = ngeoFeatureOverlayMgr;
  this.gettextCatalog_ = gettextCatalog;
  this.map;
  this.loading;
}

Controller.prototype.$onInit = function () {
  var _this = this;

  if (!(this.map instanceof ol_Map__WEBPACK_IMPORTED_MODULE_7__["default"])) {
    throw new Error('Wrong map type');
  }

  this.featureOverlay_ = this.ngeoFeatureOverlayMgr_.getFeatureOverlay();
  this.geolocation_ = new ol_Geolocation__WEBPACK_IMPORTED_MODULE_6__["default"]({
    projection: this.map.getView().getProjection(),
    trackingOptions: {
      enableHighAccuracy: true
    }
  });

  if (this.options.autoRotate) {
    this.autoRotateListener();
  }

  var gettextCatalog = this.gettextCatalog_;
  this.geolocation_.on('error', function (error) {
    _this.untrack_();

    var msg;

    switch (error.code) {
      case 1:
        msg = gettextCatalog.getString('User denied the request for Geolocation.');
        break;

      case 2:
        msg = gettextCatalog.getString('Location information is unavailable.');
        break;

      case 3:
        msg = gettextCatalog.getString('The request to get user location timed out.');
        break;

      default:
        msg = gettextCatalog.getString('Geolocation: An unknown error occurred.');
        break;
    }

    _this.notification_.error(msg);

    _this.$scope_.$emit(GeolocationEventType.ERROR, error);
  });
  this.positionFeature_ = new ol_Feature__WEBPACK_IMPORTED_MODULE_5__["default"]();
  this.positionFeature_.setStyle(Object(ngeo_options__WEBPACK_IMPORTED_MODULE_10__["buildStyle"])(this.options.positionFeatureStyle));
  this.accuracyFeature_ = new ol_Feature__WEBPACK_IMPORTED_MODULE_5__["default"]();
  this.accuracyFeature_.setStyle(Object(ngeo_options__WEBPACK_IMPORTED_MODULE_10__["buildStyle"])(this.options.accuracyFeatureStyle));
  this.follow_ = false;
  this.viewChangedByMe_ = false;
  Object(ol_events__WEBPACK_IMPORTED_MODULE_4__["listen"])(this.geolocation_, 'change:accuracyGeometry', function (evt) {
    var geometry = _this.geolocation_.getAccuracyGeometry();

    if (!geometry) {
      throw new Error('Missing geometry');
    }

    _this.accuracyFeature_.setGeometry(geometry);

    _this.setPosition_();
  });
  Object(ol_events__WEBPACK_IMPORTED_MODULE_4__["listen"])(this.geolocation_, 'change:position', function () {
    _this.setPosition_();
  });
  var view = this.map.getView();
  Object(ol_events__WEBPACK_IMPORTED_MODULE_4__["listen"])(view, 'change:center', this.handleViewChange_, this);
  Object(ol_events__WEBPACK_IMPORTED_MODULE_4__["listen"])(view, 'change:resolution', this.handleViewChange_, this);

  if (this.options.atLoadingTime && this.loading !== undefined) {
    this.$scope_.$watch(function () {
      return _this.loading;
    }, function (newVal) {
      if (newVal === false) {
        _this.toggleTracking();
      }
    });
  }
};

Controller.prototype.toggleTracking = function () {
  if (this.geolocation_.getTracking()) {
    var currentPosition = this.geolocation_.getPosition();

    if (currentPosition === undefined) {
      this.untrack_();
      this.$scope_.$emit(GeolocationEventType.ERROR, null);
      return;
    }

    var view = this.map.getView();
    var center = view.getCenter();

    if (!center) {
      throw new Error('Missing center');
    }

    var diff = Math.abs(currentPosition[0] - center[0]) + Math.abs(currentPosition[1] - center[1]);

    if (diff < 2) {
      this.untrack_();
    } else {
      view.setCenter(currentPosition);
      this.untrack_();
      this.track_();
    }
  } else {
    this.track_();
  }
};

Controller.prototype.track_ = function () {
  this.featureOverlay_.addFeature(this.positionFeature_);
  this.featureOverlay_.addFeature(this.accuracyFeature_);
  this.follow_ = true;
  this.geolocation_.setTracking(true);
};

Controller.prototype.untrack_ = function () {
  this.featureOverlay_.clear();
  this.follow_ = false;
  this.geolocation_.setTracking(false);
  this.notification_.clear();
};

Controller.prototype.setPosition_ = function () {
  var view = this.map.getView();
  var position = this.geolocation_.getPosition();

  if (position === undefined) {
    throw new Error('Missing position');
  }

  var point = new ol_geom_Point__WEBPACK_IMPORTED_MODULE_8__["default"](position);
  this.positionFeature_.setGeometry(point);
  var accuracy = this.accuracyFeature_.getGeometry();

  if (this.follow_) {
    this.viewChangedByMe_ = true;

    if (this.options.zoom || this.options.zoom === 0) {
      view.setCenter(position);
      view.setZoom(this.options.zoom);
    } else if (accuracy instanceof ol_geom_Polygon__WEBPACK_IMPORTED_MODULE_9__["default"]) {
      var size = this.map.getSize();

      if (size === undefined) {
        throw new Error('Missing size');
      }

      view.fit(accuracy, {
        size: size
      });
    }

    this.viewChangedByMe_ = false;
  }
};

Controller.prototype.handleViewChange_ = function (event) {
  if (this.follow_ && !this.viewChangedByMe_) {
    this.follow_ = false;
  }
};

Controller.prototype.autoRotateListener = function () {
  var _this2 = this;

  var currentAlpha = 0;

  if (window.hasOwnProperty('ondeviceorientationabsolute')) {
    window.addEventListener('deviceorientationabsolute', function (event) {
      if (!(event instanceof DeviceOrientationEvent)) {
        throw new Error('Wrong event type');
      }

      if (event.alpha !== null) {
        currentAlpha = _this2.handleRotate_(event.alpha, currentAlpha);
      }
    }, true);
  } else if (window.hasOwnProperty('ondeviceorientation')) {
    window.addEventListener('deviceorientation', function (evt) {
      if (evt.webkitCompassHeading) {
        currentAlpha = _this2.handleRotate_(-evt.webkitCompassHeading, currentAlpha);
      } else {
        if (!evt.alpha) {
          throw new Error('Missing evt.alpha');
        }

        currentAlpha = _this2.handleRotate_(evt.alpha - 270, currentAlpha);
      }
    }, true);
  } else {
    console.error('Orientation is not supported on this device');
  }
};

Controller.prototype.handleRotate_ = function (eventAlpha, currentAlpha) {
  if (this.geolocation_.getTracking() && Math.abs(eventAlpha - currentAlpha) > 0.2) {
    currentAlpha = eventAlpha;
    var radAlpha = currentAlpha * Math.PI / 180;
    this.map.getView().animate({
      rotation: radAlpha,
      duration: 350,
      easing: ol_easing__WEBPACK_IMPORTED_MODULE_3__["linear"]
    });
  }

  return currentAlpha;
};

myModule.controller('ngeoGeolocationController', Controller);
/* harmony default export */ __webpack_exports__["default"] = (myModule);

/***/ }),

/***/ "./src/options.js":
/*!************************!*\
  !*** ./src/options.js ***!
  \************************/
/*! exports provided: buildStyle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildStyle", function() { return buildStyle; });
/* harmony import */ var ol_style_Circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/style/Circle */ "./node_modules/ol/style/Circle.js");
/* harmony import */ var ol_style_RegularShape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/style/RegularShape */ "./node_modules/ol/style/RegularShape.js");
/* harmony import */ var ol_style_Fill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/style/Fill */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_Stroke__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/style/Stroke */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/style/Style */ "./node_modules/ol/style/Style.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







function buildStyle(styleDescriptor) {
  if (styleDescriptor instanceof ol_style_Style__WEBPACK_IMPORTED_MODULE_4__["default"]) {
    return styleDescriptor;
  } else if (!styleDescriptor) {
    return ol_style_Style__WEBPACK_IMPORTED_MODULE_4__["createDefaultStyle"];
  } else if (Array.isArray(styleDescriptor)) {
    var result = [];

    for (var _iterator = _createForOfIteratorHelperLoose(styleDescriptor), _step; !(_step = _iterator()).done;) {
      var style = _step.value;
      result.push(buildStyle(style));
    }

    return result;
  } else {
    var _style = {};
    Object.assign(_style, styleDescriptor);
    var sd = styleDescriptor;

    if (sd.fill) {
      _style.fill = new ol_style_Fill__WEBPACK_IMPORTED_MODULE_2__["default"](sd.fill);
    }

    if (sd.stroke) {
      _style.stroke = new ol_style_Stroke__WEBPACK_IMPORTED_MODULE_3__["default"](sd.stroke);
    }

    if (sd.circle) {
      var circleStyle = {};
      Object.assign(circleStyle, sd.circle);

      if (sd.circle.fill) {
        circleStyle.fill = new ol_style_Fill__WEBPACK_IMPORTED_MODULE_2__["default"](sd.circle.fill);
      }

      if (sd.circle.stroke) {
        circleStyle.stroke = new ol_style_Stroke__WEBPACK_IMPORTED_MODULE_3__["default"](sd.circle.stroke);
      }

      _style.image = new ol_style_Circle__WEBPACK_IMPORTED_MODULE_0__["default"](circleStyle);
      delete _style.circle;
    } else if (sd.regularShape) {
      var regularShapeStyle = {};
      Object.assign(regularShapeStyle, sd.regularShape);

      if (sd.regularShape.fill) {
        regularShapeStyle.fill = new ol_style_Fill__WEBPACK_IMPORTED_MODULE_2__["default"](sd.regularShape.fill);
      }

      if (sd.regularShape.stroke) {
        regularShapeStyle.stroke = new ol_style_Stroke__WEBPACK_IMPORTED_MODULE_3__["default"](sd.regularShape.stroke);
      }

      if (sd.regularShape.angle) {
        sd.regularShape.angle = sd.regularShape.angle / 180 * Math.PI;
      }

      if (sd.regularShape.rotation) {
        sd.regularShape.rotation = sd.regularShape.angle / 180 * Math.PI;
      }

      _style.image = new ol_style_RegularShape__WEBPACK_IMPORTED_MODULE_1__["default"](regularShapeStyle);
      delete _style.regularShape;
    }

    return new ol_style_Style__WEBPACK_IMPORTED_MODULE_4__["default"](_style);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (null);

/***/ }),

/***/ 27:
/*!**************************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/mobilegeolocation.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/mobilegeolocation.js */"./examples/mobilegeolocation.js");


/***/ }),

/***/ "dll-reference vendor":
/*!*************************!*\
  !*** external "vendor" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = vendor;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlZ2VvbG9jYXRpb24uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvbW9iaWxlZ2VvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb2xvY2F0aW9uL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3B0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibW9iaWxlZ2VvbG9jYXRpb25cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHQvLyBTaW5jZSBhbGwgcmVmZXJlbmNlZCBjaHVua3MgYXJlIGFscmVhZHkgaW5jbHVkZWRcbiBcdC8vIGluIHRoaXMgZmlsZSwgdGhpcyBmdW5jdGlvbiBpcyBlbXB0eSBoZXJlLlxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZSgpIHtcbiBcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzI3LFwiY29tbW9uc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8vIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNS0yMDIxIENhbXB0b2NhbXAgU0Fcbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG4vLyB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG4vLyB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXG4vLyB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZlxuLy8gdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuLy8gc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTXG4vLyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1Jcbi8vIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUlxuLy8gSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbi8vIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCAnLi9tb2JpbGVnZW9sb2NhdGlvbi5jc3MnO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgb2xNYXAgZnJvbSAnb2wvTWFwJztcblxuaW1wb3J0IG9sVmlldyBmcm9tICdvbC9WaWV3JztcbmltcG9ydCBvbExheWVyVGlsZSBmcm9tICdvbC9sYXllci9UaWxlJztcbmltcG9ydCBvbFNvdXJjZU9TTSBmcm9tICdvbC9zb3VyY2UvT1NNJztcbmltcG9ydCBuZ2VvTWFwTW9kdWxlIGZyb20gJ25nZW8vbWFwL21vZHVsZSc7XG5pbXBvcnQgbmdlb0dlb2xvY2F0aW9uIGZyb20gJ25nZW8vZ2VvbG9jYXRpb24vY29tcG9uZW50JztcblxuLyoqIEB0eXBlIHthbmd1bGFyLklNb2R1bGV9ICoqL1xuY29uc3QgYXBwbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnZ2V0dGV4dCcsIG5nZW9HZW9sb2NhdGlvbi5uYW1lLCBuZ2VvTWFwTW9kdWxlLm5hbWVdKTtcblxuLyoqXG4gKiBAcGFyYW0ge2FuZ3VsYXIuSVNjb3BlfSAkc2NvcGUgU2NvcGUuXG4gKiBAcGFyYW0ge2ltcG9ydCgnbmdlby9tYXAvRmVhdHVyZU92ZXJsYXlNZ3InKS5GZWF0dXJlT3ZlcmxheU1ncn0gbmdlb0ZlYXR1cmVPdmVybGF5TWdyIFRoZSBuZ2VvIGZlYXR1cmVcbiAqICAgICBvdmVybGF5IG1hbmFnZXIgc2VydmljZS5cbiAqIEBjbGFzc1xuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIE1haW5Db250cm9sbGVyKCRzY29wZSwgbmdlb0ZlYXR1cmVPdmVybGF5TWdyKSB7XG4gIC8qKlxuICAgKiBAdHlwZSB7aW1wb3J0KCdvbC9NYXAnKS5kZWZhdWx0fVxuICAgKi9cbiAgdGhpcy5tYXAgPSBuZXcgb2xNYXAoe1xuICAgIGxheWVyczogW1xuICAgICAgbmV3IG9sTGF5ZXJUaWxlKHtcbiAgICAgICAgc291cmNlOiBuZXcgb2xTb3VyY2VPU00oKSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgdmlldzogbmV3IG9sVmlldyh7XG4gICAgICBjZW50ZXI6IFswLCAwXSxcbiAgICAgIHpvb206IDQsXG4gICAgfSksXG4gIH0pO1xuXG4gIG5nZW9GZWF0dXJlT3ZlcmxheU1nci5pbml0KHRoaXMubWFwKTtcbn1cblxuYXBwbW9kdWxlLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpO1xuXG5hcHBtb2R1bGUuY29uc3RhbnQoJ25nZW9HZW9sb2NhdGlvbk9wdGlvbnMnLCB7XG4gIHBvc2l0aW9uRmVhdHVyZVN0eWxlOiB7XG4gICAgY2lyY2xlOiB7XG4gICAgICByYWRpdXM6IDYsXG4gICAgICBmaWxsOiB7Y29sb3I6ICdyZ2JhKDIzMCwgMTAwLCAxMDAsIDEpJ30sXG4gICAgICBzdHJva2U6IHtjb2xvcjogJ3JnYmEoMjMwLCA0MCwgNDAsIDEpJywgd2lkdGg6IDJ9LFxuICAgIH0sXG4gIH0sXG4gIGFjY3VyYWN5RmVhdHVyZVN0eWxlOiB7XG4gICAgZmlsbDoge2NvbG9yOiAncmdiYSgxMDAsIDEwMCwgMjMwLCAwLjMpJ30sXG4gICAgc3Ryb2tlOiB7Y29sb3I6ICdyZ2JhKDQwLCA0MCwgMjMwLCAxKScsIHdpZHRoOiAyfSxcbiAgfSxcbiAgem9vbTogMTcsXG4gIGF1dG9Sb3RhdGU6IHRydWUsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kdWxlO1xuIiwiQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHNjb3BlXCIsIFwiJGVsZW1lbnRcIiwgXCJnZXR0ZXh0Q2F0YWxvZ1wiLCBcIm5nZW9GZWF0dXJlT3ZlcmxheU1nclwiLCBcIm5nZW9Ob3RpZmljYXRpb25cIiwgXCJuZ2VvR2VvbG9jYXRpb25PcHRpb25zXCJdO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgbmdlb01hcEZlYXR1cmVPdmVybGF5TWdyIGZyb20gJ25nZW8vbWFwL0ZlYXR1cmVPdmVybGF5TWdyJztcbmltcG9ydCBuZ2VvTWVzc2FnZU5vdGlmaWNhdGlvbiBmcm9tICduZ2VvL21lc3NhZ2UvTm90aWZpY2F0aW9uJztcbmltcG9ydCAqIGFzIG9sRWFzaW5nIGZyb20gJ29sL2Vhc2luZyc7XG5pbXBvcnQgeyBsaXN0ZW4gfSBmcm9tICdvbC9ldmVudHMnO1xuaW1wb3J0IG9sRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlJztcbmltcG9ydCBvbEdlb2xvY2F0aW9uIGZyb20gJ29sL0dlb2xvY2F0aW9uJztcbmltcG9ydCBvbE1hcCBmcm9tICdvbC9NYXAnO1xuaW1wb3J0IG9sR2VvbVBvaW50IGZyb20gJ29sL2dlb20vUG9pbnQnO1xuaW1wb3J0IFBvbHlnb24gZnJvbSAnb2wvZ2VvbS9Qb2x5Z29uJztcbmltcG9ydCB7IGJ1aWxkU3R5bGUgfSBmcm9tICduZ2VvL29wdGlvbnMnO1xudmFyIG15TW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ25nZW9HZW9sb2NhdGlvbicsIFtuZ2VvTWFwRmVhdHVyZU92ZXJsYXlNZ3IubmFtZSwgbmdlb01lc3NhZ2VOb3RpZmljYXRpb24ubmFtZV0pO1xudmFyIEdlb2xvY2F0aW9uRXZlbnRUeXBlID0ge1xuICBFUlJPUjogJ2dlb2xvY2F0aW9uLWVycm9yJ1xufTtcblxuZnVuY3Rpb24gZ2VvbG9jYXRpb25Db21wb25lbnQoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBzY29wZToge1xuICAgICAgJ21hcCc6ICc8bmdlb0dlb2xvY2F0aW9uTWFwJyxcbiAgICAgICdsb2FkaW5nJzogJz1uZ2VvR2VvbG9jYXRpb25Mb2FkaW5nJ1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogJ25nZW9HZW9sb2NhdGlvbkNvbnRyb2xsZXInLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcbn1cblxubXlNb2R1bGUuZGlyZWN0aXZlKCduZ2VvR2VvbG9jYXRpb24nLCBnZW9sb2NhdGlvbkNvbXBvbmVudCk7XG5leHBvcnQgZnVuY3Rpb24gQ29udHJvbGxlcigkc2NvcGUsICRlbGVtZW50LCBnZXR0ZXh0Q2F0YWxvZywgbmdlb0ZlYXR1cmVPdmVybGF5TWdyLCBuZ2VvTm90aWZpY2F0aW9uLCBuZ2VvR2VvbG9jYXRpb25PcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG5nZW9HZW9sb2NhdGlvbk9wdGlvbnM7XG4gICRlbGVtZW50Lm9uKCdjbGljaycsIHRoaXMudG9nZ2xlVHJhY2tpbmcuYmluZCh0aGlzKSk7XG4gIHRoaXMuJHNjb3BlXyA9ICRzY29wZTtcbiAgdGhpcy5ub3RpZmljYXRpb25fID0gbmdlb05vdGlmaWNhdGlvbjtcbiAgdGhpcy5uZ2VvRmVhdHVyZU92ZXJsYXlNZ3JfID0gbmdlb0ZlYXR1cmVPdmVybGF5TWdyO1xuICB0aGlzLmdldHRleHRDYXRhbG9nXyA9IGdldHRleHRDYXRhbG9nO1xuICB0aGlzLm1hcDtcbiAgdGhpcy5sb2FkaW5nO1xufVxuXG5Db250cm9sbGVyLnByb3RvdHlwZS4kb25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIGlmICghKHRoaXMubWFwIGluc3RhbmNlb2Ygb2xNYXApKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBtYXAgdHlwZScpO1xuICB9XG5cbiAgdGhpcy5mZWF0dXJlT3ZlcmxheV8gPSB0aGlzLm5nZW9GZWF0dXJlT3ZlcmxheU1ncl8uZ2V0RmVhdHVyZU92ZXJsYXkoKTtcbiAgdGhpcy5nZW9sb2NhdGlvbl8gPSBuZXcgb2xHZW9sb2NhdGlvbih7XG4gICAgcHJvamVjdGlvbjogdGhpcy5tYXAuZ2V0VmlldygpLmdldFByb2plY3Rpb24oKSxcbiAgICB0cmFja2luZ09wdGlvbnM6IHtcbiAgICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5hdXRvUm90YXRlKSB7XG4gICAgdGhpcy5hdXRvUm90YXRlTGlzdGVuZXIoKTtcbiAgfVxuXG4gIHZhciBnZXR0ZXh0Q2F0YWxvZyA9IHRoaXMuZ2V0dGV4dENhdGFsb2dfO1xuICB0aGlzLmdlb2xvY2F0aW9uXy5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBfdGhpcy51bnRyYWNrXygpO1xuXG4gICAgdmFyIG1zZztcblxuICAgIHN3aXRjaCAoZXJyb3IuY29kZSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICBtc2cgPSBnZXR0ZXh0Q2F0YWxvZy5nZXRTdHJpbmcoJ1VzZXIgZGVuaWVkIHRoZSByZXF1ZXN0IGZvciBHZW9sb2NhdGlvbi4nKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgbXNnID0gZ2V0dGV4dENhdGFsb2cuZ2V0U3RyaW5nKCdMb2NhdGlvbiBpbmZvcm1hdGlvbiBpcyB1bmF2YWlsYWJsZS4nKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgbXNnID0gZ2V0dGV4dENhdGFsb2cuZ2V0U3RyaW5nKCdUaGUgcmVxdWVzdCB0byBnZXQgdXNlciBsb2NhdGlvbiB0aW1lZCBvdXQuJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBtc2cgPSBnZXR0ZXh0Q2F0YWxvZy5nZXRTdHJpbmcoJ0dlb2xvY2F0aW9uOiBBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLicpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBfdGhpcy5ub3RpZmljYXRpb25fLmVycm9yKG1zZyk7XG5cbiAgICBfdGhpcy4kc2NvcGVfLiRlbWl0KEdlb2xvY2F0aW9uRXZlbnRUeXBlLkVSUk9SLCBlcnJvcik7XG4gIH0pO1xuICB0aGlzLnBvc2l0aW9uRmVhdHVyZV8gPSBuZXcgb2xGZWF0dXJlKCk7XG4gIHRoaXMucG9zaXRpb25GZWF0dXJlXy5zZXRTdHlsZShidWlsZFN0eWxlKHRoaXMub3B0aW9ucy5wb3NpdGlvbkZlYXR1cmVTdHlsZSkpO1xuICB0aGlzLmFjY3VyYWN5RmVhdHVyZV8gPSBuZXcgb2xGZWF0dXJlKCk7XG4gIHRoaXMuYWNjdXJhY3lGZWF0dXJlXy5zZXRTdHlsZShidWlsZFN0eWxlKHRoaXMub3B0aW9ucy5hY2N1cmFjeUZlYXR1cmVTdHlsZSkpO1xuICB0aGlzLmZvbGxvd18gPSBmYWxzZTtcbiAgdGhpcy52aWV3Q2hhbmdlZEJ5TWVfID0gZmFsc2U7XG4gIGxpc3Rlbih0aGlzLmdlb2xvY2F0aW9uXywgJ2NoYW5nZTphY2N1cmFjeUdlb21ldHJ5JywgZnVuY3Rpb24gKGV2dCkge1xuICAgIHZhciBnZW9tZXRyeSA9IF90aGlzLmdlb2xvY2F0aW9uXy5nZXRBY2N1cmFjeUdlb21ldHJ5KCk7XG5cbiAgICBpZiAoIWdlb21ldHJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZ2VvbWV0cnknKTtcbiAgICB9XG5cbiAgICBfdGhpcy5hY2N1cmFjeUZlYXR1cmVfLnNldEdlb21ldHJ5KGdlb21ldHJ5KTtcblxuICAgIF90aGlzLnNldFBvc2l0aW9uXygpO1xuICB9KTtcbiAgbGlzdGVuKHRoaXMuZ2VvbG9jYXRpb25fLCAnY2hhbmdlOnBvc2l0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgIF90aGlzLnNldFBvc2l0aW9uXygpO1xuICB9KTtcbiAgdmFyIHZpZXcgPSB0aGlzLm1hcC5nZXRWaWV3KCk7XG4gIGxpc3Rlbih2aWV3LCAnY2hhbmdlOmNlbnRlcicsIHRoaXMuaGFuZGxlVmlld0NoYW5nZV8sIHRoaXMpO1xuICBsaXN0ZW4odmlldywgJ2NoYW5nZTpyZXNvbHV0aW9uJywgdGhpcy5oYW5kbGVWaWV3Q2hhbmdlXywgdGhpcyk7XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5hdExvYWRpbmdUaW1lICYmIHRoaXMubG9hZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy4kc2NvcGVfLiR3YXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMubG9hZGluZztcbiAgICB9LCBmdW5jdGlvbiAobmV3VmFsKSB7XG4gICAgICBpZiAobmV3VmFsID09PSBmYWxzZSkge1xuICAgICAgICBfdGhpcy50b2dnbGVUcmFja2luZygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5Db250cm9sbGVyLnByb3RvdHlwZS50b2dnbGVUcmFja2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZ2VvbG9jYXRpb25fLmdldFRyYWNraW5nKCkpIHtcbiAgICB2YXIgY3VycmVudFBvc2l0aW9uID0gdGhpcy5nZW9sb2NhdGlvbl8uZ2V0UG9zaXRpb24oKTtcblxuICAgIGlmIChjdXJyZW50UG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy51bnRyYWNrXygpO1xuICAgICAgdGhpcy4kc2NvcGVfLiRlbWl0KEdlb2xvY2F0aW9uRXZlbnRUeXBlLkVSUk9SLCBudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdmlldyA9IHRoaXMubWFwLmdldFZpZXcoKTtcbiAgICB2YXIgY2VudGVyID0gdmlldy5nZXRDZW50ZXIoKTtcblxuICAgIGlmICghY2VudGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgY2VudGVyJyk7XG4gICAgfVxuXG4gICAgdmFyIGRpZmYgPSBNYXRoLmFicyhjdXJyZW50UG9zaXRpb25bMF0gLSBjZW50ZXJbMF0pICsgTWF0aC5hYnMoY3VycmVudFBvc2l0aW9uWzFdIC0gY2VudGVyWzFdKTtcblxuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgdGhpcy51bnRyYWNrXygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWV3LnNldENlbnRlcihjdXJyZW50UG9zaXRpb24pO1xuICAgICAgdGhpcy51bnRyYWNrXygpO1xuICAgICAgdGhpcy50cmFja18oKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy50cmFja18oKTtcbiAgfVxufTtcblxuQ29udHJvbGxlci5wcm90b3R5cGUudHJhY2tfID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZlYXR1cmVPdmVybGF5Xy5hZGRGZWF0dXJlKHRoaXMucG9zaXRpb25GZWF0dXJlXyk7XG4gIHRoaXMuZmVhdHVyZU92ZXJsYXlfLmFkZEZlYXR1cmUodGhpcy5hY2N1cmFjeUZlYXR1cmVfKTtcbiAgdGhpcy5mb2xsb3dfID0gdHJ1ZTtcbiAgdGhpcy5nZW9sb2NhdGlvbl8uc2V0VHJhY2tpbmcodHJ1ZSk7XG59O1xuXG5Db250cm9sbGVyLnByb3RvdHlwZS51bnRyYWNrXyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mZWF0dXJlT3ZlcmxheV8uY2xlYXIoKTtcbiAgdGhpcy5mb2xsb3dfID0gZmFsc2U7XG4gIHRoaXMuZ2VvbG9jYXRpb25fLnNldFRyYWNraW5nKGZhbHNlKTtcbiAgdGhpcy5ub3RpZmljYXRpb25fLmNsZWFyKCk7XG59O1xuXG5Db250cm9sbGVyLnByb3RvdHlwZS5zZXRQb3NpdGlvbl8gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB2aWV3ID0gdGhpcy5tYXAuZ2V0VmlldygpO1xuICB2YXIgcG9zaXRpb24gPSB0aGlzLmdlb2xvY2F0aW9uXy5nZXRQb3NpdGlvbigpO1xuXG4gIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHBvc2l0aW9uJyk7XG4gIH1cblxuICB2YXIgcG9pbnQgPSBuZXcgb2xHZW9tUG9pbnQocG9zaXRpb24pO1xuICB0aGlzLnBvc2l0aW9uRmVhdHVyZV8uc2V0R2VvbWV0cnkocG9pbnQpO1xuICB2YXIgYWNjdXJhY3kgPSB0aGlzLmFjY3VyYWN5RmVhdHVyZV8uZ2V0R2VvbWV0cnkoKTtcblxuICBpZiAodGhpcy5mb2xsb3dfKSB7XG4gICAgdGhpcy52aWV3Q2hhbmdlZEJ5TWVfID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuem9vbSB8fCB0aGlzLm9wdGlvbnMuem9vbSA9PT0gMCkge1xuICAgICAgdmlldy5zZXRDZW50ZXIocG9zaXRpb24pO1xuICAgICAgdmlldy5zZXRab29tKHRoaXMub3B0aW9ucy56b29tKTtcbiAgICB9IGVsc2UgaWYgKGFjY3VyYWN5IGluc3RhbmNlb2YgUG9seWdvbikge1xuICAgICAgdmFyIHNpemUgPSB0aGlzLm1hcC5nZXRTaXplKCk7XG5cbiAgICAgIGlmIChzaXplID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHNpemUnKTtcbiAgICAgIH1cblxuICAgICAgdmlldy5maXQoYWNjdXJhY3ksIHtcbiAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy52aWV3Q2hhbmdlZEJ5TWVfID0gZmFsc2U7XG4gIH1cbn07XG5cbkNvbnRyb2xsZXIucHJvdG90eXBlLmhhbmRsZVZpZXdDaGFuZ2VfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmICh0aGlzLmZvbGxvd18gJiYgIXRoaXMudmlld0NoYW5nZWRCeU1lXykge1xuICAgIHRoaXMuZm9sbG93XyA9IGZhbHNlO1xuICB9XG59O1xuXG5Db250cm9sbGVyLnByb3RvdHlwZS5hdXRvUm90YXRlTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gIHZhciBjdXJyZW50QWxwaGEgPSAwO1xuXG4gIGlmICh3aW5kb3cuaGFzT3duUHJvcGVydHkoJ29uZGV2aWNlb3JpZW50YXRpb25hYnNvbHV0ZScpKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uYWJzb2x1dGUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgRGV2aWNlT3JpZW50YXRpb25FdmVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBldmVudCB0eXBlJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5hbHBoYSAhPT0gbnVsbCkge1xuICAgICAgICBjdXJyZW50QWxwaGEgPSBfdGhpczIuaGFuZGxlUm90YXRlXyhldmVudC5hbHBoYSwgY3VycmVudEFscGhhKTtcbiAgICAgIH1cbiAgICB9LCB0cnVlKTtcbiAgfSBlbHNlIGlmICh3aW5kb3cuaGFzT3duUHJvcGVydHkoJ29uZGV2aWNlb3JpZW50YXRpb24nKSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VvcmllbnRhdGlvbicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGlmIChldnQud2Via2l0Q29tcGFzc0hlYWRpbmcpIHtcbiAgICAgICAgY3VycmVudEFscGhhID0gX3RoaXMyLmhhbmRsZVJvdGF0ZV8oLWV2dC53ZWJraXRDb21wYXNzSGVhZGluZywgY3VycmVudEFscGhhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghZXZ0LmFscGhhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGV2dC5hbHBoYScpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudEFscGhhID0gX3RoaXMyLmhhbmRsZVJvdGF0ZV8oZXZ0LmFscGhhIC0gMjcwLCBjdXJyZW50QWxwaGEpO1xuICAgICAgfVxuICAgIH0sIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ09yaWVudGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgb24gdGhpcyBkZXZpY2UnKTtcbiAgfVxufTtcblxuQ29udHJvbGxlci5wcm90b3R5cGUuaGFuZGxlUm90YXRlXyA9IGZ1bmN0aW9uIChldmVudEFscGhhLCBjdXJyZW50QWxwaGEpIHtcbiAgaWYgKHRoaXMuZ2VvbG9jYXRpb25fLmdldFRyYWNraW5nKCkgJiYgTWF0aC5hYnMoZXZlbnRBbHBoYSAtIGN1cnJlbnRBbHBoYSkgPiAwLjIpIHtcbiAgICBjdXJyZW50QWxwaGEgPSBldmVudEFscGhhO1xuICAgIHZhciByYWRBbHBoYSA9IGN1cnJlbnRBbHBoYSAqIE1hdGguUEkgLyAxODA7XG4gICAgdGhpcy5tYXAuZ2V0VmlldygpLmFuaW1hdGUoe1xuICAgICAgcm90YXRpb246IHJhZEFscGhhLFxuICAgICAgZHVyYXRpb246IDM1MCxcbiAgICAgIGVhc2luZzogb2xFYXNpbmcubGluZWFyXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY3VycmVudEFscGhhO1xufTtcblxubXlNb2R1bGUuY29udHJvbGxlcignbmdlb0dlb2xvY2F0aW9uQ29udHJvbGxlcicsIENvbnRyb2xsZXIpO1xuZXhwb3J0IGRlZmF1bHQgbXlNb2R1bGU7IiwiZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTsgaWYgKGl0KSByZXR1cm4gKGl0ID0gaXQuY2FsbChvKSkubmV4dC5iaW5kKGl0KTsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyByZXR1cm4gZnVuY3Rpb24gKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmltcG9ydCBvbFN0eWxlQ2lyY2xlIGZyb20gJ29sL3N0eWxlL0NpcmNsZSc7XG5pbXBvcnQgb2xTdHlsZVJlZ3VsYXJTaGFwZSBmcm9tICdvbC9zdHlsZS9SZWd1bGFyU2hhcGUnO1xuaW1wb3J0IG9sU3R5bGVGaWxsIGZyb20gJ29sL3N0eWxlL0ZpbGwnO1xuaW1wb3J0IG9sU3R5bGVTdHJva2UgZnJvbSAnb2wvc3R5bGUvU3Ryb2tlJztcbmltcG9ydCBvbFN0eWxlIGZyb20gJ29sL3N0eWxlL1N0eWxlJztcbmltcG9ydCB7IGNyZWF0ZURlZmF1bHRTdHlsZSB9IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFN0eWxlKHN0eWxlRGVzY3JpcHRvcikge1xuICBpZiAoc3R5bGVEZXNjcmlwdG9yIGluc3RhbmNlb2Ygb2xTdHlsZSkge1xuICAgIHJldHVybiBzdHlsZURlc2NyaXB0b3I7XG4gIH0gZWxzZSBpZiAoIXN0eWxlRGVzY3JpcHRvcikge1xuICAgIHJldHVybiBjcmVhdGVEZWZhdWx0U3R5bGU7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzdHlsZURlc2NyaXB0b3IpKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShzdHlsZURlc2NyaXB0b3IpLCBfc3RlcDsgIShfc3RlcCA9IF9pdGVyYXRvcigpKS5kb25lOykge1xuICAgICAgdmFyIHN0eWxlID0gX3N0ZXAudmFsdWU7XG4gICAgICByZXN1bHQucHVzaChidWlsZFN0eWxlKHN0eWxlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX3N0eWxlID0ge307XG4gICAgT2JqZWN0LmFzc2lnbihfc3R5bGUsIHN0eWxlRGVzY3JpcHRvcik7XG4gICAgdmFyIHNkID0gc3R5bGVEZXNjcmlwdG9yO1xuXG4gICAgaWYgKHNkLmZpbGwpIHtcbiAgICAgIF9zdHlsZS5maWxsID0gbmV3IG9sU3R5bGVGaWxsKHNkLmZpbGwpO1xuICAgIH1cblxuICAgIGlmIChzZC5zdHJva2UpIHtcbiAgICAgIF9zdHlsZS5zdHJva2UgPSBuZXcgb2xTdHlsZVN0cm9rZShzZC5zdHJva2UpO1xuICAgIH1cblxuICAgIGlmIChzZC5jaXJjbGUpIHtcbiAgICAgIHZhciBjaXJjbGVTdHlsZSA9IHt9O1xuICAgICAgT2JqZWN0LmFzc2lnbihjaXJjbGVTdHlsZSwgc2QuY2lyY2xlKTtcblxuICAgICAgaWYgKHNkLmNpcmNsZS5maWxsKSB7XG4gICAgICAgIGNpcmNsZVN0eWxlLmZpbGwgPSBuZXcgb2xTdHlsZUZpbGwoc2QuY2lyY2xlLmZpbGwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2QuY2lyY2xlLnN0cm9rZSkge1xuICAgICAgICBjaXJjbGVTdHlsZS5zdHJva2UgPSBuZXcgb2xTdHlsZVN0cm9rZShzZC5jaXJjbGUuc3Ryb2tlKTtcbiAgICAgIH1cblxuICAgICAgX3N0eWxlLmltYWdlID0gbmV3IG9sU3R5bGVDaXJjbGUoY2lyY2xlU3R5bGUpO1xuICAgICAgZGVsZXRlIF9zdHlsZS5jaXJjbGU7XG4gICAgfSBlbHNlIGlmIChzZC5yZWd1bGFyU2hhcGUpIHtcbiAgICAgIHZhciByZWd1bGFyU2hhcGVTdHlsZSA9IHt9O1xuICAgICAgT2JqZWN0LmFzc2lnbihyZWd1bGFyU2hhcGVTdHlsZSwgc2QucmVndWxhclNoYXBlKTtcblxuICAgICAgaWYgKHNkLnJlZ3VsYXJTaGFwZS5maWxsKSB7XG4gICAgICAgIHJlZ3VsYXJTaGFwZVN0eWxlLmZpbGwgPSBuZXcgb2xTdHlsZUZpbGwoc2QucmVndWxhclNoYXBlLmZpbGwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2QucmVndWxhclNoYXBlLnN0cm9rZSkge1xuICAgICAgICByZWd1bGFyU2hhcGVTdHlsZS5zdHJva2UgPSBuZXcgb2xTdHlsZVN0cm9rZShzZC5yZWd1bGFyU2hhcGUuc3Ryb2tlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNkLnJlZ3VsYXJTaGFwZS5hbmdsZSkge1xuICAgICAgICBzZC5yZWd1bGFyU2hhcGUuYW5nbGUgPSBzZC5yZWd1bGFyU2hhcGUuYW5nbGUgLyAxODAgKiBNYXRoLlBJO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2QucmVndWxhclNoYXBlLnJvdGF0aW9uKSB7XG4gICAgICAgIHNkLnJlZ3VsYXJTaGFwZS5yb3RhdGlvbiA9IHNkLnJlZ3VsYXJTaGFwZS5hbmdsZSAvIDE4MCAqIE1hdGguUEk7XG4gICAgICB9XG5cbiAgICAgIF9zdHlsZS5pbWFnZSA9IG5ldyBvbFN0eWxlUmVndWxhclNoYXBlKHJlZ3VsYXJTaGFwZVN0eWxlKTtcbiAgICAgIGRlbGV0ZSBfc3R5bGUucmVndWxhclNoYXBlO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgb2xTdHlsZShfc3R5bGUpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBudWxsOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9