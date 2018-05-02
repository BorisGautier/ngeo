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
/******/ 		"offline": 0
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
/******/ 	deferredModules.push([32,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/offline.css":
/*!******************************!*\
  !*** ./examples/offline.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/offline.js":
/*!*****************************!*\
  !*** ./examples/offline.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_free_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/fontawesome.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _offline_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offline.css */ "./examples/offline.css");
/* harmony import */ var _offline_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_offline_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_dependencies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common_dependencies.js */ "./examples/common_dependencies.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngeo/map/module.js */ "./src/map/module.js");
/* harmony import */ var ngeo_offline_module_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngeo/offline/module.js */ "./src/offline/module.js");
/* harmony import */ var ngeo_offline_Configuration_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngeo/offline/Configuration.js */ "./src/offline/Configuration.js");
/* harmony import */ var ngeo_offline_ServiceManager_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngeo/offline/ServiceManager.js */ "./src/offline/ServiceManager.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_11__);
// The MIT License (MIT)
//
// Copyright (c) 2018-2021 Camptocamp SA
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















class MainController {
  /**
   * @param {import("ngeo/map/FeatureOverlayMgr.js").FeatureOverlayMgr} ngeoFeatureOverlayMgr
   * ngeo feature overlay manager service.
   * @param {import("ngeo/offline/NetworkStatus.js").default} ngeoNetworkStatus ngeo network status service.
   * @param {NgeoOfflineServiceManager} ngeoOfflineServiceManager ngeo offline service.
   * @ngInject
   */
  constructor(ngeoFeatureOverlayMgr, ngeoNetworkStatus, ngeoOfflineServiceManager) {
    /**
     * Save a square of 10 km sideways (Map's unit is the meter).
     * @type {number}
     * @export
     */
    this.offlineExtentSize = 10000;

    /**
     * @type {ngeoNetworkStatus}
     * @export
     */
    this.ngeoNetworkStatus = ngeoNetworkStatus;

    /**
     * @type {olMap}
     * @export
     */
    this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
      layers: [
        new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
          source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_6__["default"](),
        }),
      ],
      view: new ol_View_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
        center: [352379, 5172733],
        zoom: 4,
      }),
    });

    ngeoFeatureOverlayMgr.init(this.map);

    ngeoOfflineServiceManager.setSaveService('offlineDownloader');
    ngeoOfflineServiceManager.setRestoreService('ngeoOfflineRestorer');
  }
}

/** @type {!angular.IModule} **/
const myModule = angular__WEBPACK_IMPORTED_MODULE_11___default.a.module('app', [
  'gettext',
  ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_7__["default"].name,
  ngeo_offline_module_js__WEBPACK_IMPORTED_MODULE_8__["default"].name,
  ngeo_offline_ServiceManager_js__WEBPACK_IMPORTED_MODULE_10__["default"].module.name,
]);

myModule.value('ngeoOfflineTestUrl', '../../src/offline/component.html');

// Define the offline download configuration service
myModule.service('ngeoOfflineConfiguration', ngeo_offline_Configuration_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

myModule.controller('MainController', MainController);

myModule.constant('ngeoTilesPreloadingLimit', 0);

/* harmony default export */ __webpack_exports__["default"] = (MainController);


/***/ }),

/***/ "./node_modules/localforage/src/localforage.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/localforage/src/localforage.js from dll-reference vendor ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(1095);

/***/ }),

/***/ "./node_modules/ol/tilegrid.js":
/*!*************************************************************************!*\
  !*** delegated ./node_modules/ol/tilegrid.js from dll-reference vendor ***!
  \*************************************************************************/
/*! exports provided: getForProjection, wrapX, createForExtent, createXYZ, createForProjection, extentFromProjection */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(78);

/***/ }),

/***/ "./node_modules/ol/tilegrid/TileGrid.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/ol/tilegrid/TileGrid.js from dll-reference vendor ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(149);

/***/ }),

/***/ "./src/offline/AbstractLocalforageWrapper.js":
/*!***************************************************!*\
  !*** ./src/offline/AbstractLocalforageWrapper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var exports = function () {
  function AbstractLocalforageWrapper() {
    this.waitingPromises_ = new Map();
    this.currentId_ = 0;
  }

  var _proto = AbstractLocalforageWrapper.prototype;

  _proto.setItem = function setItem() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return this.createAction.apply(this, ['setItem'].concat(args));
  };

  _proto.getItem = function getItem() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return this.createAction.apply(this, ['getItem'].concat(args));
  };

  _proto.clear = function clear() {
    return this.createAction('clear');
  };

  _proto.config = function config() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return this.createAction.apply(this, ['config'].concat(args));
  };

  _proto.createAction = function createAction(command) {
    var id = ++this.currentId_;

    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    var action = {
      plugin: 'localforage',
      command: command,
      args: args,
      id: id,
      context: null
    };
    var waitingPromise = {
      resolve: function resolve(_any) {},
      reject: function reject(_any) {}
    };
    var promise = new Promise(function (resolve, reject) {
      waitingPromise.resolve = resolve;
      waitingPromise.reject = reject;
    });
    this.waitingPromises_.set(id, waitingPromise);
    this.postToBackend(action);
    return promise;
  };

  _proto.receiveMessage = function receiveMessage(event) {
    var action = event.data;
    var id = action.id;
    var command = action.command;
    var args = action.args || [];
    var context = action.context;
    var msg = action.msg;
    var waitingPromise = this.waitingPromises_.get(id);

    if (command === 'error') {
      console.error(msg, args, context);

      if (waitingPromise) {
        waitingPromise.reject(args, context);
        this.waitingPromises_.delete(id);
      }
    } else if (command === 'response') {
      waitingPromise.resolve.apply(waitingPromise, args);
      this.waitingPromises_.delete(id);
    } else {
      console.error('Unhandled command', JSON.stringify(action, null, '\t'));
    }
  };

  _proto.postToBackend = function postToBackend(action) {};

  return AbstractLocalforageWrapper;
}();

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/Configuration.js":
/*!**************************************!*\
  !*** ./src/offline/Configuration.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var ol_Observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/Observable.js */ "./node_modules/ol/Observable.js");
/* harmony import */ var ol_layer_Layer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/layer/Layer.js */ "./node_modules/ol/layer/Layer.js");
/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/layer/Vector.js */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Image.js */ "./node_modules/ol/layer/Image.js");
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/proj.js */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_source_Image_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/Image.js */ "./node_modules/ol/source/Image.js");
/* harmony import */ var ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/source/ImageWMS.js */ "./node_modules/ol/source/ImageWMS.js");
/* harmony import */ var ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/source/TileWMS.js */ "./node_modules/ol/source/TileWMS.js");
/* harmony import */ var ol_tilegrid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/tilegrid.js */ "./node_modules/ol/tilegrid.js");
/* harmony import */ var ngeo_offline_SerializerDeserializer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngeo/offline/SerializerDeserializer.js */ "./src/offline/SerializerDeserializer.js");
/* harmony import */ var ngeo_offline_LocalforageCordovaWrapper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngeo/offline/LocalforageCordovaWrapper.js */ "./src/offline/LocalforageCordovaWrapper.js");
/* harmony import */ var ngeo_offline_LocalforageAndroidWrapper_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngeo/offline/LocalforageAndroidWrapper.js */ "./src/offline/LocalforageAndroidWrapper.js");
/* harmony import */ var ngeo_offline_LocalforageIosWrapper_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngeo/offline/LocalforageIosWrapper.js */ "./src/offline/LocalforageIosWrapper.js");
/* harmony import */ var ngeo_CustomEvent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngeo/CustomEvent.js */ "./src/CustomEvent.js");
/* harmony import */ var ngeo_offline_utils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngeo/offline/utils.js */ "./src/offline/utils.js");
/* harmony import */ var localforage_src_localforage_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! localforage/src/localforage.js */ "./node_modules/localforage/src/localforage.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



















var _default = function (_olObservable) {
  _default.$inject = ["$rootScope", "ngeoBackgroundLayerMgr", "ngeoOfflineGutter"];

  _inheritsLoose(_default, _olObservable);

  function _default($rootScope, ngeoBackgroundLayerMgr, ngeoOfflineGutter) {
    var _this;

    _this = _olObservable.call(this) || this;
    _this.localforage_ = _this.createLocalforage();

    _this.configureLocalforage();

    _this.rootScope_ = $rootScope;
    _this.hasData = false;

    _this.initializeHasOfflineData();

    _this.ngeoBackgroundLayerMgr_ = ngeoBackgroundLayerMgr;
    _this.serDes_ = new ngeo_offline_SerializerDeserializer_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      gutter: ngeoOfflineGutter
    });
    _this.gutter_ = ngeoOfflineGutter;
    return _this;
  }

  var _proto = _default.prototype;

  _proto.dispatchProgress_ = function dispatchProgress_(progress) {
    this.dispatchEvent(new ngeo_CustomEvent_js__WEBPACK_IMPORTED_MODULE_14__["default"]('progress', {
      'progress': progress
    }));
  };

  _proto.initializeHasOfflineData = function initializeHasOfflineData() {
    var _this2 = this;

    this.getItem('offline_content').then(function (value) {
      return _this2.setHasOfflineData(!!value);
    });
  };

  _proto.hasOfflineData = function hasOfflineData() {
    return this.hasData;
  };

  _proto.setHasOfflineData = function setHasOfflineData(value) {
    var needDigest = value !== this.hasData;
    this.hasData = value;

    if (needDigest) {
      this.rootScope_.$applyAsync();
    }
  };

  _proto.traceGetSetItem = function traceGetSetItem(msg, key, promise) {
    return promise;
  };

  _proto.createLocalforage = function createLocalforage() {
    if (location.search.includes('localforage=cordova')) {
      console.log('Using cordova localforage');
      return new ngeo_offline_LocalforageCordovaWrapper_js__WEBPACK_IMPORTED_MODULE_11__["default"]();
    } else if (location.search.includes('localforage=android')) {
      console.log('Using android localforage');
      return new ngeo_offline_LocalforageAndroidWrapper_js__WEBPACK_IMPORTED_MODULE_12__["default"]();
    } else if (location.search.includes('localforage=ios')) {
      console.log('Using ios localforage');
      return new ngeo_offline_LocalforageIosWrapper_js__WEBPACK_IMPORTED_MODULE_13__["default"]();
    }

    return localforage_src_localforage_js__WEBPACK_IMPORTED_MODULE_16__["default"];
  };

  _proto.configureLocalforage = function configureLocalforage() {
    this.localforage_.config({
      'name': 'ngeoOfflineStorage',
      'version': 1.0,
      'storeName': 'offlineStorage'
    });
  };

  _proto.getItem = function getItem(key) {
    var promise = this.localforage_['getItem'](key);
    return this.traceGetSetItem('getItem', key, promise);
  };

  _proto.removeItem = function removeItem(key) {
    var promise = this.localforage_['removeItem'](key);
    return this.traceGetSetItem('removeItem', key, promise);
  };

  _proto.setItem = function setItem(key, value) {
    var promise = this.localforage_['setItem'](key, value);
    return this.traceGetSetItem('setItem', key, promise);
  };

  _proto.clear = function clear() {
    this.setHasOfflineData(false);
    var promise = this.localforage_.clear();
    return this.traceGetSetItem('clear', '', promise);
  };

  _proto.estimateLoadDataSize = function estimateLoadDataSize(map) {
    return 50;
  };

  _proto.getLayerKey = function getLayerKey(layerItem) {
    return layerItem.layer.get('label');
  };

  _proto.onTileDownloadSuccess = function onTileDownloadSuccess(progress, tile) {
    this.dispatchProgress_(progress);

    if (tile.response) {
      return this.setItem(Object(ngeo_offline_utils_js__WEBPACK_IMPORTED_MODULE_15__["normalizeURL"])(tile.url), tile.response);
    }

    return Promise.resolve();
  };

  _proto.onTileDownloadError = function onTileDownloadError(progress) {
    this.dispatchProgress_(progress);
    return Promise.resolve();
  };

  _proto.getExtentByZoom = function getExtentByZoom(map, layer, ancestors, userExtent) {
    var currentZoom = map.getView().getZoom();

    if (currentZoom === undefined) {
      throw new Error('Missing currentZoom');
    }

    var results = [];
    [0, 1, 2, 3, 4].forEach(function (dz) {
      results.push({
        zoom: currentZoom + dz,
        extent: userExtent
      });
    });
    return results;
  };

  _proto.sourceImageWMSToTileWMS = function sourceImageWMSToTileWMS(source, projection) {
    if (source instanceof ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_7__["default"] && source.getUrl() && source.getImageLoadFunction() === ol_source_Image_js__WEBPACK_IMPORTED_MODULE_6__["defaultImageLoadFunction"]) {
      var tileGrid = Object(ol_tilegrid_js__WEBPACK_IMPORTED_MODULE_9__["createForProjection"])(source.getProjection() || projection, 42, 256);
      var attributions = source.getAttributions() || '';
      var url = source.getUrl();

      if (!url || !attributions) {
        throw new Error('Invalid values');
      }

      source = new ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
        gutter: this.gutter_,
        url: url,
        tileGrid: tileGrid,
        attributions: attributions,
        projection: source.getProjection(),
        params: source.getParams()
      });
    }

    return source;
  };

  _proto.createLayerMetadatas = function createLayerMetadatas(map, userExtent) {
    var _this3 = this;

    var layersItems = [];

    var visitLayer = function visitLayer(layer, ancestors) {
      if (layer instanceof ol_layer_Layer_js__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        var extentByZoom = _this3.getExtentByZoom(map, layer, ancestors, userExtent);

        var projection = ol_proj_js__WEBPACK_IMPORTED_MODULE_5__["get"](map.getView().getProjection());

        var source = _this3.sourceImageWMSToTileWMS(layer.getSource(), projection);

        var layerType;
        var layerSerialization;

        if (layer instanceof ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_3__["default"] || layer instanceof ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_4__["default"]) {
          layerType = 'tile';
          layerSerialization = _this3.serDes_.serializeTileLayer(layer, source);
        } else if (layer instanceof ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
          layerType = 'vector';
        }

        var backgroundLayer = _this3.ngeoBackgroundLayerMgr_.get(map) === layer;
        layersItems.push({
          backgroundLayer: backgroundLayer,
          map: map,
          extentByZoom: extentByZoom,
          layerType: layerType,
          layerSerialization: layerSerialization,
          layer: layer,
          source: source,
          ancestors: ancestors
        });
      }

      return true;
    };

    map.getLayers().forEach(function (root) {
      Object(ngeo_offline_utils_js__WEBPACK_IMPORTED_MODULE_15__["traverseLayer"])(root, [], visitLayer);
    });
    return layersItems;
  };

  _proto.createTileLoadFunction_ = function createTileLoadFunction_(offlineLayer) {
    var _this4 = this;

    var tileLoadFunction = function tileLoadFunction(imageTile, src) {
      _this4.getItem(Object(ngeo_offline_utils_js__WEBPACK_IMPORTED_MODULE_15__["normalizeURL"])(src)).then(function (content) {
        if (!content) {
          content = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
        }

        imageTile.getImage().src = content;
      });
    };

    return tileLoadFunction;
  };

  _proto.recreateOfflineLayer = function recreateOfflineLayer(offlineLayer) {
    if (offlineLayer.layerType === 'tile') {
      var serialization = offlineLayer.layerSerialization;

      if (serialization) {
        var tileLoadFunction = this.createTileLoadFunction_(offlineLayer);
        var layer = this.serDes_.deserializeTileLayer(serialization, tileLoadFunction);
        return layer;
      }
    }

    return null;
  };

  _proto.getMaxNumberOfParallelDownloads = function getMaxNumberOfParallelDownloads() {
    return 11;
  };

  return _default;
}(ol_Observable_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/offline/Downloader.js":
/*!***********************************!*\
  !*** ./src/offline/Downloader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/has.js */ "./node_modules/ol/has.js");
/* harmony import */ var ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/source/TileWMS.js */ "./node_modules/ol/source/TileWMS.js");
/* harmony import */ var ol_source_WMTS_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/source/WMTS.js */ "./node_modules/ol/source/WMTS.js");
/* harmony import */ var ngeo_offline_TilesDownloader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/offline/TilesDownloader.js */ "./src/offline/TilesDownloader.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_4__);
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







function magnitude2(a, b) {
  var magnitudeSquared = 0;

  for (var i = 0; i < a.length; ++i) {
    magnitudeSquared += Math.pow(a[i] - b[i], 2);
  }

  return magnitudeSquared;
}

var Downloader = function () {
  Downloader.$inject = ["ngeoOfflineConfiguration"];

  function Downloader(ngeoOfflineConfiguration) {
    this.configuration_ = ngeoOfflineConfiguration;
    this.tileDownloader_ = null;
  }

  var _proto = Downloader.prototype;

  _proto.cancel = function cancel() {
    if (this.tileDownloader_) {
      this.tileDownloader_.cancel();
    }
  };

  _proto.queueLayerTiles_ = function queueLayerTiles_(layerMetadata, queue) {
    var source = layerMetadata.source;
    var map = layerMetadata.map,
        extentByZoom = layerMetadata.extentByZoom;

    if (!source) {
      return;
    }

    console.assert(source instanceof ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_1__["default"] || source instanceof ol_source_WMTS_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    var projection = map.getView().getProjection();
    var tileGrid = source.getTileGrid();
    var tileUrlFunction = source.getTileUrlFunction();
    console.assert(extentByZoom);

    var _loop = function _loop() {
      var extentZoom = _step.value;
      var z = extentZoom.zoom;
      var extent = extentZoom.extent;
      var queueByZ = [];
      var minX = void 0;
      var minY = void 0;
      var maxX = void 0;
      var maxY = void 0;
      tileGrid.forEachTileCoord(extent, z, function (coord) {
        maxX = coord[1];
        maxY = coord[2];

        if (minX === undefined || minY === undefined) {
          minX = coord[1];
          minY = coord[2];
        }

        var url = tileUrlFunction(coord, ol_has_js__WEBPACK_IMPORTED_MODULE_0__["DEVICE_PIXEL_RATIO"], projection);
        console.assert(url);

        if (url) {
          var tile = {
            coord: coord,
            url: url,
            response: null
          };
          queueByZ.push(tile);
        }
      });
      var centerTileCoord = [z, (minX + maxX) / 2, (minY + maxY) / 2];
      queueByZ.sort(function (a, b) {
        return magnitude2(a.coord, centerTileCoord) - magnitude2(b.coord, centerTileCoord);
      });
      queue.push.apply(queue, queueByZ);
    };

    for (var _iterator = _createForOfIteratorHelperLoose(extentByZoom), _step; !(_step = _iterator()).done;) {
      _loop();
    }
  };

  _proto.save = function save(extent, map) {
    var _this = this;

    var layersMetadatas = this.configuration_.createLayerMetadatas(map, extent);
    var persistentLayers = [];
    var queue = [];
    var zooms = [];

    for (var _iterator2 = _createForOfIteratorHelperLoose(layersMetadatas), _step2; !(_step2 = _iterator2()).done;) {
      var layerItem = _step2.value;

      if (layerItem.layerType === 'tile') {
        var tiles = [];
        this.queueLayerTiles_(layerItem, tiles);
        queue.push.apply(queue, tiles);
      }

      persistentLayers.push({
        backgroundLayer: layerItem.backgroundLayer,
        layerType: layerItem.layerType,
        layerSerialization: layerItem.layerSerialization,
        key: this.configuration_.getLayerKey(layerItem)
      });
      layerItem.extentByZoom.forEach(function (obj) {
        var zoom = obj.zoom;

        if (!zooms.includes(zoom)) {
          zooms.push(zoom);
        }
      });
    }

    var persistentObject = {
      extent: extent,
      layers: persistentLayers,
      zooms: zooms.sort(function (a, b) {
        return a < b ? -1 : 1;
      })
    };
    var setOfflineContentPromise = this.configuration_.setItem('offline_content', persistentObject);
    var maxDownloads = this.configuration_.getMaxNumberOfParallelDownloads();
    this.tileDownloader_ = new ngeo_offline_TilesDownloader_js__WEBPACK_IMPORTED_MODULE_3__["default"](queue, this.configuration_, maxDownloads);
    var tileDownloadPromise = this.tileDownloader_.download();
    var allPromise = Promise.all([setOfflineContentPromise, tileDownloadPromise]);

    var setHasOfflineData = function setHasOfflineData() {
      return _this.configuration_.setHasOfflineData(true);
    };

    allPromise.then(setHasOfflineData, setHasOfflineData);
    return allPromise;
  };

  return Downloader;
}();

var name = 'offlineDownloader';
Downloader.module = angular__WEBPACK_IMPORTED_MODULE_4___default.a.module(name, []).service(name, Downloader);
var exports = Downloader;
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/LocalforageAndroidWrapper.js":
/*!**************************************************!*\
  !*** ./src/offline/LocalforageAndroidWrapper.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngeo_offline_AbstractLocalforageWrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/offline/AbstractLocalforageWrapper.js */ "./src/offline/AbstractLocalforageWrapper.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var exports = function (_AbstractWrapper) {
  _inheritsLoose(AndroidWrapper, _AbstractWrapper);

  function AndroidWrapper() {
    var _this;

    _this = _AbstractWrapper.call(this) || this;
    window.androidWrapper = _assertThisInitialized(_this);
    return _this;
  }

  var _proto = AndroidWrapper.prototype;

  _proto.postToBackend = function postToBackend(action) {
    var stringified = JSON.stringify(action);
    window.ngeoHost.postMessageToAndroid(stringified);
  };

  _proto.receiveFromAndroid = function receiveFromAndroid(actionString) {
    var action = JSON.parse(actionString);
    this.receiveMessage({
      'data': action
    });
  };

  return AndroidWrapper;
}(ngeo_offline_AbstractLocalforageWrapper_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/LocalforageCordovaWrapper.js":
/*!**************************************************!*\
  !*** ./src/offline/LocalforageCordovaWrapper.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngeo_offline_AbstractLocalforageWrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/offline/AbstractLocalforageWrapper.js */ "./src/offline/AbstractLocalforageWrapper.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var exports = function (_AbstractWrapper) {
  _inheritsLoose(CordovaWrapper, _AbstractWrapper);

  function CordovaWrapper() {
    var _this;

    _this = _AbstractWrapper.call(this) || this;
    window.addEventListener('message', _this.receiveMessage.bind(_assertThisInitialized(_this)), false);
    return _this;
  }

  var _proto = CordovaWrapper.prototype;

  _proto.postToBackend = function postToBackend(action) {
    window.parent.postMessage(action, '*');
  };

  return CordovaWrapper;
}(ngeo_offline_AbstractLocalforageWrapper_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/LocalforageIosWrapper.js":
/*!**********************************************!*\
  !*** ./src/offline/LocalforageIosWrapper.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngeo_offline_AbstractLocalforageWrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/offline/AbstractLocalforageWrapper.js */ "./src/offline/AbstractLocalforageWrapper.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var exports = function (_AbstractWrapper) {
  _inheritsLoose(IosWrapper, _AbstractWrapper);

  function IosWrapper() {
    var _this;

    _this = _AbstractWrapper.call(this) || this;
    window.iosWrapper = _assertThisInitialized(_this);
    return _this;
  }

  var _proto = IosWrapper.prototype;

  _proto.postToBackend = function postToBackend(action) {
    if (action.command === 'setItem') {
      action.args[1] = JSON.stringify(action.args[1]);
    }

    var stringified = JSON.stringify(action);
    window.webkit.messageHandlers.ios.postMessage(stringified);
  };

  _proto.receiveFromIos = function receiveFromIos(actionString) {
    var action = JSON.parse(actionString);
    var args = action['args'] || [];
    action['args'] = args.map(function (item) {
      return JSON.parse(item);
    });
    this.receiveMessage({
      'data': action
    });
  };

  return IosWrapper;
}(ngeo_offline_AbstractLocalforageWrapper_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/Mask.js":
/*!*****************************!*\
  !*** ./src/offline/Mask.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mask; });
/* harmony import */ var ol_layer_Layer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/layer/Layer.js */ "./node_modules/ol/layer/Layer.js");
/* harmony import */ var ol_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/dom.js */ "./node_modules/ol/dom.js");
/* harmony import */ var ol_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/has.js */ "./node_modules/ol/has.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Mask = function (_Layer) {
  _inheritsLoose(Mask, _Layer);

  function Mask(layerOptions, maskOptions) {
    var _this;

    if (layerOptions === void 0) {
      layerOptions = {};
    }

    if (maskOptions === void 0) {
      maskOptions = {};
    }

    _this = _Layer.call(this, layerOptions) || this;
    _this.context_ = Object(ol_dom_js__WEBPACK_IMPORTED_MODULE_1__["createCanvasContext2D"])();
    _this.context_.canvas.style.opacity = '0.5';
    _this.context_.canvas.style.position = 'absolute';
    _this.margin_ = maskOptions.margin || 100;
    _this.extentInMeters_ = maskOptions.extentInMeters || 0;
    return _this;
  }

  var _proto = Mask.prototype;

  _proto.createExtent = function createExtent(center, halfLength) {
    var minx = center[0] - halfLength;
    var miny = center[1] - halfLength;
    var maxx = center[0] + halfLength;
    var maxy = center[1] + halfLength;
    return [minx, miny, maxx, maxy];
  };

  _proto.render = function render(frameState) {
    var context = this.context_;
    var cwidth = frameState.size[0];
    context.canvas.width = cwidth;
    var cheight = frameState.size[1];
    context.canvas.height = cheight;
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(cwidth, 0);
    context.lineTo(cwidth, cheight);
    context.lineTo(0, cheight);
    context.lineTo(0, 0);
    context.closePath();
    var extentLength = Math.min(cwidth, cheight) - this.margin_ * 2;

    if (this.extentInMeters_) {
      extentLength = ol_has_js__WEBPACK_IMPORTED_MODULE_2__["DEVICE_PIXEL_RATIO"] * this.extentInMeters_ / frameState.viewState.resolution;
    }

    var extent = this.createExtent([cwidth / 2, cheight / 2], Math.ceil(extentLength / 2));
    context.moveTo(extent[0], extent[1]);
    context.lineTo(extent[0], extent[3]);
    context.lineTo(extent[2], extent[3]);
    context.lineTo(extent[2], extent[1]);
    context.lineTo(extent[0], extent[1]);
    context.closePath();
    context.fillStyle = 'rgba(0, 5, 25, 0.5)';
    context.fill();
    return context.canvas;
  };

  return Mask;
}(ol_layer_Layer_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/offline/Mode.js":
/*!*****************************!*\
  !*** ./src/offline/Mode.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);


var Mode = function () {
  Mode.$inject = ["ngeoOfflineConfiguration"];

  function Mode(ngeoOfflineConfiguration) {
    this.enabled_ = false;
    this.component_ = null;
    this.ngeoOfflineConfiguration_ = ngeoOfflineConfiguration;
  }

  var _proto = Mode.prototype;

  _proto.isEnabled = function isEnabled() {
    return this.enabled_;
  };

  _proto.enable = function enable() {
    this.enabled_ = true;
  };

  _proto.registerComponent = function registerComponent(component) {
    this.component_ = component;
  };

  _proto.activateOfflineMode = function activateOfflineMode() {
    if (!this.component_) {
      throw new Error('The component is not registered');
    }

    this.component_.activateOfflineMode();
  };

  _proto.hasData = function hasData() {
    return this.ngeoOfflineConfiguration_.hasOfflineData();
  };

  return Mode;
}();

var myModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoOfflineMode', []);
myModule.service('ngeoOfflineMode', Mode);
Mode.module = myModule;
/* harmony default export */ __webpack_exports__["default"] = (Mode);

/***/ }),

