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
/******/ 	deferredModules.push([31,"commons"]);
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
/* harmony import */ var _common_dependencies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common_dependencies */ "./examples/common_dependencies.js");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var gmf_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gmf/map/component */ "./src/map/component.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./options */ "./examples/options.js");
/* harmony import */ var ngeo_offline_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngeo/offline/module */ "./src/offline/module.js");
/* harmony import */ var ngeo_offline_Configuration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngeo/offline/Configuration */ "./src/offline/Configuration.js");
/* harmony import */ var ngeo_map_FeatureOverlayMgr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngeo/map/FeatureOverlayMgr */ "./src/map/FeatureOverlayMgr.ts");
/* harmony import */ var ngeo_offline_ServiceManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngeo/offline/ServiceManager */ "./src/offline/ServiceManager.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_13__);
// The MIT License (MIT)
//
// Copyright (c) 2018-2022 Camptocamp SA
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
   * @param {import('ngeo/offline/NetworkStatus').default} ngeoNetworkStatus ngeo network status service.
   * @param {NgeoOfflineServiceManager} ngeoOfflineServiceManager ngeo offline service.
   * @ngInject
   */
  constructor(ngeoNetworkStatus, ngeoOfflineServiceManager) {
    /**
     * Save a square of 10 km sideways (Map's unit is the meter).
     *
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
    this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_3__["default"]({
      layers: [
        new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_5__["default"]({
          source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_6__["default"](),
        }),
      ],
      view: new ol_View__WEBPACK_IMPORTED_MODULE_4__["default"]({
        center: [352379, 5172733],
        zoom: 4,
      }),
    });

    ngeo_map_FeatureOverlayMgr__WEBPACK_IMPORTED_MODULE_11__["default"].init(this.map);

    ngeoOfflineServiceManager.setSaveService('offlineDownloader');
    ngeoOfflineServiceManager.setRestoreService('ngeoOfflineRestorer');
  }
}

/** @type {!angular.IModule} **/
const myModule = angular__WEBPACK_IMPORTED_MODULE_13___default.a.module('app', [
  'gettext',
  gmf_map_component__WEBPACK_IMPORTED_MODULE_7__["default"].name,
  ngeo_offline_module__WEBPACK_IMPORTED_MODULE_9__["default"].name,
  ngeo_offline_ServiceManager__WEBPACK_IMPORTED_MODULE_12__["default"].module.name,
]);

myModule.value('ngeoOfflineTestUrl', '../../src/offline/component.html');

// Define the offline download configuration service
myModule.service('ngeoOfflineConfiguration', ngeo_offline_Configuration__WEBPACK_IMPORTED_MODULE_10__["default"]);

myModule.controller('MainController', MainController);

myModule.constant('ngeoTilesPreloadingLimit', 0);

Object(_options__WEBPACK_IMPORTED_MODULE_8__["default"])(myModule);

/* harmony default export */ __webpack_exports__["default"] = (MainController);


/***/ }),

/***/ "./node_modules/localforage/src/localforage.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/localforage/src/localforage.js from dll-reference vendor ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(1589);

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
/* harmony import */ var ol_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/Observable */ "./node_modules/ol/Observable.js");
/* harmony import */ var ol_layer_Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/layer/Layer */ "./node_modules/ol/layer/Layer.js");
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/layer/Vector */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_layer_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Image */ "./node_modules/ol/layer/Image.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_source_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/Image */ "./node_modules/ol/source/Image.js");
/* harmony import */ var ol_source_ImageWMS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/source/ImageWMS */ "./node_modules/ol/source/ImageWMS.js");
/* harmony import */ var ol_source_TileWMS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/source/TileWMS */ "./node_modules/ol/source/TileWMS.js");
/* harmony import */ var ol_tilegrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/tilegrid */ "./node_modules/ol/tilegrid.js");
/* harmony import */ var ngeo_offline_SerializerDeserializer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngeo/offline/SerializerDeserializer */ "./src/offline/SerializerDeserializer.js");
/* harmony import */ var ngeo_offline_LocalforageCordovaWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngeo/offline/LocalforageCordovaWrapper */ "./src/offline/LocalforageCordovaWrapper.js");
/* harmony import */ var ngeo_offline_LocalforageAndroidWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngeo/offline/LocalforageAndroidWrapper */ "./src/offline/LocalforageAndroidWrapper.js");
/* harmony import */ var ngeo_offline_LocalforageIosWrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngeo/offline/LocalforageIosWrapper */ "./src/offline/LocalforageIosWrapper.js");
/* harmony import */ var ngeo_CustomEvent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngeo/CustomEvent */ "./src/CustomEvent.js");
/* harmony import */ var ngeo_offline_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngeo/offline/utils */ "./src/offline/utils.js");
/* harmony import */ var localforage_src_localforage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! localforage/src/localforage */ "./node_modules/localforage/src/localforage.js");
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
    _this.serDes_ = new ngeo_offline_SerializerDeserializer__WEBPACK_IMPORTED_MODULE_10__["default"]({
      gutter: ngeoOfflineGutter
    });
    _this.gutter_ = ngeoOfflineGutter;
    return _this;
  }

  var _proto = _default.prototype;

  _proto.dispatchProgress_ = function dispatchProgress_(progress) {
    this.dispatchEvent(new ngeo_CustomEvent__WEBPACK_IMPORTED_MODULE_14__["default"]('progress', {
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
      return new ngeo_offline_LocalforageCordovaWrapper__WEBPACK_IMPORTED_MODULE_11__["default"]();
    } else if (location.search.includes('localforage=android')) {
      console.log('Using android localforage');
      return new ngeo_offline_LocalforageAndroidWrapper__WEBPACK_IMPORTED_MODULE_12__["default"]();
    } else if (location.search.includes('localforage=ios')) {
      console.log('Using ios localforage');
      return new ngeo_offline_LocalforageIosWrapper__WEBPACK_IMPORTED_MODULE_13__["default"]();
    }

    return localforage_src_localforage__WEBPACK_IMPORTED_MODULE_16__["default"];
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
      return this.setItem(Object(ngeo_offline_utils__WEBPACK_IMPORTED_MODULE_15__["normalizeURL"])(tile.url), tile.response);
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
    if (source instanceof ol_source_ImageWMS__WEBPACK_IMPORTED_MODULE_7__["default"] && source.getUrl() && source.getImageLoadFunction() === ol_source_Image__WEBPACK_IMPORTED_MODULE_6__["defaultImageLoadFunction"]) {
      var tileGrid = Object(ol_tilegrid__WEBPACK_IMPORTED_MODULE_9__["createForProjection"])(source.getProjection() || projection, 42, 256);
      var attributions = source.getAttributions() || '';
      var url = source.getUrl();

      if (!url || !attributions) {
        throw new Error('Invalid values');
      }

      source = new ol_source_TileWMS__WEBPACK_IMPORTED_MODULE_8__["default"]({
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
      if (layer instanceof ol_layer_Layer__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        var extentByZoom = _this3.getExtentByZoom(map, layer, ancestors, userExtent);

        var projection = ol_proj__WEBPACK_IMPORTED_MODULE_5__["get"](map.getView().getProjection());

        var source = _this3.sourceImageWMSToTileWMS(layer.getSource(), projection);

        var layerType;
        var layerSerialization;

        if (layer instanceof ol_layer_Tile__WEBPACK_IMPORTED_MODULE_3__["default"] || layer instanceof ol_layer_Image__WEBPACK_IMPORTED_MODULE_4__["default"]) {
          layerType = 'tile';
          layerSerialization = _this3.serDes_.serializeTileLayer(layer, source);
        } else if (layer instanceof ol_layer_Vector__WEBPACK_IMPORTED_MODULE_2__["default"]) {
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
      Object(ngeo_offline_utils__WEBPACK_IMPORTED_MODULE_15__["traverseLayer"])(root, [], visitLayer);
    });
    return layersItems;
  };

  _proto.createTileLoadFunction_ = function createTileLoadFunction_(offlineLayer) {
    var _this4 = this;

    var tileLoadFunction = function tileLoadFunction(imageTile, src) {
      _this4.getItem(Object(ngeo_offline_utils__WEBPACK_IMPORTED_MODULE_15__["normalizeURL"])(src)).then(function (content) {
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
}(ol_Observable__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/offline/Downloader.js":
/*!***********************************!*\
  !*** ./src/offline/Downloader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_has__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/has */ "./node_modules/ol/has.js");
/* harmony import */ var ol_source_TileWMS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/source/TileWMS */ "./node_modules/ol/source/TileWMS.js");
/* harmony import */ var ol_source_WMTS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/source/WMTS */ "./node_modules/ol/source/WMTS.js");
/* harmony import */ var ngeo_offline_TilesDownloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/offline/TilesDownloader */ "./src/offline/TilesDownloader.js");
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

    console.assert(source instanceof ol_source_TileWMS__WEBPACK_IMPORTED_MODULE_1__["default"] || source instanceof ol_source_WMTS__WEBPACK_IMPORTED_MODULE_2__["default"]);
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

        var url = tileUrlFunction(coord, ol_has__WEBPACK_IMPORTED_MODULE_0__["DEVICE_PIXEL_RATIO"], projection);
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
    this.tileDownloader_ = new ngeo_offline_TilesDownloader__WEBPACK_IMPORTED_MODULE_3__["default"](queue, this.configuration_, maxDownloads);
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
/* harmony import */ var ngeo_offline_AbstractLocalforageWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/offline/AbstractLocalforageWrapper */ "./src/offline/AbstractLocalforageWrapper.js");
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
}(ngeo_offline_AbstractLocalforageWrapper__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
/* harmony import */ var ngeo_offline_AbstractLocalforageWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/offline/AbstractLocalforageWrapper */ "./src/offline/AbstractLocalforageWrapper.js");
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
}(ngeo_offline_AbstractLocalforageWrapper__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
/* harmony import */ var ngeo_offline_AbstractLocalforageWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/offline/AbstractLocalforageWrapper */ "./src/offline/AbstractLocalforageWrapper.js");
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
}(ngeo_offline_AbstractLocalforageWrapper__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
/* harmony import */ var ol_layer_Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/layer/Layer */ "./node_modules/ol/layer/Layer.js");
/* harmony import */ var ol_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/dom */ "./node_modules/ol/dom.js");
/* harmony import */ var ol_has__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/has */ "./node_modules/ol/has.js");
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
    _this.context_ = Object(ol_dom__WEBPACK_IMPORTED_MODULE_1__["createCanvasContext2D"])();
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
      extentLength = ol_has__WEBPACK_IMPORTED_MODULE_2__["DEVICE_PIXEL_RATIO"] * this.extentInMeters_ / frameState.viewState.resolution;
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
}(ol_layer_Layer__WEBPACK_IMPORTED_MODULE_0__["default"]);



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
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var ngeo_misc_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/misc/debounce */ "./src/misc/debounce.js");
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
Service.module = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module(name, [ngeo_misc_debounce__WEBPACK_IMPORTED_MODULE_0__["default"].name]);
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
/* harmony import */ var ngeo_map_BackgroundLayerMgr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/map/BackgroundLayerMgr */ "./src/map/BackgroundLayerMgr.js");
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
Restorer.module = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module(name, [ngeo_map_BackgroundLayerMgr__WEBPACK_IMPORTED_MODULE_0__["default"].name]).service(name, Restorer);
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
/* harmony import */ var ol_tilegrid_TileGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/tilegrid/TileGrid */ "./node_modules/ol/tilegrid/TileGrid.js");
/* harmony import */ var ol_tilegrid_WMTS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/tilegrid/WMTS */ "./node_modules/ol/tilegrid/WMTS.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_source_TileWMS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source/TileWMS */ "./node_modules/ol/source/TileWMS.js");
/* harmony import */ var ol_source_WMTS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/source/WMTS */ "./node_modules/ol/source/WMTS.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");







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
    return new ol_tilegrid_TileGrid__WEBPACK_IMPORTED_MODULE_0__["default"](options);
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
    return new ol_tilegrid_WMTS__WEBPACK_IMPORTED_MODULE_1__["default"](options);
  };

  _proto.serializeSourceTileWMS = function serializeSourceTileWMS(source) {
    var obj = this.createBaseObject_(source);
    obj.params = source.getParams();
    obj.urls = source.getUrls();
    obj.tileGrid = this.serializeTilegrid(source.getTileGrid());
    var projection = source.getProjection();

    if (projection) {
      obj.projection = ol_proj__WEBPACK_IMPORTED_MODULE_2__["get"](source.getProjection()).getCode();
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
    return new ol_source_TileWMS__WEBPACK_IMPORTED_MODULE_3__["default"](options);
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
      obj.projection = ol_proj__WEBPACK_IMPORTED_MODULE_2__["get"](source.getProjection()).getCode();
    }

    return JSON.stringify(obj);
  };

  _proto.deserializeSourceWMTS = function deserializeSourceWMTS(serialization, tileLoadFunction) {
    var options = JSON.parse(serialization);
    options.tileLoadFunction = tileLoadFunction;

    if (options.tileGrid) {
      options.tileGrid = this.deserializeTilegridWMTS(options.tileGrid);
    }

    return new ol_source_WMTS__WEBPACK_IMPORTED_MODULE_4__["default"](options);
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

    if (source instanceof ol_source_TileWMS__WEBPACK_IMPORTED_MODULE_3__["default"]) {
      obj.source = this.serializeSourceTileWMS(source);
      obj.sourceType = 'tileWMS';
    } else if (source instanceof ol_source_WMTS__WEBPACK_IMPORTED_MODULE_4__["default"]) {
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

    return new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_5__["default"](options);
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
__p += '<div class="main-button">\n  <span ng-if="!$ctrl.hasData()">\n    <div class="no-data fas fa-arrow-circle-down" ng-click="$ctrl.toggleViewExtentSelection()"></div>\n  </span>\n  <span ng-if="$ctrl.hasData()">\n    <div class="with-data fas fa-arrow-circle-down" ng-click="$ctrl.showMenu()"></div>\n  </span>\n</div>\n\n<div\n  ng-if="$ctrl.selectingExtent && !$ctrl.networkStatus.isDisconnected()"\n  class="validate-extent btn btn-primary"\n>\n  <div ng-if="!$ctrl.downloading" ng-click="$ctrl.computeSizeAndDisplayAlertLoadData()" translate>\n    Save map\n  </div>\n  <div ng-if="$ctrl.downloading" ng-click="$ctrl.askAbortDownload()" translate>Abort</div>\n</div>\n\n<div ng-if="$ctrl.downloading" class="in-progress">\n  <div>{{$ctrl.progressPercents}}%</div>\n</div>\n\n<ngeo-modal ng-model="$ctrl.menuDisplayed">\n  <div class="modal-header">\n    <button type="button" class="close" data-dismiss="modal" aria-label="{{\'Close\' | translate}}">\n      <span aria-hidden="true">&times;</span>\n    </button>\n    <h4 class="modal-title" translate>Offline map</h4>\n  </div>\n  <div class="modal-body">\n    <div ng-if="$ctrl.hasData()">\n      <button\n        type="button"\n        class="extent-zoom btn btn-default"\n        ng-if="!$ctrl.offlineMode.isEnabled()"\n        ng-click="$ctrl.activateOfflineMode()"\n        translate\n      >\n        Activate offline mode\n      </button>\n      <button\n        type="button"\n        class="extent-zoom btn btn-default"\n        ng-if="$ctrl.offlineMode.isEnabled() && !$ctrl.networkStatus.isDisconnected()"\n        ng-click="$ctrl.deactivateOfflineMode()"\n        translate\n      >\n        Deactivate offline mode\n      </button>\n\n      <button\n        type="button"\n        class="extent-show btn btn-default"\n        ng-if="$ctrl.offlineMode.isEnabled()"\n        ng-click="$ctrl.toggleExtentVisibility()"\n      >\n        <span ng-if="$ctrl.isExtentVisible()" translate>Hide extent</span>\n        <span ng-if="!$ctrl.isExtentVisible()" translate>Show extent</span>\n      </button>\n      <button\n        type="button"\n        class="delete btn btn-default"\n        ng-if="!$ctrl.networkStatus.isDisconnected()"\n        ng-click="$ctrl.displayAlertDestroyData = true"\n        translate\n      >\n        Delete data\n      </button>\n    </div>\n    <div ng-if="!$ctrl.hasData() && !$ctrl.networkStatus.isDisconnected()">\n      <button\n        type="button"\n        class="new-data btn btn-default"\n        ng-click="$ctrl.toggleViewExtentSelection()"\n        translate\n      >\n        Save new map\n      </button>\n    </div>\n  </div>\n</ngeo-modal>\n\n<ngeo-modal ng-model="$ctrl.displayAlertLoadData">\n  <div class="modal-header">\n    <h4 class="modal-title" translate>Warning</h4>\n  </div>\n  <div class="modal-body">\n    <p translate>\n      ~{{$ctrl.estimatedLoadDataSize}}MB of maps will be downloaded (until scale 1:25\'000) - Don\'t lock your\n      device or navigate away from this site during the download process. Deactivate "private" mode of your\n      browser.\n    </p>\n    <button\n      type="button"\n      class="validate btn btn-primary"\n      data-dismiss="modal"\n      ng-click="$ctrl.validateExtent()"\n      translate\n    >\n      Ok\n    </button>\n    <button type="button" class="delete btn btn-default" data-dismiss="modal" translate>Cancel</button>\n  </div>\n</ngeo-modal>\n\n<ngeo-modal ng-model="$ctrl.displayAlertNoLayer">\n  <div class="modal-header">\n    <h4 class="modal-title" translate>Warning</h4>\n  </div>\n  <div class="modal-body">\n    <p translate>No maps selected for saving.</p>\n    <button type="button" class="delete btn btn-default" data-dismiss="modal" translate>Ok</button>\n  </div>\n</ngeo-modal>\n\n<ngeo-modal ng-model="$ctrl.displayAlertDestroyData">\n  <div class="modal-header">\n    <h4 class="modal-title" translate>Warning</h4>\n  </div>\n  <div class="modal-body">\n    <p translate>Do you really want to remove your data ?</p>\n    <button\n      type="button"\n      class="validate btn btn-primary"\n      data-dismiss="modal"\n      ng-click="$ctrl.deleteData()"\n      translate\n    >\n      Ok\n    </button>\n    <button type="button" class="delete btn btn-default" data-dismiss="modal" translate>Cancel</button>\n  </div>\n</ngeo-modal>\n\n<ngeo-modal ng-model="$ctrl.displayAlertAbortDownload">\n  <div class="modal-header">\n    <h4 class="modal-title" translate>Warning</h4>\n  </div>\n  <div class="modal-body">\n    <p translate>Do you really want to remove your data ?</p>\n    <button\n      type="button"\n      class="validate btn btn-primary"\n      data-dismiss="modal"\n      ng-click="$ctrl.abortDownload()"\n      translate\n    >\n      Ok\n    </button>\n    <button\n      type="button"\n      class="delete btn btn-default"\n      data-dismiss="modal"\n      ng-click="$ctrl.followDownloadProgression_()"\n      translate\n    >\n      Cancel\n    </button>\n  </div>\n</ngeo-modal>\n';

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
/* harmony import */ var ngeo_map_FeatureOverlayMgr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/map/FeatureOverlayMgr */ "./src/map/FeatureOverlayMgr.ts");
/* harmony import */ var ngeo_message_modalComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/message/modalComponent */ "./src/message/modalComponent.js");
/* harmony import */ var ngeo_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/utils */ "./src/utils.js");
/* harmony import */ var ol_Collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/Collection */ "./node_modules/ol/Collection.js");
/* harmony import */ var ol_Feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_geom_Polygon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/geom/Polygon */ "./node_modules/ol/geom/Polygon.js");
/* harmony import */ var ol_has__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/has */ "./node_modules/ol/has.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Mask */ "./src/offline/Mask.js");