/***/ "./src/offline/NetworkStatus.js":
/*!**************************************!*\
  !*** ./src/offline/NetworkStatus.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/misc/debounce.js */ "./src/misc/debounce.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
configFunction_.$inject = ["$httpProvider"];



var Service = function () {
  Service.$inject = ["$document", "$window", "$timeout", "$rootScope", "ngeoOfflineTestUrl"];

  function Service($document, $window, $timeout, $rootScope, ngeoOfflineTestUrl) {
    this.$document_ = $document;
    this.$window_ = $window;
    this.$timeout_ = $timeout;
    this.$rootScope_ = $rootScope;
    this.ngeoOfflineTestUrl_ = ngeoOfflineTestUrl;
    this.count_ = 0;
    this.offline_;
    this.promise_;
    this.initialize_();
  }

  var _proto = Service.prototype;

  _proto.initialize_ = function initialize_() {
    var _this = this;

    this.offline_ = !this.$window_.navigator.onLine;
    this.$window_.addEventListener('offline', function () {
      _this.triggerChangeStatusEvent_(true);
    });
    this.$window_.addEventListener('online', function () {
      _this.check(undefined);
    });

    if (this.$document_.ajaxError) {
      var onAjaxError = function onAjaxError(evt, jqxhr, settings, thrownError) {
        if (!/^(canceled|abort)$/.test(thrownError)) {
          _this.check(2000);
        }
      };

      this.$document_.ajaxError(onAjaxError);
    }
  };

  _proto.check = function check(timeout) {
    var _this2 = this;

    if (this.promise_) {
      this.$timeout_.cancel(this.promise_);
      this.promise_ = undefined;
    }

    if (timeout !== undefined) {
      this.count_++;
      this.promise_ = this.$timeout_(function () {
        return _this2.check();
      }, timeout);
      return;
    }

    $.ajax({
      method: 'GET',
      url: this.ngeoOfflineTestUrl_,
      timeout: 1000,
      success: function success() {
        _this2.count_ = 0;

        if (_this2.offline_) {
          _this2.triggerChangeStatusEvent_(false);
        }
      },
      error: function error() {
        _this2.count_++;

        if (_this2.count_ > 2 && !_this2.offline_) {
          _this2.triggerChangeStatusEvent_(true);
        }
      }
    });
  };

  _proto.triggerChangeStatusEvent_ = function triggerChangeStatusEvent_(offline) {
    this.offline_ = offline;
    this.$rootScope_.$digest();
  };

  _proto.isDisconnected = function isDisconnected() {
    return !!this.offline_;
  };

  return Service;
}();

var name = 'ngeoNetworkStatus';
Service.module = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module(name, [ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_0__["default"].name]);
Service.module.service(name, Service);

var httpInterceptor = function httpInterceptor($q, ngeoDebounce, ngeoNetworkStatus) {
  var debouncedCheck = ngeoDebounce(function () {
    return ngeoNetworkStatus.check(undefined);
  }, 2000, false);
  return {
    request: function request(config) {
      return config;
    },
    requestError: function requestError(rejection) {
      return $q.reject(rejection);
    },
    response: function response(_response) {
      return _response;
    },
    responseError: function responseError(rejection) {
      debouncedCheck();
      return $q.reject(rejection);
    }
  };
};

httpInterceptor.$inject = ["$q", "ngeoDebounce", "ngeoNetworkStatus"];
httpInterceptor.$inject = ["$q", "ngeoDebounce", "ngeoNetworkStatus"];
Service.module.factory('httpInterceptor', httpInterceptor);

function configFunction_($httpProvider) {
  $httpProvider.interceptors.push('httpInterceptor');
}

Service.module.config(configFunction_);
var exports = Service;
/* harmony default export */ __webpack_exports__["default"] = (exports);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/offline/Restorer.js":
/*!*********************************!*\
  !*** ./src/offline/Restorer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngeo_map_BackgroundLayerMgr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/map/BackgroundLayerMgr.js */ "./src/map/BackgroundLayerMgr.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var Restorer = function () {
  Restorer.$inject = ["ngeoOfflineConfiguration", "ngeoBackgroundLayerMgr"];

  function Restorer(ngeoOfflineConfiguration, ngeoBackgroundLayerMgr) {
    this.configuration_ = ngeoOfflineConfiguration;
    this.ngeoBackgroundLayerMgr_ = ngeoBackgroundLayerMgr;
  }

  var _proto = Restorer.prototype;

  _proto.restore = function restore(map) {
    var _this = this;

    return this.configuration_.getItem('offline_content').then(function (offlineContent) {
      return _this.doRestore(map, offlineContent);
    });
  };

  _proto.doRestore = function doRestore(map, offlineContent) {
    map.getLayerGroup().getLayers().clear();

    for (var _iterator = _createForOfIteratorHelperLoose(offlineContent.layers), _step; !(_step = _iterator()).done;) {
      var offlineLayer = _step.value;
      var layer = this.configuration_.recreateOfflineLayer(offlineLayer);

      if (layer) {
        map.addLayer(layer);

        if (offlineLayer.backgroundLayer) {
          this.ngeoBackgroundLayerMgr_.set(map, layer);
        }
      }
    }

    return offlineContent.extent;
  };

  return Restorer;
}();

var name = 'ngeoOfflineRestorer';
Restorer.module = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module(name, [ngeo_map_BackgroundLayerMgr_js__WEBPACK_IMPORTED_MODULE_0__["default"].name]).service(name, Restorer);
var exports = Restorer;
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/SerializerDeserializer.js":
/*!***********************************************!*\
  !*** ./src/offline/SerializerDeserializer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_tilegrid_TileGrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/tilegrid/TileGrid.js */ "./node_modules/ol/tilegrid/TileGrid.js");
/* harmony import */ var ol_tilegrid_WMTS_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/tilegrid/WMTS.js */ "./node_modules/ol/tilegrid/WMTS.js");
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/proj.js */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source/TileWMS.js */ "./node_modules/ol/source/TileWMS.js");
/* harmony import */ var ol_source_WMTS_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/source/WMTS.js */ "./node_modules/ol/source/WMTS.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");







var SerDes = function () {
  function SerDes(_ref) {
    var gutter = _ref.gutter;
    this.gutter_ = gutter;
  }

  var _proto = SerDes.prototype;

  _proto.createBaseObject_ = function createBaseObject_(olObject) {
    var properties = olObject.getProperties();
    var obj = {};

    for (var key in properties) {
      var value = properties[key];
      var typeOf = typeof value;

      if (typeOf === 'string' || typeOf === 'number') {
        obj[key] = value;
      }
    }

    return obj;
  };

  _proto.serializeTilegrid = function serializeTilegrid(tilegrid) {
    var obj = {};
    obj.extent = tilegrid.getExtent();
    obj.minZoom = tilegrid.getMinZoom();
    obj.origin = tilegrid.getOrigin(0);
    obj.resolutions = tilegrid.getResolutions();
    obj.tileSize = tilegrid.getTileSize(tilegrid.getMinZoom());
    return JSON.stringify(obj);
  };

  _proto.deserializeTilegrid = function deserializeTilegrid(serialization) {
    var options = JSON.parse(serialization);
    return new ol_tilegrid_TileGrid_js__WEBPACK_IMPORTED_MODULE_0__["default"](options);
  };

  _proto.serializeTilegridWMTS = function serializeTilegridWMTS(tilegrid) {
    if (!tilegrid) {
      return undefined;
    }

    var obj = {};
    var resolutions = tilegrid.getResolutions();
    obj.extent = tilegrid.getExtent();
    obj.minZoom = tilegrid.getMinZoom();
    obj.matrixIds = tilegrid.getMatrixIds();
    obj.resolutions = resolutions;
    obj.origins = [];

    for (var z = 0; z < resolutions.length; ++z) {
      obj.origins.push(tilegrid.getOrigin(z));
    }

    return JSON.stringify(obj);
  };

  _proto.deserializeTilegridWMTS = function deserializeTilegridWMTS(serialization) {
    var options = JSON.parse(serialization);
    return new ol_tilegrid_WMTS_js__WEBPACK_IMPORTED_MODULE_1__["default"](options);
  };

  _proto.serializeSourceTileWMS = function serializeSourceTileWMS(source) {
    var obj = this.createBaseObject_(source);
    obj.params = source.getParams();
    obj.urls = source.getUrls();
    obj.tileGrid = this.serializeTilegrid(source.getTileGrid());
    var projection = source.getProjection();

    if (projection) {
      obj.projection = ol_proj_js__WEBPACK_IMPORTED_MODULE_2__["get"](source.getProjection()).getCode();
    }

    return JSON.stringify(obj);
  };

  _proto.deserializeSourceTileWMS = function deserializeSourceTileWMS(serialization, tileLoadFunction) {
    var options = JSON.parse(serialization);
    options.tileLoadFunction = tileLoadFunction;

    if (options.tileGrid) {
      options.tileGrid = this.deserializeTilegrid(options.tileGrid);
    }

    options.gutter = this.gutter_;
    return new ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_3__["default"](options);
  };

  _proto.serializeSourceWMTS = function serializeSourceWMTS(source) {
    var obj = this.createBaseObject_(source);
    obj.dimensions = source.getDimensions();
    obj.format = source.getFormat();
    obj.urls = source.getUrls();
    obj.version = source.getVersion();
    obj.layer = source.getLayer();
    obj.style = source.getStyle();
    obj.matrixSet = source.getMatrixSet();
    var tileGridWMTS = source.getTileGrid();
    obj.tileGrid = this.serializeTilegridWMTS(tileGridWMTS);
    obj.requestEncoding = source.getRequestEncoding();
    var projection = source.getProjection();

    if (projection) {
      obj.projection = ol_proj_js__WEBPACK_IMPORTED_MODULE_2__["get"](source.getProjection()).getCode();
    }

    return JSON.stringify(obj);
  };

  _proto.deserializeSourceWMTS = function deserializeSourceWMTS(serialization, tileLoadFunction) {
    var options = JSON.parse(serialization);
    options.tileLoadFunction = tileLoadFunction;

    if (options.tileGrid) {
      options.tileGrid = this.deserializeTilegridWMTS(options.tileGrid);
    }

    return new ol_source_WMTS_js__WEBPACK_IMPORTED_MODULE_4__["default"](options);
  };

  _proto.makeInfinitySerializable_ = function makeInfinitySerializable_(number) {
    if (number === Infinity) {
      return 1000;
    }

    return number;
  };

  _proto.serializeTileLayer = function serializeTileLayer(layer, source) {
    var obj = this.createBaseObject_(layer);
    obj.opacity = layer.getOpacity();
    obj.visible = layer.getVisible();
    obj.minResolution = layer.getMinResolution();
    obj.maxResolution = this.makeInfinitySerializable_(layer.getMaxResolution());
    obj.zIndex = layer.getZIndex();
    source = source || layer.getSource();

    if (source instanceof ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
      obj.source = this.serializeSourceTileWMS(source);
      obj.sourceType = 'tileWMS';
    } else if (source instanceof ol_source_WMTS_js__WEBPACK_IMPORTED_MODULE_4__["default"]) {
      obj.source = this.serializeSourceWMTS(source);
      obj.sourceType = 'WMTS';
    }

    return JSON.stringify(obj);
  };

  _proto.deserializeTileLayer = function deserializeTileLayer(serialization, tileLoadFunction) {
    var options = JSON.parse(serialization);
    var sourceType = options.sourceType;

    if (sourceType === 'tileWMS') {
      options.source = this.deserializeSourceTileWMS(options.source, tileLoadFunction);
    } else if (sourceType === 'WMTS') {
      options.source = this.deserializeSourceWMTS(options.source, tileLoadFunction);
    }

    return new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_5__["default"](options);
  };

  return SerDes;
}();

var exports = SerDes;
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/ServiceManager.js":
/*!***************************************!*\
  !*** ./src/offline/ServiceManager.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);


var ServiceManager = function () {
  ServiceManager.$inject = ["$injector"];

  function ServiceManager($injector) {
    this.$injector_ = $injector;
    this.saveService_ = null;
    this.restoreService_ = null;
  }

  var _proto = ServiceManager.prototype;

  _proto.getOfflineService_ = function getOfflineService_(serviceLike, method) {
    if (typeof serviceLike === 'string') {
      if (!this.$injector_.has(serviceLike)) {
        console.error("The offline " + method + " service could not be found");
        return;
      }

      var service = this.$injector_.get(serviceLike);

      if (!service[method]) {
        console.error("The offline service " + serviceLike + " does not have a " + method + " method");
        return;
      }

      return service;
    }

    if (!serviceLike[method]) {
      console.error("The provided offline service does not have a " + method + " method");
      return;
    }

    return serviceLike;
  };

  _proto.setSaveService = function setSaveService(saveLikeService) {
    this.saveService_ = this.getOfflineService_(saveLikeService, 'save');
  };

  _proto.setRestoreService = function setRestoreService(restoreLikeService) {
    this.restoreService_ = this.getOfflineService_(restoreLikeService, 'restore');
  };

  _proto.cancel = function cancel() {
    if (!this.saveService_) {
      console.warn('You must register a saveService first');
      return;
    }

    this.saveService_.cancel();
  };

  _proto.save = function save(extent, map) {
    if (!this.saveService_) {
      console.warn('You must register a saveService first');
      return;
    }

    this.saveService_.save(extent, map);
  };

  _proto.restore = function restore(map) {
    if (!this.restoreService_) {
      console.warn('You must register a restoreService first');
      return Promise.reject();
    }

    return this.restoreService_.restore(map);
  };

  return ServiceManager;
}();

ServiceManager.module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoOfflineServiceManager', []);
ServiceManager.module.service('ngeoOfflineServiceManager', ServiceManager);
/* harmony default export */ __webpack_exports__["default"] = (ServiceManager);

/***/ }),

/***/ "./src/offline/TilesDownloader.js":
/*!****************************************!*\
  !*** ./src/offline/TilesDownloader.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TileDownloader; });
function blobToDataUrl(blob) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

var TileDownloader = function () {
  function TileDownloader(tiles, callbacks, workers) {
    this.maxNumberOfWorkers_ = workers;
    this.wasStarted_ = false;
    this.tiles_ = tiles;
    this.callbacks_ = callbacks;
    this.allCount_ = 0;
    this.okCount_ = 0;
    this.koCount_ = 0;
    this.requestedCount_ = 0;
    this.resolvePromise_ = null;
    this.promise_ = null;
    this.tileIndex_ = 0;
    this.cancel_ = false;
  }

  var _proto = TileDownloader.prototype;

  _proto.cancel = function cancel() {
    this.cancel_ = true;
  };

  _proto.download = function download() {
    var _this = this;

    if (this.promise_) {
      return this.promise_;
    }

    this.promise_ = new Promise(function (resolve, reject) {
      _this.resolvePromise_ = resolve;
    });
    console.assert(this.tiles_);

    if (this.tiles_.length === 0) {
      this.callbacks_.onTileDownloadError(1);

      if (this.resolvePromise_) {
        this.resolvePromise_();
      }
    } else {
      for (var i = 0; i < this.maxNumberOfWorkers_; ++i) {
        this.downloadTile_();
      }
    }

    return this.promise_;
  };

  _proto.downloadTile_ = function downloadTile_() {
    var _this2 = this;

    if (this.cancel_ || this.tileIndex_ >= this.tiles_.length) {
      return;
    }

    var tile = this.tiles_[this.tileIndex_++];
    var tileUrl = tile.url;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', tileUrl, true);
    xhr.responseType = 'blob';

    var onTileDownloaded = function onTileDownloaded() {
      if (_this2.allCount_ === _this2.tiles_.length && _this2.resolvePromise_) {
        _this2.resolvePromise_();
      }

      _this2.downloadTile_();
    };

    var errorCallback = function errorCallback(_) {
      if (_this2.cancel_) {
        return;
      }

      ++_this2.allCount_;
      ++_this2.koCount_;
      var progress = _this2.allCount_ / _this2.tiles_.length;

      _this2.callbacks_.onTileDownloadError(progress).then(onTileDownloaded, onTileDownloaded);
    };

    var onloadCallback = function onloadCallback(e) {
      var response = xhr.response;

      if (response && response.size !== 0) {
        blobToDataUrl(response).then(function (dataUrl) {
          if (_this2.cancel_) {
            return;
          }

          ++_this2.allCount_;
          ++_this2.okCount_;
          tile.response = dataUrl;
          var progress = _this2.allCount_ / _this2.tiles_.length;

          _this2.callbacks_.onTileDownloadSuccess(progress, tile).then(onTileDownloaded, onTileDownloaded);
        }, function () {
          if (_this2.cancel_) {
            return;
          }

          errorCallback(e);
        });
      } else {
        if (_this2.cancel_) {
          return;
        }

        ++_this2.allCount_;
        ++_this2.okCount_;

        _this2.callbacks_.onTileDownloadSuccess(_this2.allCount_ / _this2.tiles_.length, tile).then(onTileDownloaded, onTileDownloaded);
      }
    };

    xhr.onload = onloadCallback;
    xhr.onerror = errorCallback;
    xhr.onabort = errorCallback;
    xhr.ontimeout = errorCallback;
    xhr.send();
    ++this.requestedCount_;
  };

  return TileDownloader;
}();



/***/ }),

/***/ "./src/offline/component.html":
/*!************************************!*\
  !*** ./src/offline/component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="main-button">\n  <span ng-if="!$ctrl.hasData()">\n    <div class="no-data fas fa-arrow-circle-down" ng-click="$ctrl.toggleViewExtentSelection()"></div>\n  </span>\n  <span ng-if="$ctrl.hasData()">\n    <div class="with-data fas fa-arrow-circle-down" ng-click="$ctrl.showMenu()"></div>\n  </span>\n</div>\n\n<div ng-if="$ctrl.selectingExtent && !$ctrl.networkStatus.isDisconnected()" class="validate-extent btn btn-primary">\n  <div ng-if="!$ctrl.downloading" ng-click="$ctrl.computeSizeAndDisplayAlertLoadData()" translate>Save map</div>\n  <div ng-if="$ctrl.downloading" ng-click="$ctrl.askAbortDownload()" translate>Abort</div>\n</div>\n\n\n<div ng-if="$ctrl.downloading" class="in-progress">\n  <div>{{$ctrl.progressPercents}}%</div>\n</div>\n\n<ngeo-modal ng-model="$ctrl.menuDisplayed">\n  <div class="modal-header">\n    <button type="button" class="close"\n              data-dismiss="modal"\n              aria-label="{{\'Close\' | translate}}">\n      <span aria-hidden="true">&times;</span>\n    </button>\n    <h4 class="modal-title" translate>Offline map</h4>\n  </div>\n  <div class="modal-body">\n    <div ng-if="$ctrl.hasData()">\n      <button type="button" class="extent-zoom btn btn-default"\n              ng-if="!$ctrl.offlineMode.isEnabled()"\n              ng-click="$ctrl.activateOfflineMode()"\n              translate>Activate offline mode\n      </button>\n      <button type="button" class="extent-zoom btn btn-default"\n              ng-if="$ctrl.offlineMode.isEnabled() && !$ctrl.networkStatus.isDisconnected()"\n              ng-click="$ctrl.deactivateOfflineMode()"\n              translate>Deactivate offline mode\n      </button>\n\n      <button type="button" class="extent-show btn btn-default"\n              ng-if="$ctrl.offlineMode.isEnabled()"\n              ng-click="$ctrl.toggleExtentVisibility()">\n        <span ng-if="$ctrl.isExtentVisible()" translate>Hide extent</span>\n        <span ng-if="!$ctrl.isExtentVisible()" translate >Show extent</span>\n      </button>\n      <button type="button" class="delete btn btn-default"\n              ng-if="!$ctrl.networkStatus.isDisconnected()"\n              ng-click="$ctrl.displayAlertDestroyData = true"\n              translate>Delete data\n      </button>\n    </div>\n    <div ng-if="!$ctrl.hasData() && !$ctrl.networkStatus.isDisconnected()">\n      <button type="button" class="new-data btn btn-default"\n              ng-click="$ctrl.toggleViewExtentSelection()"\n              translate>Save new map\n      </button>\n    </div>\n  </div>\n</ngeo-modal>\n\n<ngeo-modal ng-model="$ctrl.displayAlertLoadData">\n  <div class="modal-header">\n    <h4 class="modal-title" translate>Warning</h4>\n  </div>\n  <div class="modal-body">\n      <p translate>~{{$ctrl.estimatedLoadDataSize}}MB of maps will be downloaded (until scale 1:25\'000) - Don\'t lock your device or navigate away from this site during the download process. Deactivate "private" mode of your browser.</p>\n      <button type="button" class="validate btn btn-primary"\n              data-dismiss="modal"\n              ng-click="$ctrl.validateExtent()"\n              translate>Ok\n      </button>\n      <button type="button" class="delete btn btn-default"\n              data-dismiss="modal"\n              translate>Cancel\n      </button>\n  </div>\n</ngeo-modal>\n\n<ngeo-modal ng-model="$ctrl.displayAlertNoLayer">\n  <div class="modal-header">\n    <h4 class="modal-title" translate>Warning</h4>\n  </div>\n  <div class="modal-body">\n      <p translate>No maps selected for saving.</p>\n      <button type="button" class="delete btn btn-default"\n              data-dismiss="modal"\n              translate>Ok\n      </button>\n  </div>\n</ngeo-modal>\n\n<ngeo-modal ng-model="$ctrl.displayAlertDestroyData">\n  <div class="modal-header">\n    <h4 class="modal-title" translate>Warning</h4>\n  </div>\n  <div class="modal-body">\n      <p translate>Do you really want to remove your data ?</p>\n      <button type="button" class="validate btn btn-primary"\n              data-dismiss="modal"\n              ng-click="$ctrl.deleteData()"\n              translate>Ok\n      </button>\n      <button type="button" class="delete btn btn-default"\n              data-dismiss="modal"\n              translate>Cancel\n      </button>\n  </div>\n</ngeo-modal>\n\n<ngeo-modal ng-model="$ctrl.displayAlertAbortDownload">\n  <div class="modal-header">\n    <h4 class="modal-title" translate>Warning</h4>\n  </div>\n  <div class="modal-body">\n      <p translate>Do you really want to remove your data ?</p>\n      <button type="button" class="validate btn btn-primary"\n              data-dismiss="modal"\n              ng-click="$ctrl.abortDownload()"\n              translate>Ok\n      </button>\n      <button type="button" class="delete btn btn-default"\n              data-dismiss="modal"\n              ng-click="$ctrl.followDownloadProgression_()"\n              translate>Cancel\n      </button>\n  </div>\n</ngeo-modal>\n';

}
return __p
}

/***/ }),

/***/ "./src/offline/component.js":
/*!**********************************!*\
  !*** ./src/offline/component.js ***!
  \**********************************/
/*! exports provided: Controller, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var ngeo_map_FeatureOverlayMgr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/map/FeatureOverlayMgr.js */ "./src/map/FeatureOverlayMgr.js");
/* harmony import */ var ngeo_message_modalComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/message/modalComponent.js */ "./src/message/modalComponent.js");
/* harmony import */ var ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/utils.js */ "./src/utils.js");
/* harmony import */ var ol_Collection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/Collection.js */ "./node_modules/ol/Collection.js");
/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/Feature.js */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/geom/Polygon.js */ "./node_modules/ol/geom/Polygon.js");
/* harmony import */ var ol_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/has.js */ "./node_modules/ol/has.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Mask_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Mask.js */ "./src/offline/Mask.js");









var myModule = angular__WEBPACK_IMPORTED_MODULE_7___default.a.module('ngeoOffline', [ngeo_map_FeatureOverlayMgr_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, ngeo_message_modalComponent_js__WEBPACK_IMPORTED_MODULE_1__["default"].name]);
myModule.value('ngeoOfflineTemplateUrl', function (element, attrs) {
  var templateUrl = attrs['ngeoOfflineTemplateurl'];
  return templateUrl !== undefined ? templateUrl : 'ngeo/offline/component.html';
});
myModule.run(["$templateCache", function ($templateCache) {
  $templateCache.put('ngeo/offline/component.html', __webpack_require__(/*! ./component.html */ "./src/offline/component.html"));
}]);
ngeoOfflineTemplateUrl.$inject = ["$element", "$attrs", "ngeoOfflineTemplateUrl"];

function ngeoOfflineTemplateUrl($element, $attrs, ngeoOfflineTemplateUrl) {
  return ngeoOfflineTemplateUrl($element, $attrs);
}

var component = {
  bindings: {
    'map': '<ngeoOfflineMap',
    'extentSize': '<?ngeoOfflineExtentsize',
    'maskMargin': '<?ngeoOfflineMaskMargin',
    'minZoom': '<?ngeoOfflineMinZoom',
    'maxZoom': '<?ngeoOfflineMaxZoom'
  },
  controller: 'ngeoOfflineController',
  templateUrl: ngeoOfflineTemplateUrl
};
myModule.component('ngeoOffline', component);
var Controller = function () {
  Controller.$inject = ["$timeout", "ngeoFeatureOverlayMgr", "ngeoOfflineServiceManager", "ngeoOfflineConfiguration", "ngeoOfflineMode", "ngeoNetworkStatus"];

  function Controller($timeout, ngeoFeatureOverlayMgr, ngeoOfflineServiceManager, ngeoOfflineConfiguration, ngeoOfflineMode, ngeoNetworkStatus) {
    var _this = this;

    this.$timeout_ = $timeout;
    this.maskLayer_ = undefined;
    this.ngeoOfflineServiceManager_ = ngeoOfflineServiceManager;
    this.ngeoOfflineConfiguration_ = ngeoOfflineConfiguration;
    this.offlineMode = ngeoOfflineMode;
    this.networkStatus = ngeoNetworkStatus;
    this.map;
    this.extentSize = 0;
    this.featuresOverlay_ = ngeoFeatureOverlayMgr.getFeatureOverlay();
    this.overlayCollection_ = new ol_Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.featuresOverlay_.setFeatures(this.overlayCollection_);
    this.dataPolygon_ = null;
    this.selectingExtent = false;
    this.downloading = false;
    this.progressPercents = 0;
    this.menuDisplayed = false;
    this.displayAlertAbortDownload = false;
    this.displayAlertLoadData = false;
    this.displayAlertNoLayer = false;
    this.maskMargin = 0;
    this.minZoom;
    this.maxZoom;
    this.originalMinZoom;
    this.originalMaxZoom;
    this.estimatedLoadDataSize = 0;
    this.rotateMask = false;

    this.progressCallback_ = function (event) {
      var progress = event.detail.progress;
      _this.progressPercents = Math.floor(progress * 100);

      if (progress === 1) {
        _this.finishDownload_();
      }

      _this.$timeout_(function () {}, 0);
    };
  }

  var _proto = Controller.prototype;

  _proto.$onInit = function $onInit() {
    this.offlineMode.registerComponent(this);
    this.ngeoOfflineConfiguration_.on('progress', this.progressCallback_);
    this.maskMargin = this.maskMargin || 100;
    this.minZoom = this.minZoom || 10;
    this.maxZoom = this.maxZoom || 15;
    this.maskLayer_ = new _Mask_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
      extentInMeters: this.extentSize
    }, {
      margin: this.maskMargin
    });
  };

  _proto.$onDestroy = function $onDestroy() {
    this.ngeoOfflineConfiguration_.un('progress', this.progressCallback_);
  };

  _proto.hasData = function hasData() {
    return this.ngeoOfflineConfiguration_.hasOfflineData();
  };

  _proto.computeSizeAndDisplayAlertLoadData = function computeSizeAndDisplayAlertLoadData() {
    this.estimatedLoadDataSize = this.ngeoOfflineConfiguration_.estimateLoadDataSize(this.map);

    if (this.estimatedLoadDataSize > 0) {
      this.displayAlertLoadData = true;
    } else {
      this.displayAlertNoLayer = true;
    }
  };

  _proto.toggleViewExtentSelection = function toggleViewExtentSelection(finished) {
    this.menuDisplayed = false;
    this.selectingExtent = !this.selectingExtent;
    this.map.removeLayer(this.maskLayer_);
    this.removeZoomConstraints_();

    if (this.selectingExtent && !this.map.getLayers().getArray().includes(this.maskLayer_)) {
      this.addZoomConstraints_();
      this.map.addLayer(this.maskLayer_);
    }

    this.map.render();
  };

  _proto.validateExtent = function validateExtent() {
    this.progressPercents = 0;
    var extent = this.getDowloadExtent_();
    this.downloading = true;
    this.ngeoOfflineServiceManager_.save(extent, this.map);
  };

  _proto.finishDownload_ = function finishDownload_() {
    this.downloading = false;
    this.toggleViewExtentSelection(true);
  };

  _proto.askAbortDownload = function askAbortDownload() {
    this.displayAlertAbortDownload = true;
  };

  _proto.abortDownload = function abortDownload() {
    this.downloading = false;
    this.ngeoOfflineServiceManager_.cancel();
    this.deleteData();
  };

  _proto.showMenu = function showMenu() {
    this.menuDisplayed = true;
  };

  _proto.activateOfflineMode = function activateOfflineMode() {
    var _this2 = this;

    this.ngeoOfflineServiceManager_.restore(this.map).then(function (extent) {
      _this2.dataPolygon_ = _this2.createPolygonFromExtent_(extent);

      var size = _this2.map.getSize();

      if (size === undefined) {
        throw new Error('Missing size');
      }

      _this2.map.getView().fit(extent, {
        size: size
      });

      _this2.menuDisplayed = false;

      _this2.displayExtent_();

      _this2.offlineMode.enable();
    });
  };

  _proto.deactivateOfflineMode = function deactivateOfflineMode() {
    window.location.reload();
  };

  _proto.toggleExtentVisibility = function toggleExtentVisibility() {
    if (this.isExtentVisible()) {
      this.overlayCollection_.clear();
    } else {
      this.displayExtent_();
    }
  };

  _proto.isExtentVisible = function isExtentVisible() {
    return this.overlayCollection_.getLength() > 0;
  };

  _proto.deleteData = function deleteData() {
    var _this3 = this;

    this.overlayCollection_.clear();
    this.dataPolygon_ = null;

    if (this.networkStatus.isDisconnected()) {
      this.menuDisplayed = false;
    }

    var reloadIfInOfflineMode = function reloadIfInOfflineMode() {
      if (_this3.offlineMode.isEnabled()) {
        _this3.deactivateOfflineMode();
      }
    };

    this.ngeoOfflineConfiguration_.clear().then(reloadIfInOfflineMode);
  };

  _proto.displayExtent_ = function displayExtent_() {
    if (!this.isExtentVisible() && this.dataPolygon_) {
      var feature = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.dataPolygon_);
      this.overlayCollection_.push(feature);
    }
  };

  _proto.addZoomConstraints_ = function addZoomConstraints_() {
    var view = this.map.getView();
    var zoom = view.getZoom() || 0;
    this.originalMinZoom = view.getMinZoom();
    this.originalMaxZoom = view.getMaxZoom();

    if (zoom < this.minZoom) {
      view.setZoom(this.minZoom);
    } else if (zoom > this.maxZoom) {
      view.setZoom(this.maxZoom);
    }

    view.setMaxZoom(this.maxZoom);
    view.setMinZoom(this.minZoom);
  };

  _proto.removeZoomConstraints_ = function removeZoomConstraints_() {
    var view = this.map.getView();

    if (this.originalMaxZoom !== undefined && this.originalMinZoom !== undefined) {
      view.setMaxZoom(this.originalMaxZoom);
      view.setMinZoom(this.originalMinZoom);
    }
  };

  _proto.createPolygonFromExtent_ = function createPolygonFromExtent_(extent) {
    var projExtent = this.map.getView().getProjection().getExtent();
    return new ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_5__["default"]([Object(ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__["extentToRectangle"])(projExtent), Object(ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__["extentToRectangle"])(extent)], 'XY');
  };

  _proto.getDowloadExtent_ = function getDowloadExtent_() {
    var center = this.map.getView().getCenter();
    var halfLength = Math.ceil(this.extentSize || this.getExtentSize_()) / 2;
    return this.maskLayer_.createExtent(center, halfLength);
  };

  _proto.getExtentSize_ = function getExtentSize_() {
    var mapSize = this.map.getSize() || [150, 150];
    var maskSizePixel = ol_has_js__WEBPACK_IMPORTED_MODULE_6__["DEVICE_PIXEL_RATIO"] * Math.min(mapSize[0], mapSize[1]) - this.maskMargin * 2;
    var maskSizeMeter = maskSizePixel * (this.map.getView().getResolution() || 1) / ol_has_js__WEBPACK_IMPORTED_MODULE_6__["DEVICE_PIXEL_RATIO"];
    return maskSizeMeter;
  };

  return Controller;
}();
myModule.controller('ngeoOfflineController', Controller);
/* harmony default export */ __webpack_exports__["default"] = (myModule);

/***/ }),

/***/ "./src/offline/module.js":
/*!*******************************!*\
  !*** ./src/offline/module.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngeo_offline_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/offline/component.js */ "./src/offline/component.js");
/* harmony import */ var ngeo_offline_NetworkStatus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/offline/NetworkStatus.js */ "./src/offline/NetworkStatus.js");
/* harmony import */ var ngeo_offline_ServiceManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/offline/ServiceManager.js */ "./src/offline/ServiceManager.js");
/* harmony import */ var ngeo_offline_Downloader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/offline/Downloader.js */ "./src/offline/Downloader.js");
/* harmony import */ var ngeo_offline_Restorer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/offline/Restorer.js */ "./src/offline/Restorer.js");
/* harmony import */ var ngeo_offline_Mode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/offline/Mode.js */ "./src/offline/Mode.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_6__);







var exports = angular__WEBPACK_IMPORTED_MODULE_6___default.a.module('ngeoOfflineModule', [ngeo_offline_component_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, ngeo_offline_NetworkStatus_js__WEBPACK_IMPORTED_MODULE_1__["default"].module.name, ngeo_offline_ServiceManager_js__WEBPACK_IMPORTED_MODULE_2__["default"].module.name, ngeo_offline_Downloader_js__WEBPACK_IMPORTED_MODULE_3__["default"].module.name, ngeo_offline_Restorer_js__WEBPACK_IMPORTED_MODULE_4__["default"].module.name, ngeo_offline_Mode_js__WEBPACK_IMPORTED_MODULE_5__["default"].module.name]);
exports.value('ngeoOfflineGutter', 96);
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/utils.js":
/*!******************************!*\
  !*** ./src/offline/utils.js ***!
  \******************************/
/*! exports provided: traverseLayer, normalizeURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseLayer", function() { return traverseLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeURL", function() { return normalizeURL; });
/* harmony import */ var ol_layer_Group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/layer/Group.js */ "./node_modules/ol/layer/Group.js");

function traverseLayer(layer, ancestors, visitor) {
  var descend = visitor(layer, ancestors);

  if (descend && layer instanceof ol_layer_Group_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    layer.getLayers().forEach(function (childLayer) {
      traverseLayer(childLayer, [].concat(ancestors, [layer]), visitor);
    });
  }
}
var extractor = new RegExp('[^/]*//[^/]+/(.*)');
function normalizeURL(url) {
  var matches = url.match(extractor);

  if (!matches) {
    throw new Error('Could not normalize url ' + url);
  }

  return matches[1];
}

/***/ }),