var myModule = angular__WEBPACK_IMPORTED_MODULE_7___default.a.module('ngeoOffline', [ngeo_message_modalComponent__WEBPACK_IMPORTED_MODULE_1__["default"].name]);
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
  Controller.$inject = ["$timeout", "ngeoOfflineServiceManager", "ngeoOfflineConfiguration", "ngeoOfflineMode", "ngeoNetworkStatus"];

  function Controller($timeout, ngeoOfflineServiceManager, ngeoOfflineConfiguration, ngeoOfflineMode, ngeoNetworkStatus) {
    var _this = this;

    this.$timeout_ = $timeout;
    this.maskLayer_ = undefined;
    this.ngeoOfflineServiceManager_ = ngeoOfflineServiceManager;
    this.ngeoOfflineConfiguration_ = ngeoOfflineConfiguration;
    this.offlineMode = ngeoOfflineMode;
    this.networkStatus = ngeoNetworkStatus;
    this.map;
    this.extentSize = 0;
    this.featuresOverlay_ = ngeo_map_FeatureOverlayMgr__WEBPACK_IMPORTED_MODULE_0__["default"].getFeatureOverlay();
    this.overlayCollection_ = new ol_Collection__WEBPACK_IMPORTED_MODULE_3__["default"]();
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
    this.maskLayer_ = new _Mask__WEBPACK_IMPORTED_MODULE_8__["default"]({
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
      var feature = new ol_Feature__WEBPACK_IMPORTED_MODULE_4__["default"](this.dataPolygon_);
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
    return new ol_geom_Polygon__WEBPACK_IMPORTED_MODULE_5__["default"]([Object(ngeo_utils__WEBPACK_IMPORTED_MODULE_2__["extentToRectangle"])(projExtent), Object(ngeo_utils__WEBPACK_IMPORTED_MODULE_2__["extentToRectangle"])(extent)], 'XY');
  };

  _proto.getDowloadExtent_ = function getDowloadExtent_() {
    var center = this.map.getView().getCenter();
    var halfLength = Math.ceil(this.extentSize || this.getExtentSize_()) / 2;
    return this.maskLayer_.createExtent(center, halfLength);
  };

  _proto.getExtentSize_ = function getExtentSize_() {
    var mapSize = this.map.getSize() || [150, 150];
    var maskSizePixel = ol_has__WEBPACK_IMPORTED_MODULE_6__["DEVICE_PIXEL_RATIO"] * Math.min(mapSize[0], mapSize[1]) - this.maskMargin * 2;
    var maskSizeMeter = maskSizePixel * (this.map.getView().getResolution() || 1) / ol_has__WEBPACK_IMPORTED_MODULE_6__["DEVICE_PIXEL_RATIO"];
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
/* harmony import */ var ngeo_offline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/offline/component */ "./src/offline/component.js");
/* harmony import */ var ngeo_offline_NetworkStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/offline/NetworkStatus */ "./src/offline/NetworkStatus.js");
/* harmony import */ var ngeo_offline_ServiceManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/offline/ServiceManager */ "./src/offline/ServiceManager.js");
/* harmony import */ var ngeo_offline_Downloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/offline/Downloader */ "./src/offline/Downloader.js");
/* harmony import */ var ngeo_offline_Restorer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/offline/Restorer */ "./src/offline/Restorer.js");
/* harmony import */ var ngeo_offline_Mode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/offline/Mode */ "./src/offline/Mode.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_6__);







var exports = angular__WEBPACK_IMPORTED_MODULE_6___default.a.module('ngeoOfflineModule', [ngeo_offline_component__WEBPACK_IMPORTED_MODULE_0__["default"].name, ngeo_offline_NetworkStatus__WEBPACK_IMPORTED_MODULE_1__["default"].module.name, ngeo_offline_ServiceManager__WEBPACK_IMPORTED_MODULE_2__["default"].module.name, ngeo_offline_Downloader__WEBPACK_IMPORTED_MODULE_3__["default"].module.name, ngeo_offline_Restorer__WEBPACK_IMPORTED_MODULE_4__["default"].module.name, ngeo_offline_Mode__WEBPACK_IMPORTED_MODULE_5__["default"].module.name]);
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
/* harmony import */ var ol_layer_Group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/layer/Group */ "./node_modules/ol/layer/Group.js");

function traverseLayer(layer, ancestors, visitor) {
  var descend = visitor(layer, ancestors);

  if (descend && layer instanceof ol_layer_Group__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    layer.getLayers().forEach(function (childLayer) {
      traverseLayer(childLayer, [].concat(ancestors, [layer]), visitor);
    });
  }
}
var extractor = new RegExp('[^/]*//[^/]+/(.*)');
function normalizeURL(url) {
  var matches = extractor.exec(url);

  if (!matches) {
    throw new Error('Could not normalize url ' + url);
  }

  return matches[1];
}

/***/ }),