/***/ 32:
/*!****************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/offline.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/offline.js */"./examples/offline.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmbGluZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9vZmZsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL0Fic3RyYWN0TG9jYWxmb3JhZ2VXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL0NvbmZpZ3VyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29mZmxpbmUvRG93bmxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2ZmbGluZS9Mb2NhbGZvcmFnZUFuZHJvaWRXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL0xvY2FsZm9yYWdlQ29yZG92YVdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29mZmxpbmUvTG9jYWxmb3JhZ2VJb3NXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL01hc2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29mZmxpbmUvTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2ZmbGluZS9OZXR3b3JrU3RhdHVzLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL1Jlc3RvcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL1NlcmlhbGl6ZXJEZXNlcmlhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29mZmxpbmUvU2VydmljZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29mZmxpbmUvVGlsZXNEb3dubG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL2NvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2ZmbGluZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29mZmxpbmUvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm9mZmxpbmVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHQvLyBTaW5jZSBhbGwgcmVmZXJlbmNlZCBjaHVua3MgYXJlIGFscmVhZHkgaW5jbHVkZWRcbiBcdC8vIGluIHRoaXMgZmlsZSwgdGhpcyBmdW5jdGlvbiBpcyBlbXB0eSBoZXJlLlxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZSgpIHtcbiBcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzMyLFwiY29tbW9uc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8vIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxOC0yMDIxIENhbXB0b2NhbXAgU0Fcbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG4vLyB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG4vLyB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXG4vLyB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZlxuLy8gdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuLy8gc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTXG4vLyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1Jcbi8vIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUlxuLy8gSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbi8vIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2ZvbnRhd2Vzb21lLm1pbi5jc3MnO1xuaW1wb3J0ICcuL29mZmxpbmUuY3NzJztcbmltcG9ydCAnLi9jb21tb25fZGVwZW5kZW5jaWVzLmpzJztcbmltcG9ydCBvbE1hcCBmcm9tICdvbC9NYXAuanMnO1xuXG5pbXBvcnQgb2xWaWV3IGZyb20gJ29sL1ZpZXcuanMnO1xuaW1wb3J0IG9sTGF5ZXJUaWxlIGZyb20gJ29sL2xheWVyL1RpbGUuanMnO1xuaW1wb3J0IG9sU291cmNlT1NNIGZyb20gJ29sL3NvdXJjZS9PU00uanMnO1xuaW1wb3J0IG5nZW9NYXBNb2R1bGUgZnJvbSAnbmdlby9tYXAvbW9kdWxlLmpzJztcbmltcG9ydCBuZ2VvT2ZmbGluZU1vZHVsZSBmcm9tICduZ2VvL29mZmxpbmUvbW9kdWxlLmpzJztcbmltcG9ydCBuZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb24gZnJvbSAnbmdlby9vZmZsaW5lL0NvbmZpZ3VyYXRpb24uanMnO1xuaW1wb3J0IE5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXIgZnJvbSAnbmdlby9vZmZsaW5lL1NlcnZpY2VNYW5hZ2VyLmpzJztcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuXG5jbGFzcyBNYWluQ29udHJvbGxlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIm5nZW8vbWFwL0ZlYXR1cmVPdmVybGF5TWdyLmpzXCIpLkZlYXR1cmVPdmVybGF5TWdyfSBuZ2VvRmVhdHVyZU92ZXJsYXlNZ3JcbiAgICogbmdlbyBmZWF0dXJlIG92ZXJsYXkgbWFuYWdlciBzZXJ2aWNlLlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIm5nZW8vb2ZmbGluZS9OZXR3b3JrU3RhdHVzLmpzXCIpLmRlZmF1bHR9IG5nZW9OZXR3b3JrU3RhdHVzIG5nZW8gbmV0d29yayBzdGF0dXMgc2VydmljZS5cbiAgICogQHBhcmFtIHtOZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyfSBuZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyIG5nZW8gb2ZmbGluZSBzZXJ2aWNlLlxuICAgKiBAbmdJbmplY3RcbiAgICovXG4gIGNvbnN0cnVjdG9yKG5nZW9GZWF0dXJlT3ZlcmxheU1nciwgbmdlb05ldHdvcmtTdGF0dXMsIG5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXIpIHtcbiAgICAvKipcbiAgICAgKiBTYXZlIGEgc3F1YXJlIG9mIDEwIGttIHNpZGV3YXlzIChNYXAncyB1bml0IGlzIHRoZSBtZXRlcikuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAZXhwb3J0XG4gICAgICovXG4gICAgdGhpcy5vZmZsaW5lRXh0ZW50U2l6ZSA9IDEwMDAwO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge25nZW9OZXR3b3JrU3RhdHVzfVxuICAgICAqIEBleHBvcnRcbiAgICAgKi9cbiAgICB0aGlzLm5nZW9OZXR3b3JrU3RhdHVzID0gbmdlb05ldHdvcmtTdGF0dXM7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7b2xNYXB9XG4gICAgICogQGV4cG9ydFxuICAgICAqL1xuICAgIHRoaXMubWFwID0gbmV3IG9sTWFwKHtcbiAgICAgIGxheWVyczogW1xuICAgICAgICBuZXcgb2xMYXllclRpbGUoe1xuICAgICAgICAgIHNvdXJjZTogbmV3IG9sU291cmNlT1NNKCksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHZpZXc6IG5ldyBvbFZpZXcoe1xuICAgICAgICBjZW50ZXI6IFszNTIzNzksIDUxNzI3MzNdLFxuICAgICAgICB6b29tOiA0LFxuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICBuZ2VvRmVhdHVyZU92ZXJsYXlNZ3IuaW5pdCh0aGlzLm1hcCk7XG5cbiAgICBuZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyLnNldFNhdmVTZXJ2aWNlKCdvZmZsaW5lRG93bmxvYWRlcicpO1xuICAgIG5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXIuc2V0UmVzdG9yZVNlcnZpY2UoJ25nZW9PZmZsaW5lUmVzdG9yZXInKTtcbiAgfVxufVxuXG4vKiogQHR5cGUgeyFhbmd1bGFyLklNb2R1bGV9ICoqL1xuY29uc3QgbXlNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgW1xuICAnZ2V0dGV4dCcsXG4gIG5nZW9NYXBNb2R1bGUubmFtZSxcbiAgbmdlb09mZmxpbmVNb2R1bGUubmFtZSxcbiAgTmdlb09mZmxpbmVTZXJ2aWNlTWFuYWdlci5tb2R1bGUubmFtZSxcbl0pO1xuXG5teU1vZHVsZS52YWx1ZSgnbmdlb09mZmxpbmVUZXN0VXJsJywgJy4uLy4uL3NyYy9vZmZsaW5lL2NvbXBvbmVudC5odG1sJyk7XG5cbi8vIERlZmluZSB0aGUgb2ZmbGluZSBkb3dubG9hZCBjb25maWd1cmF0aW9uIHNlcnZpY2Vcbm15TW9kdWxlLnNlcnZpY2UoJ25nZW9PZmZsaW5lQ29uZmlndXJhdGlvbicsIG5nZW9PZmZsaW5lQ29uZmlndXJhdGlvbik7XG5cbm15TW9kdWxlLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpO1xuXG5teU1vZHVsZS5jb25zdGFudCgnbmdlb1RpbGVzUHJlbG9hZGluZ0xpbWl0JywgMCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Db250cm9sbGVyO1xuIiwidmFyIGV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFic3RyYWN0TG9jYWxmb3JhZ2VXcmFwcGVyKCkge1xuICAgIHRoaXMud2FpdGluZ1Byb21pc2VzXyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLmN1cnJlbnRJZF8gPSAwO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEFic3RyYWN0TG9jYWxmb3JhZ2VXcmFwcGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uc2V0SXRlbSA9IGZ1bmN0aW9uIHNldEl0ZW0oKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUFjdGlvbi5hcHBseSh0aGlzLCBbJ3NldEl0ZW0nXS5jb25jYXQoYXJncykpO1xuICB9O1xuXG4gIF9wcm90by5nZXRJdGVtID0gZnVuY3Rpb24gZ2V0SXRlbSgpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jcmVhdGVBY3Rpb24uYXBwbHkodGhpcywgWydnZXRJdGVtJ10uY29uY2F0KGFyZ3MpKTtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVBY3Rpb24oJ2NsZWFyJyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbmZpZyA9IGZ1bmN0aW9uIGNvbmZpZygpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jcmVhdGVBY3Rpb24uYXBwbHkodGhpcywgWydjb25maWcnXS5jb25jYXQoYXJncykpO1xuICB9O1xuXG4gIF9wcm90by5jcmVhdGVBY3Rpb24gPSBmdW5jdGlvbiBjcmVhdGVBY3Rpb24oY29tbWFuZCkge1xuICAgIHZhciBpZCA9ICsrdGhpcy5jdXJyZW50SWRfO1xuXG4gICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40ID4gMSA/IF9sZW40IC0gMSA6IDApLCBfa2V5NCA9IDE7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgIGFyZ3NbX2tleTQgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgfVxuXG4gICAgdmFyIGFjdGlvbiA9IHtcbiAgICAgIHBsdWdpbjogJ2xvY2FsZm9yYWdlJyxcbiAgICAgIGNvbW1hbmQ6IGNvbW1hbmQsXG4gICAgICBhcmdzOiBhcmdzLFxuICAgICAgaWQ6IGlkLFxuICAgICAgY29udGV4dDogbnVsbFxuICAgIH07XG4gICAgdmFyIHdhaXRpbmdQcm9taXNlID0ge1xuICAgICAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZShfYW55KSB7fSxcbiAgICAgIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KF9hbnkpIHt9XG4gICAgfTtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHdhaXRpbmdQcm9taXNlLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgd2FpdGluZ1Byb21pc2UucmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuICAgIHRoaXMud2FpdGluZ1Byb21pc2VzXy5zZXQoaWQsIHdhaXRpbmdQcm9taXNlKTtcbiAgICB0aGlzLnBvc3RUb0JhY2tlbmQoYWN0aW9uKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICBfcHJvdG8ucmVjZWl2ZU1lc3NhZ2UgPSBmdW5jdGlvbiByZWNlaXZlTWVzc2FnZShldmVudCkge1xuICAgIHZhciBhY3Rpb24gPSBldmVudC5kYXRhO1xuICAgIHZhciBpZCA9IGFjdGlvbi5pZDtcbiAgICB2YXIgY29tbWFuZCA9IGFjdGlvbi5jb21tYW5kO1xuICAgIHZhciBhcmdzID0gYWN0aW9uLmFyZ3MgfHwgW107XG4gICAgdmFyIGNvbnRleHQgPSBhY3Rpb24uY29udGV4dDtcbiAgICB2YXIgbXNnID0gYWN0aW9uLm1zZztcbiAgICB2YXIgd2FpdGluZ1Byb21pc2UgPSB0aGlzLndhaXRpbmdQcm9taXNlc18uZ2V0KGlkKTtcblxuICAgIGlmIChjb21tYW5kID09PSAnZXJyb3InKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1zZywgYXJncywgY29udGV4dCk7XG5cbiAgICAgIGlmICh3YWl0aW5nUHJvbWlzZSkge1xuICAgICAgICB3YWl0aW5nUHJvbWlzZS5yZWplY3QoYXJncywgY29udGV4dCk7XG4gICAgICAgIHRoaXMud2FpdGluZ1Byb21pc2VzXy5kZWxldGUoaWQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29tbWFuZCA9PT0gJ3Jlc3BvbnNlJykge1xuICAgICAgd2FpdGluZ1Byb21pc2UucmVzb2x2ZS5hcHBseSh3YWl0aW5nUHJvbWlzZSwgYXJncyk7XG4gICAgICB0aGlzLndhaXRpbmdQcm9taXNlc18uZGVsZXRlKGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIGNvbW1hbmQnLCBKU09OLnN0cmluZ2lmeShhY3Rpb24sIG51bGwsICdcXHQnKSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5wb3N0VG9CYWNrZW5kID0gZnVuY3Rpb24gcG9zdFRvQmFja2VuZChhY3Rpb24pIHt9O1xuXG4gIHJldHVybiBBYnN0cmFjdExvY2FsZm9yYWdlV3JhcHBlcjtcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0czsiLCJmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuaW1wb3J0IG9sT2JzZXJ2YWJsZSBmcm9tICdvbC9PYnNlcnZhYmxlLmpzJztcbmltcG9ydCBvbExheWVyTGF5ZXIgZnJvbSAnb2wvbGF5ZXIvTGF5ZXIuanMnO1xuaW1wb3J0IG9sTGF5ZXJWZWN0b3IgZnJvbSAnb2wvbGF5ZXIvVmVjdG9yLmpzJztcbmltcG9ydCBvbExheWVyVGlsZSBmcm9tICdvbC9sYXllci9UaWxlLmpzJztcbmltcG9ydCBvbExheWVySW1hZ2UgZnJvbSAnb2wvbGF5ZXIvSW1hZ2UuanMnO1xuaW1wb3J0ICogYXMgb2xQcm9qIGZyb20gJ29sL3Byb2ouanMnO1xuaW1wb3J0IHsgZGVmYXVsdEltYWdlTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvc291cmNlL0ltYWdlLmpzJztcbmltcG9ydCBvbFNvdXJjZUltYWdlV01TIGZyb20gJ29sL3NvdXJjZS9JbWFnZVdNUy5qcyc7XG5pbXBvcnQgb2xTb3VyY2VUaWxlV01TIGZyb20gJ29sL3NvdXJjZS9UaWxlV01TLmpzJztcbmltcG9ydCB7IGNyZWF0ZUZvclByb2plY3Rpb24gYXMgY3JlYXRlVGlsZUdyaWRGb3JQcm9qZWN0aW9uIH0gZnJvbSAnb2wvdGlsZWdyaWQuanMnO1xuaW1wb3J0IFNlcmlhbGl6ZXJEZXNlcmlhbGl6ZXIgZnJvbSAnbmdlby9vZmZsaW5lL1NlcmlhbGl6ZXJEZXNlcmlhbGl6ZXIuanMnO1xuaW1wb3J0IExvY2FsZm9yYWdlQ29yZG92YVdyYXBwZXIgZnJvbSAnbmdlby9vZmZsaW5lL0xvY2FsZm9yYWdlQ29yZG92YVdyYXBwZXIuanMnO1xuaW1wb3J0IExvY2FsZm9yYWdlQW5kcm9pZFdyYXBwZXIgZnJvbSAnbmdlby9vZmZsaW5lL0xvY2FsZm9yYWdlQW5kcm9pZFdyYXBwZXIuanMnO1xuaW1wb3J0IExvY2FsZm9yYWdlSW9zV3JhcHBlciBmcm9tICduZ2VvL29mZmxpbmUvTG9jYWxmb3JhZ2VJb3NXcmFwcGVyLmpzJztcbmltcG9ydCBuZ2VvQ3VzdG9tRXZlbnQgZnJvbSAnbmdlby9DdXN0b21FdmVudC5qcyc7XG5pbXBvcnQgeyBub3JtYWxpemVVUkwsIHRyYXZlcnNlTGF5ZXIgfSBmcm9tICduZ2VvL29mZmxpbmUvdXRpbHMuanMnO1xuaW1wb3J0IGxvY2FsZm9yYWdlIGZyb20gJ2xvY2FsZm9yYWdlL3NyYy9sb2NhbGZvcmFnZS5qcyc7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIChfb2xPYnNlcnZhYmxlKSB7XG4gIF9kZWZhdWx0LiRpbmplY3QgPSBbXCIkcm9vdFNjb3BlXCIsIFwibmdlb0JhY2tncm91bmRMYXllck1nclwiLCBcIm5nZW9PZmZsaW5lR3V0dGVyXCJdO1xuXG4gIF9pbmhlcml0c0xvb3NlKF9kZWZhdWx0LCBfb2xPYnNlcnZhYmxlKTtcblxuICBmdW5jdGlvbiBfZGVmYXVsdCgkcm9vdFNjb3BlLCBuZ2VvQmFja2dyb3VuZExheWVyTWdyLCBuZ2VvT2ZmbGluZUd1dHRlcikge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX29sT2JzZXJ2YWJsZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgX3RoaXMubG9jYWxmb3JhZ2VfID0gX3RoaXMuY3JlYXRlTG9jYWxmb3JhZ2UoKTtcblxuICAgIF90aGlzLmNvbmZpZ3VyZUxvY2FsZm9yYWdlKCk7XG5cbiAgICBfdGhpcy5yb290U2NvcGVfID0gJHJvb3RTY29wZTtcbiAgICBfdGhpcy5oYXNEYXRhID0gZmFsc2U7XG5cbiAgICBfdGhpcy5pbml0aWFsaXplSGFzT2ZmbGluZURhdGEoKTtcblxuICAgIF90aGlzLm5nZW9CYWNrZ3JvdW5kTGF5ZXJNZ3JfID0gbmdlb0JhY2tncm91bmRMYXllck1ncjtcbiAgICBfdGhpcy5zZXJEZXNfID0gbmV3IFNlcmlhbGl6ZXJEZXNlcmlhbGl6ZXIoe1xuICAgICAgZ3V0dGVyOiBuZ2VvT2ZmbGluZUd1dHRlclxuICAgIH0pO1xuICAgIF90aGlzLmd1dHRlcl8gPSBuZ2VvT2ZmbGluZUd1dHRlcjtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gX2RlZmF1bHQucHJvdG90eXBlO1xuXG4gIF9wcm90by5kaXNwYXRjaFByb2dyZXNzXyA9IGZ1bmN0aW9uIGRpc3BhdGNoUHJvZ3Jlc3NfKHByb2dyZXNzKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBuZ2VvQ3VzdG9tRXZlbnQoJ3Byb2dyZXNzJywge1xuICAgICAgJ3Byb2dyZXNzJzogcHJvZ3Jlc3NcbiAgICB9KSk7XG4gIH07XG5cbiAgX3Byb3RvLmluaXRpYWxpemVIYXNPZmZsaW5lRGF0YSA9IGZ1bmN0aW9uIGluaXRpYWxpemVIYXNPZmZsaW5lRGF0YSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHRoaXMuZ2V0SXRlbSgnb2ZmbGluZV9jb250ZW50JykudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBfdGhpczIuc2V0SGFzT2ZmbGluZURhdGEoISF2YWx1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmhhc09mZmxpbmVEYXRhID0gZnVuY3Rpb24gaGFzT2ZmbGluZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzRGF0YTtcbiAgfTtcblxuICBfcHJvdG8uc2V0SGFzT2ZmbGluZURhdGEgPSBmdW5jdGlvbiBzZXRIYXNPZmZsaW5lRGF0YSh2YWx1ZSkge1xuICAgIHZhciBuZWVkRGlnZXN0ID0gdmFsdWUgIT09IHRoaXMuaGFzRGF0YTtcbiAgICB0aGlzLmhhc0RhdGEgPSB2YWx1ZTtcblxuICAgIGlmIChuZWVkRGlnZXN0KSB7XG4gICAgICB0aGlzLnJvb3RTY29wZV8uJGFwcGx5QXN5bmMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnRyYWNlR2V0U2V0SXRlbSA9IGZ1bmN0aW9uIHRyYWNlR2V0U2V0SXRlbShtc2csIGtleSwgcHJvbWlzZSkge1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG4gIF9wcm90by5jcmVhdGVMb2NhbGZvcmFnZSA9IGZ1bmN0aW9uIGNyZWF0ZUxvY2FsZm9yYWdlKCkge1xuICAgIGlmIChsb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ2xvY2FsZm9yYWdlPWNvcmRvdmEnKSkge1xuICAgICAgY29uc29sZS5sb2coJ1VzaW5nIGNvcmRvdmEgbG9jYWxmb3JhZ2UnKTtcbiAgICAgIHJldHVybiBuZXcgTG9jYWxmb3JhZ2VDb3Jkb3ZhV3JhcHBlcigpO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdsb2NhbGZvcmFnZT1hbmRyb2lkJykpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBhbmRyb2lkIGxvY2FsZm9yYWdlJyk7XG4gICAgICByZXR1cm4gbmV3IExvY2FsZm9yYWdlQW5kcm9pZFdyYXBwZXIoKTtcbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnbG9jYWxmb3JhZ2U9aW9zJykpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBpb3MgbG9jYWxmb3JhZ2UnKTtcbiAgICAgIHJldHVybiBuZXcgTG9jYWxmb3JhZ2VJb3NXcmFwcGVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2FsZm9yYWdlO1xuICB9O1xuXG4gIF9wcm90by5jb25maWd1cmVMb2NhbGZvcmFnZSA9IGZ1bmN0aW9uIGNvbmZpZ3VyZUxvY2FsZm9yYWdlKCkge1xuICAgIHRoaXMubG9jYWxmb3JhZ2VfLmNvbmZpZyh7XG4gICAgICAnbmFtZSc6ICduZ2VvT2ZmbGluZVN0b3JhZ2UnLFxuICAgICAgJ3ZlcnNpb24nOiAxLjAsXG4gICAgICAnc3RvcmVOYW1lJzogJ29mZmxpbmVTdG9yYWdlJ1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5nZXRJdGVtID0gZnVuY3Rpb24gZ2V0SXRlbShrZXkpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMubG9jYWxmb3JhZ2VfWydnZXRJdGVtJ10oa2V5KTtcbiAgICByZXR1cm4gdGhpcy50cmFjZUdldFNldEl0ZW0oJ2dldEl0ZW0nLCBrZXksIHByb21pc2UpO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVJdGVtID0gZnVuY3Rpb24gcmVtb3ZlSXRlbShrZXkpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMubG9jYWxmb3JhZ2VfWydyZW1vdmVJdGVtJ10oa2V5KTtcbiAgICByZXR1cm4gdGhpcy50cmFjZUdldFNldEl0ZW0oJ3JlbW92ZUl0ZW0nLCBrZXksIHByb21pc2UpO1xuICB9O1xuXG4gIF9wcm90by5zZXRJdGVtID0gZnVuY3Rpb24gc2V0SXRlbShrZXksIHZhbHVlKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLmxvY2FsZm9yYWdlX1snc2V0SXRlbSddKGtleSwgdmFsdWUpO1xuICAgIHJldHVybiB0aGlzLnRyYWNlR2V0U2V0SXRlbSgnc2V0SXRlbScsIGtleSwgcHJvbWlzZSk7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdGhpcy5zZXRIYXNPZmZsaW5lRGF0YShmYWxzZSk7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLmxvY2FsZm9yYWdlXy5jbGVhcigpO1xuICAgIHJldHVybiB0aGlzLnRyYWNlR2V0U2V0SXRlbSgnY2xlYXInLCAnJywgcHJvbWlzZSk7XG4gIH07XG5cbiAgX3Byb3RvLmVzdGltYXRlTG9hZERhdGFTaXplID0gZnVuY3Rpb24gZXN0aW1hdGVMb2FkRGF0YVNpemUobWFwKSB7XG4gICAgcmV0dXJuIDUwO1xuICB9O1xuXG4gIF9wcm90by5nZXRMYXllcktleSA9IGZ1bmN0aW9uIGdldExheWVyS2V5KGxheWVySXRlbSkge1xuICAgIHJldHVybiBsYXllckl0ZW0ubGF5ZXIuZ2V0KCdsYWJlbCcpO1xuICB9O1xuXG4gIF9wcm90by5vblRpbGVEb3dubG9hZFN1Y2Nlc3MgPSBmdW5jdGlvbiBvblRpbGVEb3dubG9hZFN1Y2Nlc3MocHJvZ3Jlc3MsIHRpbGUpIHtcbiAgICB0aGlzLmRpc3BhdGNoUHJvZ3Jlc3NfKHByb2dyZXNzKTtcblxuICAgIGlmICh0aWxlLnJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRJdGVtKG5vcm1hbGl6ZVVSTCh0aWxlLnVybCksIHRpbGUucmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfTtcblxuICBfcHJvdG8ub25UaWxlRG93bmxvYWRFcnJvciA9IGZ1bmN0aW9uIG9uVGlsZURvd25sb2FkRXJyb3IocHJvZ3Jlc3MpIHtcbiAgICB0aGlzLmRpc3BhdGNoUHJvZ3Jlc3NfKHByb2dyZXNzKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEV4dGVudEJ5Wm9vbSA9IGZ1bmN0aW9uIGdldEV4dGVudEJ5Wm9vbShtYXAsIGxheWVyLCBhbmNlc3RvcnMsIHVzZXJFeHRlbnQpIHtcbiAgICB2YXIgY3VycmVudFpvb20gPSBtYXAuZ2V0VmlldygpLmdldFpvb20oKTtcblxuICAgIGlmIChjdXJyZW50Wm9vbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgY3VycmVudFpvb20nKTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIFswLCAxLCAyLCAzLCA0XS5mb3JFYWNoKGZ1bmN0aW9uIChkeikge1xuICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgem9vbTogY3VycmVudFpvb20gKyBkeixcbiAgICAgICAgZXh0ZW50OiB1c2VyRXh0ZW50XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBfcHJvdG8uc291cmNlSW1hZ2VXTVNUb1RpbGVXTVMgPSBmdW5jdGlvbiBzb3VyY2VJbWFnZVdNU1RvVGlsZVdNUyhzb3VyY2UsIHByb2plY3Rpb24pIHtcbiAgICBpZiAoc291cmNlIGluc3RhbmNlb2Ygb2xTb3VyY2VJbWFnZVdNUyAmJiBzb3VyY2UuZ2V0VXJsKCkgJiYgc291cmNlLmdldEltYWdlTG9hZEZ1bmN0aW9uKCkgPT09IGRlZmF1bHRJbWFnZUxvYWRGdW5jdGlvbikge1xuICAgICAgdmFyIHRpbGVHcmlkID0gY3JlYXRlVGlsZUdyaWRGb3JQcm9qZWN0aW9uKHNvdXJjZS5nZXRQcm9qZWN0aW9uKCkgfHwgcHJvamVjdGlvbiwgNDIsIDI1Nik7XG4gICAgICB2YXIgYXR0cmlidXRpb25zID0gc291cmNlLmdldEF0dHJpYnV0aW9ucygpIHx8ICcnO1xuICAgICAgdmFyIHVybCA9IHNvdXJjZS5nZXRVcmwoKTtcblxuICAgICAgaWYgKCF1cmwgfHwgIWF0dHJpYnV0aW9ucykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmFsdWVzJyk7XG4gICAgICB9XG5cbiAgICAgIHNvdXJjZSA9IG5ldyBvbFNvdXJjZVRpbGVXTVMoe1xuICAgICAgICBndXR0ZXI6IHRoaXMuZ3V0dGVyXyxcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHRpbGVHcmlkOiB0aWxlR3JpZCxcbiAgICAgICAgYXR0cmlidXRpb25zOiBhdHRyaWJ1dGlvbnMsXG4gICAgICAgIHByb2plY3Rpb246IHNvdXJjZS5nZXRQcm9qZWN0aW9uKCksXG4gICAgICAgIHBhcmFtczogc291cmNlLmdldFBhcmFtcygpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlO1xuICB9O1xuXG4gIF9wcm90by5jcmVhdGVMYXllck1ldGFkYXRhcyA9IGZ1bmN0aW9uIGNyZWF0ZUxheWVyTWV0YWRhdGFzKG1hcCwgdXNlckV4dGVudCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGxheWVyc0l0ZW1zID0gW107XG5cbiAgICB2YXIgdmlzaXRMYXllciA9IGZ1bmN0aW9uIHZpc2l0TGF5ZXIobGF5ZXIsIGFuY2VzdG9ycykge1xuICAgICAgaWYgKGxheWVyIGluc3RhbmNlb2Ygb2xMYXllckxheWVyKSB7XG4gICAgICAgIHZhciBleHRlbnRCeVpvb20gPSBfdGhpczMuZ2V0RXh0ZW50Qnlab29tKG1hcCwgbGF5ZXIsIGFuY2VzdG9ycywgdXNlckV4dGVudCk7XG5cbiAgICAgICAgdmFyIHByb2plY3Rpb24gPSBvbFByb2ouZ2V0KG1hcC5nZXRWaWV3KCkuZ2V0UHJvamVjdGlvbigpKTtcblxuICAgICAgICB2YXIgc291cmNlID0gX3RoaXMzLnNvdXJjZUltYWdlV01TVG9UaWxlV01TKGxheWVyLmdldFNvdXJjZSgpLCBwcm9qZWN0aW9uKTtcblxuICAgICAgICB2YXIgbGF5ZXJUeXBlO1xuICAgICAgICB2YXIgbGF5ZXJTZXJpYWxpemF0aW9uO1xuXG4gICAgICAgIGlmIChsYXllciBpbnN0YW5jZW9mIG9sTGF5ZXJUaWxlIHx8IGxheWVyIGluc3RhbmNlb2Ygb2xMYXllckltYWdlKSB7XG4gICAgICAgICAgbGF5ZXJUeXBlID0gJ3RpbGUnO1xuICAgICAgICAgIGxheWVyU2VyaWFsaXphdGlvbiA9IF90aGlzMy5zZXJEZXNfLnNlcmlhbGl6ZVRpbGVMYXllcihsYXllciwgc291cmNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXllciBpbnN0YW5jZW9mIG9sTGF5ZXJWZWN0b3IpIHtcbiAgICAgICAgICBsYXllclR5cGUgPSAndmVjdG9yJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBiYWNrZ3JvdW5kTGF5ZXIgPSBfdGhpczMubmdlb0JhY2tncm91bmRMYXllck1ncl8uZ2V0KG1hcCkgPT09IGxheWVyO1xuICAgICAgICBsYXllcnNJdGVtcy5wdXNoKHtcbiAgICAgICAgICBiYWNrZ3JvdW5kTGF5ZXI6IGJhY2tncm91bmRMYXllcixcbiAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICBleHRlbnRCeVpvb206IGV4dGVudEJ5Wm9vbSxcbiAgICAgICAgICBsYXllclR5cGU6IGxheWVyVHlwZSxcbiAgICAgICAgICBsYXllclNlcmlhbGl6YXRpb246IGxheWVyU2VyaWFsaXphdGlvbixcbiAgICAgICAgICBsYXllcjogbGF5ZXIsXG4gICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgYW5jZXN0b3JzOiBhbmNlc3RvcnNcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBtYXAuZ2V0TGF5ZXJzKCkuZm9yRWFjaChmdW5jdGlvbiAocm9vdCkge1xuICAgICAgdHJhdmVyc2VMYXllcihyb290LCBbXSwgdmlzaXRMYXllcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGxheWVyc0l0ZW1zO1xuICB9O1xuXG4gIF9wcm90by5jcmVhdGVUaWxlTG9hZEZ1bmN0aW9uXyA9IGZ1bmN0aW9uIGNyZWF0ZVRpbGVMb2FkRnVuY3Rpb25fKG9mZmxpbmVMYXllcikge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIHRpbGVMb2FkRnVuY3Rpb24gPSBmdW5jdGlvbiB0aWxlTG9hZEZ1bmN0aW9uKGltYWdlVGlsZSwgc3JjKSB7XG4gICAgICBfdGhpczQuZ2V0SXRlbShub3JtYWxpemVVUkwoc3JjKSkudGhlbihmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICBjb250ZW50ID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQkNBUUFBQUMxSEF3Q0FBQUFDMGxFUVZSNDJtTmtZQUFBQUFZQUFqQ0IwQzhBQUFBQVNVVk9SSzVDWUlJPSc7XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZVRpbGUuZ2V0SW1hZ2UoKS5zcmMgPSBjb250ZW50O1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB0aWxlTG9hZEZ1bmN0aW9uO1xuICB9O1xuXG4gIF9wcm90by5yZWNyZWF0ZU9mZmxpbmVMYXllciA9IGZ1bmN0aW9uIHJlY3JlYXRlT2ZmbGluZUxheWVyKG9mZmxpbmVMYXllcikge1xuICAgIGlmIChvZmZsaW5lTGF5ZXIubGF5ZXJUeXBlID09PSAndGlsZScpIHtcbiAgICAgIHZhciBzZXJpYWxpemF0aW9uID0gb2ZmbGluZUxheWVyLmxheWVyU2VyaWFsaXphdGlvbjtcblxuICAgICAgaWYgKHNlcmlhbGl6YXRpb24pIHtcbiAgICAgICAgdmFyIHRpbGVMb2FkRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZVRpbGVMb2FkRnVuY3Rpb25fKG9mZmxpbmVMYXllcik7XG4gICAgICAgIHZhciBsYXllciA9IHRoaXMuc2VyRGVzXy5kZXNlcmlhbGl6ZVRpbGVMYXllcihzZXJpYWxpemF0aW9uLCB0aWxlTG9hZEZ1bmN0aW9uKTtcbiAgICAgICAgcmV0dXJuIGxheWVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIF9wcm90by5nZXRNYXhOdW1iZXJPZlBhcmFsbGVsRG93bmxvYWRzID0gZnVuY3Rpb24gZ2V0TWF4TnVtYmVyT2ZQYXJhbGxlbERvd25sb2FkcygpIHtcbiAgICByZXR1cm4gMTE7XG4gIH07XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufShvbE9ic2VydmFibGUpO1xuXG5leHBvcnQgeyBfZGVmYXVsdCBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTsgaWYgKGl0KSByZXR1cm4gKGl0ID0gaXQuY2FsbChvKSkubmV4dC5iaW5kKGl0KTsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyByZXR1cm4gZnVuY3Rpb24gKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmltcG9ydCB7IERFVklDRV9QSVhFTF9SQVRJTyB9IGZyb20gJ29sL2hhcy5qcyc7XG5pbXBvcnQgb2xTb3VyY2VUaWxlV01TIGZyb20gJ29sL3NvdXJjZS9UaWxlV01TLmpzJztcbmltcG9ydCBvbFNvdXJjZVdNVFMgZnJvbSAnb2wvc291cmNlL1dNVFMuanMnO1xuaW1wb3J0IFRpbGVzRG93bmxvYWRlciBmcm9tICduZ2VvL29mZmxpbmUvVGlsZXNEb3dubG9hZGVyLmpzJztcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuXG5mdW5jdGlvbiBtYWduaXR1ZGUyKGEsIGIpIHtcbiAgdmFyIG1hZ25pdHVkZVNxdWFyZWQgPSAwO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7ICsraSkge1xuICAgIG1hZ25pdHVkZVNxdWFyZWQgKz0gTWF0aC5wb3coYVtpXSAtIGJbaV0sIDIpO1xuICB9XG5cbiAgcmV0dXJuIG1hZ25pdHVkZVNxdWFyZWQ7XG59XG5cbnZhciBEb3dubG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICBEb3dubG9hZGVyLiRpbmplY3QgPSBbXCJuZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb25cIl07XG5cbiAgZnVuY3Rpb24gRG93bmxvYWRlcihuZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb25fID0gbmdlb09mZmxpbmVDb25maWd1cmF0aW9uO1xuICAgIHRoaXMudGlsZURvd25sb2FkZXJfID0gbnVsbDtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBEb3dubG9hZGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY2FuY2VsID0gZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aGlzLnRpbGVEb3dubG9hZGVyXykge1xuICAgICAgdGhpcy50aWxlRG93bmxvYWRlcl8uY2FuY2VsKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5xdWV1ZUxheWVyVGlsZXNfID0gZnVuY3Rpb24gcXVldWVMYXllclRpbGVzXyhsYXllck1ldGFkYXRhLCBxdWV1ZSkge1xuICAgIHZhciBzb3VyY2UgPSBsYXllck1ldGFkYXRhLnNvdXJjZTtcbiAgICB2YXIgbWFwID0gbGF5ZXJNZXRhZGF0YS5tYXAsXG4gICAgICAgIGV4dGVudEJ5Wm9vbSA9IGxheWVyTWV0YWRhdGEuZXh0ZW50Qnlab29tO1xuXG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmFzc2VydChzb3VyY2UgaW5zdGFuY2VvZiBvbFNvdXJjZVRpbGVXTVMgfHwgc291cmNlIGluc3RhbmNlb2Ygb2xTb3VyY2VXTVRTKTtcbiAgICB2YXIgcHJvamVjdGlvbiA9IG1hcC5nZXRWaWV3KCkuZ2V0UHJvamVjdGlvbigpO1xuICAgIHZhciB0aWxlR3JpZCA9IHNvdXJjZS5nZXRUaWxlR3JpZCgpO1xuICAgIHZhciB0aWxlVXJsRnVuY3Rpb24gPSBzb3VyY2UuZ2V0VGlsZVVybEZ1bmN0aW9uKCk7XG4gICAgY29uc29sZS5hc3NlcnQoZXh0ZW50Qnlab29tKTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKCkge1xuICAgICAgdmFyIGV4dGVudFpvb20gPSBfc3RlcC52YWx1ZTtcbiAgICAgIHZhciB6ID0gZXh0ZW50Wm9vbS56b29tO1xuICAgICAgdmFyIGV4dGVudCA9IGV4dGVudFpvb20uZXh0ZW50O1xuICAgICAgdmFyIHF1ZXVlQnlaID0gW107XG4gICAgICB2YXIgbWluWCA9IHZvaWQgMDtcbiAgICAgIHZhciBtaW5ZID0gdm9pZCAwO1xuICAgICAgdmFyIG1heFggPSB2b2lkIDA7XG4gICAgICB2YXIgbWF4WSA9IHZvaWQgMDtcbiAgICAgIHRpbGVHcmlkLmZvckVhY2hUaWxlQ29vcmQoZXh0ZW50LCB6LCBmdW5jdGlvbiAoY29vcmQpIHtcbiAgICAgICAgbWF4WCA9IGNvb3JkWzFdO1xuICAgICAgICBtYXhZID0gY29vcmRbMl07XG5cbiAgICAgICAgaWYgKG1pblggPT09IHVuZGVmaW5lZCB8fCBtaW5ZID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBtaW5YID0gY29vcmRbMV07XG4gICAgICAgICAgbWluWSA9IGNvb3JkWzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVybCA9IHRpbGVVcmxGdW5jdGlvbihjb29yZCwgREVWSUNFX1BJWEVMX1JBVElPLCBwcm9qZWN0aW9uKTtcbiAgICAgICAgY29uc29sZS5hc3NlcnQodXJsKTtcblxuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgdmFyIHRpbGUgPSB7XG4gICAgICAgICAgICBjb29yZDogY29vcmQsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIHJlc3BvbnNlOiBudWxsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBxdWV1ZUJ5Wi5wdXNoKHRpbGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHZhciBjZW50ZXJUaWxlQ29vcmQgPSBbeiwgKG1pblggKyBtYXhYKSAvIDIsIChtaW5ZICsgbWF4WSkgLyAyXTtcbiAgICAgIHF1ZXVlQnlaLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIG1hZ25pdHVkZTIoYS5jb29yZCwgY2VudGVyVGlsZUNvb3JkKSAtIG1hZ25pdHVkZTIoYi5jb29yZCwgY2VudGVyVGlsZUNvb3JkKTtcbiAgICAgIH0pO1xuICAgICAgcXVldWUucHVzaC5hcHBseShxdWV1ZSwgcXVldWVCeVopO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKGV4dGVudEJ5Wm9vbSksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yKCkpLmRvbmU7KSB7XG4gICAgICBfbG9vcCgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2F2ZSA9IGZ1bmN0aW9uIHNhdmUoZXh0ZW50LCBtYXApIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGxheWVyc01ldGFkYXRhcyA9IHRoaXMuY29uZmlndXJhdGlvbl8uY3JlYXRlTGF5ZXJNZXRhZGF0YXMobWFwLCBleHRlbnQpO1xuICAgIHZhciBwZXJzaXN0ZW50TGF5ZXJzID0gW107XG4gICAgdmFyIHF1ZXVlID0gW107XG4gICAgdmFyIHpvb21zID0gW107XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShsYXllcnNNZXRhZGF0YXMpLCBfc3RlcDI7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMigpKS5kb25lOykge1xuICAgICAgdmFyIGxheWVySXRlbSA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgaWYgKGxheWVySXRlbS5sYXllclR5cGUgPT09ICd0aWxlJykge1xuICAgICAgICB2YXIgdGlsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5xdWV1ZUxheWVyVGlsZXNfKGxheWVySXRlbSwgdGlsZXMpO1xuICAgICAgICBxdWV1ZS5wdXNoLmFwcGx5KHF1ZXVlLCB0aWxlcyk7XG4gICAgICB9XG5cbiAgICAgIHBlcnNpc3RlbnRMYXllcnMucHVzaCh7XG4gICAgICAgIGJhY2tncm91bmRMYXllcjogbGF5ZXJJdGVtLmJhY2tncm91bmRMYXllcixcbiAgICAgICAgbGF5ZXJUeXBlOiBsYXllckl0ZW0ubGF5ZXJUeXBlLFxuICAgICAgICBsYXllclNlcmlhbGl6YXRpb246IGxheWVySXRlbS5sYXllclNlcmlhbGl6YXRpb24sXG4gICAgICAgIGtleTogdGhpcy5jb25maWd1cmF0aW9uXy5nZXRMYXllcktleShsYXllckl0ZW0pXG4gICAgICB9KTtcbiAgICAgIGxheWVySXRlbS5leHRlbnRCeVpvb20uZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHZhciB6b29tID0gb2JqLnpvb207XG5cbiAgICAgICAgaWYgKCF6b29tcy5pbmNsdWRlcyh6b29tKSkge1xuICAgICAgICAgIHpvb21zLnB1c2goem9vbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBwZXJzaXN0ZW50T2JqZWN0ID0ge1xuICAgICAgZXh0ZW50OiBleHRlbnQsXG4gICAgICBsYXllcnM6IHBlcnNpc3RlbnRMYXllcnMsXG4gICAgICB6b29tczogem9vbXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYSA8IGIgPyAtMSA6IDE7XG4gICAgICB9KVxuICAgIH07XG4gICAgdmFyIHNldE9mZmxpbmVDb250ZW50UHJvbWlzZSA9IHRoaXMuY29uZmlndXJhdGlvbl8uc2V0SXRlbSgnb2ZmbGluZV9jb250ZW50JywgcGVyc2lzdGVudE9iamVjdCk7XG4gICAgdmFyIG1heERvd25sb2FkcyA9IHRoaXMuY29uZmlndXJhdGlvbl8uZ2V0TWF4TnVtYmVyT2ZQYXJhbGxlbERvd25sb2FkcygpO1xuICAgIHRoaXMudGlsZURvd25sb2FkZXJfID0gbmV3IFRpbGVzRG93bmxvYWRlcihxdWV1ZSwgdGhpcy5jb25maWd1cmF0aW9uXywgbWF4RG93bmxvYWRzKTtcbiAgICB2YXIgdGlsZURvd25sb2FkUHJvbWlzZSA9IHRoaXMudGlsZURvd25sb2FkZXJfLmRvd25sb2FkKCk7XG4gICAgdmFyIGFsbFByb21pc2UgPSBQcm9taXNlLmFsbChbc2V0T2ZmbGluZUNvbnRlbnRQcm9taXNlLCB0aWxlRG93bmxvYWRQcm9taXNlXSk7XG5cbiAgICB2YXIgc2V0SGFzT2ZmbGluZURhdGEgPSBmdW5jdGlvbiBzZXRIYXNPZmZsaW5lRGF0YSgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5jb25maWd1cmF0aW9uXy5zZXRIYXNPZmZsaW5lRGF0YSh0cnVlKTtcbiAgICB9O1xuXG4gICAgYWxsUHJvbWlzZS50aGVuKHNldEhhc09mZmxpbmVEYXRhLCBzZXRIYXNPZmZsaW5lRGF0YSk7XG4gICAgcmV0dXJuIGFsbFByb21pc2U7XG4gIH07XG5cbiAgcmV0dXJuIERvd25sb2FkZXI7XG59KCk7XG5cbnZhciBuYW1lID0gJ29mZmxpbmVEb3dubG9hZGVyJztcbkRvd25sb2FkZXIubW9kdWxlID0gYW5ndWxhci5tb2R1bGUobmFtZSwgW10pLnNlcnZpY2UobmFtZSwgRG93bmxvYWRlcik7XG52YXIgZXhwb3J0cyA9IERvd25sb2FkZXI7XG5leHBvcnQgZGVmYXVsdCBleHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuaW1wb3J0IEFic3RyYWN0V3JhcHBlciBmcm9tICduZ2VvL29mZmxpbmUvQWJzdHJhY3RMb2NhbGZvcmFnZVdyYXBwZXIuanMnO1xuXG52YXIgZXhwb3J0cyA9IGZ1bmN0aW9uIChfQWJzdHJhY3RXcmFwcGVyKSB7XG4gIF9pbmhlcml0c0xvb3NlKEFuZHJvaWRXcmFwcGVyLCBfQWJzdHJhY3RXcmFwcGVyKTtcblxuICBmdW5jdGlvbiBBbmRyb2lkV3JhcHBlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9BYnN0cmFjdFdyYXBwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIHdpbmRvdy5hbmRyb2lkV3JhcHBlciA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBBbmRyb2lkV3JhcHBlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnBvc3RUb0JhY2tlbmQgPSBmdW5jdGlvbiBwb3N0VG9CYWNrZW5kKGFjdGlvbikge1xuICAgIHZhciBzdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KGFjdGlvbik7XG4gICAgd2luZG93Lm5nZW9Ib3N0LnBvc3RNZXNzYWdlVG9BbmRyb2lkKHN0cmluZ2lmaWVkKTtcbiAgfTtcblxuICBfcHJvdG8ucmVjZWl2ZUZyb21BbmRyb2lkID0gZnVuY3Rpb24gcmVjZWl2ZUZyb21BbmRyb2lkKGFjdGlvblN0cmluZykge1xuICAgIHZhciBhY3Rpb24gPSBKU09OLnBhcnNlKGFjdGlvblN0cmluZyk7XG4gICAgdGhpcy5yZWNlaXZlTWVzc2FnZSh7XG4gICAgICAnZGF0YSc6IGFjdGlvblxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBBbmRyb2lkV3JhcHBlcjtcbn0oQWJzdHJhY3RXcmFwcGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmltcG9ydCBBYnN0cmFjdFdyYXBwZXIgZnJvbSAnbmdlby9vZmZsaW5lL0Fic3RyYWN0TG9jYWxmb3JhZ2VXcmFwcGVyLmpzJztcblxudmFyIGV4cG9ydHMgPSBmdW5jdGlvbiAoX0Fic3RyYWN0V3JhcHBlcikge1xuICBfaW5oZXJpdHNMb29zZShDb3Jkb3ZhV3JhcHBlciwgX0Fic3RyYWN0V3JhcHBlcik7XG5cbiAgZnVuY3Rpb24gQ29yZG92YVdyYXBwZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQWJzdHJhY3RXcmFwcGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIF90aGlzLnJlY2VpdmVNZXNzYWdlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBmYWxzZSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENvcmRvdmFXcmFwcGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucG9zdFRvQmFja2VuZCA9IGZ1bmN0aW9uIHBvc3RUb0JhY2tlbmQoYWN0aW9uKSB7XG4gICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShhY3Rpb24sICcqJyk7XG4gIH07XG5cbiAgcmV0dXJuIENvcmRvdmFXcmFwcGVyO1xufShBYnN0cmFjdFdyYXBwZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBleHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuaW1wb3J0IEFic3RyYWN0V3JhcHBlciBmcm9tICduZ2VvL29mZmxpbmUvQWJzdHJhY3RMb2NhbGZvcmFnZVdyYXBwZXIuanMnO1xuXG52YXIgZXhwb3J0cyA9IGZ1bmN0aW9uIChfQWJzdHJhY3RXcmFwcGVyKSB7XG4gIF9pbmhlcml0c0xvb3NlKElvc1dyYXBwZXIsIF9BYnN0cmFjdFdyYXBwZXIpO1xuXG4gIGZ1bmN0aW9uIElvc1dyYXBwZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQWJzdHJhY3RXcmFwcGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICB3aW5kb3cuaW9zV3JhcHBlciA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBJb3NXcmFwcGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucG9zdFRvQmFja2VuZCA9IGZ1bmN0aW9uIHBvc3RUb0JhY2tlbmQoYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbi5jb21tYW5kID09PSAnc2V0SXRlbScpIHtcbiAgICAgIGFjdGlvbi5hcmdzWzFdID0gSlNPTi5zdHJpbmdpZnkoYWN0aW9uLmFyZ3NbMV0pO1xuICAgIH1cblxuICAgIHZhciBzdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KGFjdGlvbik7XG4gICAgd2luZG93LndlYmtpdC5tZXNzYWdlSGFuZGxlcnMuaW9zLnBvc3RNZXNzYWdlKHN0cmluZ2lmaWVkKTtcbiAgfTtcblxuICBfcHJvdG8ucmVjZWl2ZUZyb21Jb3MgPSBmdW5jdGlvbiByZWNlaXZlRnJvbUlvcyhhY3Rpb25TdHJpbmcpIHtcbiAgICB2YXIgYWN0aW9uID0gSlNPTi5wYXJzZShhY3Rpb25TdHJpbmcpO1xuICAgIHZhciBhcmdzID0gYWN0aW9uWydhcmdzJ10gfHwgW107XG4gICAgYWN0aW9uWydhcmdzJ10gPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoaXRlbSk7XG4gICAgfSk7XG4gICAgdGhpcy5yZWNlaXZlTWVzc2FnZSh7XG4gICAgICAnZGF0YSc6IGFjdGlvblxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBJb3NXcmFwcGVyO1xufShBYnN0cmFjdFdyYXBwZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBleHBvcnRzOyIsImZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5pbXBvcnQgTGF5ZXIgZnJvbSAnb2wvbGF5ZXIvTGF5ZXIuanMnO1xuaW1wb3J0IHsgY3JlYXRlQ2FudmFzQ29udGV4dDJEIH0gZnJvbSAnb2wvZG9tLmpzJztcbmltcG9ydCB7IERFVklDRV9QSVhFTF9SQVRJTyB9IGZyb20gJ29sL2hhcy5qcyc7XG5cbnZhciBNYXNrID0gZnVuY3Rpb24gKF9MYXllcikge1xuICBfaW5oZXJpdHNMb29zZShNYXNrLCBfTGF5ZXIpO1xuXG4gIGZ1bmN0aW9uIE1hc2sobGF5ZXJPcHRpb25zLCBtYXNrT3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcblxuICAgIGlmIChsYXllck9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgbGF5ZXJPcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgaWYgKG1hc2tPcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG1hc2tPcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfTGF5ZXIuY2FsbCh0aGlzLCBsYXllck9wdGlvbnMpIHx8IHRoaXM7XG4gICAgX3RoaXMuY29udGV4dF8gPSBjcmVhdGVDYW52YXNDb250ZXh0MkQoKTtcbiAgICBfdGhpcy5jb250ZXh0Xy5jYW52YXMuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuICAgIF90aGlzLmNvbnRleHRfLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgX3RoaXMubWFyZ2luXyA9IG1hc2tPcHRpb25zLm1hcmdpbiB8fCAxMDA7XG4gICAgX3RoaXMuZXh0ZW50SW5NZXRlcnNfID0gbWFza09wdGlvbnMuZXh0ZW50SW5NZXRlcnMgfHwgMDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTWFzay5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNyZWF0ZUV4dGVudCA9IGZ1bmN0aW9uIGNyZWF0ZUV4dGVudChjZW50ZXIsIGhhbGZMZW5ndGgpIHtcbiAgICB2YXIgbWlueCA9IGNlbnRlclswXSAtIGhhbGZMZW5ndGg7XG4gICAgdmFyIG1pbnkgPSBjZW50ZXJbMV0gLSBoYWxmTGVuZ3RoO1xuICAgIHZhciBtYXh4ID0gY2VudGVyWzBdICsgaGFsZkxlbmd0aDtcbiAgICB2YXIgbWF4eSA9IGNlbnRlclsxXSArIGhhbGZMZW5ndGg7XG4gICAgcmV0dXJuIFttaW54LCBtaW55LCBtYXh4LCBtYXh5XTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKGZyYW1lU3RhdGUpIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dF87XG4gICAgdmFyIGN3aWR0aCA9IGZyYW1lU3RhdGUuc2l6ZVswXTtcbiAgICBjb250ZXh0LmNhbnZhcy53aWR0aCA9IGN3aWR0aDtcbiAgICB2YXIgY2hlaWdodCA9IGZyYW1lU3RhdGUuc2l6ZVsxXTtcbiAgICBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBjaGVpZ2h0O1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5tb3ZlVG8oMCwgMCk7XG4gICAgY29udGV4dC5saW5lVG8oY3dpZHRoLCAwKTtcbiAgICBjb250ZXh0LmxpbmVUbyhjd2lkdGgsIGNoZWlnaHQpO1xuICAgIGNvbnRleHQubGluZVRvKDAsIGNoZWlnaHQpO1xuICAgIGNvbnRleHQubGluZVRvKDAsIDApO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdmFyIGV4dGVudExlbmd0aCA9IE1hdGgubWluKGN3aWR0aCwgY2hlaWdodCkgLSB0aGlzLm1hcmdpbl8gKiAyO1xuXG4gICAgaWYgKHRoaXMuZXh0ZW50SW5NZXRlcnNfKSB7XG4gICAgICBleHRlbnRMZW5ndGggPSBERVZJQ0VfUElYRUxfUkFUSU8gKiB0aGlzLmV4dGVudEluTWV0ZXJzXyAvIGZyYW1lU3RhdGUudmlld1N0YXRlLnJlc29sdXRpb247XG4gICAgfVxuXG4gICAgdmFyIGV4dGVudCA9IHRoaXMuY3JlYXRlRXh0ZW50KFtjd2lkdGggLyAyLCBjaGVpZ2h0IC8gMl0sIE1hdGguY2VpbChleHRlbnRMZW5ndGggLyAyKSk7XG4gICAgY29udGV4dC5tb3ZlVG8oZXh0ZW50WzBdLCBleHRlbnRbMV0pO1xuICAgIGNvbnRleHQubGluZVRvKGV4dGVudFswXSwgZXh0ZW50WzNdKTtcbiAgICBjb250ZXh0LmxpbmVUbyhleHRlbnRbMl0sIGV4dGVudFszXSk7XG4gICAgY29udGV4dC5saW5lVG8oZXh0ZW50WzJdLCBleHRlbnRbMV0pO1xuICAgIGNvbnRleHQubGluZVRvKGV4dGVudFswXSwgZXh0ZW50WzFdKTtcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMCwgNSwgMjUsIDAuNSknO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIHJldHVybiBjb250ZXh0LmNhbnZhcztcbiAgfTtcblxuICByZXR1cm4gTWFzaztcbn0oTGF5ZXIpO1xuXG5leHBvcnQgeyBNYXNrIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcblxudmFyIE1vZGUgPSBmdW5jdGlvbiAoKSB7XG4gIE1vZGUuJGluamVjdCA9IFtcIm5nZW9PZmZsaW5lQ29uZmlndXJhdGlvblwiXTtcblxuICBmdW5jdGlvbiBNb2RlKG5nZW9PZmZsaW5lQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuZW5hYmxlZF8gPSBmYWxzZTtcbiAgICB0aGlzLmNvbXBvbmVudF8gPSBudWxsO1xuICAgIHRoaXMubmdlb09mZmxpbmVDb25maWd1cmF0aW9uXyA9IG5nZW9PZmZsaW5lQ29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNb2RlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaXNFbmFibGVkID0gZnVuY3Rpb24gaXNFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmVuYWJsZWRfO1xuICB9O1xuXG4gIF9wcm90by5lbmFibGUgPSBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgdGhpcy5lbmFibGVkXyA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLnJlZ2lzdGVyQ29tcG9uZW50ID0gZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgdGhpcy5jb21wb25lbnRfID0gY29tcG9uZW50O1xuICB9O1xuXG4gIF9wcm90by5hY3RpdmF0ZU9mZmxpbmVNb2RlID0gZnVuY3Rpb24gYWN0aXZhdGVPZmZsaW5lTW9kZSgpIHtcbiAgICBpZiAoIXRoaXMuY29tcG9uZW50Xykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgY29tcG9uZW50IGlzIG5vdCByZWdpc3RlcmVkJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRfLmFjdGl2YXRlT2ZmbGluZU1vZGUoKTtcbiAgfTtcblxuICBfcHJvdG8uaGFzRGF0YSA9IGZ1bmN0aW9uIGhhc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMubmdlb09mZmxpbmVDb25maWd1cmF0aW9uXy5oYXNPZmZsaW5lRGF0YSgpO1xuICB9O1xuXG4gIHJldHVybiBNb2RlO1xufSgpO1xuXG52YXIgbXlNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnbmdlb09mZmxpbmVNb2RlJywgW10pO1xubXlNb2R1bGUuc2VydmljZSgnbmdlb09mZmxpbmVNb2RlJywgTW9kZSk7XG5Nb2RlLm1vZHVsZSA9IG15TW9kdWxlO1xuZXhwb3J0IGRlZmF1bHQgTW9kZTsiLCJjb25maWdGdW5jdGlvbl8uJGluamVjdCA9IFtcIiRodHRwUHJvdmlkZXJcIl07XG5pbXBvcnQgbmdlb01pc2NEZWJvdW5jZSBmcm9tICduZ2VvL21pc2MvZGVib3VuY2UuanMnO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5cbnZhciBTZXJ2aWNlID0gZnVuY3Rpb24gKCkge1xuICBTZXJ2aWNlLiRpbmplY3QgPSBbXCIkZG9jdW1lbnRcIiwgXCIkd2luZG93XCIsIFwiJHRpbWVvdXRcIiwgXCIkcm9vdFNjb3BlXCIsIFwibmdlb09mZmxpbmVUZXN0VXJsXCJdO1xuXG4gIGZ1bmN0aW9uIFNlcnZpY2UoJGRvY3VtZW50LCAkd2luZG93LCAkdGltZW91dCwgJHJvb3RTY29wZSwgbmdlb09mZmxpbmVUZXN0VXJsKSB7XG4gICAgdGhpcy4kZG9jdW1lbnRfID0gJGRvY3VtZW50O1xuICAgIHRoaXMuJHdpbmRvd18gPSAkd2luZG93O1xuICAgIHRoaXMuJHRpbWVvdXRfID0gJHRpbWVvdXQ7XG4gICAgdGhpcy4kcm9vdFNjb3BlXyA9ICRyb290U2NvcGU7XG4gICAgdGhpcy5uZ2VvT2ZmbGluZVRlc3RVcmxfID0gbmdlb09mZmxpbmVUZXN0VXJsO1xuICAgIHRoaXMuY291bnRfID0gMDtcbiAgICB0aGlzLm9mZmxpbmVfO1xuICAgIHRoaXMucHJvbWlzZV87XG4gICAgdGhpcy5pbml0aWFsaXplXygpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNlcnZpY2UucHJvdG90eXBlO1xuXG4gIF9wcm90by5pbml0aWFsaXplXyA9IGZ1bmN0aW9uIGluaXRpYWxpemVfKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLm9mZmxpbmVfID0gIXRoaXMuJHdpbmRvd18ubmF2aWdhdG9yLm9uTGluZTtcbiAgICB0aGlzLiR3aW5kb3dfLmFkZEV2ZW50TGlzdGVuZXIoJ29mZmxpbmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy50cmlnZ2VyQ2hhbmdlU3RhdHVzRXZlbnRfKHRydWUpO1xuICAgIH0pO1xuICAgIHRoaXMuJHdpbmRvd18uYWRkRXZlbnRMaXN0ZW5lcignb25saW5lJywgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2hlY2sodW5kZWZpbmVkKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLiRkb2N1bWVudF8uYWpheEVycm9yKSB7XG4gICAgICB2YXIgb25BamF4RXJyb3IgPSBmdW5jdGlvbiBvbkFqYXhFcnJvcihldnQsIGpxeGhyLCBzZXR0aW5ncywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgaWYgKCEvXihjYW5jZWxlZHxhYm9ydCkkLy50ZXN0KHRocm93bkVycm9yKSkge1xuICAgICAgICAgIF90aGlzLmNoZWNrKDIwMDApO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLiRkb2N1bWVudF8uYWpheEVycm9yKG9uQWpheEVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNoZWNrID0gZnVuY3Rpb24gY2hlY2sodGltZW91dCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMucHJvbWlzZV8pIHtcbiAgICAgIHRoaXMuJHRpbWVvdXRfLmNhbmNlbCh0aGlzLnByb21pc2VfKTtcbiAgICAgIHRoaXMucHJvbWlzZV8gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVvdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jb3VudF8rKztcbiAgICAgIHRoaXMucHJvbWlzZV8gPSB0aGlzLiR0aW1lb3V0XyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuY2hlY2soKTtcbiAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiB0aGlzLm5nZW9PZmZsaW5lVGVzdFVybF8sXG4gICAgICB0aW1lb3V0OiAxMDAwLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAgICAgX3RoaXMyLmNvdW50XyA9IDA7XG5cbiAgICAgICAgaWYgKF90aGlzMi5vZmZsaW5lXykge1xuICAgICAgICAgIF90aGlzMi50cmlnZ2VyQ2hhbmdlU3RhdHVzRXZlbnRfKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICAgICAgX3RoaXMyLmNvdW50XysrO1xuXG4gICAgICAgIGlmIChfdGhpczIuY291bnRfID4gMiAmJiAhX3RoaXMyLm9mZmxpbmVfKSB7XG4gICAgICAgICAgX3RoaXMyLnRyaWdnZXJDaGFuZ2VTdGF0dXNFdmVudF8odHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8udHJpZ2dlckNoYW5nZVN0YXR1c0V2ZW50XyA9IGZ1bmN0aW9uIHRyaWdnZXJDaGFuZ2VTdGF0dXNFdmVudF8ob2ZmbGluZSkge1xuICAgIHRoaXMub2ZmbGluZV8gPSBvZmZsaW5lO1xuICAgIHRoaXMuJHJvb3RTY29wZV8uJGRpZ2VzdCgpO1xuICB9O1xuXG4gIF9wcm90by5pc0Rpc2Nvbm5lY3RlZCA9IGZ1bmN0aW9uIGlzRGlzY29ubmVjdGVkKCkge1xuICAgIHJldHVybiAhIXRoaXMub2ZmbGluZV87XG4gIH07XG5cbiAgcmV0dXJuIFNlcnZpY2U7XG59KCk7XG5cbnZhciBuYW1lID0gJ25nZW9OZXR3b3JrU3RhdHVzJztcblNlcnZpY2UubW9kdWxlID0gYW5ndWxhci5tb2R1bGUobmFtZSwgW25nZW9NaXNjRGVib3VuY2UubmFtZV0pO1xuU2VydmljZS5tb2R1bGUuc2VydmljZShuYW1lLCBTZXJ2aWNlKTtcblxudmFyIGh0dHBJbnRlcmNlcHRvciA9IGZ1bmN0aW9uIGh0dHBJbnRlcmNlcHRvcigkcSwgbmdlb0RlYm91bmNlLCBuZ2VvTmV0d29ya1N0YXR1cykge1xuICB2YXIgZGVib3VuY2VkQ2hlY2sgPSBuZ2VvRGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZ2VvTmV0d29ya1N0YXR1cy5jaGVjayh1bmRlZmluZWQpO1xuICB9LCAyMDAwLCBmYWxzZSk7XG4gIHJldHVybiB7XG4gICAgcmVxdWVzdDogZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfSxcbiAgICByZXF1ZXN0RXJyb3I6IGZ1bmN0aW9uIHJlcXVlc3RFcnJvcihyZWplY3Rpb24pIHtcbiAgICAgIHJldHVybiAkcS5yZWplY3QocmVqZWN0aW9uKTtcbiAgICB9LFxuICAgIHJlc3BvbnNlOiBmdW5jdGlvbiByZXNwb25zZShfcmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiBfcmVzcG9uc2U7XG4gICAgfSxcbiAgICByZXNwb25zZUVycm9yOiBmdW5jdGlvbiByZXNwb25zZUVycm9yKHJlamVjdGlvbikge1xuICAgICAgZGVib3VuY2VkQ2hlY2soKTtcbiAgICAgIHJldHVybiAkcS5yZWplY3QocmVqZWN0aW9uKTtcbiAgICB9XG4gIH07XG59O1xuXG5odHRwSW50ZXJjZXB0b3IuJGluamVjdCA9IFtcIiRxXCIsIFwibmdlb0RlYm91bmNlXCIsIFwibmdlb05ldHdvcmtTdGF0dXNcIl07XG5odHRwSW50ZXJjZXB0b3IuJGluamVjdCA9IFtcIiRxXCIsIFwibmdlb0RlYm91bmNlXCIsIFwibmdlb05ldHdvcmtTdGF0dXNcIl07XG5TZXJ2aWNlLm1vZHVsZS5mYWN0b3J5KCdodHRwSW50ZXJjZXB0b3InLCBodHRwSW50ZXJjZXB0b3IpO1xuXG5mdW5jdGlvbiBjb25maWdGdW5jdGlvbl8oJGh0dHBQcm92aWRlcikge1xuICAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdodHRwSW50ZXJjZXB0b3InKTtcbn1cblxuU2VydmljZS5tb2R1bGUuY29uZmlnKGNvbmZpZ0Z1bmN0aW9uXyk7XG52YXIgZXhwb3J0cyA9IFNlcnZpY2U7XG5leHBvcnQgZGVmYXVsdCBleHBvcnRzOyIsImZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0ID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1tcIkBAaXRlcmF0b3JcIl07IGlmIChpdCkgcmV0dXJuIChpdCA9IGl0LmNhbGwobykpLm5leHQuYmluZChpdCk7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHsgaWYgKGl0KSBvID0gaXQ7IHZhciBpID0gMDsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5pbXBvcnQgbmdlb01hcEJhY2tncm91bmRMYXllck1nciBmcm9tICduZ2VvL21hcC9CYWNrZ3JvdW5kTGF5ZXJNZ3IuanMnO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5cbnZhciBSZXN0b3JlciA9IGZ1bmN0aW9uICgpIHtcbiAgUmVzdG9yZXIuJGluamVjdCA9IFtcIm5nZW9PZmZsaW5lQ29uZmlndXJhdGlvblwiLCBcIm5nZW9CYWNrZ3JvdW5kTGF5ZXJNZ3JcIl07XG5cbiAgZnVuY3Rpb24gUmVzdG9yZXIobmdlb09mZmxpbmVDb25maWd1cmF0aW9uLCBuZ2VvQmFja2dyb3VuZExheWVyTWdyKSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uXyA9IG5nZW9PZmZsaW5lQ29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm5nZW9CYWNrZ3JvdW5kTGF5ZXJNZ3JfID0gbmdlb0JhY2tncm91bmRMYXllck1ncjtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBSZXN0b3Jlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlc3RvcmUgPSBmdW5jdGlvbiByZXN0b3JlKG1hcCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uXy5nZXRJdGVtKCdvZmZsaW5lX2NvbnRlbnQnKS50aGVuKGZ1bmN0aW9uIChvZmZsaW5lQ29udGVudCkge1xuICAgICAgcmV0dXJuIF90aGlzLmRvUmVzdG9yZShtYXAsIG9mZmxpbmVDb250ZW50KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZG9SZXN0b3JlID0gZnVuY3Rpb24gZG9SZXN0b3JlKG1hcCwgb2ZmbGluZUNvbnRlbnQpIHtcbiAgICBtYXAuZ2V0TGF5ZXJHcm91cCgpLmdldExheWVycygpLmNsZWFyKCk7XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKG9mZmxpbmVDb250ZW50LmxheWVycyksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgb2ZmbGluZUxheWVyID0gX3N0ZXAudmFsdWU7XG4gICAgICB2YXIgbGF5ZXIgPSB0aGlzLmNvbmZpZ3VyYXRpb25fLnJlY3JlYXRlT2ZmbGluZUxheWVyKG9mZmxpbmVMYXllcik7XG5cbiAgICAgIGlmIChsYXllcikge1xuICAgICAgICBtYXAuYWRkTGF5ZXIobGF5ZXIpO1xuXG4gICAgICAgIGlmIChvZmZsaW5lTGF5ZXIuYmFja2dyb3VuZExheWVyKSB7XG4gICAgICAgICAgdGhpcy5uZ2VvQmFja2dyb3VuZExheWVyTWdyXy5zZXQobWFwLCBsYXllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2ZmbGluZUNvbnRlbnQuZXh0ZW50O1xuICB9O1xuXG4gIHJldHVybiBSZXN0b3Jlcjtcbn0oKTtcblxudmFyIG5hbWUgPSAnbmdlb09mZmxpbmVSZXN0b3Jlcic7XG5SZXN0b3Jlci5tb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShuYW1lLCBbbmdlb01hcEJhY2tncm91bmRMYXllck1nci5uYW1lXSkuc2VydmljZShuYW1lLCBSZXN0b3Jlcik7XG52YXIgZXhwb3J0cyA9IFJlc3RvcmVyO1xuZXhwb3J0IGRlZmF1bHQgZXhwb3J0czsiLCJpbXBvcnQgT2xUaWxlZ3JpZFRpbGVHcmlkIGZyb20gJ29sL3RpbGVncmlkL1RpbGVHcmlkLmpzJztcbmltcG9ydCBPbFRpbGVncmlkV01UUyBmcm9tICdvbC90aWxlZ3JpZC9XTVRTLmpzJztcbmltcG9ydCAqIGFzIG9sUHJvaiBmcm9tICdvbC9wcm9qLmpzJztcbmltcG9ydCBPbFNvdXJjZVRpbGVXTVMgZnJvbSAnb2wvc291cmNlL1RpbGVXTVMuanMnO1xuaW1wb3J0IE9sU291cmNlV01UUyBmcm9tICdvbC9zb3VyY2UvV01UUy5qcyc7XG5pbXBvcnQgT2xMYXllclRpbGUgZnJvbSAnb2wvbGF5ZXIvVGlsZS5qcyc7XG5cbnZhciBTZXJEZXMgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNlckRlcyhfcmVmKSB7XG4gICAgdmFyIGd1dHRlciA9IF9yZWYuZ3V0dGVyO1xuICAgIHRoaXMuZ3V0dGVyXyA9IGd1dHRlcjtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTZXJEZXMucHJvdG90eXBlO1xuXG4gIF9wcm90by5jcmVhdGVCYXNlT2JqZWN0XyA9IGZ1bmN0aW9uIGNyZWF0ZUJhc2VPYmplY3RfKG9sT2JqZWN0KSB7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBvbE9iamVjdC5nZXRQcm9wZXJ0aWVzKCk7XG4gICAgdmFyIG9iaiA9IHt9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHByb3BlcnRpZXNba2V5XTtcbiAgICAgIHZhciB0eXBlT2YgPSB0eXBlb2YgdmFsdWU7XG5cbiAgICAgIGlmICh0eXBlT2YgPT09ICdzdHJpbmcnIHx8IHR5cGVPZiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIF9wcm90by5zZXJpYWxpemVUaWxlZ3JpZCA9IGZ1bmN0aW9uIHNlcmlhbGl6ZVRpbGVncmlkKHRpbGVncmlkKSB7XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIG9iai5leHRlbnQgPSB0aWxlZ3JpZC5nZXRFeHRlbnQoKTtcbiAgICBvYmoubWluWm9vbSA9IHRpbGVncmlkLmdldE1pblpvb20oKTtcbiAgICBvYmoub3JpZ2luID0gdGlsZWdyaWQuZ2V0T3JpZ2luKDApO1xuICAgIG9iai5yZXNvbHV0aW9ucyA9IHRpbGVncmlkLmdldFJlc29sdXRpb25zKCk7XG4gICAgb2JqLnRpbGVTaXplID0gdGlsZWdyaWQuZ2V0VGlsZVNpemUodGlsZWdyaWQuZ2V0TWluWm9vbSgpKTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgfTtcblxuICBfcHJvdG8uZGVzZXJpYWxpemVUaWxlZ3JpZCA9IGZ1bmN0aW9uIGRlc2VyaWFsaXplVGlsZWdyaWQoc2VyaWFsaXphdGlvbikge1xuICAgIHZhciBvcHRpb25zID0gSlNPTi5wYXJzZShzZXJpYWxpemF0aW9uKTtcbiAgICByZXR1cm4gbmV3IE9sVGlsZWdyaWRUaWxlR3JpZChvcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uc2VyaWFsaXplVGlsZWdyaWRXTVRTID0gZnVuY3Rpb24gc2VyaWFsaXplVGlsZWdyaWRXTVRTKHRpbGVncmlkKSB7XG4gICAgaWYgKCF0aWxlZ3JpZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIgb2JqID0ge307XG4gICAgdmFyIHJlc29sdXRpb25zID0gdGlsZWdyaWQuZ2V0UmVzb2x1dGlvbnMoKTtcbiAgICBvYmouZXh0ZW50ID0gdGlsZWdyaWQuZ2V0RXh0ZW50KCk7XG4gICAgb2JqLm1pblpvb20gPSB0aWxlZ3JpZC5nZXRNaW5ab29tKCk7XG4gICAgb2JqLm1hdHJpeElkcyA9IHRpbGVncmlkLmdldE1hdHJpeElkcygpO1xuICAgIG9iai5yZXNvbHV0aW9ucyA9IHJlc29sdXRpb25zO1xuICAgIG9iai5vcmlnaW5zID0gW107XG5cbiAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHJlc29sdXRpb25zLmxlbmd0aDsgKyt6KSB7XG4gICAgICBvYmoub3JpZ2lucy5wdXNoKHRpbGVncmlkLmdldE9yaWdpbih6KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG4gIH07XG5cbiAgX3Byb3RvLmRlc2VyaWFsaXplVGlsZWdyaWRXTVRTID0gZnVuY3Rpb24gZGVzZXJpYWxpemVUaWxlZ3JpZFdNVFMoc2VyaWFsaXphdGlvbikge1xuICAgIHZhciBvcHRpb25zID0gSlNPTi5wYXJzZShzZXJpYWxpemF0aW9uKTtcbiAgICByZXR1cm4gbmV3IE9sVGlsZWdyaWRXTVRTKG9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5zZXJpYWxpemVTb3VyY2VUaWxlV01TID0gZnVuY3Rpb24gc2VyaWFsaXplU291cmNlVGlsZVdNUyhzb3VyY2UpIHtcbiAgICB2YXIgb2JqID0gdGhpcy5jcmVhdGVCYXNlT2JqZWN0Xyhzb3VyY2UpO1xuICAgIG9iai5wYXJhbXMgPSBzb3VyY2UuZ2V0UGFyYW1zKCk7XG4gICAgb2JqLnVybHMgPSBzb3VyY2UuZ2V0VXJscygpO1xuICAgIG9iai50aWxlR3JpZCA9IHRoaXMuc2VyaWFsaXplVGlsZWdyaWQoc291cmNlLmdldFRpbGVHcmlkKCkpO1xuICAgIHZhciBwcm9qZWN0aW9uID0gc291cmNlLmdldFByb2plY3Rpb24oKTtcblxuICAgIGlmIChwcm9qZWN0aW9uKSB7XG4gICAgICBvYmoucHJvamVjdGlvbiA9IG9sUHJvai5nZXQoc291cmNlLmdldFByb2plY3Rpb24oKSkuZ2V0Q29kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xuICB9O1xuXG4gIF9wcm90by5kZXNlcmlhbGl6ZVNvdXJjZVRpbGVXTVMgPSBmdW5jdGlvbiBkZXNlcmlhbGl6ZVNvdXJjZVRpbGVXTVMoc2VyaWFsaXphdGlvbiwgdGlsZUxvYWRGdW5jdGlvbikge1xuICAgIHZhciBvcHRpb25zID0gSlNPTi5wYXJzZShzZXJpYWxpemF0aW9uKTtcbiAgICBvcHRpb25zLnRpbGVMb2FkRnVuY3Rpb24gPSB0aWxlTG9hZEZ1bmN0aW9uO1xuXG4gICAgaWYgKG9wdGlvbnMudGlsZUdyaWQpIHtcbiAgICAgIG9wdGlvbnMudGlsZUdyaWQgPSB0aGlzLmRlc2VyaWFsaXplVGlsZWdyaWQob3B0aW9ucy50aWxlR3JpZCk7XG4gICAgfVxuXG4gICAgb3B0aW9ucy5ndXR0ZXIgPSB0aGlzLmd1dHRlcl87XG4gICAgcmV0dXJuIG5ldyBPbFNvdXJjZVRpbGVXTVMob3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLnNlcmlhbGl6ZVNvdXJjZVdNVFMgPSBmdW5jdGlvbiBzZXJpYWxpemVTb3VyY2VXTVRTKHNvdXJjZSkge1xuICAgIHZhciBvYmogPSB0aGlzLmNyZWF0ZUJhc2VPYmplY3RfKHNvdXJjZSk7XG4gICAgb2JqLmRpbWVuc2lvbnMgPSBzb3VyY2UuZ2V0RGltZW5zaW9ucygpO1xuICAgIG9iai5mb3JtYXQgPSBzb3VyY2UuZ2V0Rm9ybWF0KCk7XG4gICAgb2JqLnVybHMgPSBzb3VyY2UuZ2V0VXJscygpO1xuICAgIG9iai52ZXJzaW9uID0gc291cmNlLmdldFZlcnNpb24oKTtcbiAgICBvYmoubGF5ZXIgPSBzb3VyY2UuZ2V0TGF5ZXIoKTtcbiAgICBvYmouc3R5bGUgPSBzb3VyY2UuZ2V0U3R5bGUoKTtcbiAgICBvYmoubWF0cml4U2V0ID0gc291cmNlLmdldE1hdHJpeFNldCgpO1xuICAgIHZhciB0aWxlR3JpZFdNVFMgPSBzb3VyY2UuZ2V0VGlsZUdyaWQoKTtcbiAgICBvYmoudGlsZUdyaWQgPSB0aGlzLnNlcmlhbGl6ZVRpbGVncmlkV01UUyh0aWxlR3JpZFdNVFMpO1xuICAgIG9iai5yZXF1ZXN0RW5jb2RpbmcgPSBzb3VyY2UuZ2V0UmVxdWVzdEVuY29kaW5nKCk7XG4gICAgdmFyIHByb2plY3Rpb24gPSBzb3VyY2UuZ2V0UHJvamVjdGlvbigpO1xuXG4gICAgaWYgKHByb2plY3Rpb24pIHtcbiAgICAgIG9iai5wcm9qZWN0aW9uID0gb2xQcm9qLmdldChzb3VyY2UuZ2V0UHJvamVjdGlvbigpKS5nZXRDb2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG4gIH07XG5cbiAgX3Byb3RvLmRlc2VyaWFsaXplU291cmNlV01UUyA9IGZ1bmN0aW9uIGRlc2VyaWFsaXplU291cmNlV01UUyhzZXJpYWxpemF0aW9uLCB0aWxlTG9hZEZ1bmN0aW9uKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBKU09OLnBhcnNlKHNlcmlhbGl6YXRpb24pO1xuICAgIG9wdGlvbnMudGlsZUxvYWRGdW5jdGlvbiA9IHRpbGVMb2FkRnVuY3Rpb247XG5cbiAgICBpZiAob3B0aW9ucy50aWxlR3JpZCkge1xuICAgICAgb3B0aW9ucy50aWxlR3JpZCA9IHRoaXMuZGVzZXJpYWxpemVUaWxlZ3JpZFdNVFMob3B0aW9ucy50aWxlR3JpZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBPbFNvdXJjZVdNVFMob3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLm1ha2VJbmZpbml0eVNlcmlhbGl6YWJsZV8gPSBmdW5jdGlvbiBtYWtlSW5maW5pdHlTZXJpYWxpemFibGVfKG51bWJlcikge1xuICAgIGlmIChudW1iZXIgPT09IEluZmluaXR5KSB7XG4gICAgICByZXR1cm4gMTAwMDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVtYmVyO1xuICB9O1xuXG4gIF9wcm90by5zZXJpYWxpemVUaWxlTGF5ZXIgPSBmdW5jdGlvbiBzZXJpYWxpemVUaWxlTGF5ZXIobGF5ZXIsIHNvdXJjZSkge1xuICAgIHZhciBvYmogPSB0aGlzLmNyZWF0ZUJhc2VPYmplY3RfKGxheWVyKTtcbiAgICBvYmoub3BhY2l0eSA9IGxheWVyLmdldE9wYWNpdHkoKTtcbiAgICBvYmoudmlzaWJsZSA9IGxheWVyLmdldFZpc2libGUoKTtcbiAgICBvYmoubWluUmVzb2x1dGlvbiA9IGxheWVyLmdldE1pblJlc29sdXRpb24oKTtcbiAgICBvYmoubWF4UmVzb2x1dGlvbiA9IHRoaXMubWFrZUluZmluaXR5U2VyaWFsaXphYmxlXyhsYXllci5nZXRNYXhSZXNvbHV0aW9uKCkpO1xuICAgIG9iai56SW5kZXggPSBsYXllci5nZXRaSW5kZXgoKTtcbiAgICBzb3VyY2UgPSBzb3VyY2UgfHwgbGF5ZXIuZ2V0U291cmNlKCk7XG5cbiAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgT2xTb3VyY2VUaWxlV01TKSB7XG4gICAgICBvYmouc291cmNlID0gdGhpcy5zZXJpYWxpemVTb3VyY2VUaWxlV01TKHNvdXJjZSk7XG4gICAgICBvYmouc291cmNlVHlwZSA9ICd0aWxlV01TJztcbiAgICB9IGVsc2UgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIE9sU291cmNlV01UUykge1xuICAgICAgb2JqLnNvdXJjZSA9IHRoaXMuc2VyaWFsaXplU291cmNlV01UUyhzb3VyY2UpO1xuICAgICAgb2JqLnNvdXJjZVR5cGUgPSAnV01UUyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG4gIH07XG5cbiAgX3Byb3RvLmRlc2VyaWFsaXplVGlsZUxheWVyID0gZnVuY3Rpb24gZGVzZXJpYWxpemVUaWxlTGF5ZXIoc2VyaWFsaXphdGlvbiwgdGlsZUxvYWRGdW5jdGlvbikge1xuICAgIHZhciBvcHRpb25zID0gSlNPTi5wYXJzZShzZXJpYWxpemF0aW9uKTtcbiAgICB2YXIgc291cmNlVHlwZSA9IG9wdGlvbnMuc291cmNlVHlwZTtcblxuICAgIGlmIChzb3VyY2VUeXBlID09PSAndGlsZVdNUycpIHtcbiAgICAgIG9wdGlvbnMuc291cmNlID0gdGhpcy5kZXNlcmlhbGl6ZVNvdXJjZVRpbGVXTVMob3B0aW9ucy5zb3VyY2UsIHRpbGVMb2FkRnVuY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoc291cmNlVHlwZSA9PT0gJ1dNVFMnKSB7XG4gICAgICBvcHRpb25zLnNvdXJjZSA9IHRoaXMuZGVzZXJpYWxpemVTb3VyY2VXTVRTKG9wdGlvbnMuc291cmNlLCB0aWxlTG9hZEZ1bmN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IE9sTGF5ZXJUaWxlKG9wdGlvbnMpO1xuICB9O1xuXG4gIHJldHVybiBTZXJEZXM7XG59KCk7XG5cbnZhciBleHBvcnRzID0gU2VyRGVzO1xuZXhwb3J0IGRlZmF1bHQgZXhwb3J0czsiLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcblxudmFyIFNlcnZpY2VNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICBTZXJ2aWNlTWFuYWdlci4kaW5qZWN0ID0gW1wiJGluamVjdG9yXCJdO1xuXG4gIGZ1bmN0aW9uIFNlcnZpY2VNYW5hZ2VyKCRpbmplY3Rvcikge1xuICAgIHRoaXMuJGluamVjdG9yXyA9ICRpbmplY3RvcjtcbiAgICB0aGlzLnNhdmVTZXJ2aWNlXyA9IG51bGw7XG4gICAgdGhpcy5yZXN0b3JlU2VydmljZV8gPSBudWxsO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNlcnZpY2VNYW5hZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0T2ZmbGluZVNlcnZpY2VfID0gZnVuY3Rpb24gZ2V0T2ZmbGluZVNlcnZpY2VfKHNlcnZpY2VMaWtlLCBtZXRob2QpIHtcbiAgICBpZiAodHlwZW9mIHNlcnZpY2VMaWtlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKCF0aGlzLiRpbmplY3Rvcl8uaGFzKHNlcnZpY2VMaWtlKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlIG9mZmxpbmUgXCIgKyBtZXRob2QgKyBcIiBzZXJ2aWNlIGNvdWxkIG5vdCBiZSBmb3VuZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VydmljZSA9IHRoaXMuJGluamVjdG9yXy5nZXQoc2VydmljZUxpa2UpO1xuXG4gICAgICBpZiAoIXNlcnZpY2VbbWV0aG9kXSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlIG9mZmxpbmUgc2VydmljZSBcIiArIHNlcnZpY2VMaWtlICsgXCIgZG9lcyBub3QgaGF2ZSBhIFwiICsgbWV0aG9kICsgXCIgbWV0aG9kXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZXJ2aWNlO1xuICAgIH1cblxuICAgIGlmICghc2VydmljZUxpa2VbbWV0aG9kXSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIlRoZSBwcm92aWRlZCBvZmZsaW5lIHNlcnZpY2UgZG9lcyBub3QgaGF2ZSBhIFwiICsgbWV0aG9kICsgXCIgbWV0aG9kXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiBzZXJ2aWNlTGlrZTtcbiAgfTtcblxuICBfcHJvdG8uc2V0U2F2ZVNlcnZpY2UgPSBmdW5jdGlvbiBzZXRTYXZlU2VydmljZShzYXZlTGlrZVNlcnZpY2UpIHtcbiAgICB0aGlzLnNhdmVTZXJ2aWNlXyA9IHRoaXMuZ2V0T2ZmbGluZVNlcnZpY2VfKHNhdmVMaWtlU2VydmljZSwgJ3NhdmUnKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0UmVzdG9yZVNlcnZpY2UgPSBmdW5jdGlvbiBzZXRSZXN0b3JlU2VydmljZShyZXN0b3JlTGlrZVNlcnZpY2UpIHtcbiAgICB0aGlzLnJlc3RvcmVTZXJ2aWNlXyA9IHRoaXMuZ2V0T2ZmbGluZVNlcnZpY2VfKHJlc3RvcmVMaWtlU2VydmljZSwgJ3Jlc3RvcmUnKTtcbiAgfTtcblxuICBfcHJvdG8uY2FuY2VsID0gZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICghdGhpcy5zYXZlU2VydmljZV8pIHtcbiAgICAgIGNvbnNvbGUud2FybignWW91IG11c3QgcmVnaXN0ZXIgYSBzYXZlU2VydmljZSBmaXJzdCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2F2ZVNlcnZpY2VfLmNhbmNlbCgpO1xuICB9O1xuXG4gIF9wcm90by5zYXZlID0gZnVuY3Rpb24gc2F2ZShleHRlbnQsIG1hcCkge1xuICAgIGlmICghdGhpcy5zYXZlU2VydmljZV8pIHtcbiAgICAgIGNvbnNvbGUud2FybignWW91IG11c3QgcmVnaXN0ZXIgYSBzYXZlU2VydmljZSBmaXJzdCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2F2ZVNlcnZpY2VfLnNhdmUoZXh0ZW50LCBtYXApO1xuICB9O1xuXG4gIF9wcm90by5yZXN0b3JlID0gZnVuY3Rpb24gcmVzdG9yZShtYXApIHtcbiAgICBpZiAoIXRoaXMucmVzdG9yZVNlcnZpY2VfKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1lvdSBtdXN0IHJlZ2lzdGVyIGEgcmVzdG9yZVNlcnZpY2UgZmlyc3QnKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc3RvcmVTZXJ2aWNlXy5yZXN0b3JlKG1hcCk7XG4gIH07XG5cbiAgcmV0dXJuIFNlcnZpY2VNYW5hZ2VyO1xufSgpO1xuXG5TZXJ2aWNlTWFuYWdlci5tb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnbmdlb09mZmxpbmVTZXJ2aWNlTWFuYWdlcicsIFtdKTtcblNlcnZpY2VNYW5hZ2VyLm1vZHVsZS5zZXJ2aWNlKCduZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyJywgU2VydmljZU1hbmFnZXIpO1xuZXhwb3J0IGRlZmF1bHQgU2VydmljZU1hbmFnZXI7IiwiZnVuY3Rpb24gYmxvYlRvRGF0YVVybChibG9iKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICB9O1xuXG4gICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gIH0pO1xufVxuXG52YXIgVGlsZURvd25sb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRpbGVEb3dubG9hZGVyKHRpbGVzLCBjYWxsYmFja3MsIHdvcmtlcnMpIHtcbiAgICB0aGlzLm1heE51bWJlck9mV29ya2Vyc18gPSB3b3JrZXJzO1xuICAgIHRoaXMud2FzU3RhcnRlZF8gPSBmYWxzZTtcbiAgICB0aGlzLnRpbGVzXyA9IHRpbGVzO1xuICAgIHRoaXMuY2FsbGJhY2tzXyA9IGNhbGxiYWNrcztcbiAgICB0aGlzLmFsbENvdW50XyA9IDA7XG4gICAgdGhpcy5va0NvdW50XyA9IDA7XG4gICAgdGhpcy5rb0NvdW50XyA9IDA7XG4gICAgdGhpcy5yZXF1ZXN0ZWRDb3VudF8gPSAwO1xuICAgIHRoaXMucmVzb2x2ZVByb21pc2VfID0gbnVsbDtcbiAgICB0aGlzLnByb21pc2VfID0gbnVsbDtcbiAgICB0aGlzLnRpbGVJbmRleF8gPSAwO1xuICAgIHRoaXMuY2FuY2VsXyA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFRpbGVEb3dubG9hZGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY2FuY2VsID0gZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIHRoaXMuY2FuY2VsXyA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLmRvd25sb2FkID0gZnVuY3Rpb24gZG93bmxvYWQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh0aGlzLnByb21pc2VfKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9taXNlXztcbiAgICB9XG5cbiAgICB0aGlzLnByb21pc2VfID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgX3RoaXMucmVzb2x2ZVByb21pc2VfID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmFzc2VydCh0aGlzLnRpbGVzXyk7XG5cbiAgICBpZiAodGhpcy50aWxlc18ubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrc18ub25UaWxlRG93bmxvYWRFcnJvcigxKTtcblxuICAgICAgaWYgKHRoaXMucmVzb2x2ZVByb21pc2VfKSB7XG4gICAgICAgIHRoaXMucmVzb2x2ZVByb21pc2VfKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tYXhOdW1iZXJPZldvcmtlcnNfOyArK2kpIHtcbiAgICAgICAgdGhpcy5kb3dubG9hZFRpbGVfKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZV87XG4gIH07XG5cbiAgX3Byb3RvLmRvd25sb2FkVGlsZV8gPSBmdW5jdGlvbiBkb3dubG9hZFRpbGVfKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuY2FuY2VsXyB8fCB0aGlzLnRpbGVJbmRleF8gPj0gdGhpcy50aWxlc18ubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRpbGUgPSB0aGlzLnRpbGVzX1t0aGlzLnRpbGVJbmRleF8rK107XG4gICAgdmFyIHRpbGVVcmwgPSB0aWxlLnVybDtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4oJ0dFVCcsIHRpbGVVcmwsIHRydWUpO1xuICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG5cbiAgICB2YXIgb25UaWxlRG93bmxvYWRlZCA9IGZ1bmN0aW9uIG9uVGlsZURvd25sb2FkZWQoKSB7XG4gICAgICBpZiAoX3RoaXMyLmFsbENvdW50XyA9PT0gX3RoaXMyLnRpbGVzXy5sZW5ndGggJiYgX3RoaXMyLnJlc29sdmVQcm9taXNlXykge1xuICAgICAgICBfdGhpczIucmVzb2x2ZVByb21pc2VfKCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzMi5kb3dubG9hZFRpbGVfKCk7XG4gICAgfTtcblxuICAgIHZhciBlcnJvckNhbGxiYWNrID0gZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhfKSB7XG4gICAgICBpZiAoX3RoaXMyLmNhbmNlbF8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICArK190aGlzMi5hbGxDb3VudF87XG4gICAgICArK190aGlzMi5rb0NvdW50XztcbiAgICAgIHZhciBwcm9ncmVzcyA9IF90aGlzMi5hbGxDb3VudF8gLyBfdGhpczIudGlsZXNfLmxlbmd0aDtcblxuICAgICAgX3RoaXMyLmNhbGxiYWNrc18ub25UaWxlRG93bmxvYWRFcnJvcihwcm9ncmVzcykudGhlbihvblRpbGVEb3dubG9hZGVkLCBvblRpbGVEb3dubG9hZGVkKTtcbiAgICB9O1xuXG4gICAgdmFyIG9ubG9hZENhbGxiYWNrID0gZnVuY3Rpb24gb25sb2FkQ2FsbGJhY2soZSkge1xuICAgICAgdmFyIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlO1xuXG4gICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc2l6ZSAhPT0gMCkge1xuICAgICAgICBibG9iVG9EYXRhVXJsKHJlc3BvbnNlKS50aGVuKGZ1bmN0aW9uIChkYXRhVXJsKSB7XG4gICAgICAgICAgaWYgKF90aGlzMi5jYW5jZWxfKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgKytfdGhpczIuYWxsQ291bnRfO1xuICAgICAgICAgICsrX3RoaXMyLm9rQ291bnRfO1xuICAgICAgICAgIHRpbGUucmVzcG9uc2UgPSBkYXRhVXJsO1xuICAgICAgICAgIHZhciBwcm9ncmVzcyA9IF90aGlzMi5hbGxDb3VudF8gLyBfdGhpczIudGlsZXNfLmxlbmd0aDtcblxuICAgICAgICAgIF90aGlzMi5jYWxsYmFja3NfLm9uVGlsZURvd25sb2FkU3VjY2Vzcyhwcm9ncmVzcywgdGlsZSkudGhlbihvblRpbGVEb3dubG9hZGVkLCBvblRpbGVEb3dubG9hZGVkKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChfdGhpczIuY2FuY2VsXykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yQ2FsbGJhY2soZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF90aGlzMi5jYW5jZWxfKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgKytfdGhpczIuYWxsQ291bnRfO1xuICAgICAgICArK190aGlzMi5va0NvdW50XztcblxuICAgICAgICBfdGhpczIuY2FsbGJhY2tzXy5vblRpbGVEb3dubG9hZFN1Y2Nlc3MoX3RoaXMyLmFsbENvdW50XyAvIF90aGlzMi50aWxlc18ubGVuZ3RoLCB0aWxlKS50aGVuKG9uVGlsZURvd25sb2FkZWQsIG9uVGlsZURvd25sb2FkZWQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB4aHIub25sb2FkID0gb25sb2FkQ2FsbGJhY2s7XG4gICAgeGhyLm9uZXJyb3IgPSBlcnJvckNhbGxiYWNrO1xuICAgIHhoci5vbmFib3J0ID0gZXJyb3JDYWxsYmFjaztcbiAgICB4aHIub250aW1lb3V0ID0gZXJyb3JDYWxsYmFjaztcbiAgICB4aHIuc2VuZCgpO1xuICAgICsrdGhpcy5yZXF1ZXN0ZWRDb3VudF87XG4gIH07XG5cbiAgcmV0dXJuIFRpbGVEb3dubG9hZGVyO1xufSgpO1xuXG5leHBvcnQgeyBUaWxlRG93bmxvYWRlciBhcyBkZWZhdWx0IH07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmopIHtcbm9iaiB8fCAob2JqID0ge30pO1xudmFyIF9fdCwgX19wID0gJyc7XG53aXRoIChvYmopIHtcbl9fcCArPSAnPGRpdiBjbGFzcz1cIm1haW4tYnV0dG9uXCI+XFxuICA8c3BhbiBuZy1pZj1cIiEkY3RybC5oYXNEYXRhKClcIj5cXG4gICAgPGRpdiBjbGFzcz1cIm5vLWRhdGEgZmFzIGZhLWFycm93LWNpcmNsZS1kb3duXCIgbmctY2xpY2s9XCIkY3RybC50b2dnbGVWaWV3RXh0ZW50U2VsZWN0aW9uKClcIj48L2Rpdj5cXG4gIDwvc3Bhbj5cXG4gIDxzcGFuIG5nLWlmPVwiJGN0cmwuaGFzRGF0YSgpXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJ3aXRoLWRhdGEgZmFzIGZhLWFycm93LWNpcmNsZS1kb3duXCIgbmctY2xpY2s9XCIkY3RybC5zaG93TWVudSgpXCI+PC9kaXY+XFxuICA8L3NwYW4+XFxuPC9kaXY+XFxuXFxuPGRpdiBuZy1pZj1cIiRjdHJsLnNlbGVjdGluZ0V4dGVudCAmJiAhJGN0cmwubmV0d29ya1N0YXR1cy5pc0Rpc2Nvbm5lY3RlZCgpXCIgY2xhc3M9XCJ2YWxpZGF0ZS1leHRlbnQgYnRuIGJ0bi1wcmltYXJ5XCI+XFxuICA8ZGl2IG5nLWlmPVwiISRjdHJsLmRvd25sb2FkaW5nXCIgbmctY2xpY2s9XCIkY3RybC5jb21wdXRlU2l6ZUFuZERpc3BsYXlBbGVydExvYWREYXRhKClcIiB0cmFuc2xhdGU+U2F2ZSBtYXA8L2Rpdj5cXG4gIDxkaXYgbmctaWY9XCIkY3RybC5kb3dubG9hZGluZ1wiIG5nLWNsaWNrPVwiJGN0cmwuYXNrQWJvcnREb3dubG9hZCgpXCIgdHJhbnNsYXRlPkFib3J0PC9kaXY+XFxuPC9kaXY+XFxuXFxuXFxuPGRpdiBuZy1pZj1cIiRjdHJsLmRvd25sb2FkaW5nXCIgY2xhc3M9XCJpbi1wcm9ncmVzc1wiPlxcbiAgPGRpdj57eyRjdHJsLnByb2dyZXNzUGVyY2VudHN9fSU8L2Rpdj5cXG48L2Rpdj5cXG5cXG48bmdlby1tb2RhbCBuZy1tb2RlbD1cIiRjdHJsLm1lbnVEaXNwbGF5ZWRcIj5cXG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiXFxuICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXFxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwie3tcXCdDbG9zZVxcJyB8IHRyYW5zbGF0ZX19XCI+XFxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cXG4gICAgPC9idXR0b24+XFxuICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgdHJhbnNsYXRlPk9mZmxpbmUgbWFwPC9oND5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXG4gICAgPGRpdiBuZy1pZj1cIiRjdHJsLmhhc0RhdGEoKVwiPlxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZXh0ZW50LXpvb20gYnRuIGJ0bi1kZWZhdWx0XCJcXG4gICAgICAgICAgICAgIG5nLWlmPVwiISRjdHJsLm9mZmxpbmVNb2RlLmlzRW5hYmxlZCgpXCJcXG4gICAgICAgICAgICAgIG5nLWNsaWNrPVwiJGN0cmwuYWN0aXZhdGVPZmZsaW5lTW9kZSgpXCJcXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZT5BY3RpdmF0ZSBvZmZsaW5lIG1vZGVcXG4gICAgICA8L2J1dHRvbj5cXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImV4dGVudC16b29tIGJ0biBidG4tZGVmYXVsdFwiXFxuICAgICAgICAgICAgICBuZy1pZj1cIiRjdHJsLm9mZmxpbmVNb2RlLmlzRW5hYmxlZCgpICYmICEkY3RybC5uZXR3b3JrU3RhdHVzLmlzRGlzY29ubmVjdGVkKClcIlxcbiAgICAgICAgICAgICAgbmctY2xpY2s9XCIkY3RybC5kZWFjdGl2YXRlT2ZmbGluZU1vZGUoKVwiXFxuICAgICAgICAgICAgICB0cmFuc2xhdGU+RGVhY3RpdmF0ZSBvZmZsaW5lIG1vZGVcXG4gICAgICA8L2J1dHRvbj5cXG5cXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImV4dGVudC1zaG93IGJ0biBidG4tZGVmYXVsdFwiXFxuICAgICAgICAgICAgICBuZy1pZj1cIiRjdHJsLm9mZmxpbmVNb2RlLmlzRW5hYmxlZCgpXCJcXG4gICAgICAgICAgICAgIG5nLWNsaWNrPVwiJGN0cmwudG9nZ2xlRXh0ZW50VmlzaWJpbGl0eSgpXCI+XFxuICAgICAgICA8c3BhbiBuZy1pZj1cIiRjdHJsLmlzRXh0ZW50VmlzaWJsZSgpXCIgdHJhbnNsYXRlPkhpZGUgZXh0ZW50PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gbmctaWY9XCIhJGN0cmwuaXNFeHRlbnRWaXNpYmxlKClcIiB0cmFuc2xhdGUgPlNob3cgZXh0ZW50PC9zcGFuPlxcbiAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlIGJ0biBidG4tZGVmYXVsdFwiXFxuICAgICAgICAgICAgICBuZy1pZj1cIiEkY3RybC5uZXR3b3JrU3RhdHVzLmlzRGlzY29ubmVjdGVkKClcIlxcbiAgICAgICAgICAgICAgbmctY2xpY2s9XCIkY3RybC5kaXNwbGF5QWxlcnREZXN0cm95RGF0YSA9IHRydWVcIlxcbiAgICAgICAgICAgICAgdHJhbnNsYXRlPkRlbGV0ZSBkYXRhXFxuICAgICAgPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IG5nLWlmPVwiISRjdHJsLmhhc0RhdGEoKSAmJiAhJGN0cmwubmV0d29ya1N0YXR1cy5pc0Rpc2Nvbm5lY3RlZCgpXCI+XFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuZXctZGF0YSBidG4gYnRuLWRlZmF1bHRcIlxcbiAgICAgICAgICAgICAgbmctY2xpY2s9XCIkY3RybC50b2dnbGVWaWV3RXh0ZW50U2VsZWN0aW9uKClcIlxcbiAgICAgICAgICAgICAgdHJhbnNsYXRlPlNhdmUgbmV3IG1hcFxcbiAgICAgIDwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2Plxcbjwvbmdlby1tb2RhbD5cXG5cXG48bmdlby1tb2RhbCBuZy1tb2RlbD1cIiRjdHJsLmRpc3BsYXlBbGVydExvYWREYXRhXCI+XFxuICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XFxuICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgdHJhbnNsYXRlPldhcm5pbmc8L2g0PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcbiAgICAgIDxwIHRyYW5zbGF0ZT5+e3skY3RybC5lc3RpbWF0ZWRMb2FkRGF0YVNpemV9fU1CIG9mIG1hcHMgd2lsbCBiZSBkb3dubG9hZGVkICh1bnRpbCBzY2FsZSAxOjI1XFwnMDAwKSAtIERvblxcJ3QgbG9jayB5b3VyIGRldmljZSBvciBuYXZpZ2F0ZSBhd2F5IGZyb20gdGhpcyBzaXRlIGR1cmluZyB0aGUgZG93bmxvYWQgcHJvY2Vzcy4gRGVhY3RpdmF0ZSBcInByaXZhdGVcIiBtb2RlIG9mIHlvdXIgYnJvd3Nlci48L3A+XFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ2YWxpZGF0ZSBidG4gYnRuLXByaW1hcnlcIlxcbiAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxcbiAgICAgICAgICAgICAgbmctY2xpY2s9XCIkY3RybC52YWxpZGF0ZUV4dGVudCgpXCJcXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZT5Pa1xcbiAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlIGJ0biBidG4tZGVmYXVsdFwiXFxuICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXFxuICAgICAgICAgICAgICB0cmFuc2xhdGU+Q2FuY2VsXFxuICAgICAgPC9idXR0b24+XFxuICA8L2Rpdj5cXG48L25nZW8tbW9kYWw+XFxuXFxuPG5nZW8tbW9kYWwgbmctbW9kZWw9XCIkY3RybC5kaXNwbGF5QWxlcnROb0xheWVyXCI+XFxuICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XFxuICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgdHJhbnNsYXRlPldhcm5pbmc8L2g0PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcbiAgICAgIDxwIHRyYW5zbGF0ZT5ObyBtYXBzIHNlbGVjdGVkIGZvciBzYXZpbmcuPC9wPlxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlIGJ0biBidG4tZGVmYXVsdFwiXFxuICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXFxuICAgICAgICAgICAgICB0cmFuc2xhdGU+T2tcXG4gICAgICA8L2J1dHRvbj5cXG4gIDwvZGl2Plxcbjwvbmdlby1tb2RhbD5cXG5cXG48bmdlby1tb2RhbCBuZy1tb2RlbD1cIiRjdHJsLmRpc3BsYXlBbGVydERlc3Ryb3lEYXRhXCI+XFxuICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XFxuICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgdHJhbnNsYXRlPldhcm5pbmc8L2g0PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcbiAgICAgIDxwIHRyYW5zbGF0ZT5EbyB5b3UgcmVhbGx5IHdhbnQgdG8gcmVtb3ZlIHlvdXIgZGF0YSA/PC9wPlxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidmFsaWRhdGUgYnRuIGJ0bi1wcmltYXJ5XCJcXG4gICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcXG4gICAgICAgICAgICAgIG5nLWNsaWNrPVwiJGN0cmwuZGVsZXRlRGF0YSgpXCJcXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZT5Pa1xcbiAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlIGJ0biBidG4tZGVmYXVsdFwiXFxuICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXFxuICAgICAgICAgICAgICB0cmFuc2xhdGU+Q2FuY2VsXFxuICAgICAgPC9idXR0b24+XFxuICA8L2Rpdj5cXG48L25nZW8tbW9kYWw+XFxuXFxuPG5nZW8tbW9kYWwgbmctbW9kZWw9XCIkY3RybC5kaXNwbGF5QWxlcnRBYm9ydERvd25sb2FkXCI+XFxuICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XFxuICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgdHJhbnNsYXRlPldhcm5pbmc8L2g0PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcbiAgICAgIDxwIHRyYW5zbGF0ZT5EbyB5b3UgcmVhbGx5IHdhbnQgdG8gcmVtb3ZlIHlvdXIgZGF0YSA/PC9wPlxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidmFsaWRhdGUgYnRuIGJ0bi1wcmltYXJ5XCJcXG4gICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcXG4gICAgICAgICAgICAgIG5nLWNsaWNrPVwiJGN0cmwuYWJvcnREb3dubG9hZCgpXCJcXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZT5Pa1xcbiAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlIGJ0biBidG4tZGVmYXVsdFwiXFxuICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXFxuICAgICAgICAgICAgICBuZy1jbGljaz1cIiRjdHJsLmZvbGxvd0Rvd25sb2FkUHJvZ3Jlc3Npb25fKClcIlxcbiAgICAgICAgICAgICAgdHJhbnNsYXRlPkNhbmNlbFxcbiAgICAgIDwvYnV0dG9uPlxcbiAgPC9kaXY+XFxuPC9uZ2VvLW1vZGFsPlxcbic7XG5cbn1cbnJldHVybiBfX3Bcbn0iLCJpbXBvcnQgbmdlb01hcEZlYXR1cmVPdmVybGF5TWdyIGZyb20gJ25nZW8vbWFwL0ZlYXR1cmVPdmVybGF5TWdyLmpzJztcbmltcG9ydCBuZ2VvTWVzc2FnZU1vZGFsQ29tcG9uZW50IGZyb20gJ25nZW8vbWVzc2FnZS9tb2RhbENvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBleHRlbnRUb1JlY3RhbmdsZSB9IGZyb20gJ25nZW8vdXRpbHMuanMnO1xuaW1wb3J0IG9sQ29sbGVjdGlvbiBmcm9tICdvbC9Db2xsZWN0aW9uLmpzJztcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUuanMnO1xuaW1wb3J0IFBvbHlnb24gZnJvbSAnb2wvZ2VvbS9Qb2x5Z29uLmpzJztcbmltcG9ydCB7IERFVklDRV9QSVhFTF9SQVRJTyB9IGZyb20gJ29sL2hhcy5qcyc7XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBNYXNrTGF5ZXIgZnJvbSAnLi9NYXNrLmpzJztcbnZhciBteU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCduZ2VvT2ZmbGluZScsIFtuZ2VvTWFwRmVhdHVyZU92ZXJsYXlNZ3IubmFtZSwgbmdlb01lc3NhZ2VNb2RhbENvbXBvbmVudC5uYW1lXSk7XG5teU1vZHVsZS52YWx1ZSgnbmdlb09mZmxpbmVUZW1wbGF0ZVVybCcsIGZ1bmN0aW9uIChlbGVtZW50LCBhdHRycykge1xuICB2YXIgdGVtcGxhdGVVcmwgPSBhdHRyc1snbmdlb09mZmxpbmVUZW1wbGF0ZXVybCddO1xuICByZXR1cm4gdGVtcGxhdGVVcmwgIT09IHVuZGVmaW5lZCA/IHRlbXBsYXRlVXJsIDogJ25nZW8vb2ZmbGluZS9jb21wb25lbnQuaHRtbCc7XG59KTtcbm15TW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCduZ2VvL29mZmxpbmUvY29tcG9uZW50Lmh0bWwnLCByZXF1aXJlKCcuL2NvbXBvbmVudC5odG1sJykpO1xufV0pO1xubmdlb09mZmxpbmVUZW1wbGF0ZVVybC4kaW5qZWN0ID0gW1wiJGVsZW1lbnRcIiwgXCIkYXR0cnNcIiwgXCJuZ2VvT2ZmbGluZVRlbXBsYXRlVXJsXCJdO1xuXG5mdW5jdGlvbiBuZ2VvT2ZmbGluZVRlbXBsYXRlVXJsKCRlbGVtZW50LCAkYXR0cnMsIG5nZW9PZmZsaW5lVGVtcGxhdGVVcmwpIHtcbiAgcmV0dXJuIG5nZW9PZmZsaW5lVGVtcGxhdGVVcmwoJGVsZW1lbnQsICRhdHRycyk7XG59XG5cbnZhciBjb21wb25lbnQgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgJ21hcCc6ICc8bmdlb09mZmxpbmVNYXAnLFxuICAgICdleHRlbnRTaXplJzogJzw/bmdlb09mZmxpbmVFeHRlbnRzaXplJyxcbiAgICAnbWFza01hcmdpbic6ICc8P25nZW9PZmZsaW5lTWFza01hcmdpbicsXG4gICAgJ21pblpvb20nOiAnPD9uZ2VvT2ZmbGluZU1pblpvb20nLFxuICAgICdtYXhab29tJzogJzw/bmdlb09mZmxpbmVNYXhab29tJ1xuICB9LFxuICBjb250cm9sbGVyOiAnbmdlb09mZmxpbmVDb250cm9sbGVyJyxcbiAgdGVtcGxhdGVVcmw6IG5nZW9PZmZsaW5lVGVtcGxhdGVVcmxcbn07XG5teU1vZHVsZS5jb21wb25lbnQoJ25nZW9PZmZsaW5lJywgY29tcG9uZW50KTtcbmV4cG9ydCB2YXIgQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHRpbWVvdXRcIiwgXCJuZ2VvRmVhdHVyZU92ZXJsYXlNZ3JcIiwgXCJuZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyXCIsIFwibmdlb09mZmxpbmVDb25maWd1cmF0aW9uXCIsIFwibmdlb09mZmxpbmVNb2RlXCIsIFwibmdlb05ldHdvcmtTdGF0dXNcIl07XG5cbiAgZnVuY3Rpb24gQ29udHJvbGxlcigkdGltZW91dCwgbmdlb0ZlYXR1cmVPdmVybGF5TWdyLCBuZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyLCBuZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb24sIG5nZW9PZmZsaW5lTW9kZSwgbmdlb05ldHdvcmtTdGF0dXMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy4kdGltZW91dF8gPSAkdGltZW91dDtcbiAgICB0aGlzLm1hc2tMYXllcl8gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5uZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyXyA9IG5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXI7XG4gICAgdGhpcy5uZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb25fID0gbmdlb09mZmxpbmVDb25maWd1cmF0aW9uO1xuICAgIHRoaXMub2ZmbGluZU1vZGUgPSBuZ2VvT2ZmbGluZU1vZGU7XG4gICAgdGhpcy5uZXR3b3JrU3RhdHVzID0gbmdlb05ldHdvcmtTdGF0dXM7XG4gICAgdGhpcy5tYXA7XG4gICAgdGhpcy5leHRlbnRTaXplID0gMDtcbiAgICB0aGlzLmZlYXR1cmVzT3ZlcmxheV8gPSBuZ2VvRmVhdHVyZU92ZXJsYXlNZ3IuZ2V0RmVhdHVyZU92ZXJsYXkoKTtcbiAgICB0aGlzLm92ZXJsYXlDb2xsZWN0aW9uXyA9IG5ldyBvbENvbGxlY3Rpb24oKTtcbiAgICB0aGlzLmZlYXR1cmVzT3ZlcmxheV8uc2V0RmVhdHVyZXModGhpcy5vdmVybGF5Q29sbGVjdGlvbl8pO1xuICAgIHRoaXMuZGF0YVBvbHlnb25fID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGluZ0V4dGVudCA9IGZhbHNlO1xuICAgIHRoaXMuZG93bmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnByb2dyZXNzUGVyY2VudHMgPSAwO1xuICAgIHRoaXMubWVudURpc3BsYXllZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheUFsZXJ0QWJvcnREb3dubG9hZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheUFsZXJ0TG9hZERhdGEgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXlBbGVydE5vTGF5ZXIgPSBmYWxzZTtcbiAgICB0aGlzLm1hc2tNYXJnaW4gPSAwO1xuICAgIHRoaXMubWluWm9vbTtcbiAgICB0aGlzLm1heFpvb207XG4gICAgdGhpcy5vcmlnaW5hbE1pblpvb207XG4gICAgdGhpcy5vcmlnaW5hbE1heFpvb207XG4gICAgdGhpcy5lc3RpbWF0ZWRMb2FkRGF0YVNpemUgPSAwO1xuICAgIHRoaXMucm90YXRlTWFzayA9IGZhbHNlO1xuXG4gICAgdGhpcy5wcm9ncmVzc0NhbGxiYWNrXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIHByb2dyZXNzID0gZXZlbnQuZGV0YWlsLnByb2dyZXNzO1xuICAgICAgX3RoaXMucHJvZ3Jlc3NQZXJjZW50cyA9IE1hdGguZmxvb3IocHJvZ3Jlc3MgKiAxMDApO1xuXG4gICAgICBpZiAocHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgX3RoaXMuZmluaXNoRG93bmxvYWRfKCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLiR0aW1lb3V0XyhmdW5jdGlvbiAoKSB7fSwgMCk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDb250cm9sbGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uJG9uSW5pdCA9IGZ1bmN0aW9uICRvbkluaXQoKSB7XG4gICAgdGhpcy5vZmZsaW5lTW9kZS5yZWdpc3RlckNvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLm5nZW9PZmZsaW5lQ29uZmlndXJhdGlvbl8ub24oJ3Byb2dyZXNzJywgdGhpcy5wcm9ncmVzc0NhbGxiYWNrXyk7XG4gICAgdGhpcy5tYXNrTWFyZ2luID0gdGhpcy5tYXNrTWFyZ2luIHx8IDEwMDtcbiAgICB0aGlzLm1pblpvb20gPSB0aGlzLm1pblpvb20gfHwgMTA7XG4gICAgdGhpcy5tYXhab29tID0gdGhpcy5tYXhab29tIHx8IDE1O1xuICAgIHRoaXMubWFza0xheWVyXyA9IG5ldyBNYXNrTGF5ZXIoe1xuICAgICAgZXh0ZW50SW5NZXRlcnM6IHRoaXMuZXh0ZW50U2l6ZVxuICAgIH0sIHtcbiAgICAgIG1hcmdpbjogdGhpcy5tYXNrTWFyZ2luXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLiRvbkRlc3Ryb3kgPSBmdW5jdGlvbiAkb25EZXN0cm95KCkge1xuICAgIHRoaXMubmdlb09mZmxpbmVDb25maWd1cmF0aW9uXy51bigncHJvZ3Jlc3MnLCB0aGlzLnByb2dyZXNzQ2FsbGJhY2tfKTtcbiAgfTtcblxuICBfcHJvdG8uaGFzRGF0YSA9IGZ1bmN0aW9uIGhhc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMubmdlb09mZmxpbmVDb25maWd1cmF0aW9uXy5oYXNPZmZsaW5lRGF0YSgpO1xuICB9O1xuXG4gIF9wcm90by5jb21wdXRlU2l6ZUFuZERpc3BsYXlBbGVydExvYWREYXRhID0gZnVuY3Rpb24gY29tcHV0ZVNpemVBbmREaXNwbGF5QWxlcnRMb2FkRGF0YSgpIHtcbiAgICB0aGlzLmVzdGltYXRlZExvYWREYXRhU2l6ZSA9IHRoaXMubmdlb09mZmxpbmVDb25maWd1cmF0aW9uXy5lc3RpbWF0ZUxvYWREYXRhU2l6ZSh0aGlzLm1hcCk7XG5cbiAgICBpZiAodGhpcy5lc3RpbWF0ZWRMb2FkRGF0YVNpemUgPiAwKSB7XG4gICAgICB0aGlzLmRpc3BsYXlBbGVydExvYWREYXRhID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5QWxlcnROb0xheWVyID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnRvZ2dsZVZpZXdFeHRlbnRTZWxlY3Rpb24gPSBmdW5jdGlvbiB0b2dnbGVWaWV3RXh0ZW50U2VsZWN0aW9uKGZpbmlzaGVkKSB7XG4gICAgdGhpcy5tZW51RGlzcGxheWVkID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RpbmdFeHRlbnQgPSAhdGhpcy5zZWxlY3RpbmdFeHRlbnQ7XG4gICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5tYXNrTGF5ZXJfKTtcbiAgICB0aGlzLnJlbW92ZVpvb21Db25zdHJhaW50c18oKTtcblxuICAgIGlmICh0aGlzLnNlbGVjdGluZ0V4dGVudCAmJiAhdGhpcy5tYXAuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKS5pbmNsdWRlcyh0aGlzLm1hc2tMYXllcl8pKSB7XG4gICAgICB0aGlzLmFkZFpvb21Db25zdHJhaW50c18oKTtcbiAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubWFza0xheWVyXyk7XG4gICAgfVxuXG4gICAgdGhpcy5tYXAucmVuZGVyKCk7XG4gIH07XG5cbiAgX3Byb3RvLnZhbGlkYXRlRXh0ZW50ID0gZnVuY3Rpb24gdmFsaWRhdGVFeHRlbnQoKSB7XG4gICAgdGhpcy5wcm9ncmVzc1BlcmNlbnRzID0gMDtcbiAgICB2YXIgZXh0ZW50ID0gdGhpcy5nZXREb3dsb2FkRXh0ZW50XygpO1xuICAgIHRoaXMuZG93bmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMubmdlb09mZmxpbmVTZXJ2aWNlTWFuYWdlcl8uc2F2ZShleHRlbnQsIHRoaXMubWFwKTtcbiAgfTtcblxuICBfcHJvdG8uZmluaXNoRG93bmxvYWRfID0gZnVuY3Rpb24gZmluaXNoRG93bmxvYWRfKCkge1xuICAgIHRoaXMuZG93bmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnRvZ2dsZVZpZXdFeHRlbnRTZWxlY3Rpb24odHJ1ZSk7XG4gIH07XG5cbiAgX3Byb3RvLmFza0Fib3J0RG93bmxvYWQgPSBmdW5jdGlvbiBhc2tBYm9ydERvd25sb2FkKCkge1xuICAgIHRoaXMuZGlzcGxheUFsZXJ0QWJvcnREb3dubG9hZCA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLmFib3J0RG93bmxvYWQgPSBmdW5jdGlvbiBhYm9ydERvd25sb2FkKCkge1xuICAgIHRoaXMuZG93bmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXJfLmNhbmNlbCgpO1xuICAgIHRoaXMuZGVsZXRlRGF0YSgpO1xuICB9O1xuXG4gIF9wcm90by5zaG93TWVudSA9IGZ1bmN0aW9uIHNob3dNZW51KCkge1xuICAgIHRoaXMubWVudURpc3BsYXllZCA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLmFjdGl2YXRlT2ZmbGluZU1vZGUgPSBmdW5jdGlvbiBhY3RpdmF0ZU9mZmxpbmVNb2RlKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdGhpcy5uZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyXy5yZXN0b3JlKHRoaXMubWFwKS50aGVuKGZ1bmN0aW9uIChleHRlbnQpIHtcbiAgICAgIF90aGlzMi5kYXRhUG9seWdvbl8gPSBfdGhpczIuY3JlYXRlUG9seWdvbkZyb21FeHRlbnRfKGV4dGVudCk7XG5cbiAgICAgIHZhciBzaXplID0gX3RoaXMyLm1hcC5nZXRTaXplKCk7XG5cbiAgICAgIGlmIChzaXplID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHNpemUnKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMyLm1hcC5nZXRWaWV3KCkuZml0KGV4dGVudCwge1xuICAgICAgICBzaXplOiBzaXplXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMyLm1lbnVEaXNwbGF5ZWQgPSBmYWxzZTtcblxuICAgICAgX3RoaXMyLmRpc3BsYXlFeHRlbnRfKCk7XG5cbiAgICAgIF90aGlzMi5vZmZsaW5lTW9kZS5lbmFibGUoKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZGVhY3RpdmF0ZU9mZmxpbmVNb2RlID0gZnVuY3Rpb24gZGVhY3RpdmF0ZU9mZmxpbmVNb2RlKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfTtcblxuICBfcHJvdG8udG9nZ2xlRXh0ZW50VmlzaWJpbGl0eSA9IGZ1bmN0aW9uIHRvZ2dsZUV4dGVudFZpc2liaWxpdHkoKSB7XG4gICAgaWYgKHRoaXMuaXNFeHRlbnRWaXNpYmxlKCkpIHtcbiAgICAgIHRoaXMub3ZlcmxheUNvbGxlY3Rpb25fLmNsZWFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcGxheUV4dGVudF8oKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmlzRXh0ZW50VmlzaWJsZSA9IGZ1bmN0aW9uIGlzRXh0ZW50VmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5Q29sbGVjdGlvbl8uZ2V0TGVuZ3RoKCkgPiAwO1xuICB9O1xuXG4gIF9wcm90by5kZWxldGVEYXRhID0gZnVuY3Rpb24gZGVsZXRlRGF0YSgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMub3ZlcmxheUNvbGxlY3Rpb25fLmNsZWFyKCk7XG4gICAgdGhpcy5kYXRhUG9seWdvbl8gPSBudWxsO1xuXG4gICAgaWYgKHRoaXMubmV0d29ya1N0YXR1cy5pc0Rpc2Nvbm5lY3RlZCgpKSB7XG4gICAgICB0aGlzLm1lbnVEaXNwbGF5ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgcmVsb2FkSWZJbk9mZmxpbmVNb2RlID0gZnVuY3Rpb24gcmVsb2FkSWZJbk9mZmxpbmVNb2RlKCkge1xuICAgICAgaWYgKF90aGlzMy5vZmZsaW5lTW9kZS5pc0VuYWJsZWQoKSkge1xuICAgICAgICBfdGhpczMuZGVhY3RpdmF0ZU9mZmxpbmVNb2RlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMubmdlb09mZmxpbmVDb25maWd1cmF0aW9uXy5jbGVhcigpLnRoZW4ocmVsb2FkSWZJbk9mZmxpbmVNb2RlKTtcbiAgfTtcblxuICBfcHJvdG8uZGlzcGxheUV4dGVudF8gPSBmdW5jdGlvbiBkaXNwbGF5RXh0ZW50XygpIHtcbiAgICBpZiAoIXRoaXMuaXNFeHRlbnRWaXNpYmxlKCkgJiYgdGhpcy5kYXRhUG9seWdvbl8pIHtcbiAgICAgIHZhciBmZWF0dXJlID0gbmV3IEZlYXR1cmUodGhpcy5kYXRhUG9seWdvbl8pO1xuICAgICAgdGhpcy5vdmVybGF5Q29sbGVjdGlvbl8ucHVzaChmZWF0dXJlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmFkZFpvb21Db25zdHJhaW50c18gPSBmdW5jdGlvbiBhZGRab29tQ29uc3RyYWludHNfKCkge1xuICAgIHZhciB2aWV3ID0gdGhpcy5tYXAuZ2V0VmlldygpO1xuICAgIHZhciB6b29tID0gdmlldy5nZXRab29tKCkgfHwgMDtcbiAgICB0aGlzLm9yaWdpbmFsTWluWm9vbSA9IHZpZXcuZ2V0TWluWm9vbSgpO1xuICAgIHRoaXMub3JpZ2luYWxNYXhab29tID0gdmlldy5nZXRNYXhab29tKCk7XG5cbiAgICBpZiAoem9vbSA8IHRoaXMubWluWm9vbSkge1xuICAgICAgdmlldy5zZXRab29tKHRoaXMubWluWm9vbSk7XG4gICAgfSBlbHNlIGlmICh6b29tID4gdGhpcy5tYXhab29tKSB7XG4gICAgICB2aWV3LnNldFpvb20odGhpcy5tYXhab29tKTtcbiAgICB9XG5cbiAgICB2aWV3LnNldE1heFpvb20odGhpcy5tYXhab29tKTtcbiAgICB2aWV3LnNldE1pblpvb20odGhpcy5taW5ab29tKTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlWm9vbUNvbnN0cmFpbnRzXyA9IGZ1bmN0aW9uIHJlbW92ZVpvb21Db25zdHJhaW50c18oKSB7XG4gICAgdmFyIHZpZXcgPSB0aGlzLm1hcC5nZXRWaWV3KCk7XG5cbiAgICBpZiAodGhpcy5vcmlnaW5hbE1heFpvb20gIT09IHVuZGVmaW5lZCAmJiB0aGlzLm9yaWdpbmFsTWluWm9vbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2aWV3LnNldE1heFpvb20odGhpcy5vcmlnaW5hbE1heFpvb20pO1xuICAgICAgdmlldy5zZXRNaW5ab29tKHRoaXMub3JpZ2luYWxNaW5ab29tKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNyZWF0ZVBvbHlnb25Gcm9tRXh0ZW50XyA9IGZ1bmN0aW9uIGNyZWF0ZVBvbHlnb25Gcm9tRXh0ZW50XyhleHRlbnQpIHtcbiAgICB2YXIgcHJvakV4dGVudCA9IHRoaXMubWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCkuZ2V0RXh0ZW50KCk7XG4gICAgcmV0dXJuIG5ldyBQb2x5Z29uKFtleHRlbnRUb1JlY3RhbmdsZShwcm9qRXh0ZW50KSwgZXh0ZW50VG9SZWN0YW5nbGUoZXh0ZW50KV0sICdYWScpO1xuICB9O1xuXG4gIF9wcm90by5nZXREb3dsb2FkRXh0ZW50XyA9IGZ1bmN0aW9uIGdldERvd2xvYWRFeHRlbnRfKCkge1xuICAgIHZhciBjZW50ZXIgPSB0aGlzLm1hcC5nZXRWaWV3KCkuZ2V0Q2VudGVyKCk7XG4gICAgdmFyIGhhbGZMZW5ndGggPSBNYXRoLmNlaWwodGhpcy5leHRlbnRTaXplIHx8IHRoaXMuZ2V0RXh0ZW50U2l6ZV8oKSkgLyAyO1xuICAgIHJldHVybiB0aGlzLm1hc2tMYXllcl8uY3JlYXRlRXh0ZW50KGNlbnRlciwgaGFsZkxlbmd0aCk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEV4dGVudFNpemVfID0gZnVuY3Rpb24gZ2V0RXh0ZW50U2l6ZV8oKSB7XG4gICAgdmFyIG1hcFNpemUgPSB0aGlzLm1hcC5nZXRTaXplKCkgfHwgWzE1MCwgMTUwXTtcbiAgICB2YXIgbWFza1NpemVQaXhlbCA9IERFVklDRV9QSVhFTF9SQVRJTyAqIE1hdGgubWluKG1hcFNpemVbMF0sIG1hcFNpemVbMV0pIC0gdGhpcy5tYXNrTWFyZ2luICogMjtcbiAgICB2YXIgbWFza1NpemVNZXRlciA9IG1hc2tTaXplUGl4ZWwgKiAodGhpcy5tYXAuZ2V0VmlldygpLmdldFJlc29sdXRpb24oKSB8fCAxKSAvIERFVklDRV9QSVhFTF9SQVRJTztcbiAgICByZXR1cm4gbWFza1NpemVNZXRlcjtcbiAgfTtcblxuICByZXR1cm4gQ29udHJvbGxlcjtcbn0oKTtcbm15TW9kdWxlLmNvbnRyb2xsZXIoJ25nZW9PZmZsaW5lQ29udHJvbGxlcicsIENvbnRyb2xsZXIpO1xuZXhwb3J0IGRlZmF1bHQgbXlNb2R1bGU7IiwiaW1wb3J0IG5nZW9PZmZsaW5lQ29tcG9uZW50IGZyb20gJ25nZW8vb2ZmbGluZS9jb21wb25lbnQuanMnO1xuaW1wb3J0IG5nZW9PZmZsaW5lTmV0d29ya1N0YXR1cyBmcm9tICduZ2VvL29mZmxpbmUvTmV0d29ya1N0YXR1cy5qcyc7XG5pbXBvcnQgbmdlb09mZmxpbmVTZXJ2aWNlTWFuYWdlciBmcm9tICduZ2VvL29mZmxpbmUvU2VydmljZU1hbmFnZXIuanMnO1xuaW1wb3J0IGRvd25sb2FkZXIgZnJvbSAnbmdlby9vZmZsaW5lL0Rvd25sb2FkZXIuanMnO1xuaW1wb3J0IHJlc3RvcmVyIGZyb20gJ25nZW8vb2ZmbGluZS9SZXN0b3Jlci5qcyc7XG5pbXBvcnQgbW9kZSBmcm9tICduZ2VvL29mZmxpbmUvTW9kZS5qcyc7XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbnZhciBleHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ25nZW9PZmZsaW5lTW9kdWxlJywgW25nZW9PZmZsaW5lQ29tcG9uZW50Lm5hbWUsIG5nZW9PZmZsaW5lTmV0d29ya1N0YXR1cy5tb2R1bGUubmFtZSwgbmdlb09mZmxpbmVTZXJ2aWNlTWFuYWdlci5tb2R1bGUubmFtZSwgZG93bmxvYWRlci5tb2R1bGUubmFtZSwgcmVzdG9yZXIubW9kdWxlLm5hbWUsIG1vZGUubW9kdWxlLm5hbWVdKTtcbmV4cG9ydHMudmFsdWUoJ25nZW9PZmZsaW5lR3V0dGVyJywgOTYpO1xuZXhwb3J0IGRlZmF1bHQgZXhwb3J0czsiLCJpbXBvcnQgb2xMYXllckdyb3VwIGZyb20gJ29sL2xheWVyL0dyb3VwLmpzJztcbmV4cG9ydCBmdW5jdGlvbiB0cmF2ZXJzZUxheWVyKGxheWVyLCBhbmNlc3RvcnMsIHZpc2l0b3IpIHtcbiAgdmFyIGRlc2NlbmQgPSB2aXNpdG9yKGxheWVyLCBhbmNlc3RvcnMpO1xuXG4gIGlmIChkZXNjZW5kICYmIGxheWVyIGluc3RhbmNlb2Ygb2xMYXllckdyb3VwKSB7XG4gICAgbGF5ZXIuZ2V0TGF5ZXJzKCkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGRMYXllcikge1xuICAgICAgdHJhdmVyc2VMYXllcihjaGlsZExheWVyLCBbXS5jb25jYXQoYW5jZXN0b3JzLCBbbGF5ZXJdKSwgdmlzaXRvcik7XG4gICAgfSk7XG4gIH1cbn1cbnZhciBleHRyYWN0b3IgPSBuZXcgUmVnRXhwKCdbXi9dKi8vW14vXSsvKC4qKScpO1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVVSTCh1cmwpIHtcbiAgdmFyIG1hdGNoZXMgPSB1cmwubWF0Y2goZXh0cmFjdG9yKTtcblxuICBpZiAoIW1hdGNoZXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBub3JtYWxpemUgdXJsICcgKyB1cmwpO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXNbMV07XG59Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFKQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5RUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9