/***/ 31:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmbGluZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9vZmZsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL0Fic3RyYWN0TG9jYWxmb3JhZ2VXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL0NvbmZpZ3VyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29mZmxpbmUvRG93bmxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2ZmbGluZS9Mb2NhbGZvcmFnZUFuZHJvaWRXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL0xvY2FsZm9yYWdlQ29yZG92YVdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29mZmxpbmUvTG9jYWxmb3JhZ2VJb3NXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL01hc2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29mZmxpbmUvTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2ZmbGluZS9OZXR3b3JrU3RhdHVzLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL1Jlc3RvcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL1NlcmlhbGl6ZXJEZXNlcmlhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29mZmxpbmUvU2VydmljZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29mZmxpbmUvVGlsZXNEb3dubG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL2NvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2ZmbGluZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29mZmxpbmUvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm9mZmxpbmVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHQvLyBTaW5jZSBhbGwgcmVmZXJlbmNlZCBjaHVua3MgYXJlIGFscmVhZHkgaW5jbHVkZWRcbiBcdC8vIGluIHRoaXMgZmlsZSwgdGhpcyBmdW5jdGlvbiBpcyBlbXB0eSBoZXJlLlxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZSgpIHtcbiBcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzMxLFwiY29tbW9uc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8vIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxOC0yMDIyIENhbXB0b2NhbXAgU0Fcbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG4vLyB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG4vLyB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXG4vLyB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZlxuLy8gdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuLy8gc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTXG4vLyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1Jcbi8vIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUlxuLy8gSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbi8vIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2ZvbnRhd2Vzb21lLm1pbi5jc3MnO1xuaW1wb3J0ICcuL29mZmxpbmUuY3NzJztcbmltcG9ydCAnLi9jb21tb25fZGVwZW5kZW5jaWVzJztcbmltcG9ydCBvbE1hcCBmcm9tICdvbC9NYXAnO1xuXG5pbXBvcnQgb2xWaWV3IGZyb20gJ29sL1ZpZXcnO1xuaW1wb3J0IG9sTGF5ZXJUaWxlIGZyb20gJ29sL2xheWVyL1RpbGUnO1xuaW1wb3J0IG9sU291cmNlT1NNIGZyb20gJ29sL3NvdXJjZS9PU00nO1xuaW1wb3J0IGdtZk1hcENvbXBvbmVudCBmcm9tICdnbWYvbWFwL2NvbXBvbmVudCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IG5nZW9PZmZsaW5lTW9kdWxlIGZyb20gJ25nZW8vb2ZmbGluZS9tb2R1bGUnO1xuaW1wb3J0IG5nZW9PZmZsaW5lQ29uZmlndXJhdGlvbiBmcm9tICduZ2VvL29mZmxpbmUvQ29uZmlndXJhdGlvbic7XG5pbXBvcnQgbmdlb01hcEZlYXR1cmVPdmVybGF5TWdyIGZyb20gJ25nZW8vbWFwL0ZlYXR1cmVPdmVybGF5TWdyJztcbmltcG9ydCBOZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyIGZyb20gJ25nZW8vb2ZmbGluZS9TZXJ2aWNlTWFuYWdlcic7XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcblxuY2xhc3MgTWFpbkNvbnRyb2xsZXIge1xuICAvKipcbiAgICogQHBhcmFtIHtpbXBvcnQoJ25nZW8vb2ZmbGluZS9OZXR3b3JrU3RhdHVzJykuZGVmYXVsdH0gbmdlb05ldHdvcmtTdGF0dXMgbmdlbyBuZXR3b3JrIHN0YXR1cyBzZXJ2aWNlLlxuICAgKiBAcGFyYW0ge05nZW9PZmZsaW5lU2VydmljZU1hbmFnZXJ9IG5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXIgbmdlbyBvZmZsaW5lIHNlcnZpY2UuXG4gICAqIEBuZ0luamVjdFxuICAgKi9cbiAgY29uc3RydWN0b3Iobmdlb05ldHdvcmtTdGF0dXMsIG5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXIpIHtcbiAgICAvKipcbiAgICAgKiBTYXZlIGEgc3F1YXJlIG9mIDEwIGttIHNpZGV3YXlzIChNYXAncyB1bml0IGlzIHRoZSBtZXRlcikuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBleHBvcnRcbiAgICAgKi9cbiAgICB0aGlzLm9mZmxpbmVFeHRlbnRTaXplID0gMTAwMDA7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bmdlb05ldHdvcmtTdGF0dXN9XG4gICAgICogQGV4cG9ydFxuICAgICAqL1xuICAgIHRoaXMubmdlb05ldHdvcmtTdGF0dXMgPSBuZ2VvTmV0d29ya1N0YXR1cztcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtvbE1hcH1cbiAgICAgKiBAZXhwb3J0XG4gICAgICovXG4gICAgdGhpcy5tYXAgPSBuZXcgb2xNYXAoe1xuICAgICAgbGF5ZXJzOiBbXG4gICAgICAgIG5ldyBvbExheWVyVGlsZSh7XG4gICAgICAgICAgc291cmNlOiBuZXcgb2xTb3VyY2VPU00oKSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgdmlldzogbmV3IG9sVmlldyh7XG4gICAgICAgIGNlbnRlcjogWzM1MjM3OSwgNTE3MjczM10sXG4gICAgICAgIHpvb206IDQsXG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIG5nZW9NYXBGZWF0dXJlT3ZlcmxheU1nci5pbml0KHRoaXMubWFwKTtcblxuICAgIG5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXIuc2V0U2F2ZVNlcnZpY2UoJ29mZmxpbmVEb3dubG9hZGVyJyk7XG4gICAgbmdlb09mZmxpbmVTZXJ2aWNlTWFuYWdlci5zZXRSZXN0b3JlU2VydmljZSgnbmdlb09mZmxpbmVSZXN0b3JlcicpO1xuICB9XG59XG5cbi8qKiBAdHlwZSB7IWFuZ3VsYXIuSU1vZHVsZX0gKiovXG5jb25zdCBteU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXG4gICdnZXR0ZXh0JyxcbiAgZ21mTWFwQ29tcG9uZW50Lm5hbWUsXG4gIG5nZW9PZmZsaW5lTW9kdWxlLm5hbWUsXG4gIE5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXIubW9kdWxlLm5hbWUsXG5dKTtcblxubXlNb2R1bGUudmFsdWUoJ25nZW9PZmZsaW5lVGVzdFVybCcsICcuLi8uLi9zcmMvb2ZmbGluZS9jb21wb25lbnQuaHRtbCcpO1xuXG4vLyBEZWZpbmUgdGhlIG9mZmxpbmUgZG93bmxvYWQgY29uZmlndXJhdGlvbiBzZXJ2aWNlXG5teU1vZHVsZS5zZXJ2aWNlKCduZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb24nLCBuZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb24pO1xuXG5teU1vZHVsZS5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKTtcblxubXlNb2R1bGUuY29uc3RhbnQoJ25nZW9UaWxlc1ByZWxvYWRpbmdMaW1pdCcsIDApO1xuXG5vcHRpb25zKG15TW9kdWxlKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRyb2xsZXI7XG4iLCJ2YXIgZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQWJzdHJhY3RMb2NhbGZvcmFnZVdyYXBwZXIoKSB7XG4gICAgdGhpcy53YWl0aW5nUHJvbWlzZXNfID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuY3VycmVudElkXyA9IDA7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQWJzdHJhY3RMb2NhbGZvcmFnZVdyYXBwZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5zZXRJdGVtID0gZnVuY3Rpb24gc2V0SXRlbSgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlQWN0aW9uLmFwcGx5KHRoaXMsIFsnc2V0SXRlbSddLmNvbmNhdChhcmdzKSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEl0ZW0gPSBmdW5jdGlvbiBnZXRJdGVtKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUFjdGlvbi5hcHBseSh0aGlzLCBbJ2dldEl0ZW0nXS5jb25jYXQoYXJncykpO1xuICB9O1xuXG4gIF9wcm90by5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZUFjdGlvbignY2xlYXInKTtcbiAgfTtcblxuICBfcHJvdG8uY29uZmlnID0gZnVuY3Rpb24gY29uZmlnKCkge1xuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUFjdGlvbi5hcHBseSh0aGlzLCBbJ2NvbmZpZyddLmNvbmNhdChhcmdzKSk7XG4gIH07XG5cbiAgX3Byb3RvLmNyZWF0ZUFjdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZUFjdGlvbihjb21tYW5kKSB7XG4gICAgdmFyIGlkID0gKyt0aGlzLmN1cnJlbnRJZF87XG5cbiAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjQgPiAxID8gX2xlbjQgLSAxIDogMCksIF9rZXk0ID0gMTsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgYXJnc1tfa2V5NCAtIDFdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICB9XG5cbiAgICB2YXIgYWN0aW9uID0ge1xuICAgICAgcGx1Z2luOiAnbG9jYWxmb3JhZ2UnLFxuICAgICAgY29tbWFuZDogY29tbWFuZCxcbiAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICBpZDogaWQsXG4gICAgICBjb250ZXh0OiBudWxsXG4gICAgfTtcbiAgICB2YXIgd2FpdGluZ1Byb21pc2UgPSB7XG4gICAgICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKF9hbnkpIHt9LFxuICAgICAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3QoX2FueSkge31cbiAgICB9O1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgd2FpdGluZ1Byb21pc2UucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB3YWl0aW5nUHJvbWlzZS5yZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG4gICAgdGhpcy53YWl0aW5nUHJvbWlzZXNfLnNldChpZCwgd2FpdGluZ1Byb21pc2UpO1xuICAgIHRoaXMucG9zdFRvQmFja2VuZChhY3Rpb24pO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG4gIF9wcm90by5yZWNlaXZlTWVzc2FnZSA9IGZ1bmN0aW9uIHJlY2VpdmVNZXNzYWdlKGV2ZW50KSB7XG4gICAgdmFyIGFjdGlvbiA9IGV2ZW50LmRhdGE7XG4gICAgdmFyIGlkID0gYWN0aW9uLmlkO1xuICAgIHZhciBjb21tYW5kID0gYWN0aW9uLmNvbW1hbmQ7XG4gICAgdmFyIGFyZ3MgPSBhY3Rpb24uYXJncyB8fCBbXTtcbiAgICB2YXIgY29udGV4dCA9IGFjdGlvbi5jb250ZXh0O1xuICAgIHZhciBtc2cgPSBhY3Rpb24ubXNnO1xuICAgIHZhciB3YWl0aW5nUHJvbWlzZSA9IHRoaXMud2FpdGluZ1Byb21pc2VzXy5nZXQoaWQpO1xuXG4gICAgaWYgKGNvbW1hbmQgPT09ICdlcnJvcicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobXNnLCBhcmdzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHdhaXRpbmdQcm9taXNlKSB7XG4gICAgICAgIHdhaXRpbmdQcm9taXNlLnJlamVjdChhcmdzLCBjb250ZXh0KTtcbiAgICAgICAgdGhpcy53YWl0aW5nUHJvbWlzZXNfLmRlbGV0ZShpZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb21tYW5kID09PSAncmVzcG9uc2UnKSB7XG4gICAgICB3YWl0aW5nUHJvbWlzZS5yZXNvbHZlLmFwcGx5KHdhaXRpbmdQcm9taXNlLCBhcmdzKTtcbiAgICAgIHRoaXMud2FpdGluZ1Byb21pc2VzXy5kZWxldGUoaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgY29tbWFuZCcsIEpTT04uc3RyaW5naWZ5KGFjdGlvbiwgbnVsbCwgJ1xcdCcpKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnBvc3RUb0JhY2tlbmQgPSBmdW5jdGlvbiBwb3N0VG9CYWNrZW5kKGFjdGlvbikge307XG5cbiAgcmV0dXJuIEFic3RyYWN0TG9jYWxmb3JhZ2VXcmFwcGVyO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBleHBvcnRzOyIsImZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5pbXBvcnQgb2xPYnNlcnZhYmxlIGZyb20gJ29sL09ic2VydmFibGUnO1xuaW1wb3J0IG9sTGF5ZXJMYXllciBmcm9tICdvbC9sYXllci9MYXllcic7XG5pbXBvcnQgb2xMYXllclZlY3RvciBmcm9tICdvbC9sYXllci9WZWN0b3InO1xuaW1wb3J0IG9sTGF5ZXJUaWxlIGZyb20gJ29sL2xheWVyL1RpbGUnO1xuaW1wb3J0IG9sTGF5ZXJJbWFnZSBmcm9tICdvbC9sYXllci9JbWFnZSc7XG5pbXBvcnQgKiBhcyBvbFByb2ogZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgeyBkZWZhdWx0SW1hZ2VMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9zb3VyY2UvSW1hZ2UnO1xuaW1wb3J0IG9sU291cmNlSW1hZ2VXTVMgZnJvbSAnb2wvc291cmNlL0ltYWdlV01TJztcbmltcG9ydCBvbFNvdXJjZVRpbGVXTVMgZnJvbSAnb2wvc291cmNlL1RpbGVXTVMnO1xuaW1wb3J0IHsgY3JlYXRlRm9yUHJvamVjdGlvbiBhcyBjcmVhdGVUaWxlR3JpZEZvclByb2plY3Rpb24gfSBmcm9tICdvbC90aWxlZ3JpZCc7XG5pbXBvcnQgU2VyaWFsaXplckRlc2VyaWFsaXplciBmcm9tICduZ2VvL29mZmxpbmUvU2VyaWFsaXplckRlc2VyaWFsaXplcic7XG5pbXBvcnQgTG9jYWxmb3JhZ2VDb3Jkb3ZhV3JhcHBlciBmcm9tICduZ2VvL29mZmxpbmUvTG9jYWxmb3JhZ2VDb3Jkb3ZhV3JhcHBlcic7XG5pbXBvcnQgTG9jYWxmb3JhZ2VBbmRyb2lkV3JhcHBlciBmcm9tICduZ2VvL29mZmxpbmUvTG9jYWxmb3JhZ2VBbmRyb2lkV3JhcHBlcic7XG5pbXBvcnQgTG9jYWxmb3JhZ2VJb3NXcmFwcGVyIGZyb20gJ25nZW8vb2ZmbGluZS9Mb2NhbGZvcmFnZUlvc1dyYXBwZXInO1xuaW1wb3J0IG5nZW9DdXN0b21FdmVudCBmcm9tICduZ2VvL0N1c3RvbUV2ZW50JztcbmltcG9ydCB7IG5vcm1hbGl6ZVVSTCwgdHJhdmVyc2VMYXllciB9IGZyb20gJ25nZW8vb2ZmbGluZS91dGlscyc7XG5pbXBvcnQgbG9jYWxmb3JhZ2UgZnJvbSAnbG9jYWxmb3JhZ2Uvc3JjL2xvY2FsZm9yYWdlJztcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gKF9vbE9ic2VydmFibGUpIHtcbiAgX2RlZmF1bHQuJGluamVjdCA9IFtcIiRyb290U2NvcGVcIiwgXCJuZ2VvQmFja2dyb3VuZExheWVyTWdyXCIsIFwibmdlb09mZmxpbmVHdXR0ZXJcIl07XG5cbiAgX2luaGVyaXRzTG9vc2UoX2RlZmF1bHQsIF9vbE9ic2VydmFibGUpO1xuXG4gIGZ1bmN0aW9uIF9kZWZhdWx0KCRyb290U2NvcGUsIG5nZW9CYWNrZ3JvdW5kTGF5ZXJNZ3IsIG5nZW9PZmZsaW5lR3V0dGVyKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfb2xPYnNlcnZhYmxlLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICBfdGhpcy5sb2NhbGZvcmFnZV8gPSBfdGhpcy5jcmVhdGVMb2NhbGZvcmFnZSgpO1xuXG4gICAgX3RoaXMuY29uZmlndXJlTG9jYWxmb3JhZ2UoKTtcblxuICAgIF90aGlzLnJvb3RTY29wZV8gPSAkcm9vdFNjb3BlO1xuICAgIF90aGlzLmhhc0RhdGEgPSBmYWxzZTtcblxuICAgIF90aGlzLmluaXRpYWxpemVIYXNPZmZsaW5lRGF0YSgpO1xuXG4gICAgX3RoaXMubmdlb0JhY2tncm91bmRMYXllck1ncl8gPSBuZ2VvQmFja2dyb3VuZExheWVyTWdyO1xuICAgIF90aGlzLnNlckRlc18gPSBuZXcgU2VyaWFsaXplckRlc2VyaWFsaXplcih7XG4gICAgICBndXR0ZXI6IG5nZW9PZmZsaW5lR3V0dGVyXG4gICAgfSk7XG4gICAgX3RoaXMuZ3V0dGVyXyA9IG5nZW9PZmZsaW5lR3V0dGVyO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBfZGVmYXVsdC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmRpc3BhdGNoUHJvZ3Jlc3NfID0gZnVuY3Rpb24gZGlzcGF0Y2hQcm9ncmVzc18ocHJvZ3Jlc3MpIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IG5nZW9DdXN0b21FdmVudCgncHJvZ3Jlc3MnLCB7XG4gICAgICAncHJvZ3Jlc3MnOiBwcm9ncmVzc1xuICAgIH0pKTtcbiAgfTtcblxuICBfcHJvdG8uaW5pdGlhbGl6ZUhhc09mZmxpbmVEYXRhID0gZnVuY3Rpb24gaW5pdGlhbGl6ZUhhc09mZmxpbmVEYXRhKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdGhpcy5nZXRJdGVtKCdvZmZsaW5lX2NvbnRlbnQnKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIF90aGlzMi5zZXRIYXNPZmZsaW5lRGF0YSghIXZhbHVlKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uaGFzT2ZmbGluZURhdGEgPSBmdW5jdGlvbiBoYXNPZmZsaW5lRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNEYXRhO1xuICB9O1xuXG4gIF9wcm90by5zZXRIYXNPZmZsaW5lRGF0YSA9IGZ1bmN0aW9uIHNldEhhc09mZmxpbmVEYXRhKHZhbHVlKSB7XG4gICAgdmFyIG5lZWREaWdlc3QgPSB2YWx1ZSAhPT0gdGhpcy5oYXNEYXRhO1xuICAgIHRoaXMuaGFzRGF0YSA9IHZhbHVlO1xuXG4gICAgaWYgKG5lZWREaWdlc3QpIHtcbiAgICAgIHRoaXMucm9vdFNjb3BlXy4kYXBwbHlBc3luYygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udHJhY2VHZXRTZXRJdGVtID0gZnVuY3Rpb24gdHJhY2VHZXRTZXRJdGVtKG1zZywga2V5LCBwcm9taXNlKSB7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgX3Byb3RvLmNyZWF0ZUxvY2FsZm9yYWdlID0gZnVuY3Rpb24gY3JlYXRlTG9jYWxmb3JhZ2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnbG9jYWxmb3JhZ2U9Y29yZG92YScpKSB7XG4gICAgICBjb25zb2xlLmxvZygnVXNpbmcgY29yZG92YSBsb2NhbGZvcmFnZScpO1xuICAgICAgcmV0dXJuIG5ldyBMb2NhbGZvcmFnZUNvcmRvdmFXcmFwcGVyKCk7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ2xvY2FsZm9yYWdlPWFuZHJvaWQnKSkge1xuICAgICAgY29uc29sZS5sb2coJ1VzaW5nIGFuZHJvaWQgbG9jYWxmb3JhZ2UnKTtcbiAgICAgIHJldHVybiBuZXcgTG9jYWxmb3JhZ2VBbmRyb2lkV3JhcHBlcigpO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdsb2NhbGZvcmFnZT1pb3MnKSkge1xuICAgICAgY29uc29sZS5sb2coJ1VzaW5nIGlvcyBsb2NhbGZvcmFnZScpO1xuICAgICAgcmV0dXJuIG5ldyBMb2NhbGZvcmFnZUlvc1dyYXBwZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYWxmb3JhZ2U7XG4gIH07XG5cbiAgX3Byb3RvLmNvbmZpZ3VyZUxvY2FsZm9yYWdlID0gZnVuY3Rpb24gY29uZmlndXJlTG9jYWxmb3JhZ2UoKSB7XG4gICAgdGhpcy5sb2NhbGZvcmFnZV8uY29uZmlnKHtcbiAgICAgICduYW1lJzogJ25nZW9PZmZsaW5lU3RvcmFnZScsXG4gICAgICAndmVyc2lvbic6IDEuMCxcbiAgICAgICdzdG9yZU5hbWUnOiAnb2ZmbGluZVN0b3JhZ2UnXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEl0ZW0gPSBmdW5jdGlvbiBnZXRJdGVtKGtleSkge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5sb2NhbGZvcmFnZV9bJ2dldEl0ZW0nXShrZXkpO1xuICAgIHJldHVybiB0aGlzLnRyYWNlR2V0U2V0SXRlbSgnZ2V0SXRlbScsIGtleSwgcHJvbWlzZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiByZW1vdmVJdGVtKGtleSkge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5sb2NhbGZvcmFnZV9bJ3JlbW92ZUl0ZW0nXShrZXkpO1xuICAgIHJldHVybiB0aGlzLnRyYWNlR2V0U2V0SXRlbSgncmVtb3ZlSXRlbScsIGtleSwgcHJvbWlzZSk7XG4gIH07XG5cbiAgX3Byb3RvLnNldEl0ZW0gPSBmdW5jdGlvbiBzZXRJdGVtKGtleSwgdmFsdWUpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMubG9jYWxmb3JhZ2VfWydzZXRJdGVtJ10oa2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMudHJhY2VHZXRTZXRJdGVtKCdzZXRJdGVtJywga2V5LCBwcm9taXNlKTtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICB0aGlzLnNldEhhc09mZmxpbmVEYXRhKGZhbHNlKTtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMubG9jYWxmb3JhZ2VfLmNsZWFyKCk7XG4gICAgcmV0dXJuIHRoaXMudHJhY2VHZXRTZXRJdGVtKCdjbGVhcicsICcnLCBwcm9taXNlKTtcbiAgfTtcblxuICBfcHJvdG8uZXN0aW1hdGVMb2FkRGF0YVNpemUgPSBmdW5jdGlvbiBlc3RpbWF0ZUxvYWREYXRhU2l6ZShtYXApIHtcbiAgICByZXR1cm4gNTA7XG4gIH07XG5cbiAgX3Byb3RvLmdldExheWVyS2V5ID0gZnVuY3Rpb24gZ2V0TGF5ZXJLZXkobGF5ZXJJdGVtKSB7XG4gICAgcmV0dXJuIGxheWVySXRlbS5sYXllci5nZXQoJ2xhYmVsJyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uVGlsZURvd25sb2FkU3VjY2VzcyA9IGZ1bmN0aW9uIG9uVGlsZURvd25sb2FkU3VjY2Vzcyhwcm9ncmVzcywgdGlsZSkge1xuICAgIHRoaXMuZGlzcGF0Y2hQcm9ncmVzc18ocHJvZ3Jlc3MpO1xuXG4gICAgaWYgKHRpbGUucmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldEl0ZW0obm9ybWFsaXplVVJMKHRpbGUudXJsKSwgdGlsZS5yZXNwb25zZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9O1xuXG4gIF9wcm90by5vblRpbGVEb3dubG9hZEVycm9yID0gZnVuY3Rpb24gb25UaWxlRG93bmxvYWRFcnJvcihwcm9ncmVzcykge1xuICAgIHRoaXMuZGlzcGF0Y2hQcm9ncmVzc18ocHJvZ3Jlc3MpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0RXh0ZW50Qnlab29tID0gZnVuY3Rpb24gZ2V0RXh0ZW50Qnlab29tKG1hcCwgbGF5ZXIsIGFuY2VzdG9ycywgdXNlckV4dGVudCkge1xuICAgIHZhciBjdXJyZW50Wm9vbSA9IG1hcC5nZXRWaWV3KCkuZ2V0Wm9vbSgpO1xuXG4gICAgaWYgKGN1cnJlbnRab29tID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBjdXJyZW50Wm9vbScpO1xuICAgIH1cblxuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgWzAsIDEsIDIsIDMsIDRdLmZvckVhY2goZnVuY3Rpb24gKGR6KSB7XG4gICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICB6b29tOiBjdXJyZW50Wm9vbSArIGR6LFxuICAgICAgICBleHRlbnQ6IHVzZXJFeHRlbnRcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIF9wcm90by5zb3VyY2VJbWFnZVdNU1RvVGlsZVdNUyA9IGZ1bmN0aW9uIHNvdXJjZUltYWdlV01TVG9UaWxlV01TKHNvdXJjZSwgcHJvamVjdGlvbikge1xuICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBvbFNvdXJjZUltYWdlV01TICYmIHNvdXJjZS5nZXRVcmwoKSAmJiBzb3VyY2UuZ2V0SW1hZ2VMb2FkRnVuY3Rpb24oKSA9PT0gZGVmYXVsdEltYWdlTG9hZEZ1bmN0aW9uKSB7XG4gICAgICB2YXIgdGlsZUdyaWQgPSBjcmVhdGVUaWxlR3JpZEZvclByb2plY3Rpb24oc291cmNlLmdldFByb2plY3Rpb24oKSB8fCBwcm9qZWN0aW9uLCA0MiwgMjU2KTtcbiAgICAgIHZhciBhdHRyaWJ1dGlvbnMgPSBzb3VyY2UuZ2V0QXR0cmlidXRpb25zKCkgfHwgJyc7XG4gICAgICB2YXIgdXJsID0gc291cmNlLmdldFVybCgpO1xuXG4gICAgICBpZiAoIXVybCB8fCAhYXR0cmlidXRpb25zKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2YWx1ZXMnKTtcbiAgICAgIH1cblxuICAgICAgc291cmNlID0gbmV3IG9sU291cmNlVGlsZVdNUyh7XG4gICAgICAgIGd1dHRlcjogdGhpcy5ndXR0ZXJfLFxuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdGlsZUdyaWQ6IHRpbGVHcmlkLFxuICAgICAgICBhdHRyaWJ1dGlvbnM6IGF0dHJpYnV0aW9ucyxcbiAgICAgICAgcHJvamVjdGlvbjogc291cmNlLmdldFByb2plY3Rpb24oKSxcbiAgICAgICAgcGFyYW1zOiBzb3VyY2UuZ2V0UGFyYW1zKClcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2U7XG4gIH07XG5cbiAgX3Byb3RvLmNyZWF0ZUxheWVyTWV0YWRhdGFzID0gZnVuY3Rpb24gY3JlYXRlTGF5ZXJNZXRhZGF0YXMobWFwLCB1c2VyRXh0ZW50KSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgbGF5ZXJzSXRlbXMgPSBbXTtcblxuICAgIHZhciB2aXNpdExheWVyID0gZnVuY3Rpb24gdmlzaXRMYXllcihsYXllciwgYW5jZXN0b3JzKSB7XG4gICAgICBpZiAobGF5ZXIgaW5zdGFuY2VvZiBvbExheWVyTGF5ZXIpIHtcbiAgICAgICAgdmFyIGV4dGVudEJ5Wm9vbSA9IF90aGlzMy5nZXRFeHRlbnRCeVpvb20obWFwLCBsYXllciwgYW5jZXN0b3JzLCB1c2VyRXh0ZW50KTtcblxuICAgICAgICB2YXIgcHJvamVjdGlvbiA9IG9sUHJvai5nZXQobWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCkpO1xuXG4gICAgICAgIHZhciBzb3VyY2UgPSBfdGhpczMuc291cmNlSW1hZ2VXTVNUb1RpbGVXTVMobGF5ZXIuZ2V0U291cmNlKCksIHByb2plY3Rpb24pO1xuXG4gICAgICAgIHZhciBsYXllclR5cGU7XG4gICAgICAgIHZhciBsYXllclNlcmlhbGl6YXRpb247XG5cbiAgICAgICAgaWYgKGxheWVyIGluc3RhbmNlb2Ygb2xMYXllclRpbGUgfHwgbGF5ZXIgaW5zdGFuY2VvZiBvbExheWVySW1hZ2UpIHtcbiAgICAgICAgICBsYXllclR5cGUgPSAndGlsZSc7XG4gICAgICAgICAgbGF5ZXJTZXJpYWxpemF0aW9uID0gX3RoaXMzLnNlckRlc18uc2VyaWFsaXplVGlsZUxheWVyKGxheWVyLCBzb3VyY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGxheWVyIGluc3RhbmNlb2Ygb2xMYXllclZlY3Rvcikge1xuICAgICAgICAgIGxheWVyVHlwZSA9ICd2ZWN0b3InO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJhY2tncm91bmRMYXllciA9IF90aGlzMy5uZ2VvQmFja2dyb3VuZExheWVyTWdyXy5nZXQobWFwKSA9PT0gbGF5ZXI7XG4gICAgICAgIGxheWVyc0l0ZW1zLnB1c2goe1xuICAgICAgICAgIGJhY2tncm91bmRMYXllcjogYmFja2dyb3VuZExheWVyLFxuICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgIGV4dGVudEJ5Wm9vbTogZXh0ZW50Qnlab29tLFxuICAgICAgICAgIGxheWVyVHlwZTogbGF5ZXJUeXBlLFxuICAgICAgICAgIGxheWVyU2VyaWFsaXphdGlvbjogbGF5ZXJTZXJpYWxpemF0aW9uLFxuICAgICAgICAgIGxheWVyOiBsYXllcixcbiAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICBhbmNlc3RvcnM6IGFuY2VzdG9yc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIG1hcC5nZXRMYXllcnMoKS5mb3JFYWNoKGZ1bmN0aW9uIChyb290KSB7XG4gICAgICB0cmF2ZXJzZUxheWVyKHJvb3QsIFtdLCB2aXNpdExheWVyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbGF5ZXJzSXRlbXM7XG4gIH07XG5cbiAgX3Byb3RvLmNyZWF0ZVRpbGVMb2FkRnVuY3Rpb25fID0gZnVuY3Rpb24gY3JlYXRlVGlsZUxvYWRGdW5jdGlvbl8ob2ZmbGluZUxheWVyKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgdGlsZUxvYWRGdW5jdGlvbiA9IGZ1bmN0aW9uIHRpbGVMb2FkRnVuY3Rpb24oaW1hZ2VUaWxlLCBzcmMpIHtcbiAgICAgIF90aGlzNC5nZXRJdGVtKG5vcm1hbGl6ZVVSTChzcmMpKS50aGVuKGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgIGlmICghY29udGVudCkge1xuICAgICAgICAgIGNvbnRlbnQgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFCQ0FRQUFBQzFIQXdDQUFBQUMwbEVRVlI0Mm1Oa1lBQUFBQVlBQWpDQjBDOEFBQUFBU1VWT1JLNUNZSUk9JztcbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlVGlsZS5nZXRJbWFnZSgpLnNyYyA9IGNvbnRlbnQ7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRpbGVMb2FkRnVuY3Rpb247XG4gIH07XG5cbiAgX3Byb3RvLnJlY3JlYXRlT2ZmbGluZUxheWVyID0gZnVuY3Rpb24gcmVjcmVhdGVPZmZsaW5lTGF5ZXIob2ZmbGluZUxheWVyKSB7XG4gICAgaWYgKG9mZmxpbmVMYXllci5sYXllclR5cGUgPT09ICd0aWxlJykge1xuICAgICAgdmFyIHNlcmlhbGl6YXRpb24gPSBvZmZsaW5lTGF5ZXIubGF5ZXJTZXJpYWxpemF0aW9uO1xuXG4gICAgICBpZiAoc2VyaWFsaXphdGlvbikge1xuICAgICAgICB2YXIgdGlsZUxvYWRGdW5jdGlvbiA9IHRoaXMuY3JlYXRlVGlsZUxvYWRGdW5jdGlvbl8ob2ZmbGluZUxheWVyKTtcbiAgICAgICAgdmFyIGxheWVyID0gdGhpcy5zZXJEZXNfLmRlc2VyaWFsaXplVGlsZUxheWVyKHNlcmlhbGl6YXRpb24sIHRpbGVMb2FkRnVuY3Rpb24pO1xuICAgICAgICByZXR1cm4gbGF5ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgX3Byb3RvLmdldE1heE51bWJlck9mUGFyYWxsZWxEb3dubG9hZHMgPSBmdW5jdGlvbiBnZXRNYXhOdW1iZXJPZlBhcmFsbGVsRG93bmxvYWRzKCkge1xuICAgIHJldHVybiAxMTtcbiAgfTtcblxuICByZXR1cm4gX2RlZmF1bHQ7XG59KG9sT2JzZXJ2YWJsZSk7XG5cbmV4cG9ydCB7IF9kZWZhdWx0IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdCA9IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdIHx8IG9bXCJAQGl0ZXJhdG9yXCJdOyBpZiAoaXQpIHJldHVybiAoaXQgPSBpdC5jYWxsKG8pKS5uZXh0LmJpbmQoaXQpOyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHJldHVybiBmdW5jdGlvbiAoKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuaW1wb3J0IHsgREVWSUNFX1BJWEVMX1JBVElPIH0gZnJvbSAnb2wvaGFzJztcbmltcG9ydCBvbFNvdXJjZVRpbGVXTVMgZnJvbSAnb2wvc291cmNlL1RpbGVXTVMnO1xuaW1wb3J0IG9sU291cmNlV01UUyBmcm9tICdvbC9zb3VyY2UvV01UUyc7XG5pbXBvcnQgVGlsZXNEb3dubG9hZGVyIGZyb20gJ25nZW8vb2ZmbGluZS9UaWxlc0Rvd25sb2FkZXInO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5cbmZ1bmN0aW9uIG1hZ25pdHVkZTIoYSwgYikge1xuICB2YXIgbWFnbml0dWRlU3F1YXJlZCA9IDA7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgKytpKSB7XG4gICAgbWFnbml0dWRlU3F1YXJlZCArPSBNYXRoLnBvdyhhW2ldIC0gYltpXSwgMik7XG4gIH1cblxuICByZXR1cm4gbWFnbml0dWRlU3F1YXJlZDtcbn1cblxudmFyIERvd25sb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIERvd25sb2FkZXIuJGluamVjdCA9IFtcIm5nZW9PZmZsaW5lQ29uZmlndXJhdGlvblwiXTtcblxuICBmdW5jdGlvbiBEb3dubG9hZGVyKG5nZW9PZmZsaW5lQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbl8gPSBuZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy50aWxlRG93bmxvYWRlcl8gPSBudWxsO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IERvd25sb2FkZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5jYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRoaXMudGlsZURvd25sb2FkZXJfKSB7XG4gICAgICB0aGlzLnRpbGVEb3dubG9hZGVyXy5jYW5jZWwoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnF1ZXVlTGF5ZXJUaWxlc18gPSBmdW5jdGlvbiBxdWV1ZUxheWVyVGlsZXNfKGxheWVyTWV0YWRhdGEsIHF1ZXVlKSB7XG4gICAgdmFyIHNvdXJjZSA9IGxheWVyTWV0YWRhdGEuc291cmNlO1xuICAgIHZhciBtYXAgPSBsYXllck1ldGFkYXRhLm1hcCxcbiAgICAgICAgZXh0ZW50Qnlab29tID0gbGF5ZXJNZXRhZGF0YS5leHRlbnRCeVpvb207XG5cbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUuYXNzZXJ0KHNvdXJjZSBpbnN0YW5jZW9mIG9sU291cmNlVGlsZVdNUyB8fCBzb3VyY2UgaW5zdGFuY2VvZiBvbFNvdXJjZVdNVFMpO1xuICAgIHZhciBwcm9qZWN0aW9uID0gbWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCk7XG4gICAgdmFyIHRpbGVHcmlkID0gc291cmNlLmdldFRpbGVHcmlkKCk7XG4gICAgdmFyIHRpbGVVcmxGdW5jdGlvbiA9IHNvdXJjZS5nZXRUaWxlVXJsRnVuY3Rpb24oKTtcbiAgICBjb25zb2xlLmFzc2VydChleHRlbnRCeVpvb20pO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoKSB7XG4gICAgICB2YXIgZXh0ZW50Wm9vbSA9IF9zdGVwLnZhbHVlO1xuICAgICAgdmFyIHogPSBleHRlbnRab29tLnpvb207XG4gICAgICB2YXIgZXh0ZW50ID0gZXh0ZW50Wm9vbS5leHRlbnQ7XG4gICAgICB2YXIgcXVldWVCeVogPSBbXTtcbiAgICAgIHZhciBtaW5YID0gdm9pZCAwO1xuICAgICAgdmFyIG1pblkgPSB2b2lkIDA7XG4gICAgICB2YXIgbWF4WCA9IHZvaWQgMDtcbiAgICAgIHZhciBtYXhZID0gdm9pZCAwO1xuICAgICAgdGlsZUdyaWQuZm9yRWFjaFRpbGVDb29yZChleHRlbnQsIHosIGZ1bmN0aW9uIChjb29yZCkge1xuICAgICAgICBtYXhYID0gY29vcmRbMV07XG4gICAgICAgIG1heFkgPSBjb29yZFsyXTtcblxuICAgICAgICBpZiAobWluWCA9PT0gdW5kZWZpbmVkIHx8IG1pblkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG1pblggPSBjb29yZFsxXTtcbiAgICAgICAgICBtaW5ZID0gY29vcmRbMl07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdXJsID0gdGlsZVVybEZ1bmN0aW9uKGNvb3JkLCBERVZJQ0VfUElYRUxfUkFUSU8sIHByb2plY3Rpb24pO1xuICAgICAgICBjb25zb2xlLmFzc2VydCh1cmwpO1xuXG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICB2YXIgdGlsZSA9IHtcbiAgICAgICAgICAgIGNvb3JkOiBjb29yZCxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgcmVzcG9uc2U6IG51bGxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHF1ZXVlQnlaLnB1c2godGlsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdmFyIGNlbnRlclRpbGVDb29yZCA9IFt6LCAobWluWCArIG1heFgpIC8gMiwgKG1pblkgKyBtYXhZKSAvIDJdO1xuICAgICAgcXVldWVCeVouc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gbWFnbml0dWRlMihhLmNvb3JkLCBjZW50ZXJUaWxlQ29vcmQpIC0gbWFnbml0dWRlMihiLmNvb3JkLCBjZW50ZXJUaWxlQ29vcmQpO1xuICAgICAgfSk7XG4gICAgICBxdWV1ZS5wdXNoLmFwcGx5KHF1ZXVlLCBxdWV1ZUJ5Wik7XG4gICAgfTtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UoZXh0ZW50Qnlab29tKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHtcbiAgICAgIF9sb29wKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zYXZlID0gZnVuY3Rpb24gc2F2ZShleHRlbnQsIG1hcCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgbGF5ZXJzTWV0YWRhdGFzID0gdGhpcy5jb25maWd1cmF0aW9uXy5jcmVhdGVMYXllck1ldGFkYXRhcyhtYXAsIGV4dGVudCk7XG4gICAgdmFyIHBlcnNpc3RlbnRMYXllcnMgPSBbXTtcbiAgICB2YXIgcXVldWUgPSBbXTtcbiAgICB2YXIgem9vbXMgPSBbXTtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKGxheWVyc01ldGFkYXRhcyksIF9zdGVwMjsgIShfc3RlcDIgPSBfaXRlcmF0b3IyKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgbGF5ZXJJdGVtID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICBpZiAobGF5ZXJJdGVtLmxheWVyVHlwZSA9PT0gJ3RpbGUnKSB7XG4gICAgICAgIHZhciB0aWxlcyA9IFtdO1xuICAgICAgICB0aGlzLnF1ZXVlTGF5ZXJUaWxlc18obGF5ZXJJdGVtLCB0aWxlcyk7XG4gICAgICAgIHF1ZXVlLnB1c2guYXBwbHkocXVldWUsIHRpbGVzKTtcbiAgICAgIH1cblxuICAgICAgcGVyc2lzdGVudExheWVycy5wdXNoKHtcbiAgICAgICAgYmFja2dyb3VuZExheWVyOiBsYXllckl0ZW0uYmFja2dyb3VuZExheWVyLFxuICAgICAgICBsYXllclR5cGU6IGxheWVySXRlbS5sYXllclR5cGUsXG4gICAgICAgIGxheWVyU2VyaWFsaXphdGlvbjogbGF5ZXJJdGVtLmxheWVyU2VyaWFsaXphdGlvbixcbiAgICAgICAga2V5OiB0aGlzLmNvbmZpZ3VyYXRpb25fLmdldExheWVyS2V5KGxheWVySXRlbSlcbiAgICAgIH0pO1xuICAgICAgbGF5ZXJJdGVtLmV4dGVudEJ5Wm9vbS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgdmFyIHpvb20gPSBvYmouem9vbTtcblxuICAgICAgICBpZiAoIXpvb21zLmluY2x1ZGVzKHpvb20pKSB7XG4gICAgICAgICAgem9vbXMucHVzaCh6b29tKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIHBlcnNpc3RlbnRPYmplY3QgPSB7XG4gICAgICBleHRlbnQ6IGV4dGVudCxcbiAgICAgIGxheWVyczogcGVyc2lzdGVudExheWVycyxcbiAgICAgIHpvb21zOiB6b29tcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhIDwgYiA/IC0xIDogMTtcbiAgICAgIH0pXG4gICAgfTtcbiAgICB2YXIgc2V0T2ZmbGluZUNvbnRlbnRQcm9taXNlID0gdGhpcy5jb25maWd1cmF0aW9uXy5zZXRJdGVtKCdvZmZsaW5lX2NvbnRlbnQnLCBwZXJzaXN0ZW50T2JqZWN0KTtcbiAgICB2YXIgbWF4RG93bmxvYWRzID0gdGhpcy5jb25maWd1cmF0aW9uXy5nZXRNYXhOdW1iZXJPZlBhcmFsbGVsRG93bmxvYWRzKCk7XG4gICAgdGhpcy50aWxlRG93bmxvYWRlcl8gPSBuZXcgVGlsZXNEb3dubG9hZGVyKHF1ZXVlLCB0aGlzLmNvbmZpZ3VyYXRpb25fLCBtYXhEb3dubG9hZHMpO1xuICAgIHZhciB0aWxlRG93bmxvYWRQcm9taXNlID0gdGhpcy50aWxlRG93bmxvYWRlcl8uZG93bmxvYWQoKTtcbiAgICB2YXIgYWxsUHJvbWlzZSA9IFByb21pc2UuYWxsKFtzZXRPZmZsaW5lQ29udGVudFByb21pc2UsIHRpbGVEb3dubG9hZFByb21pc2VdKTtcblxuICAgIHZhciBzZXRIYXNPZmZsaW5lRGF0YSA9IGZ1bmN0aW9uIHNldEhhc09mZmxpbmVEYXRhKCkge1xuICAgICAgcmV0dXJuIF90aGlzLmNvbmZpZ3VyYXRpb25fLnNldEhhc09mZmxpbmVEYXRhKHRydWUpO1xuICAgIH07XG5cbiAgICBhbGxQcm9taXNlLnRoZW4oc2V0SGFzT2ZmbGluZURhdGEsIHNldEhhc09mZmxpbmVEYXRhKTtcbiAgICByZXR1cm4gYWxsUHJvbWlzZTtcbiAgfTtcblxuICByZXR1cm4gRG93bmxvYWRlcjtcbn0oKTtcblxudmFyIG5hbWUgPSAnb2ZmbGluZURvd25sb2FkZXInO1xuRG93bmxvYWRlci5tb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShuYW1lLCBbXSkuc2VydmljZShuYW1lLCBEb3dubG9hZGVyKTtcbnZhciBleHBvcnRzID0gRG93bmxvYWRlcjtcbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5pbXBvcnQgQWJzdHJhY3RXcmFwcGVyIGZyb20gJ25nZW8vb2ZmbGluZS9BYnN0cmFjdExvY2FsZm9yYWdlV3JhcHBlcic7XG5cbnZhciBleHBvcnRzID0gZnVuY3Rpb24gKF9BYnN0cmFjdFdyYXBwZXIpIHtcbiAgX2luaGVyaXRzTG9vc2UoQW5kcm9pZFdyYXBwZXIsIF9BYnN0cmFjdFdyYXBwZXIpO1xuXG4gIGZ1bmN0aW9uIEFuZHJvaWRXcmFwcGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0Fic3RyYWN0V3JhcHBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgd2luZG93LmFuZHJvaWRXcmFwcGVyID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEFuZHJvaWRXcmFwcGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucG9zdFRvQmFja2VuZCA9IGZ1bmN0aW9uIHBvc3RUb0JhY2tlbmQoYWN0aW9uKSB7XG4gICAgdmFyIHN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoYWN0aW9uKTtcbiAgICB3aW5kb3cubmdlb0hvc3QucG9zdE1lc3NhZ2VUb0FuZHJvaWQoc3RyaW5naWZpZWQpO1xuICB9O1xuXG4gIF9wcm90by5yZWNlaXZlRnJvbUFuZHJvaWQgPSBmdW5jdGlvbiByZWNlaXZlRnJvbUFuZHJvaWQoYWN0aW9uU3RyaW5nKSB7XG4gICAgdmFyIGFjdGlvbiA9IEpTT04ucGFyc2UoYWN0aW9uU3RyaW5nKTtcbiAgICB0aGlzLnJlY2VpdmVNZXNzYWdlKHtcbiAgICAgICdkYXRhJzogYWN0aW9uXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEFuZHJvaWRXcmFwcGVyO1xufShBYnN0cmFjdFdyYXBwZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBleHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuaW1wb3J0IEFic3RyYWN0V3JhcHBlciBmcm9tICduZ2VvL29mZmxpbmUvQWJzdHJhY3RMb2NhbGZvcmFnZVdyYXBwZXInO1xuXG52YXIgZXhwb3J0cyA9IGZ1bmN0aW9uIChfQWJzdHJhY3RXcmFwcGVyKSB7XG4gIF9pbmhlcml0c0xvb3NlKENvcmRvdmFXcmFwcGVyLCBfQWJzdHJhY3RXcmFwcGVyKTtcblxuICBmdW5jdGlvbiBDb3Jkb3ZhV3JhcHBlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9BYnN0cmFjdFdyYXBwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgX3RoaXMucmVjZWl2ZU1lc3NhZ2UuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIGZhbHNlKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ29yZG92YVdyYXBwZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5wb3N0VG9CYWNrZW5kID0gZnVuY3Rpb24gcG9zdFRvQmFja2VuZChhY3Rpb24pIHtcbiAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKGFjdGlvbiwgJyonKTtcbiAgfTtcblxuICByZXR1cm4gQ29yZG92YVdyYXBwZXI7XG59KEFic3RyYWN0V3JhcHBlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5pbXBvcnQgQWJzdHJhY3RXcmFwcGVyIGZyb20gJ25nZW8vb2ZmbGluZS9BYnN0cmFjdExvY2FsZm9yYWdlV3JhcHBlcic7XG5cbnZhciBleHBvcnRzID0gZnVuY3Rpb24gKF9BYnN0cmFjdFdyYXBwZXIpIHtcbiAgX2luaGVyaXRzTG9vc2UoSW9zV3JhcHBlciwgX0Fic3RyYWN0V3JhcHBlcik7XG5cbiAgZnVuY3Rpb24gSW9zV3JhcHBlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9BYnN0cmFjdFdyYXBwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIHdpbmRvdy5pb3NXcmFwcGVyID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IElvc1dyYXBwZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5wb3N0VG9CYWNrZW5kID0gZnVuY3Rpb24gcG9zdFRvQmFja2VuZChhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLmNvbW1hbmQgPT09ICdzZXRJdGVtJykge1xuICAgICAgYWN0aW9uLmFyZ3NbMV0gPSBKU09OLnN0cmluZ2lmeShhY3Rpb24uYXJnc1sxXSk7XG4gICAgfVxuXG4gICAgdmFyIHN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoYWN0aW9uKTtcbiAgICB3aW5kb3cud2Via2l0Lm1lc3NhZ2VIYW5kbGVycy5pb3MucG9zdE1lc3NhZ2Uoc3RyaW5naWZpZWQpO1xuICB9O1xuXG4gIF9wcm90by5yZWNlaXZlRnJvbUlvcyA9IGZ1bmN0aW9uIHJlY2VpdmVGcm9tSW9zKGFjdGlvblN0cmluZykge1xuICAgIHZhciBhY3Rpb24gPSBKU09OLnBhcnNlKGFjdGlvblN0cmluZyk7XG4gICAgdmFyIGFyZ3MgPSBhY3Rpb25bJ2FyZ3MnXSB8fCBbXTtcbiAgICBhY3Rpb25bJ2FyZ3MnXSA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShpdGVtKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlY2VpdmVNZXNzYWdlKHtcbiAgICAgICdkYXRhJzogYWN0aW9uXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIElvc1dyYXBwZXI7XG59KEFic3RyYWN0V3JhcHBlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHM7IiwiZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmltcG9ydCBMYXllciBmcm9tICdvbC9sYXllci9MYXllcic7XG5pbXBvcnQgeyBjcmVhdGVDYW52YXNDb250ZXh0MkQgfSBmcm9tICdvbC9kb20nO1xuaW1wb3J0IHsgREVWSUNFX1BJWEVMX1JBVElPIH0gZnJvbSAnb2wvaGFzJztcblxudmFyIE1hc2sgPSBmdW5jdGlvbiAoX0xheWVyKSB7XG4gIF9pbmhlcml0c0xvb3NlKE1hc2ssIF9MYXllcik7XG5cbiAgZnVuY3Rpb24gTWFzayhsYXllck9wdGlvbnMsIG1hc2tPcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgaWYgKGxheWVyT3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBsYXllck9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAobWFza09wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgbWFza09wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9MYXllci5jYWxsKHRoaXMsIGxheWVyT3B0aW9ucykgfHwgdGhpcztcbiAgICBfdGhpcy5jb250ZXh0XyA9IGNyZWF0ZUNhbnZhc0NvbnRleHQyRCgpO1xuICAgIF90aGlzLmNvbnRleHRfLmNhbnZhcy5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgX3RoaXMuY29udGV4dF8uY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBfdGhpcy5tYXJnaW5fID0gbWFza09wdGlvbnMubWFyZ2luIHx8IDEwMDtcbiAgICBfdGhpcy5leHRlbnRJbk1ldGVyc18gPSBtYXNrT3B0aW9ucy5leHRlbnRJbk1ldGVycyB8fCAwO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNYXNrLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY3JlYXRlRXh0ZW50ID0gZnVuY3Rpb24gY3JlYXRlRXh0ZW50KGNlbnRlciwgaGFsZkxlbmd0aCkge1xuICAgIHZhciBtaW54ID0gY2VudGVyWzBdIC0gaGFsZkxlbmd0aDtcbiAgICB2YXIgbWlueSA9IGNlbnRlclsxXSAtIGhhbGZMZW5ndGg7XG4gICAgdmFyIG1heHggPSBjZW50ZXJbMF0gKyBoYWxmTGVuZ3RoO1xuICAgIHZhciBtYXh5ID0gY2VudGVyWzFdICsgaGFsZkxlbmd0aDtcbiAgICByZXR1cm4gW21pbngsIG1pbnksIG1heHgsIG1heHldO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoZnJhbWVTdGF0ZSkge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0XztcbiAgICB2YXIgY3dpZHRoID0gZnJhbWVTdGF0ZS5zaXplWzBdO1xuICAgIGNvbnRleHQuY2FudmFzLndpZHRoID0gY3dpZHRoO1xuICAgIHZhciBjaGVpZ2h0ID0gZnJhbWVTdGF0ZS5zaXplWzFdO1xuICAgIGNvbnRleHQuY2FudmFzLmhlaWdodCA9IGNoZWlnaHQ7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0Lm1vdmVUbygwLCAwKTtcbiAgICBjb250ZXh0LmxpbmVUbyhjd2lkdGgsIDApO1xuICAgIGNvbnRleHQubGluZVRvKGN3aWR0aCwgY2hlaWdodCk7XG4gICAgY29udGV4dC5saW5lVG8oMCwgY2hlaWdodCk7XG4gICAgY29udGV4dC5saW5lVG8oMCwgMCk7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB2YXIgZXh0ZW50TGVuZ3RoID0gTWF0aC5taW4oY3dpZHRoLCBjaGVpZ2h0KSAtIHRoaXMubWFyZ2luXyAqIDI7XG5cbiAgICBpZiAodGhpcy5leHRlbnRJbk1ldGVyc18pIHtcbiAgICAgIGV4dGVudExlbmd0aCA9IERFVklDRV9QSVhFTF9SQVRJTyAqIHRoaXMuZXh0ZW50SW5NZXRlcnNfIC8gZnJhbWVTdGF0ZS52aWV3U3RhdGUucmVzb2x1dGlvbjtcbiAgICB9XG5cbiAgICB2YXIgZXh0ZW50ID0gdGhpcy5jcmVhdGVFeHRlbnQoW2N3aWR0aCAvIDIsIGNoZWlnaHQgLyAyXSwgTWF0aC5jZWlsKGV4dGVudExlbmd0aCAvIDIpKTtcbiAgICBjb250ZXh0Lm1vdmVUbyhleHRlbnRbMF0sIGV4dGVudFsxXSk7XG4gICAgY29udGV4dC5saW5lVG8oZXh0ZW50WzBdLCBleHRlbnRbM10pO1xuICAgIGNvbnRleHQubGluZVRvKGV4dGVudFsyXSwgZXh0ZW50WzNdKTtcbiAgICBjb250ZXh0LmxpbmVUbyhleHRlbnRbMl0sIGV4dGVudFsxXSk7XG4gICAgY29udGV4dC5saW5lVG8oZXh0ZW50WzBdLCBleHRlbnRbMV0pO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgwLCA1LCAyNSwgMC41KSc7XG4gICAgY29udGV4dC5maWxsKCk7XG4gICAgcmV0dXJuIGNvbnRleHQuY2FudmFzO1xuICB9O1xuXG4gIHJldHVybiBNYXNrO1xufShMYXllcik7XG5cbmV4cG9ydCB7IE1hc2sgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuXG52YXIgTW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgTW9kZS4kaW5qZWN0ID0gW1wibmdlb09mZmxpbmVDb25maWd1cmF0aW9uXCJdO1xuXG4gIGZ1bmN0aW9uIE1vZGUobmdlb09mZmxpbmVDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5lbmFibGVkXyA9IGZhbHNlO1xuICAgIHRoaXMuY29tcG9uZW50XyA9IG51bGw7XG4gICAgdGhpcy5uZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb25fID0gbmdlb09mZmxpbmVDb25maWd1cmF0aW9uO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE1vZGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5pc0VuYWJsZWQgPSBmdW5jdGlvbiBpc0VuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5hYmxlZF87XG4gIH07XG5cbiAgX3Byb3RvLmVuYWJsZSA9IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICB0aGlzLmVuYWJsZWRfID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8ucmVnaXN0ZXJDb21wb25lbnQgPSBmdW5jdGlvbiByZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICB0aGlzLmNvbXBvbmVudF8gPSBjb21wb25lbnQ7XG4gIH07XG5cbiAgX3Byb3RvLmFjdGl2YXRlT2ZmbGluZU1vZGUgPSBmdW5jdGlvbiBhY3RpdmF0ZU9mZmxpbmVNb2RlKCkge1xuICAgIGlmICghdGhpcy5jb21wb25lbnRfKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBjb21wb25lbnQgaXMgbm90IHJlZ2lzdGVyZWQnKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudF8uYWN0aXZhdGVPZmZsaW5lTW9kZSgpO1xuICB9O1xuXG4gIF9wcm90by5oYXNEYXRhID0gZnVuY3Rpb24gaGFzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5uZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb25fLmhhc09mZmxpbmVEYXRhKCk7XG4gIH07XG5cbiAgcmV0dXJuIE1vZGU7XG59KCk7XG5cbnZhciBteU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCduZ2VvT2ZmbGluZU1vZGUnLCBbXSk7XG5teU1vZHVsZS5zZXJ2aWNlKCduZ2VvT2ZmbGluZU1vZGUnLCBNb2RlKTtcbk1vZGUubW9kdWxlID0gbXlNb2R1bGU7XG5leHBvcnQgZGVmYXVsdCBNb2RlOyIsImNvbmZpZ0Z1bmN0aW9uXy4kaW5qZWN0ID0gW1wiJGh0dHBQcm92aWRlclwiXTtcbmltcG9ydCBuZ2VvTWlzY0RlYm91bmNlIGZyb20gJ25nZW8vbWlzYy9kZWJvdW5jZSc7XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcblxudmFyIFNlcnZpY2UgPSBmdW5jdGlvbiAoKSB7XG4gIFNlcnZpY2UuJGluamVjdCA9IFtcIiRkb2N1bWVudFwiLCBcIiR3aW5kb3dcIiwgXCIkdGltZW91dFwiLCBcIiRyb290U2NvcGVcIiwgXCJuZ2VvT2ZmbGluZVRlc3RVcmxcIl07XG5cbiAgZnVuY3Rpb24gU2VydmljZSgkZG9jdW1lbnQsICR3aW5kb3csICR0aW1lb3V0LCAkcm9vdFNjb3BlLCBuZ2VvT2ZmbGluZVRlc3RVcmwpIHtcbiAgICB0aGlzLiRkb2N1bWVudF8gPSAkZG9jdW1lbnQ7XG4gICAgdGhpcy4kd2luZG93XyA9ICR3aW5kb3c7XG4gICAgdGhpcy4kdGltZW91dF8gPSAkdGltZW91dDtcbiAgICB0aGlzLiRyb290U2NvcGVfID0gJHJvb3RTY29wZTtcbiAgICB0aGlzLm5nZW9PZmZsaW5lVGVzdFVybF8gPSBuZ2VvT2ZmbGluZVRlc3RVcmw7XG4gICAgdGhpcy5jb3VudF8gPSAwO1xuICAgIHRoaXMub2ZmbGluZV87XG4gICAgdGhpcy5wcm9taXNlXztcbiAgICB0aGlzLmluaXRpYWxpemVfKCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU2VydmljZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmluaXRpYWxpemVfID0gZnVuY3Rpb24gaW5pdGlhbGl6ZV8oKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMub2ZmbGluZV8gPSAhdGhpcy4kd2luZG93Xy5uYXZpZ2F0b3Iub25MaW5lO1xuICAgIHRoaXMuJHdpbmRvd18uYWRkRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnRyaWdnZXJDaGFuZ2VTdGF0dXNFdmVudF8odHJ1ZSk7XG4gICAgfSk7XG4gICAgdGhpcy4kd2luZG93Xy5hZGRFdmVudExpc3RlbmVyKCdvbmxpbmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5jaGVjayh1bmRlZmluZWQpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuJGRvY3VtZW50Xy5hamF4RXJyb3IpIHtcbiAgICAgIHZhciBvbkFqYXhFcnJvciA9IGZ1bmN0aW9uIG9uQWpheEVycm9yKGV2dCwganF4aHIsIHNldHRpbmdzLCB0aHJvd25FcnJvcikge1xuICAgICAgICBpZiAoIS9eKGNhbmNlbGVkfGFib3J0KSQvLnRlc3QodGhyb3duRXJyb3IpKSB7XG4gICAgICAgICAgX3RoaXMuY2hlY2soMjAwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuJGRvY3VtZW50Xy5hamF4RXJyb3Iob25BamF4RXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY2hlY2sgPSBmdW5jdGlvbiBjaGVjayh0aW1lb3V0KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5wcm9taXNlXykge1xuICAgICAgdGhpcy4kdGltZW91dF8uY2FuY2VsKHRoaXMucHJvbWlzZV8pO1xuICAgICAgdGhpcy5wcm9taXNlXyA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAodGltZW91dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNvdW50XysrO1xuICAgICAgdGhpcy5wcm9taXNlXyA9IHRoaXMuJHRpbWVvdXRfKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5jaGVjaygpO1xuICAgICAgfSwgdGltZW91dCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6IHRoaXMubmdlb09mZmxpbmVUZXN0VXJsXyxcbiAgICAgIHRpbWVvdXQ6IDEwMDAsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKCkge1xuICAgICAgICBfdGhpczIuY291bnRfID0gMDtcblxuICAgICAgICBpZiAoX3RoaXMyLm9mZmxpbmVfKSB7XG4gICAgICAgICAgX3RoaXMyLnRyaWdnZXJDaGFuZ2VTdGF0dXNFdmVudF8oZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKCkge1xuICAgICAgICBfdGhpczIuY291bnRfKys7XG5cbiAgICAgICAgaWYgKF90aGlzMi5jb3VudF8gPiAyICYmICFfdGhpczIub2ZmbGluZV8pIHtcbiAgICAgICAgICBfdGhpczIudHJpZ2dlckNoYW5nZVN0YXR1c0V2ZW50Xyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by50cmlnZ2VyQ2hhbmdlU3RhdHVzRXZlbnRfID0gZnVuY3Rpb24gdHJpZ2dlckNoYW5nZVN0YXR1c0V2ZW50XyhvZmZsaW5lKSB7XG4gICAgdGhpcy5vZmZsaW5lXyA9IG9mZmxpbmU7XG4gICAgdGhpcy4kcm9vdFNjb3BlXy4kZGlnZXN0KCk7XG4gIH07XG5cbiAgX3Byb3RvLmlzRGlzY29ubmVjdGVkID0gZnVuY3Rpb24gaXNEaXNjb25uZWN0ZWQoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5vZmZsaW5lXztcbiAgfTtcblxuICByZXR1cm4gU2VydmljZTtcbn0oKTtcblxudmFyIG5hbWUgPSAnbmdlb05ldHdvcmtTdGF0dXMnO1xuU2VydmljZS5tb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShuYW1lLCBbbmdlb01pc2NEZWJvdW5jZS5uYW1lXSk7XG5TZXJ2aWNlLm1vZHVsZS5zZXJ2aWNlKG5hbWUsIFNlcnZpY2UpO1xuXG52YXIgaHR0cEludGVyY2VwdG9yID0gZnVuY3Rpb24gaHR0cEludGVyY2VwdG9yKCRxLCBuZ2VvRGVib3VuY2UsIG5nZW9OZXR3b3JrU3RhdHVzKSB7XG4gIHZhciBkZWJvdW5jZWRDaGVjayA9IG5nZW9EZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5nZW9OZXR3b3JrU3RhdHVzLmNoZWNrKHVuZGVmaW5lZCk7XG4gIH0sIDIwMDAsIGZhbHNlKTtcbiAgcmV0dXJuIHtcbiAgICByZXF1ZXN0OiBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9LFxuICAgIHJlcXVlc3RFcnJvcjogZnVuY3Rpb24gcmVxdWVzdEVycm9yKHJlamVjdGlvbikge1xuICAgICAgcmV0dXJuICRxLnJlamVjdChyZWplY3Rpb24pO1xuICAgIH0sXG4gICAgcmVzcG9uc2U6IGZ1bmN0aW9uIHJlc3BvbnNlKF9yZXNwb25zZSkge1xuICAgICAgcmV0dXJuIF9yZXNwb25zZTtcbiAgICB9LFxuICAgIHJlc3BvbnNlRXJyb3I6IGZ1bmN0aW9uIHJlc3BvbnNlRXJyb3IocmVqZWN0aW9uKSB7XG4gICAgICBkZWJvdW5jZWRDaGVjaygpO1xuICAgICAgcmV0dXJuICRxLnJlamVjdChyZWplY3Rpb24pO1xuICAgIH1cbiAgfTtcbn07XG5cbmh0dHBJbnRlcmNlcHRvci4kaW5qZWN0ID0gW1wiJHFcIiwgXCJuZ2VvRGVib3VuY2VcIiwgXCJuZ2VvTmV0d29ya1N0YXR1c1wiXTtcbmh0dHBJbnRlcmNlcHRvci4kaW5qZWN0ID0gW1wiJHFcIiwgXCJuZ2VvRGVib3VuY2VcIiwgXCJuZ2VvTmV0d29ya1N0YXR1c1wiXTtcblNlcnZpY2UubW9kdWxlLmZhY3RvcnkoJ2h0dHBJbnRlcmNlcHRvcicsIGh0dHBJbnRlcmNlcHRvcik7XG5cbmZ1bmN0aW9uIGNvbmZpZ0Z1bmN0aW9uXygkaHR0cFByb3ZpZGVyKSB7XG4gICRodHRwUHJvdmlkZXIuaW50ZXJjZXB0b3JzLnB1c2goJ2h0dHBJbnRlcmNlcHRvcicpO1xufVxuXG5TZXJ2aWNlLm1vZHVsZS5jb25maWcoY29uZmlnRnVuY3Rpb25fKTtcbnZhciBleHBvcnRzID0gU2VydmljZTtcbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHM7IiwiZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTsgaWYgKGl0KSByZXR1cm4gKGl0ID0gaXQuY2FsbChvKSkubmV4dC5iaW5kKGl0KTsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyByZXR1cm4gZnVuY3Rpb24gKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmltcG9ydCBuZ2VvTWFwQmFja2dyb3VuZExheWVyTWdyIGZyb20gJ25nZW8vbWFwL0JhY2tncm91bmRMYXllck1ncic7XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcblxudmFyIFJlc3RvcmVyID0gZnVuY3Rpb24gKCkge1xuICBSZXN0b3Jlci4kaW5qZWN0ID0gW1wibmdlb09mZmxpbmVDb25maWd1cmF0aW9uXCIsIFwibmdlb0JhY2tncm91bmRMYXllck1nclwiXTtcblxuICBmdW5jdGlvbiBSZXN0b3JlcihuZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb24sIG5nZW9CYWNrZ3JvdW5kTGF5ZXJNZ3IpIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb25fID0gbmdlb09mZmxpbmVDb25maWd1cmF0aW9uO1xuICAgIHRoaXMubmdlb0JhY2tncm91bmRMYXllck1ncl8gPSBuZ2VvQmFja2dyb3VuZExheWVyTWdyO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFJlc3RvcmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVzdG9yZSA9IGZ1bmN0aW9uIHJlc3RvcmUobWFwKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25fLmdldEl0ZW0oJ29mZmxpbmVfY29udGVudCcpLnRoZW4oZnVuY3Rpb24gKG9mZmxpbmVDb250ZW50KSB7XG4gICAgICByZXR1cm4gX3RoaXMuZG9SZXN0b3JlKG1hcCwgb2ZmbGluZUNvbnRlbnQpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5kb1Jlc3RvcmUgPSBmdW5jdGlvbiBkb1Jlc3RvcmUobWFwLCBvZmZsaW5lQ29udGVudCkge1xuICAgIG1hcC5nZXRMYXllckdyb3VwKCkuZ2V0TGF5ZXJzKCkuY2xlYXIoKTtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2Uob2ZmbGluZUNvbnRlbnQubGF5ZXJzKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHtcbiAgICAgIHZhciBvZmZsaW5lTGF5ZXIgPSBfc3RlcC52YWx1ZTtcbiAgICAgIHZhciBsYXllciA9IHRoaXMuY29uZmlndXJhdGlvbl8ucmVjcmVhdGVPZmZsaW5lTGF5ZXIob2ZmbGluZUxheWVyKTtcblxuICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgIG1hcC5hZGRMYXllcihsYXllcik7XG5cbiAgICAgICAgaWYgKG9mZmxpbmVMYXllci5iYWNrZ3JvdW5kTGF5ZXIpIHtcbiAgICAgICAgICB0aGlzLm5nZW9CYWNrZ3JvdW5kTGF5ZXJNZ3JfLnNldChtYXAsIGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvZmZsaW5lQ29udGVudC5leHRlbnQ7XG4gIH07XG5cbiAgcmV0dXJuIFJlc3RvcmVyO1xufSgpO1xuXG52YXIgbmFtZSA9ICduZ2VvT2ZmbGluZVJlc3RvcmVyJztcblJlc3RvcmVyLm1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKG5hbWUsIFtuZ2VvTWFwQmFja2dyb3VuZExheWVyTWdyLm5hbWVdKS5zZXJ2aWNlKG5hbWUsIFJlc3RvcmVyKTtcbnZhciBleHBvcnRzID0gUmVzdG9yZXI7XG5leHBvcnQgZGVmYXVsdCBleHBvcnRzOyIsImltcG9ydCBPbFRpbGVncmlkVGlsZUdyaWQgZnJvbSAnb2wvdGlsZWdyaWQvVGlsZUdyaWQnO1xuaW1wb3J0IE9sVGlsZWdyaWRXTVRTIGZyb20gJ29sL3RpbGVncmlkL1dNVFMnO1xuaW1wb3J0ICogYXMgb2xQcm9qIGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IE9sU291cmNlVGlsZVdNUyBmcm9tICdvbC9zb3VyY2UvVGlsZVdNUyc7XG5pbXBvcnQgT2xTb3VyY2VXTVRTIGZyb20gJ29sL3NvdXJjZS9XTVRTJztcbmltcG9ydCBPbExheWVyVGlsZSBmcm9tICdvbC9sYXllci9UaWxlJztcblxudmFyIFNlckRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2VyRGVzKF9yZWYpIHtcbiAgICB2YXIgZ3V0dGVyID0gX3JlZi5ndXR0ZXI7XG4gICAgdGhpcy5ndXR0ZXJfID0gZ3V0dGVyO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNlckRlcy5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNyZWF0ZUJhc2VPYmplY3RfID0gZnVuY3Rpb24gY3JlYXRlQmFzZU9iamVjdF8ob2xPYmplY3QpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IG9sT2JqZWN0LmdldFByb3BlcnRpZXMoKTtcbiAgICB2YXIgb2JqID0ge307XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcGVydGllcykge1xuICAgICAgdmFyIHZhbHVlID0gcHJvcGVydGllc1trZXldO1xuICAgICAgdmFyIHR5cGVPZiA9IHR5cGVvZiB2YWx1ZTtcblxuICAgICAgaWYgKHR5cGVPZiA9PT0gJ3N0cmluZycgfHwgdHlwZU9mID09PSAnbnVtYmVyJykge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgX3Byb3RvLnNlcmlhbGl6ZVRpbGVncmlkID0gZnVuY3Rpb24gc2VyaWFsaXplVGlsZWdyaWQodGlsZWdyaWQpIHtcbiAgICB2YXIgb2JqID0ge307XG4gICAgb2JqLmV4dGVudCA9IHRpbGVncmlkLmdldEV4dGVudCgpO1xuICAgIG9iai5taW5ab29tID0gdGlsZWdyaWQuZ2V0TWluWm9vbSgpO1xuICAgIG9iai5vcmlnaW4gPSB0aWxlZ3JpZC5nZXRPcmlnaW4oMCk7XG4gICAgb2JqLnJlc29sdXRpb25zID0gdGlsZWdyaWQuZ2V0UmVzb2x1dGlvbnMoKTtcbiAgICBvYmoudGlsZVNpemUgPSB0aWxlZ3JpZC5nZXRUaWxlU2l6ZSh0aWxlZ3JpZC5nZXRNaW5ab29tKCkpO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xuICB9O1xuXG4gIF9wcm90by5kZXNlcmlhbGl6ZVRpbGVncmlkID0gZnVuY3Rpb24gZGVzZXJpYWxpemVUaWxlZ3JpZChzZXJpYWxpemF0aW9uKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBKU09OLnBhcnNlKHNlcmlhbGl6YXRpb24pO1xuICAgIHJldHVybiBuZXcgT2xUaWxlZ3JpZFRpbGVHcmlkKG9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5zZXJpYWxpemVUaWxlZ3JpZFdNVFMgPSBmdW5jdGlvbiBzZXJpYWxpemVUaWxlZ3JpZFdNVFModGlsZWdyaWQpIHtcbiAgICBpZiAoIXRpbGVncmlkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBvYmogPSB7fTtcbiAgICB2YXIgcmVzb2x1dGlvbnMgPSB0aWxlZ3JpZC5nZXRSZXNvbHV0aW9ucygpO1xuICAgIG9iai5leHRlbnQgPSB0aWxlZ3JpZC5nZXRFeHRlbnQoKTtcbiAgICBvYmoubWluWm9vbSA9IHRpbGVncmlkLmdldE1pblpvb20oKTtcbiAgICBvYmoubWF0cml4SWRzID0gdGlsZWdyaWQuZ2V0TWF0cml4SWRzKCk7XG4gICAgb2JqLnJlc29sdXRpb25zID0gcmVzb2x1dGlvbnM7XG4gICAgb2JqLm9yaWdpbnMgPSBbXTtcblxuICAgIGZvciAodmFyIHogPSAwOyB6IDwgcmVzb2x1dGlvbnMubGVuZ3RoOyArK3opIHtcbiAgICAgIG9iai5vcmlnaW5zLnB1c2godGlsZWdyaWQuZ2V0T3JpZ2luKHopKTtcbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgfTtcblxuICBfcHJvdG8uZGVzZXJpYWxpemVUaWxlZ3JpZFdNVFMgPSBmdW5jdGlvbiBkZXNlcmlhbGl6ZVRpbGVncmlkV01UUyhzZXJpYWxpemF0aW9uKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBKU09OLnBhcnNlKHNlcmlhbGl6YXRpb24pO1xuICAgIHJldHVybiBuZXcgT2xUaWxlZ3JpZFdNVFMob3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLnNlcmlhbGl6ZVNvdXJjZVRpbGVXTVMgPSBmdW5jdGlvbiBzZXJpYWxpemVTb3VyY2VUaWxlV01TKHNvdXJjZSkge1xuICAgIHZhciBvYmogPSB0aGlzLmNyZWF0ZUJhc2VPYmplY3RfKHNvdXJjZSk7XG4gICAgb2JqLnBhcmFtcyA9IHNvdXJjZS5nZXRQYXJhbXMoKTtcbiAgICBvYmoudXJscyA9IHNvdXJjZS5nZXRVcmxzKCk7XG4gICAgb2JqLnRpbGVHcmlkID0gdGhpcy5zZXJpYWxpemVUaWxlZ3JpZChzb3VyY2UuZ2V0VGlsZUdyaWQoKSk7XG4gICAgdmFyIHByb2plY3Rpb24gPSBzb3VyY2UuZ2V0UHJvamVjdGlvbigpO1xuXG4gICAgaWYgKHByb2plY3Rpb24pIHtcbiAgICAgIG9iai5wcm9qZWN0aW9uID0gb2xQcm9qLmdldChzb3VyY2UuZ2V0UHJvamVjdGlvbigpKS5nZXRDb2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG4gIH07XG5cbiAgX3Byb3RvLmRlc2VyaWFsaXplU291cmNlVGlsZVdNUyA9IGZ1bmN0aW9uIGRlc2VyaWFsaXplU291cmNlVGlsZVdNUyhzZXJpYWxpemF0aW9uLCB0aWxlTG9hZEZ1bmN0aW9uKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBKU09OLnBhcnNlKHNlcmlhbGl6YXRpb24pO1xuICAgIG9wdGlvbnMudGlsZUxvYWRGdW5jdGlvbiA9IHRpbGVMb2FkRnVuY3Rpb247XG5cbiAgICBpZiAob3B0aW9ucy50aWxlR3JpZCkge1xuICAgICAgb3B0aW9ucy50aWxlR3JpZCA9IHRoaXMuZGVzZXJpYWxpemVUaWxlZ3JpZChvcHRpb25zLnRpbGVHcmlkKTtcbiAgICB9XG5cbiAgICBvcHRpb25zLmd1dHRlciA9IHRoaXMuZ3V0dGVyXztcbiAgICByZXR1cm4gbmV3IE9sU291cmNlVGlsZVdNUyhvcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uc2VyaWFsaXplU291cmNlV01UUyA9IGZ1bmN0aW9uIHNlcmlhbGl6ZVNvdXJjZVdNVFMoc291cmNlKSB7XG4gICAgdmFyIG9iaiA9IHRoaXMuY3JlYXRlQmFzZU9iamVjdF8oc291cmNlKTtcbiAgICBvYmouZGltZW5zaW9ucyA9IHNvdXJjZS5nZXREaW1lbnNpb25zKCk7XG4gICAgb2JqLmZvcm1hdCA9IHNvdXJjZS5nZXRGb3JtYXQoKTtcbiAgICBvYmoudXJscyA9IHNvdXJjZS5nZXRVcmxzKCk7XG4gICAgb2JqLnZlcnNpb24gPSBzb3VyY2UuZ2V0VmVyc2lvbigpO1xuICAgIG9iai5sYXllciA9IHNvdXJjZS5nZXRMYXllcigpO1xuICAgIG9iai5zdHlsZSA9IHNvdXJjZS5nZXRTdHlsZSgpO1xuICAgIG9iai5tYXRyaXhTZXQgPSBzb3VyY2UuZ2V0TWF0cml4U2V0KCk7XG4gICAgdmFyIHRpbGVHcmlkV01UUyA9IHNvdXJjZS5nZXRUaWxlR3JpZCgpO1xuICAgIG9iai50aWxlR3JpZCA9IHRoaXMuc2VyaWFsaXplVGlsZWdyaWRXTVRTKHRpbGVHcmlkV01UUyk7XG4gICAgb2JqLnJlcXVlc3RFbmNvZGluZyA9IHNvdXJjZS5nZXRSZXF1ZXN0RW5jb2RpbmcoKTtcbiAgICB2YXIgcHJvamVjdGlvbiA9IHNvdXJjZS5nZXRQcm9qZWN0aW9uKCk7XG5cbiAgICBpZiAocHJvamVjdGlvbikge1xuICAgICAgb2JqLnByb2plY3Rpb24gPSBvbFByb2ouZ2V0KHNvdXJjZS5nZXRQcm9qZWN0aW9uKCkpLmdldENvZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgfTtcblxuICBfcHJvdG8uZGVzZXJpYWxpemVTb3VyY2VXTVRTID0gZnVuY3Rpb24gZGVzZXJpYWxpemVTb3VyY2VXTVRTKHNlcmlhbGl6YXRpb24sIHRpbGVMb2FkRnVuY3Rpb24pIHtcbiAgICB2YXIgb3B0aW9ucyA9IEpTT04ucGFyc2Uoc2VyaWFsaXphdGlvbik7XG4gICAgb3B0aW9ucy50aWxlTG9hZEZ1bmN0aW9uID0gdGlsZUxvYWRGdW5jdGlvbjtcblxuICAgIGlmIChvcHRpb25zLnRpbGVHcmlkKSB7XG4gICAgICBvcHRpb25zLnRpbGVHcmlkID0gdGhpcy5kZXNlcmlhbGl6ZVRpbGVncmlkV01UUyhvcHRpb25zLnRpbGVHcmlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IE9sU291cmNlV01UUyhvcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8ubWFrZUluZmluaXR5U2VyaWFsaXphYmxlXyA9IGZ1bmN0aW9uIG1ha2VJbmZpbml0eVNlcmlhbGl6YWJsZV8obnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciA9PT0gSW5maW5pdHkpIHtcbiAgICAgIHJldHVybiAxMDAwO1xuICAgIH1cblxuICAgIHJldHVybiBudW1iZXI7XG4gIH07XG5cbiAgX3Byb3RvLnNlcmlhbGl6ZVRpbGVMYXllciA9IGZ1bmN0aW9uIHNlcmlhbGl6ZVRpbGVMYXllcihsYXllciwgc291cmNlKSB7XG4gICAgdmFyIG9iaiA9IHRoaXMuY3JlYXRlQmFzZU9iamVjdF8obGF5ZXIpO1xuICAgIG9iai5vcGFjaXR5ID0gbGF5ZXIuZ2V0T3BhY2l0eSgpO1xuICAgIG9iai52aXNpYmxlID0gbGF5ZXIuZ2V0VmlzaWJsZSgpO1xuICAgIG9iai5taW5SZXNvbHV0aW9uID0gbGF5ZXIuZ2V0TWluUmVzb2x1dGlvbigpO1xuICAgIG9iai5tYXhSZXNvbHV0aW9uID0gdGhpcy5tYWtlSW5maW5pdHlTZXJpYWxpemFibGVfKGxheWVyLmdldE1heFJlc29sdXRpb24oKSk7XG4gICAgb2JqLnpJbmRleCA9IGxheWVyLmdldFpJbmRleCgpO1xuICAgIHNvdXJjZSA9IHNvdXJjZSB8fCBsYXllci5nZXRTb3VyY2UoKTtcblxuICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBPbFNvdXJjZVRpbGVXTVMpIHtcbiAgICAgIG9iai5zb3VyY2UgPSB0aGlzLnNlcmlhbGl6ZVNvdXJjZVRpbGVXTVMoc291cmNlKTtcbiAgICAgIG9iai5zb3VyY2VUeXBlID0gJ3RpbGVXTVMnO1xuICAgIH0gZWxzZSBpZiAoc291cmNlIGluc3RhbmNlb2YgT2xTb3VyY2VXTVRTKSB7XG4gICAgICBvYmouc291cmNlID0gdGhpcy5zZXJpYWxpemVTb3VyY2VXTVRTKHNvdXJjZSk7XG4gICAgICBvYmouc291cmNlVHlwZSA9ICdXTVRTJztcbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgfTtcblxuICBfcHJvdG8uZGVzZXJpYWxpemVUaWxlTGF5ZXIgPSBmdW5jdGlvbiBkZXNlcmlhbGl6ZVRpbGVMYXllcihzZXJpYWxpemF0aW9uLCB0aWxlTG9hZEZ1bmN0aW9uKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBKU09OLnBhcnNlKHNlcmlhbGl6YXRpb24pO1xuICAgIHZhciBzb3VyY2VUeXBlID0gb3B0aW9ucy5zb3VyY2VUeXBlO1xuXG4gICAgaWYgKHNvdXJjZVR5cGUgPT09ICd0aWxlV01TJykge1xuICAgICAgb3B0aW9ucy5zb3VyY2UgPSB0aGlzLmRlc2VyaWFsaXplU291cmNlVGlsZVdNUyhvcHRpb25zLnNvdXJjZSwgdGlsZUxvYWRGdW5jdGlvbik7XG4gICAgfSBlbHNlIGlmIChzb3VyY2VUeXBlID09PSAnV01UUycpIHtcbiAgICAgIG9wdGlvbnMuc291cmNlID0gdGhpcy5kZXNlcmlhbGl6ZVNvdXJjZVdNVFMob3B0aW9ucy5zb3VyY2UsIHRpbGVMb2FkRnVuY3Rpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgT2xMYXllclRpbGUob3B0aW9ucyk7XG4gIH07XG5cbiAgcmV0dXJuIFNlckRlcztcbn0oKTtcblxudmFyIGV4cG9ydHMgPSBTZXJEZXM7XG5leHBvcnQgZGVmYXVsdCBleHBvcnRzOyIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuXG52YXIgU2VydmljZU1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIFNlcnZpY2VNYW5hZ2VyLiRpbmplY3QgPSBbXCIkaW5qZWN0b3JcIl07XG5cbiAgZnVuY3Rpb24gU2VydmljZU1hbmFnZXIoJGluamVjdG9yKSB7XG4gICAgdGhpcy4kaW5qZWN0b3JfID0gJGluamVjdG9yO1xuICAgIHRoaXMuc2F2ZVNlcnZpY2VfID0gbnVsbDtcbiAgICB0aGlzLnJlc3RvcmVTZXJ2aWNlXyA9IG51bGw7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU2VydmljZU1hbmFnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRPZmZsaW5lU2VydmljZV8gPSBmdW5jdGlvbiBnZXRPZmZsaW5lU2VydmljZV8oc2VydmljZUxpa2UsIG1ldGhvZCkge1xuICAgIGlmICh0eXBlb2Ygc2VydmljZUxpa2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoIXRoaXMuJGluamVjdG9yXy5oYXMoc2VydmljZUxpa2UpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgb2ZmbGluZSBcIiArIG1ldGhvZCArIFwiIHNlcnZpY2UgY291bGQgbm90IGJlIGZvdW5kXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBzZXJ2aWNlID0gdGhpcy4kaW5qZWN0b3JfLmdldChzZXJ2aWNlTGlrZSk7XG5cbiAgICAgIGlmICghc2VydmljZVttZXRob2RdKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgb2ZmbGluZSBzZXJ2aWNlIFwiICsgc2VydmljZUxpa2UgKyBcIiBkb2VzIG5vdCBoYXZlIGEgXCIgKyBtZXRob2QgKyBcIiBtZXRob2RcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlcnZpY2U7XG4gICAgfVxuXG4gICAgaWYgKCFzZXJ2aWNlTGlrZVttZXRob2RdKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVGhlIHByb3ZpZGVkIG9mZmxpbmUgc2VydmljZSBkb2VzIG5vdCBoYXZlIGEgXCIgKyBtZXRob2QgKyBcIiBtZXRob2RcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlcnZpY2VMaWtlO1xuICB9O1xuXG4gIF9wcm90by5zZXRTYXZlU2VydmljZSA9IGZ1bmN0aW9uIHNldFNhdmVTZXJ2aWNlKHNhdmVMaWtlU2VydmljZSkge1xuICAgIHRoaXMuc2F2ZVNlcnZpY2VfID0gdGhpcy5nZXRPZmZsaW5lU2VydmljZV8oc2F2ZUxpa2VTZXJ2aWNlLCAnc2F2ZScpO1xuICB9O1xuXG4gIF9wcm90by5zZXRSZXN0b3JlU2VydmljZSA9IGZ1bmN0aW9uIHNldFJlc3RvcmVTZXJ2aWNlKHJlc3RvcmVMaWtlU2VydmljZSkge1xuICAgIHRoaXMucmVzdG9yZVNlcnZpY2VfID0gdGhpcy5nZXRPZmZsaW5lU2VydmljZV8ocmVzdG9yZUxpa2VTZXJ2aWNlLCAncmVzdG9yZScpO1xuICB9O1xuXG4gIF9wcm90by5jYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKCF0aGlzLnNhdmVTZXJ2aWNlXykge1xuICAgICAgY29uc29sZS53YXJuKCdZb3UgbXVzdCByZWdpc3RlciBhIHNhdmVTZXJ2aWNlIGZpcnN0Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zYXZlU2VydmljZV8uY2FuY2VsKCk7XG4gIH07XG5cbiAgX3Byb3RvLnNhdmUgPSBmdW5jdGlvbiBzYXZlKGV4dGVudCwgbWFwKSB7XG4gICAgaWYgKCF0aGlzLnNhdmVTZXJ2aWNlXykge1xuICAgICAgY29uc29sZS53YXJuKCdZb3UgbXVzdCByZWdpc3RlciBhIHNhdmVTZXJ2aWNlIGZpcnN0Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zYXZlU2VydmljZV8uc2F2ZShleHRlbnQsIG1hcCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlc3RvcmUgPSBmdW5jdGlvbiByZXN0b3JlKG1hcCkge1xuICAgIGlmICghdGhpcy5yZXN0b3JlU2VydmljZV8pIHtcbiAgICAgIGNvbnNvbGUud2FybignWW91IG11c3QgcmVnaXN0ZXIgYSByZXN0b3JlU2VydmljZSBmaXJzdCcpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzdG9yZVNlcnZpY2VfLnJlc3RvcmUobWFwKTtcbiAgfTtcblxuICByZXR1cm4gU2VydmljZU1hbmFnZXI7XG59KCk7XG5cblNlcnZpY2VNYW5hZ2VyLm1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCduZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyJywgW10pO1xuU2VydmljZU1hbmFnZXIubW9kdWxlLnNlcnZpY2UoJ25nZW9PZmZsaW5lU2VydmljZU1hbmFnZXInLCBTZXJ2aWNlTWFuYWdlcik7XG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlTWFuYWdlcjsiLCJmdW5jdGlvbiBibG9iVG9EYXRhVXJsKGJsb2IpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgIH07XG5cbiAgICByZWFkZXIub25lcnJvciA9IHJlamVjdDtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgfSk7XG59XG5cbnZhciBUaWxlRG93bmxvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVGlsZURvd25sb2FkZXIodGlsZXMsIGNhbGxiYWNrcywgd29ya2Vycykge1xuICAgIHRoaXMubWF4TnVtYmVyT2ZXb3JrZXJzXyA9IHdvcmtlcnM7XG4gICAgdGhpcy53YXNTdGFydGVkXyA9IGZhbHNlO1xuICAgIHRoaXMudGlsZXNfID0gdGlsZXM7XG4gICAgdGhpcy5jYWxsYmFja3NfID0gY2FsbGJhY2tzO1xuICAgIHRoaXMuYWxsQ291bnRfID0gMDtcbiAgICB0aGlzLm9rQ291bnRfID0gMDtcbiAgICB0aGlzLmtvQ291bnRfID0gMDtcbiAgICB0aGlzLnJlcXVlc3RlZENvdW50XyA9IDA7XG4gICAgdGhpcy5yZXNvbHZlUHJvbWlzZV8gPSBudWxsO1xuICAgIHRoaXMucHJvbWlzZV8gPSBudWxsO1xuICAgIHRoaXMudGlsZUluZGV4XyA9IDA7XG4gICAgdGhpcy5jYW5jZWxfID0gZmFsc2U7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVGlsZURvd25sb2FkZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5jYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgdGhpcy5jYW5jZWxfID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uZG93bmxvYWQgPSBmdW5jdGlvbiBkb3dubG9hZCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMucHJvbWlzZV8pIHtcbiAgICAgIHJldHVybiB0aGlzLnByb21pc2VfO1xuICAgIH1cblxuICAgIHRoaXMucHJvbWlzZV8gPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBfdGhpcy5yZXNvbHZlUHJvbWlzZV8gPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIGNvbnNvbGUuYXNzZXJ0KHRoaXMudGlsZXNfKTtcblxuICAgIGlmICh0aGlzLnRpbGVzXy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tzXy5vblRpbGVEb3dubG9hZEVycm9yKDEpO1xuXG4gICAgICBpZiAodGhpcy5yZXNvbHZlUHJvbWlzZV8pIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlUHJvbWlzZV8oKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1heE51bWJlck9mV29ya2Vyc187ICsraSkge1xuICAgICAgICB0aGlzLmRvd25sb2FkVGlsZV8oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9taXNlXztcbiAgfTtcblxuICBfcHJvdG8uZG93bmxvYWRUaWxlXyA9IGZ1bmN0aW9uIGRvd25sb2FkVGlsZV8oKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5jYW5jZWxfIHx8IHRoaXMudGlsZUluZGV4XyA+PSB0aGlzLnRpbGVzXy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGlsZSA9IHRoaXMudGlsZXNfW3RoaXMudGlsZUluZGV4XysrXTtcbiAgICB2YXIgdGlsZVVybCA9IHRpbGUudXJsO1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub3BlbignR0VUJywgdGlsZVVybCwgdHJ1ZSk7XG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcblxuICAgIHZhciBvblRpbGVEb3dubG9hZGVkID0gZnVuY3Rpb24gb25UaWxlRG93bmxvYWRlZCgpIHtcbiAgICAgIGlmIChfdGhpczIuYWxsQ291bnRfID09PSBfdGhpczIudGlsZXNfLmxlbmd0aCAmJiBfdGhpczIucmVzb2x2ZVByb21pc2VfKSB7XG4gICAgICAgIF90aGlzMi5yZXNvbHZlUHJvbWlzZV8oKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMyLmRvd25sb2FkVGlsZV8oKTtcbiAgICB9O1xuXG4gICAgdmFyIGVycm9yQ2FsbGJhY2sgPSBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKF8pIHtcbiAgICAgIGlmIChfdGhpczIuY2FuY2VsXykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICsrX3RoaXMyLmFsbENvdW50XztcbiAgICAgICsrX3RoaXMyLmtvQ291bnRfO1xuICAgICAgdmFyIHByb2dyZXNzID0gX3RoaXMyLmFsbENvdW50XyAvIF90aGlzMi50aWxlc18ubGVuZ3RoO1xuXG4gICAgICBfdGhpczIuY2FsbGJhY2tzXy5vblRpbGVEb3dubG9hZEVycm9yKHByb2dyZXNzKS50aGVuKG9uVGlsZURvd25sb2FkZWQsIG9uVGlsZURvd25sb2FkZWQpO1xuICAgIH07XG5cbiAgICB2YXIgb25sb2FkQ2FsbGJhY2sgPSBmdW5jdGlvbiBvbmxvYWRDYWxsYmFjayhlKSB7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2U7XG5cbiAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5zaXplICE9PSAwKSB7XG4gICAgICAgIGJsb2JUb0RhdGFVcmwocmVzcG9uc2UpLnRoZW4oZnVuY3Rpb24gKGRhdGFVcmwpIHtcbiAgICAgICAgICBpZiAoX3RoaXMyLmNhbmNlbF8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICArK190aGlzMi5hbGxDb3VudF87XG4gICAgICAgICAgKytfdGhpczIub2tDb3VudF87XG4gICAgICAgICAgdGlsZS5yZXNwb25zZSA9IGRhdGFVcmw7XG4gICAgICAgICAgdmFyIHByb2dyZXNzID0gX3RoaXMyLmFsbENvdW50XyAvIF90aGlzMi50aWxlc18ubGVuZ3RoO1xuXG4gICAgICAgICAgX3RoaXMyLmNhbGxiYWNrc18ub25UaWxlRG93bmxvYWRTdWNjZXNzKHByb2dyZXNzLCB0aWxlKS50aGVuKG9uVGlsZURvd25sb2FkZWQsIG9uVGlsZURvd25sb2FkZWQpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF90aGlzMi5jYW5jZWxfKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3JDYWxsYmFjayhlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoX3RoaXMyLmNhbmNlbF8pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICArK190aGlzMi5hbGxDb3VudF87XG4gICAgICAgICsrX3RoaXMyLm9rQ291bnRfO1xuXG4gICAgICAgIF90aGlzMi5jYWxsYmFja3NfLm9uVGlsZURvd25sb2FkU3VjY2VzcyhfdGhpczIuYWxsQ291bnRfIC8gX3RoaXMyLnRpbGVzXy5sZW5ndGgsIHRpbGUpLnRoZW4ob25UaWxlRG93bmxvYWRlZCwgb25UaWxlRG93bmxvYWRlZCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHhoci5vbmxvYWQgPSBvbmxvYWRDYWxsYmFjaztcbiAgICB4aHIub25lcnJvciA9IGVycm9yQ2FsbGJhY2s7XG4gICAgeGhyLm9uYWJvcnQgPSBlcnJvckNhbGxiYWNrO1xuICAgIHhoci5vbnRpbWVvdXQgPSBlcnJvckNhbGxiYWNrO1xuICAgIHhoci5zZW5kKCk7XG4gICAgKyt0aGlzLnJlcXVlc3RlZENvdW50XztcbiAgfTtcblxuICByZXR1cm4gVGlsZURvd25sb2FkZXI7XG59KCk7XG5cbmV4cG9ydCB7IFRpbGVEb3dubG9hZGVyIGFzIGRlZmF1bHQgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaikge1xub2JqIHx8IChvYmogPSB7fSk7XG52YXIgX190LCBfX3AgPSAnJztcbndpdGggKG9iaikge1xuX19wICs9ICc8ZGl2IGNsYXNzPVwibWFpbi1idXR0b25cIj5cXG4gIDxzcGFuIG5nLWlmPVwiISRjdHJsLmhhc0RhdGEoKVwiPlxcbiAgICA8ZGl2IGNsYXNzPVwibm8tZGF0YSBmYXMgZmEtYXJyb3ctY2lyY2xlLWRvd25cIiBuZy1jbGljaz1cIiRjdHJsLnRvZ2dsZVZpZXdFeHRlbnRTZWxlY3Rpb24oKVwiPjwvZGl2PlxcbiAgPC9zcGFuPlxcbiAgPHNwYW4gbmctaWY9XCIkY3RybC5oYXNEYXRhKClcIj5cXG4gICAgPGRpdiBjbGFzcz1cIndpdGgtZGF0YSBmYXMgZmEtYXJyb3ctY2lyY2xlLWRvd25cIiBuZy1jbGljaz1cIiRjdHJsLnNob3dNZW51KClcIj48L2Rpdj5cXG4gIDwvc3Bhbj5cXG48L2Rpdj5cXG5cXG48ZGl2XFxuICBuZy1pZj1cIiRjdHJsLnNlbGVjdGluZ0V4dGVudCAmJiAhJGN0cmwubmV0d29ya1N0YXR1cy5pc0Rpc2Nvbm5lY3RlZCgpXCJcXG4gIGNsYXNzPVwidmFsaWRhdGUtZXh0ZW50IGJ0biBidG4tcHJpbWFyeVwiXFxuPlxcbiAgPGRpdiBuZy1pZj1cIiEkY3RybC5kb3dubG9hZGluZ1wiIG5nLWNsaWNrPVwiJGN0cmwuY29tcHV0ZVNpemVBbmREaXNwbGF5QWxlcnRMb2FkRGF0YSgpXCIgdHJhbnNsYXRlPlxcbiAgICBTYXZlIG1hcFxcbiAgPC9kaXY+XFxuICA8ZGl2IG5nLWlmPVwiJGN0cmwuZG93bmxvYWRpbmdcIiBuZy1jbGljaz1cIiRjdHJsLmFza0Fib3J0RG93bmxvYWQoKVwiIHRyYW5zbGF0ZT5BYm9ydDwvZGl2PlxcbjwvZGl2PlxcblxcbjxkaXYgbmctaWY9XCIkY3RybC5kb3dubG9hZGluZ1wiIGNsYXNzPVwiaW4tcHJvZ3Jlc3NcIj5cXG4gIDxkaXY+e3skY3RybC5wcm9ncmVzc1BlcmNlbnRzfX0lPC9kaXY+XFxuPC9kaXY+XFxuXFxuPG5nZW8tbW9kYWwgbmctbW9kZWw9XCIkY3RybC5tZW51RGlzcGxheWVkXCI+XFxuICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XFxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJ7e1xcJ0Nsb3NlXFwnIHwgdHJhbnNsYXRlfX1cIj5cXG4gICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxcbiAgICA8L2J1dHRvbj5cXG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIiB0cmFuc2xhdGU+T2ZmbGluZSBtYXA8L2g0PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcbiAgICA8ZGl2IG5nLWlmPVwiJGN0cmwuaGFzRGF0YSgpXCI+XFxuICAgICAgPGJ1dHRvblxcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXFxuICAgICAgICBjbGFzcz1cImV4dGVudC16b29tIGJ0biBidG4tZGVmYXVsdFwiXFxuICAgICAgICBuZy1pZj1cIiEkY3RybC5vZmZsaW5lTW9kZS5pc0VuYWJsZWQoKVwiXFxuICAgICAgICBuZy1jbGljaz1cIiRjdHJsLmFjdGl2YXRlT2ZmbGluZU1vZGUoKVwiXFxuICAgICAgICB0cmFuc2xhdGVcXG4gICAgICA+XFxuICAgICAgICBBY3RpdmF0ZSBvZmZsaW5lIG1vZGVcXG4gICAgICA8L2J1dHRvbj5cXG4gICAgICA8YnV0dG9uXFxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcXG4gICAgICAgIGNsYXNzPVwiZXh0ZW50LXpvb20gYnRuIGJ0bi1kZWZhdWx0XCJcXG4gICAgICAgIG5nLWlmPVwiJGN0cmwub2ZmbGluZU1vZGUuaXNFbmFibGVkKCkgJiYgISRjdHJsLm5ldHdvcmtTdGF0dXMuaXNEaXNjb25uZWN0ZWQoKVwiXFxuICAgICAgICBuZy1jbGljaz1cIiRjdHJsLmRlYWN0aXZhdGVPZmZsaW5lTW9kZSgpXCJcXG4gICAgICAgIHRyYW5zbGF0ZVxcbiAgICAgID5cXG4gICAgICAgIERlYWN0aXZhdGUgb2ZmbGluZSBtb2RlXFxuICAgICAgPC9idXR0b24+XFxuXFxuICAgICAgPGJ1dHRvblxcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXFxuICAgICAgICBjbGFzcz1cImV4dGVudC1zaG93IGJ0biBidG4tZGVmYXVsdFwiXFxuICAgICAgICBuZy1pZj1cIiRjdHJsLm9mZmxpbmVNb2RlLmlzRW5hYmxlZCgpXCJcXG4gICAgICAgIG5nLWNsaWNrPVwiJGN0cmwudG9nZ2xlRXh0ZW50VmlzaWJpbGl0eSgpXCJcXG4gICAgICA+XFxuICAgICAgICA8c3BhbiBuZy1pZj1cIiRjdHJsLmlzRXh0ZW50VmlzaWJsZSgpXCIgdHJhbnNsYXRlPkhpZGUgZXh0ZW50PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gbmctaWY9XCIhJGN0cmwuaXNFeHRlbnRWaXNpYmxlKClcIiB0cmFuc2xhdGU+U2hvdyBleHRlbnQ8L3NwYW4+XFxuICAgICAgPC9idXR0b24+XFxuICAgICAgPGJ1dHRvblxcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXFxuICAgICAgICBjbGFzcz1cImRlbGV0ZSBidG4gYnRuLWRlZmF1bHRcIlxcbiAgICAgICAgbmctaWY9XCIhJGN0cmwubmV0d29ya1N0YXR1cy5pc0Rpc2Nvbm5lY3RlZCgpXCJcXG4gICAgICAgIG5nLWNsaWNrPVwiJGN0cmwuZGlzcGxheUFsZXJ0RGVzdHJveURhdGEgPSB0cnVlXCJcXG4gICAgICAgIHRyYW5zbGF0ZVxcbiAgICAgID5cXG4gICAgICAgIERlbGV0ZSBkYXRhXFxuICAgICAgPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IG5nLWlmPVwiISRjdHJsLmhhc0RhdGEoKSAmJiAhJGN0cmwubmV0d29ya1N0YXR1cy5pc0Rpc2Nvbm5lY3RlZCgpXCI+XFxuICAgICAgPGJ1dHRvblxcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXFxuICAgICAgICBjbGFzcz1cIm5ldy1kYXRhIGJ0biBidG4tZGVmYXVsdFwiXFxuICAgICAgICBuZy1jbGljaz1cIiRjdHJsLnRvZ2dsZVZpZXdFeHRlbnRTZWxlY3Rpb24oKVwiXFxuICAgICAgICB0cmFuc2xhdGVcXG4gICAgICA+XFxuICAgICAgICBTYXZlIG5ldyBtYXBcXG4gICAgICA8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L25nZW8tbW9kYWw+XFxuXFxuPG5nZW8tbW9kYWwgbmctbW9kZWw9XCIkY3RybC5kaXNwbGF5QWxlcnRMb2FkRGF0YVwiPlxcbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxcbiAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiIHRyYW5zbGF0ZT5XYXJuaW5nPC9oND5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXG4gICAgPHAgdHJhbnNsYXRlPlxcbiAgICAgIH57eyRjdHJsLmVzdGltYXRlZExvYWREYXRhU2l6ZX19TUIgb2YgbWFwcyB3aWxsIGJlIGRvd25sb2FkZWQgKHVudGlsIHNjYWxlIDE6MjVcXCcwMDApIC0gRG9uXFwndCBsb2NrIHlvdXJcXG4gICAgICBkZXZpY2Ugb3IgbmF2aWdhdGUgYXdheSBmcm9tIHRoaXMgc2l0ZSBkdXJpbmcgdGhlIGRvd25sb2FkIHByb2Nlc3MuIERlYWN0aXZhdGUgXCJwcml2YXRlXCIgbW9kZSBvZiB5b3VyXFxuICAgICAgYnJvd3Nlci5cXG4gICAgPC9wPlxcbiAgICA8YnV0dG9uXFxuICAgICAgdHlwZT1cImJ1dHRvblwiXFxuICAgICAgY2xhc3M9XCJ2YWxpZGF0ZSBidG4gYnRuLXByaW1hcnlcIlxcbiAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcXG4gICAgICBuZy1jbGljaz1cIiRjdHJsLnZhbGlkYXRlRXh0ZW50KClcIlxcbiAgICAgIHRyYW5zbGF0ZVxcbiAgICA+XFxuICAgICAgT2tcXG4gICAgPC9idXR0b24+XFxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlIGJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgdHJhbnNsYXRlPkNhbmNlbDwvYnV0dG9uPlxcbiAgPC9kaXY+XFxuPC9uZ2VvLW1vZGFsPlxcblxcbjxuZ2VvLW1vZGFsIG5nLW1vZGVsPVwiJGN0cmwuZGlzcGxheUFsZXJ0Tm9MYXllclwiPlxcbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxcbiAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiIHRyYW5zbGF0ZT5XYXJuaW5nPC9oND5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXG4gICAgPHAgdHJhbnNsYXRlPk5vIG1hcHMgc2VsZWN0ZWQgZm9yIHNhdmluZy48L3A+XFxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlIGJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgdHJhbnNsYXRlPk9rPC9idXR0b24+XFxuICA8L2Rpdj5cXG48L25nZW8tbW9kYWw+XFxuXFxuPG5nZW8tbW9kYWwgbmctbW9kZWw9XCIkY3RybC5kaXNwbGF5QWxlcnREZXN0cm95RGF0YVwiPlxcbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxcbiAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiIHRyYW5zbGF0ZT5XYXJuaW5nPC9oND5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXG4gICAgPHAgdHJhbnNsYXRlPkRvIHlvdSByZWFsbHkgd2FudCB0byByZW1vdmUgeW91ciBkYXRhID88L3A+XFxuICAgIDxidXR0b25cXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcXG4gICAgICBjbGFzcz1cInZhbGlkYXRlIGJ0biBidG4tcHJpbWFyeVwiXFxuICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxcbiAgICAgIG5nLWNsaWNrPVwiJGN0cmwuZGVsZXRlRGF0YSgpXCJcXG4gICAgICB0cmFuc2xhdGVcXG4gICAgPlxcbiAgICAgIE9rXFxuICAgIDwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImRlbGV0ZSBidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIHRyYW5zbGF0ZT5DYW5jZWw8L2J1dHRvbj5cXG4gIDwvZGl2Plxcbjwvbmdlby1tb2RhbD5cXG5cXG48bmdlby1tb2RhbCBuZy1tb2RlbD1cIiRjdHJsLmRpc3BsYXlBbGVydEFib3J0RG93bmxvYWRcIj5cXG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cXG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIiB0cmFuc2xhdGU+V2FybmluZzwvaDQ+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxuICAgIDxwIHRyYW5zbGF0ZT5EbyB5b3UgcmVhbGx5IHdhbnQgdG8gcmVtb3ZlIHlvdXIgZGF0YSA/PC9wPlxcbiAgICA8YnV0dG9uXFxuICAgICAgdHlwZT1cImJ1dHRvblwiXFxuICAgICAgY2xhc3M9XCJ2YWxpZGF0ZSBidG4gYnRuLXByaW1hcnlcIlxcbiAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcXG4gICAgICBuZy1jbGljaz1cIiRjdHJsLmFib3J0RG93bmxvYWQoKVwiXFxuICAgICAgdHJhbnNsYXRlXFxuICAgID5cXG4gICAgICBPa1xcbiAgICA8L2J1dHRvbj5cXG4gICAgPGJ1dHRvblxcbiAgICAgIHR5cGU9XCJidXR0b25cIlxcbiAgICAgIGNsYXNzPVwiZGVsZXRlIGJ0biBidG4tZGVmYXVsdFwiXFxuICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxcbiAgICAgIG5nLWNsaWNrPVwiJGN0cmwuZm9sbG93RG93bmxvYWRQcm9ncmVzc2lvbl8oKVwiXFxuICAgICAgdHJhbnNsYXRlXFxuICAgID5cXG4gICAgICBDYW5jZWxcXG4gICAgPC9idXR0b24+XFxuICA8L2Rpdj5cXG48L25nZW8tbW9kYWw+XFxuJztcblxufVxucmV0dXJuIF9fcFxufSIsImltcG9ydCBuZ2VvTWFwRmVhdHVyZU92ZXJsYXlNZ3IgZnJvbSAnbmdlby9tYXAvRmVhdHVyZU92ZXJsYXlNZ3InO1xuaW1wb3J0IG5nZW9NZXNzYWdlTW9kYWxDb21wb25lbnQgZnJvbSAnbmdlby9tZXNzYWdlL21vZGFsQ29tcG9uZW50JztcbmltcG9ydCB7IGV4dGVudFRvUmVjdGFuZ2xlIH0gZnJvbSAnbmdlby91dGlscyc7XG5pbXBvcnQgb2xDb2xsZWN0aW9uIGZyb20gJ29sL0NvbGxlY3Rpb24nO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnb2wvRmVhdHVyZSc7XG5pbXBvcnQgUG9seWdvbiBmcm9tICdvbC9nZW9tL1BvbHlnb24nO1xuaW1wb3J0IHsgREVWSUNFX1BJWEVMX1JBVElPIH0gZnJvbSAnb2wvaGFzJztcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IE1hc2tMYXllciBmcm9tICcuL01hc2snO1xudmFyIG15TW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ25nZW9PZmZsaW5lJywgW25nZW9NZXNzYWdlTW9kYWxDb21wb25lbnQubmFtZV0pO1xubXlNb2R1bGUudmFsdWUoJ25nZW9PZmZsaW5lVGVtcGxhdGVVcmwnLCBmdW5jdGlvbiAoZWxlbWVudCwgYXR0cnMpIHtcbiAgdmFyIHRlbXBsYXRlVXJsID0gYXR0cnNbJ25nZW9PZmZsaW5lVGVtcGxhdGV1cmwnXTtcbiAgcmV0dXJuIHRlbXBsYXRlVXJsICE9PSB1bmRlZmluZWQgPyB0ZW1wbGF0ZVVybCA6ICduZ2VvL29mZmxpbmUvY29tcG9uZW50Lmh0bWwnO1xufSk7XG5teU1vZHVsZS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnbmdlby9vZmZsaW5lL2NvbXBvbmVudC5odG1sJywgcmVxdWlyZSgnLi9jb21wb25lbnQuaHRtbCcpKTtcbn1dKTtcbm5nZW9PZmZsaW5lVGVtcGxhdGVVcmwuJGluamVjdCA9IFtcIiRlbGVtZW50XCIsIFwiJGF0dHJzXCIsIFwibmdlb09mZmxpbmVUZW1wbGF0ZVVybFwiXTtcblxuZnVuY3Rpb24gbmdlb09mZmxpbmVUZW1wbGF0ZVVybCgkZWxlbWVudCwgJGF0dHJzLCBuZ2VvT2ZmbGluZVRlbXBsYXRlVXJsKSB7XG4gIHJldHVybiBuZ2VvT2ZmbGluZVRlbXBsYXRlVXJsKCRlbGVtZW50LCAkYXR0cnMpO1xufVxuXG52YXIgY29tcG9uZW50ID0ge1xuICBiaW5kaW5nczoge1xuICAgICdtYXAnOiAnPG5nZW9PZmZsaW5lTWFwJyxcbiAgICAnZXh0ZW50U2l6ZSc6ICc8P25nZW9PZmZsaW5lRXh0ZW50c2l6ZScsXG4gICAgJ21hc2tNYXJnaW4nOiAnPD9uZ2VvT2ZmbGluZU1hc2tNYXJnaW4nLFxuICAgICdtaW5ab29tJzogJzw/bmdlb09mZmxpbmVNaW5ab29tJyxcbiAgICAnbWF4Wm9vbSc6ICc8P25nZW9PZmZsaW5lTWF4Wm9vbSdcbiAgfSxcbiAgY29udHJvbGxlcjogJ25nZW9PZmZsaW5lQ29udHJvbGxlcicsXG4gIHRlbXBsYXRlVXJsOiBuZ2VvT2ZmbGluZVRlbXBsYXRlVXJsXG59O1xubXlNb2R1bGUuY29tcG9uZW50KCduZ2VvT2ZmbGluZScsIGNvbXBvbmVudCk7XG5leHBvcnQgdmFyIENvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG4gIENvbnRyb2xsZXIuJGluamVjdCA9IFtcIiR0aW1lb3V0XCIsIFwibmdlb09mZmxpbmVTZXJ2aWNlTWFuYWdlclwiLCBcIm5nZW9PZmZsaW5lQ29uZmlndXJhdGlvblwiLCBcIm5nZW9PZmZsaW5lTW9kZVwiLCBcIm5nZW9OZXR3b3JrU3RhdHVzXCJdO1xuXG4gIGZ1bmN0aW9uIENvbnRyb2xsZXIoJHRpbWVvdXQsIG5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXIsIG5nZW9PZmZsaW5lQ29uZmlndXJhdGlvbiwgbmdlb09mZmxpbmVNb2RlLCBuZ2VvTmV0d29ya1N0YXR1cykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLiR0aW1lb3V0XyA9ICR0aW1lb3V0O1xuICAgIHRoaXMubWFza0xheWVyXyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXJfID0gbmdlb09mZmxpbmVTZXJ2aWNlTWFuYWdlcjtcbiAgICB0aGlzLm5nZW9PZmZsaW5lQ29uZmlndXJhdGlvbl8gPSBuZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5vZmZsaW5lTW9kZSA9IG5nZW9PZmZsaW5lTW9kZTtcbiAgICB0aGlzLm5ldHdvcmtTdGF0dXMgPSBuZ2VvTmV0d29ya1N0YXR1cztcbiAgICB0aGlzLm1hcDtcbiAgICB0aGlzLmV4dGVudFNpemUgPSAwO1xuICAgIHRoaXMuZmVhdHVyZXNPdmVybGF5XyA9IG5nZW9NYXBGZWF0dXJlT3ZlcmxheU1nci5nZXRGZWF0dXJlT3ZlcmxheSgpO1xuICAgIHRoaXMub3ZlcmxheUNvbGxlY3Rpb25fID0gbmV3IG9sQ29sbGVjdGlvbigpO1xuICAgIHRoaXMuZmVhdHVyZXNPdmVybGF5Xy5zZXRGZWF0dXJlcyh0aGlzLm92ZXJsYXlDb2xsZWN0aW9uXyk7XG4gICAgdGhpcy5kYXRhUG9seWdvbl8gPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0aW5nRXh0ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5kb3dubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMucHJvZ3Jlc3NQZXJjZW50cyA9IDA7XG4gICAgdGhpcy5tZW51RGlzcGxheWVkID0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5QWxlcnRBYm9ydERvd25sb2FkID0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5QWxlcnRMb2FkRGF0YSA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheUFsZXJ0Tm9MYXllciA9IGZhbHNlO1xuICAgIHRoaXMubWFza01hcmdpbiA9IDA7XG4gICAgdGhpcy5taW5ab29tO1xuICAgIHRoaXMubWF4Wm9vbTtcbiAgICB0aGlzLm9yaWdpbmFsTWluWm9vbTtcbiAgICB0aGlzLm9yaWdpbmFsTWF4Wm9vbTtcbiAgICB0aGlzLmVzdGltYXRlZExvYWREYXRhU2l6ZSA9IDA7XG4gICAgdGhpcy5yb3RhdGVNYXNrID0gZmFsc2U7XG5cbiAgICB0aGlzLnByb2dyZXNzQ2FsbGJhY2tfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgcHJvZ3Jlc3MgPSBldmVudC5kZXRhaWwucHJvZ3Jlc3M7XG4gICAgICBfdGhpcy5wcm9ncmVzc1BlcmNlbnRzID0gTWF0aC5mbG9vcihwcm9ncmVzcyAqIDEwMCk7XG5cbiAgICAgIGlmIChwcm9ncmVzcyA9PT0gMSkge1xuICAgICAgICBfdGhpcy5maW5pc2hEb3dubG9hZF8oKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuJHRpbWVvdXRfKGZ1bmN0aW9uICgpIHt9LCAwKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENvbnRyb2xsZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by4kb25Jbml0ID0gZnVuY3Rpb24gJG9uSW5pdCgpIHtcbiAgICB0aGlzLm9mZmxpbmVNb2RlLnJlZ2lzdGVyQ29tcG9uZW50KHRoaXMpO1xuICAgIHRoaXMubmdlb09mZmxpbmVDb25maWd1cmF0aW9uXy5vbigncHJvZ3Jlc3MnLCB0aGlzLnByb2dyZXNzQ2FsbGJhY2tfKTtcbiAgICB0aGlzLm1hc2tNYXJnaW4gPSB0aGlzLm1hc2tNYXJnaW4gfHwgMTAwO1xuICAgIHRoaXMubWluWm9vbSA9IHRoaXMubWluWm9vbSB8fCAxMDtcbiAgICB0aGlzLm1heFpvb20gPSB0aGlzLm1heFpvb20gfHwgMTU7XG4gICAgdGhpcy5tYXNrTGF5ZXJfID0gbmV3IE1hc2tMYXllcih7XG4gICAgICBleHRlbnRJbk1ldGVyczogdGhpcy5leHRlbnRTaXplXG4gICAgfSwge1xuICAgICAgbWFyZ2luOiB0aGlzLm1hc2tNYXJnaW5cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uJG9uRGVzdHJveSA9IGZ1bmN0aW9uICRvbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5uZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb25fLnVuKCdwcm9ncmVzcycsIHRoaXMucHJvZ3Jlc3NDYWxsYmFja18pO1xuICB9O1xuXG4gIF9wcm90by5oYXNEYXRhID0gZnVuY3Rpb24gaGFzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5uZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb25fLmhhc09mZmxpbmVEYXRhKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXB1dGVTaXplQW5kRGlzcGxheUFsZXJ0TG9hZERhdGEgPSBmdW5jdGlvbiBjb21wdXRlU2l6ZUFuZERpc3BsYXlBbGVydExvYWREYXRhKCkge1xuICAgIHRoaXMuZXN0aW1hdGVkTG9hZERhdGFTaXplID0gdGhpcy5uZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb25fLmVzdGltYXRlTG9hZERhdGFTaXplKHRoaXMubWFwKTtcblxuICAgIGlmICh0aGlzLmVzdGltYXRlZExvYWREYXRhU2l6ZSA+IDApIHtcbiAgICAgIHRoaXMuZGlzcGxheUFsZXJ0TG9hZERhdGEgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlBbGVydE5vTGF5ZXIgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udG9nZ2xlVmlld0V4dGVudFNlbGVjdGlvbiA9IGZ1bmN0aW9uIHRvZ2dsZVZpZXdFeHRlbnRTZWxlY3Rpb24oZmluaXNoZWQpIHtcbiAgICB0aGlzLm1lbnVEaXNwbGF5ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGluZ0V4dGVudCA9ICF0aGlzLnNlbGVjdGluZ0V4dGVudDtcbiAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm1hc2tMYXllcl8pO1xuICAgIHRoaXMucmVtb3ZlWm9vbUNvbnN0cmFpbnRzXygpO1xuXG4gICAgaWYgKHRoaXMuc2VsZWN0aW5nRXh0ZW50ICYmICF0aGlzLm1hcC5nZXRMYXllcnMoKS5nZXRBcnJheSgpLmluY2x1ZGVzKHRoaXMubWFza0xheWVyXykpIHtcbiAgICAgIHRoaXMuYWRkWm9vbUNvbnN0cmFpbnRzXygpO1xuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5tYXNrTGF5ZXJfKTtcbiAgICB9XG5cbiAgICB0aGlzLm1hcC5yZW5kZXIoKTtcbiAgfTtcblxuICBfcHJvdG8udmFsaWRhdGVFeHRlbnQgPSBmdW5jdGlvbiB2YWxpZGF0ZUV4dGVudCgpIHtcbiAgICB0aGlzLnByb2dyZXNzUGVyY2VudHMgPSAwO1xuICAgIHZhciBleHRlbnQgPSB0aGlzLmdldERvd2xvYWRFeHRlbnRfKCk7XG4gICAgdGhpcy5kb3dubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5uZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyXy5zYXZlKGV4dGVudCwgdGhpcy5tYXApO1xuICB9O1xuXG4gIF9wcm90by5maW5pc2hEb3dubG9hZF8gPSBmdW5jdGlvbiBmaW5pc2hEb3dubG9hZF8oKSB7XG4gICAgdGhpcy5kb3dubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMudG9nZ2xlVmlld0V4dGVudFNlbGVjdGlvbih0cnVlKTtcbiAgfTtcblxuICBfcHJvdG8uYXNrQWJvcnREb3dubG9hZCA9IGZ1bmN0aW9uIGFza0Fib3J0RG93bmxvYWQoKSB7XG4gICAgdGhpcy5kaXNwbGF5QWxlcnRBYm9ydERvd25sb2FkID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uYWJvcnREb3dubG9hZCA9IGZ1bmN0aW9uIGFib3J0RG93bmxvYWQoKSB7XG4gICAgdGhpcy5kb3dubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMubmdlb09mZmxpbmVTZXJ2aWNlTWFuYWdlcl8uY2FuY2VsKCk7XG4gICAgdGhpcy5kZWxldGVEYXRhKCk7XG4gIH07XG5cbiAgX3Byb3RvLnNob3dNZW51ID0gZnVuY3Rpb24gc2hvd01lbnUoKSB7XG4gICAgdGhpcy5tZW51RGlzcGxheWVkID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uYWN0aXZhdGVPZmZsaW5lTW9kZSA9IGZ1bmN0aW9uIGFjdGl2YXRlT2ZmbGluZU1vZGUoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB0aGlzLm5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXJfLnJlc3RvcmUodGhpcy5tYXApLnRoZW4oZnVuY3Rpb24gKGV4dGVudCkge1xuICAgICAgX3RoaXMyLmRhdGFQb2x5Z29uXyA9IF90aGlzMi5jcmVhdGVQb2x5Z29uRnJvbUV4dGVudF8oZXh0ZW50KTtcblxuICAgICAgdmFyIHNpemUgPSBfdGhpczIubWFwLmdldFNpemUoKTtcblxuICAgICAgaWYgKHNpemUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3Npbmcgc2l6ZScpO1xuICAgICAgfVxuXG4gICAgICBfdGhpczIubWFwLmdldFZpZXcoKS5maXQoZXh0ZW50LCB7XG4gICAgICAgIHNpemU6IHNpemVcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpczIubWVudURpc3BsYXllZCA9IGZhbHNlO1xuXG4gICAgICBfdGhpczIuZGlzcGxheUV4dGVudF8oKTtcblxuICAgICAgX3RoaXMyLm9mZmxpbmVNb2RlLmVuYWJsZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5kZWFjdGl2YXRlT2ZmbGluZU1vZGUgPSBmdW5jdGlvbiBkZWFjdGl2YXRlT2ZmbGluZU1vZGUoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9O1xuXG4gIF9wcm90by50b2dnbGVFeHRlbnRWaXNpYmlsaXR5ID0gZnVuY3Rpb24gdG9nZ2xlRXh0ZW50VmlzaWJpbGl0eSgpIHtcbiAgICBpZiAodGhpcy5pc0V4dGVudFZpc2libGUoKSkge1xuICAgICAgdGhpcy5vdmVybGF5Q29sbGVjdGlvbl8uY2xlYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5RXh0ZW50XygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaXNFeHRlbnRWaXNpYmxlID0gZnVuY3Rpb24gaXNFeHRlbnRWaXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm92ZXJsYXlDb2xsZWN0aW9uXy5nZXRMZW5ndGgoKSA+IDA7XG4gIH07XG5cbiAgX3Byb3RvLmRlbGV0ZURhdGEgPSBmdW5jdGlvbiBkZWxldGVEYXRhKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdGhpcy5vdmVybGF5Q29sbGVjdGlvbl8uY2xlYXIoKTtcbiAgICB0aGlzLmRhdGFQb2x5Z29uXyA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5uZXR3b3JrU3RhdHVzLmlzRGlzY29ubmVjdGVkKCkpIHtcbiAgICAgIHRoaXMubWVudURpc3BsYXllZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciByZWxvYWRJZkluT2ZmbGluZU1vZGUgPSBmdW5jdGlvbiByZWxvYWRJZkluT2ZmbGluZU1vZGUoKSB7XG4gICAgICBpZiAoX3RoaXMzLm9mZmxpbmVNb2RlLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgIF90aGlzMy5kZWFjdGl2YXRlT2ZmbGluZU1vZGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5uZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb25fLmNsZWFyKCkudGhlbihyZWxvYWRJZkluT2ZmbGluZU1vZGUpO1xuICB9O1xuXG4gIF9wcm90by5kaXNwbGF5RXh0ZW50XyA9IGZ1bmN0aW9uIGRpc3BsYXlFeHRlbnRfKCkge1xuICAgIGlmICghdGhpcy5pc0V4dGVudFZpc2libGUoKSAmJiB0aGlzLmRhdGFQb2x5Z29uXykge1xuICAgICAgdmFyIGZlYXR1cmUgPSBuZXcgRmVhdHVyZSh0aGlzLmRhdGFQb2x5Z29uXyk7XG4gICAgICB0aGlzLm92ZXJsYXlDb2xsZWN0aW9uXy5wdXNoKGZlYXR1cmUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uYWRkWm9vbUNvbnN0cmFpbnRzXyA9IGZ1bmN0aW9uIGFkZFpvb21Db25zdHJhaW50c18oKSB7XG4gICAgdmFyIHZpZXcgPSB0aGlzLm1hcC5nZXRWaWV3KCk7XG4gICAgdmFyIHpvb20gPSB2aWV3LmdldFpvb20oKSB8fCAwO1xuICAgIHRoaXMub3JpZ2luYWxNaW5ab29tID0gdmlldy5nZXRNaW5ab29tKCk7XG4gICAgdGhpcy5vcmlnaW5hbE1heFpvb20gPSB2aWV3LmdldE1heFpvb20oKTtcblxuICAgIGlmICh6b29tIDwgdGhpcy5taW5ab29tKSB7XG4gICAgICB2aWV3LnNldFpvb20odGhpcy5taW5ab29tKTtcbiAgICB9IGVsc2UgaWYgKHpvb20gPiB0aGlzLm1heFpvb20pIHtcbiAgICAgIHZpZXcuc2V0Wm9vbSh0aGlzLm1heFpvb20pO1xuICAgIH1cblxuICAgIHZpZXcuc2V0TWF4Wm9vbSh0aGlzLm1heFpvb20pO1xuICAgIHZpZXcuc2V0TWluWm9vbSh0aGlzLm1pblpvb20pO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVab29tQ29uc3RyYWludHNfID0gZnVuY3Rpb24gcmVtb3ZlWm9vbUNvbnN0cmFpbnRzXygpIHtcbiAgICB2YXIgdmlldyA9IHRoaXMubWFwLmdldFZpZXcoKTtcblxuICAgIGlmICh0aGlzLm9yaWdpbmFsTWF4Wm9vbSAhPT0gdW5kZWZpbmVkICYmIHRoaXMub3JpZ2luYWxNaW5ab29tICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZpZXcuc2V0TWF4Wm9vbSh0aGlzLm9yaWdpbmFsTWF4Wm9vbSk7XG4gICAgICB2aWV3LnNldE1pblpvb20odGhpcy5vcmlnaW5hbE1pblpvb20pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY3JlYXRlUG9seWdvbkZyb21FeHRlbnRfID0gZnVuY3Rpb24gY3JlYXRlUG9seWdvbkZyb21FeHRlbnRfKGV4dGVudCkge1xuICAgIHZhciBwcm9qRXh0ZW50ID0gdGhpcy5tYXAuZ2V0VmlldygpLmdldFByb2plY3Rpb24oKS5nZXRFeHRlbnQoKTtcbiAgICByZXR1cm4gbmV3IFBvbHlnb24oW2V4dGVudFRvUmVjdGFuZ2xlKHByb2pFeHRlbnQpLCBleHRlbnRUb1JlY3RhbmdsZShleHRlbnQpXSwgJ1hZJyk7XG4gIH07XG5cbiAgX3Byb3RvLmdldERvd2xvYWRFeHRlbnRfID0gZnVuY3Rpb24gZ2V0RG93bG9hZEV4dGVudF8oKSB7XG4gICAgdmFyIGNlbnRlciA9IHRoaXMubWFwLmdldFZpZXcoKS5nZXRDZW50ZXIoKTtcbiAgICB2YXIgaGFsZkxlbmd0aCA9IE1hdGguY2VpbCh0aGlzLmV4dGVudFNpemUgfHwgdGhpcy5nZXRFeHRlbnRTaXplXygpKSAvIDI7XG4gICAgcmV0dXJuIHRoaXMubWFza0xheWVyXy5jcmVhdGVFeHRlbnQoY2VudGVyLCBoYWxmTGVuZ3RoKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0RXh0ZW50U2l6ZV8gPSBmdW5jdGlvbiBnZXRFeHRlbnRTaXplXygpIHtcbiAgICB2YXIgbWFwU2l6ZSA9IHRoaXMubWFwLmdldFNpemUoKSB8fCBbMTUwLCAxNTBdO1xuICAgIHZhciBtYXNrU2l6ZVBpeGVsID0gREVWSUNFX1BJWEVMX1JBVElPICogTWF0aC5taW4obWFwU2l6ZVswXSwgbWFwU2l6ZVsxXSkgLSB0aGlzLm1hc2tNYXJnaW4gKiAyO1xuICAgIHZhciBtYXNrU2l6ZU1ldGVyID0gbWFza1NpemVQaXhlbCAqICh0aGlzLm1hcC5nZXRWaWV3KCkuZ2V0UmVzb2x1dGlvbigpIHx8IDEpIC8gREVWSUNFX1BJWEVMX1JBVElPO1xuICAgIHJldHVybiBtYXNrU2l6ZU1ldGVyO1xuICB9O1xuXG4gIHJldHVybiBDb250cm9sbGVyO1xufSgpO1xubXlNb2R1bGUuY29udHJvbGxlcignbmdlb09mZmxpbmVDb250cm9sbGVyJywgQ29udHJvbGxlcik7XG5leHBvcnQgZGVmYXVsdCBteU1vZHVsZTsiLCJpbXBvcnQgbmdlb09mZmxpbmVDb21wb25lbnQgZnJvbSAnbmdlby9vZmZsaW5lL2NvbXBvbmVudCc7XG5pbXBvcnQgbmdlb09mZmxpbmVOZXR3b3JrU3RhdHVzIGZyb20gJ25nZW8vb2ZmbGluZS9OZXR3b3JrU3RhdHVzJztcbmltcG9ydCBuZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyIGZyb20gJ25nZW8vb2ZmbGluZS9TZXJ2aWNlTWFuYWdlcic7XG5pbXBvcnQgZG93bmxvYWRlciBmcm9tICduZ2VvL29mZmxpbmUvRG93bmxvYWRlcic7XG5pbXBvcnQgcmVzdG9yZXIgZnJvbSAnbmdlby9vZmZsaW5lL1Jlc3RvcmVyJztcbmltcG9ydCBtb2RlIGZyb20gJ25nZW8vb2ZmbGluZS9Nb2RlJztcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xudmFyIGV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbmdlb09mZmxpbmVNb2R1bGUnLCBbbmdlb09mZmxpbmVDb21wb25lbnQubmFtZSwgbmdlb09mZmxpbmVOZXR3b3JrU3RhdHVzLm1vZHVsZS5uYW1lLCBuZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyLm1vZHVsZS5uYW1lLCBkb3dubG9hZGVyLm1vZHVsZS5uYW1lLCByZXN0b3Jlci5tb2R1bGUubmFtZSwgbW9kZS5tb2R1bGUubmFtZV0pO1xuZXhwb3J0cy52YWx1ZSgnbmdlb09mZmxpbmVHdXR0ZXInLCA5Nik7XG5leHBvcnQgZGVmYXVsdCBleHBvcnRzOyIsImltcG9ydCBvbExheWVyR3JvdXAgZnJvbSAnb2wvbGF5ZXIvR3JvdXAnO1xuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlTGF5ZXIobGF5ZXIsIGFuY2VzdG9ycywgdmlzaXRvcikge1xuICB2YXIgZGVzY2VuZCA9IHZpc2l0b3IobGF5ZXIsIGFuY2VzdG9ycyk7XG5cbiAgaWYgKGRlc2NlbmQgJiYgbGF5ZXIgaW5zdGFuY2VvZiBvbExheWVyR3JvdXApIHtcbiAgICBsYXllci5nZXRMYXllcnMoKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZExheWVyKSB7XG4gICAgICB0cmF2ZXJzZUxheWVyKGNoaWxkTGF5ZXIsIFtdLmNvbmNhdChhbmNlc3RvcnMsIFtsYXllcl0pLCB2aXNpdG9yKTtcbiAgICB9KTtcbiAgfVxufVxudmFyIGV4dHJhY3RvciA9IG5ldyBSZWdFeHAoJ1teL10qLy9bXi9dKy8oLiopJyk7XG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVVJMKHVybCkge1xuICB2YXIgbWF0Y2hlcyA9IGV4dHJhY3Rvci5leGVjKHVybCk7XG5cbiAgaWYgKCFtYXRjaGVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3Qgbm9ybWFsaXplIHVybCAnICsgdXJsKTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzWzFdO1xufSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3UUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxSkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6UUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==