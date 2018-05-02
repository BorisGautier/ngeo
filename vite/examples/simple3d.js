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
/******/ 		"simple3d": 0
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
/******/ 	deferredModules.push([43,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/simple3d.css":
/*!*******************************!*\
  !*** ./examples/simple3d.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/simple3d.js":
/*!******************************!*\
  !*** ./examples/simple3d.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simple3d_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple3d.css */ "./examples/simple3d.css");
/* harmony import */ var _simple3d_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_simple3d_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ngeo_olcs_olcsModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngeo/olcs/olcsModule */ "./src/olcs/olcsModule.js");
/* harmony import */ var ngeo_map_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngeo/map/module */ "./src/map/module.js");
/* harmony import */ var ngeo_olcs_Manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngeo/olcs/Manager */ "./src/olcs/Manager.js");
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












/** @type {angular.IModule} **/
const myModule = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('app', ['gettext', ngeo_map_module__WEBPACK_IMPORTED_MODULE_7__["default"].name, ngeo_olcs_olcsModule__WEBPACK_IMPORTED_MODULE_6__["default"].name]);

/**
 * @class
 * @ngInject
 * @param {angular.IScope} $rootScope Root scope.
 * @param {import('ngeo/olcs/Service').OlcsService} ngeoOlcsService The service.
 */
function MainController($rootScope, ngeoOlcsService) {
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

  const cesiumUrl = document.location.search.includes('mode=dev')
    ? 'https://cesium.com/downloads/cesiumjs/releases/1.62/Build/CesiumUnminified/Cesium.js'
    : 'https://cesium.com/downloads/cesiumjs/releases/1.62/Build/Cesium/Cesium.js';

  this.ol3dm = new ngeo_olcs_Manager__WEBPACK_IMPORTED_MODULE_8__["default"](cesiumUrl, $rootScope, {
    map: this.map,
  });

  // Optionally, the manager can be registered into the olcs service
  ngeoOlcsService.initialize(this.ol3dm);
}

myModule.controller('MainController', MainController);
myModule.constant('ngeoUsedKeyRegexp', []);

/* harmony default export */ __webpack_exports__["default"] = (myModule);


/***/ }),

/***/ "./node_modules/ol/Disposable.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/ol/Disposable.js from dll-reference vendor ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(302);

/***/ }),

/***/ "./node_modules/ol/Image.js":
/*!**********************************************************************!*\
  !*** delegated ./node_modules/ol/Image.js from dll-reference vendor ***!
  \**********************************************************************/
/*! exports provided: listenImage, default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(307);

/***/ }),

/***/ "./node_modules/ol/ImageBase.js":
/*!**************************************************************************!*\
  !*** delegated ./node_modules/ol/ImageBase.js from dll-reference vendor ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(464);

/***/ }),

/***/ "./node_modules/ol/ImageState.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/ol/ImageState.js from dll-reference vendor ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(37);

/***/ }),

/***/ "./node_modules/ol/ImageTile.js":
/*!**************************************************************************!*\
  !*** delegated ./node_modules/ol/ImageTile.js from dll-reference vendor ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(931);

/***/ }),

/***/ "./node_modules/ol/Tile.js":
/*!*********************************************************************!*\
  !*** delegated ./node_modules/ol/Tile.js from dll-reference vendor ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(472);

/***/ }),

/***/ "./node_modules/ol/TileCache.js":
/*!**************************************************************************!*\
  !*** delegated ./node_modules/ol/TileCache.js from dll-reference vendor ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(470);

/***/ }),

/***/ "./node_modules/ol/TileQueue.js":
/*!**************************************************************************!*\
  !*** delegated ./node_modules/ol/TileQueue.js from dll-reference vendor ***!
  \**************************************************************************/
/*! exports provided: default, getTilePriority */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(579);

/***/ }),

/***/ "./node_modules/ol/TileState.js":
/*!**************************************************************************!*\
  !*** delegated ./node_modules/ol/TileState.js from dll-reference vendor ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(26);

/***/ }),

/***/ "./node_modules/ol/ViewHint.js":
/*!*************************************************************************!*\
  !*** delegated ./node_modules/ol/ViewHint.js from dll-reference vendor ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(76);

/***/ }),

/***/ "./node_modules/ol/asserts.js":
/*!************************************************************************!*\
  !*** delegated ./node_modules/ol/asserts.js from dll-reference vendor ***!
  \************************************************************************/
/*! exports provided: assert */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(20);

/***/ }),

/***/ "./node_modules/ol/events/EventType.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/ol/events/EventType.js from dll-reference vendor ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(15);

/***/ }),

/***/ "./node_modules/ol/featureloader.js":
/*!******************************************************************************!*\
  !*** delegated ./node_modules/ol/featureloader.js from dll-reference vendor ***!
  \******************************************************************************/
/*! exports provided: loadFeaturesXhr, xhr, setWithCredentials */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(583);

/***/ }),

/***/ "./node_modules/ol/format/FormatType.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/ol/format/FormatType.js from dll-reference vendor ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(109);

/***/ }),

/***/ "./node_modules/ol/geom/GeometryLayout.js":
/*!************************************************************************************!*\
  !*** delegated ./node_modules/ol/geom/GeometryLayout.js from dll-reference vendor ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(29);

/***/ }),

/***/ "./node_modules/ol/geom/GeometryType.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/ol/geom/GeometryType.js from dll-reference vendor ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(8);

/***/ }),

/***/ "./node_modules/ol/geom/flat/center.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/ol/geom/flat/center.js from dll-reference vendor ***!
  \*********************************************************************************/
/*! exports provided: linearRingss */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(891);

/***/ }),

/***/ "./node_modules/ol/geom/flat/interiorpoint.js":
/*!****************************************************************************************!*\
  !*** delegated ./node_modules/ol/geom/flat/interiorpoint.js from dll-reference vendor ***!
  \****************************************************************************************/
/*! exports provided: getInteriorPointOfArray, getInteriorPointsOfMultiArray */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(455);

/***/ }),

/***/ "./node_modules/ol/geom/flat/interpolate.js":
/*!**************************************************************************************!*\
  !*** delegated ./node_modules/ol/geom/flat/interpolate.js from dll-reference vendor ***!
  \**************************************************************************************/
/*! exports provided: interpolatePoint, lineStringCoordinateAtM, lineStringsCoordinateAtM */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(321);

/***/ }),

/***/ "./node_modules/ol/geom/flat/orient.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/ol/geom/flat/orient.js from dll-reference vendor ***!
  \*********************************************************************************/
/*! exports provided: linearRingIsClockwise, linearRingsAreOriented, linearRingssAreOriented, orientLinearRings, orientLinearRingsArray */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(234);

/***/ }),

/***/ "./node_modules/ol/geom/flat/transform.js":
/*!************************************************************************************!*\
  !*** delegated ./node_modules/ol/geom/flat/transform.js from dll-reference vendor ***!
  \************************************************************************************/
/*! exports provided: transform2D, rotate, scale, translate */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(81);

/***/ }),

/***/ "./node_modules/ol/layer/BaseVector.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/ol/layer/BaseVector.js from dll-reference vendor ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(892);

/***/ }),

/***/ "./node_modules/ol/layer/TileProperty.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/ol/layer/TileProperty.js from dll-reference vendor ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(376);

/***/ }),

/***/ "./node_modules/ol/proj/Projection.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/ol/proj/Projection.js from dll-reference vendor ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(216);

/***/ }),

/***/ "./node_modules/ol/proj/Units.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/ol/proj/Units.js from dll-reference vendor ***!
  \***************************************************************************/
/*! exports provided: METERS_PER_UNIT, default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(63);

/***/ }),

/***/ "./node_modules/ol/render/canvas/BuilderGroup.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/ol/render/canvas/BuilderGroup.js from dll-reference vendor ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(580);

/***/ }),

/***/ "./node_modules/ol/render/canvas/BuilderType.js":
/*!******************************************************************************************!*\
  !*** delegated ./node_modules/ol/render/canvas/BuilderType.js from dll-reference vendor ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(69);

/***/ }),

/***/ "./node_modules/ol/render/canvas/ExecutorGroup.js":
/*!********************************************************************************************!*\
  !*** delegated ./node_modules/ol/render/canvas/ExecutorGroup.js from dll-reference vendor ***!
  \********************************************************************************************/
/*! exports provided: getPixelIndexArray, default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(582);

/***/ }),

/***/ "./node_modules/ol/render/canvas/Immediate.js":
/*!****************************************************************************************!*\
  !*** delegated ./node_modules/ol/render/canvas/Immediate.js from dll-reference vendor ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(900);

/***/ }),

/***/ "./node_modules/ol/render/canvas/hitdetect.js":
/*!****************************************************************************************!*\
  !*** delegated ./node_modules/ol/render/canvas/hitdetect.js from dll-reference vendor ***!
  \****************************************************************************************/
/*! exports provided: HIT_DETECT_RESOLUTION, createHitDetectionImageData, hitDetect */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(236);

/***/ }),

/***/ "./node_modules/ol/renderer/canvas/TileLayer.js":
/*!******************************************************************************************!*\
  !*** delegated ./node_modules/ol/renderer/canvas/TileLayer.js from dll-reference vendor ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(928);

/***/ }),

/***/ "./node_modules/ol/renderer/vector.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/ol/renderer/vector.js from dll-reference vendor ***!
  \********************************************************************************/
/*! exports provided: defaultOrder, getSquaredTolerance, getTolerance, renderFeature */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(264);

/***/ }),

/***/ "./node_modules/ol/source/Source.js":
/*!******************************************************************************!*\
  !*** delegated ./node_modules/ol/source/Source.js from dll-reference vendor ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(308);

/***/ }),

/***/ "./node_modules/ol/source/State.js":
/*!*****************************************************************************!*\
  !*** delegated ./node_modules/ol/source/State.js from dll-reference vendor ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(132);

/***/ }),

/***/ "./node_modules/ol/source/UrlTile.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/ol/source/UrlTile.js from dll-reference vendor ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(933);

/***/ }),

/***/ "./node_modules/ol/structs/LRUCache.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/ol/structs/LRUCache.js from dll-reference vendor ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(930);

/***/ }),

/***/ "./node_modules/ol/tilecoord.js":
/*!**************************************************************************!*\
  !*** delegated ./node_modules/ol/tilecoord.js from dll-reference vendor ***!
  \**************************************************************************/
/*! exports provided: createOrUpdate, getKeyZXY, getKey, getCacheKeyForTileKey, fromKey, hash, withinExtentAndZ */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(93);

/***/ }),

/***/ "./node_modules/ol/tilegrid/common.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/ol/tilegrid/common.js from dll-reference vendor ***!
  \********************************************************************************/
/*! exports provided: DEFAULT_MAX_ZOOM, DEFAULT_TILE_SIZE */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(254);

/***/ }),

/***/ "./node_modules/ol/tileurlfunction.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/ol/tileurlfunction.js from dll-reference vendor ***!
  \********************************************************************************/
/*! exports provided: createFromTemplate, createFromTemplates, createFromTileUrlFunctions, nullTileUrlFunction, expandUrl */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(261);

/***/ }),

/***/ "./node_modules/ol/transform.js":
/*!**************************************************************************!*\
  !*** delegated ./node_modules/ol/transform.js from dll-reference vendor ***!
  \**************************************************************************/
/*! exports provided: create, reset, multiply, set, setFromArray, apply, rotate, scale, makeScale, translate, compose, composeCssTransform, invert, makeInverse, determinant, toString */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(25);

/***/ }),

/***/ "./src/olcs/Manager.js":
/*!*****************************!*\
  !*** ./src/olcs/Manager.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var olcs_contrib_Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! olcs/contrib/Manager */ "./node_modules/ol-cesium/src/olcs/contrib/Manager.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Manager = function (_olcsContribManager) {
  _inheritsLoose(Manager, _olcsContribManager);

  function Manager(url, $rootScope, options) {
    var _this;

    _this = _olcsContribManager.call(this, url, options) || this;
    _this.rootScope_ = $rootScope;
    return _this;
  }

  var _proto = Manager.prototype;

  _proto.toggle3d = function toggle3d() {
    var _this2 = this;

    var promise = _olcsContribManager.prototype.toggle3d.call(this);

    return promise.then(function () {
      _this2.rootScope_.$apply();
    });
  };

  return Manager;
}(olcs_contrib_Manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Manager);

/***/ }),

/***/ "./src/olcs/Service.js":
/*!*****************************!*\
  !*** ./src/olcs/Service.js ***!
  \*****************************/
/*! exports provided: OlcsService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlcsService", function() { return OlcsService; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_misc_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/misc/debounce */ "./src/misc/debounce.js");
/* harmony import */ var ngeo_statemanager_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/statemanager/Location */ "./src/statemanager/Location.js");
/* harmony import */ var ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/olcs/constants */ "./src/olcs/constants.js");
/* harmony import */ var ngeo_statemanager_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/statemanager/Service */ "./src/statemanager/Service.js");
/* harmony import */ var ol_math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/math */ "./node_modules/ol/math.js");






var OlcsService = function () {
  OlcsService.$inject = ["ngeoDebounce", "ngeoLocation", "ngeoStateManager"];

  function OlcsService(ngeoDebounce, ngeoLocation, ngeoStateManager) {
    this.manager_ = null;
    this.ngeoDebounce_ = ngeoDebounce;
    this.ngeoLocation_ = ngeoLocation;
    this.ngeoStateManager_ = ngeoStateManager;
  }

  var _proto = OlcsService.prototype;

  _proto.initialize = function initialize(manager) {
    var _this = this;

    this.manager_ = manager;
    this.manager_.on('load', function () {
      _this.cameraToState_();
    });

    if (this.ngeoStateManager_.getInitialBooleanValue('3d_enabled')) {
      this.initialStateToCamera_();
    }
  };

  _proto.getManager = function getManager() {
    return this.manager_;
  };

  _proto.initialStateToCamera_ = function initialStateToCamera_() {
    if (!this.manager_) {
      throw new Error('Missing manager');
    }

    var stateManager = this.ngeoStateManager_;
    var lon = stateManager.getInitialNumberValue(ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].LON);
    var lat = stateManager.getInitialNumberValue(ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].LAT);
    var elevation = stateManager.getInitialNumberValue(ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].ELEVATION);
    var heading = stateManager.getInitialNumberValue(ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].HEADING) || 0;
    var pitch = stateManager.getInitialNumberValue(ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].PITCH) || 0;

    if (!lon) {
      throw new Error('Missing lon');
    }

    if (!lat) {
      throw new Error('Missing lat');
    }

    if (!elevation) {
      throw new Error('Missing elevation');
    }

    return this.manager_.set3dWithView(lon, lat, elevation, heading, pitch);
  };

  _proto.cameraToState_ = function cameraToState_() {
    var _this2 = this;

    if (!this.manager_) {
      throw new Error('Missing manager');
    }

    var manager = this.manager_;
    var scene = manager.getOl3d().getCesiumScene();
    var camera = scene.camera;
    camera.moveEnd.addEventListener(this.ngeoDebounce_(function () {
      var _this2$ngeoStateManag;

      var position = camera.positionCartographic;

      _this2.ngeoStateManager_.updateState((_this2$ngeoStateManag = {}, _this2$ngeoStateManag[ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].ENABLED] = true, _this2$ngeoStateManag[ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].LON] = Object(ol_math__WEBPACK_IMPORTED_MODULE_5__["toDegrees"])(position.longitude).toFixed(5), _this2$ngeoStateManag[ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].LAT] = Object(ol_math__WEBPACK_IMPORTED_MODULE_5__["toDegrees"])(position.latitude).toFixed(5), _this2$ngeoStateManag[ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].ELEVATION] = position.height.toFixed(0), _this2$ngeoStateManag[ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].HEADING] = Object(ol_math__WEBPACK_IMPORTED_MODULE_5__["toDegrees"])(camera.heading).toFixed(3), _this2$ngeoStateManag[ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].PITCH] = Object(ol_math__WEBPACK_IMPORTED_MODULE_5__["toDegrees"])(camera.pitch).toFixed(3), _this2$ngeoStateManag));
    }, 1000, true));
    this.manager_.on('toggle', function (event) {
      if (!event.target.is3dEnabled()) {
        _this2.remove3dState_();
      }
    });
  };

  _proto.remove3dState_ = function remove3dState_() {
    var _this3 = this;

    this.ngeoLocation_.getParamKeysWithPrefix(ngeo_olcs_constants__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].PREFIX).forEach(function (key) {
      _this3.ngeoStateManager_.deleteParam(key);
    });
  };

  return OlcsService;
}();
var myModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module(name, [ngeo_misc_debounce__WEBPACK_IMPORTED_MODULE_1__["default"].name, ngeo_statemanager_Location__WEBPACK_IMPORTED_MODULE_2__["default"].name, ngeo_statemanager_Service__WEBPACK_IMPORTED_MODULE_4__["default"].name]).service('ngeoOlcsService', OlcsService);
/* harmony default export */ __webpack_exports__["default"] = (myModule);

/***/ }),

/***/ "./src/olcs/constants.js":
/*!*******************************!*\
  !*** ./src/olcs/constants.js ***!
  \*******************************/
/*! exports provided: Permalink3dParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permalink3dParam", function() { return Permalink3dParam; });
var Permalink3dParam = {
  ENABLED: '3d_enabled',
  LON: '3d_lon',
  LAT: '3d_lat',
  ELEVATION: '3d_elevation',
  HEADING: '3d_heading',
  PITCH: '3d_pitch',
  PREFIX: '3d_'
};

/***/ }),

/***/ "./src/olcs/controls3d.html":
/*!**********************************!*\
  !*** ./src/olcs/controls3d.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="ngeo-tools">\n  <div class="ngeo-angle"><div class="ngeo-angle3d"></div></div>\n  <button class="ngeo-left ngeo-tilt-left" ng-click="$ctrl.tilt(5)"></button>\n  <button class="ngeo-right ngeo-tilt-right" ng-click="$ctrl.tilt(-5)"></button>\n</div>\n<div class="ngeo-zoom">\n  <button class="ol-zoom-in" ng-click="$ctrl.zoom(1)"></button>\n  <button class="ol-zoom-out" ng-click="$ctrl.zoom(-1)"></button>\n</div>\n<div class="ngeo-tools">\n  <div class="ngeo-rotation"><div class="ngeo-rotation3d"></div></div>\n  <button class="ngeo-left" ng-click="$ctrl.rotate(-15)"></button>\n  <button class="ngeo-right" ng-click="$ctrl.rotate(15)"></button>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./src/olcs/controls3d.js":
/*!********************************!*\
  !*** ./src/olcs/controls3d.js ***!
  \********************************/
/*! exports provided: Controller, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ol_easing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/easing */ "./node_modules/ol/easing.js");
/* harmony import */ var ol_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/math */ "./node_modules/ol/math.js");
/* harmony import */ var olcs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! olcs/core */ "./node_modules/ol-cesium/src/olcs/core.js");
ngeoOlcsControls3dTemplateUrlInjectable.$inject = ["$attrs", "ngeoOlcsControls3dTemplateUrl"];




var myModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoOlcsControls3d', []);

function shouldUpdate(older, newer) {
  return Number.isFinite(newer) && (!Number.isFinite(older) || Math.abs(newer - older) > 0.05);
}

var Controller = function () {
  Controller.$inject = ["$element", "ngeoOlcsService"];

  function Controller($element, ngeoOlcsService) {
    this.element_ = $element;
    this.ol3dm = null;
    this.minTilt = -1;
    this.maxTilt = -1;
    this.tiltRightEl_ = null;
    this.tiltLeftEl_ = null;
    this.rotation3dEl_ = null;
    this.angle3dEl_ = null;
    this.previousRotation_ = -1;
    this.previousViewMatrix_ = null;
    this.animationFrameRequestId_ = -1;
    this.olcsService_ = ngeoOlcsService;
  }

  var _proto = Controller.prototype;

  _proto.updateWidget_ = function updateWidget_() {
    var _this = this;

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

    var newRotation = this.ol3dm.getOl3d().getOlView().getRotation();

    if (shouldUpdate(this.previousRotation_, newRotation)) {
      this.rotateElement_(this.rotation3dEl_, newRotation);
      this.previousRotation_ = newRotation;
    }

    var newViewMatrix = this.ol3dm.getCesiumViewMatrix();

    if (!Cesium.Matrix4.equalsEpsilon(this.previousViewMatrix_, newViewMatrix, 1e-5)) {
      var newTilt = this.ol3dm.getTiltOnGlobe();

      if (newTilt != undefined && Number.isFinite(newTilt || 0)) {
        this.rotateElement_(this.angle3dEl_, newTilt);
        this.previousViewMatrix_ = Cesium.Matrix4.clone(newViewMatrix);
        var buffer = 0.01;

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

    this.animationFrameRequestId_ = requestAnimationFrame(function () {
      return _this.updateWidget_();
    });
  };

  _proto.$onDestroy = function $onDestroy() {
    if (this.animationFrameRequestId_) {
      cancelAnimationFrame(this.animationFrameRequestId_);
    }
  };

  _proto.$onInit = function $onInit() {
    if (this.minTilt === undefined) {
      this.minTilt = 0;
    }

    if (this.maxTilt === undefined) {
      this.maxTilt = 7 * Math.PI / 16;
    }

    if (!this.ol3dm) {
      this.ol3dm = this.olcsService_.getManager() || null;
    }

    this.tiltRightEl_ = this.element_.find('.ngeo-tilt-right');
    this.tiltLeftEl_ = this.element_.find('.ngeo-tilt-left');
    this.rotation3dEl_ = this.element_.find('.ngeo-rotation3d');
    this.angle3dEl_ = this.element_.find('.ngeo-angle3d');
    this.updateWidget_();
  };

  _proto.rotateElement_ = function rotateElement_(element, angle) {
    var r = "rotate(" + angle + "rad)";
    element.css({
      '-moz-transform': r,
      '-webkit-transform': r,
      '-o-transform': r,
      '-ms-transform': r,
      'transform': r
    });
  };

  _proto.rotate = function rotate(angle) {
    if (!this.ol3dm) {
      throw new Error('Missing ol3dm');
    }

    this.ol3dm.setHeading(Object(ol_math__WEBPACK_IMPORTED_MODULE_2__["toRadians"])(angle));
  };

  _proto.tilt = function tilt(angle) {
    if (!this.ol3dm) {
      throw new Error('Missing ol3dm');
    }

    angle = Object(ol_math__WEBPACK_IMPORTED_MODULE_2__["toRadians"])(angle);
    var tiltOnGlobe = Number(this.ol3dm.getTiltOnGlobe());

    if (tiltOnGlobe + angle < this.minTilt) {
      angle = this.minTilt - tiltOnGlobe;
    } else if (tiltOnGlobe + angle > this.maxTilt) {
      angle = this.maxTilt - tiltOnGlobe;
    }

    var scene = this.ol3dm.getCesiumScene();
    olcs_core__WEBPACK_IMPORTED_MODULE_3__["default"].rotateAroundBottomCenter(scene, angle);
  };

  _proto.zoom = function zoom(delta) {
    if (!this.ol3dm) {
      throw new Error('Missing ol3dm');
    }

    var view = this.ol3dm.getOlView();
    var cur = view.getResolution();
    var newResolution = view.constrainResolution(cur, delta);

    if (view.getAnimating()) {
      view.cancelAnimations();
    }

    view.animate({
      resolution: newResolution,
      duration: 250,
      easing: ol_easing__WEBPACK_IMPORTED_MODULE_1__["easeOut"]
    });
  };

  return Controller;
}();

function ngeoOlcsControls3dTemplateUrlInjectable($attrs, ngeoOlcsControls3dTemplateUrl) {
  if (ngeoOlcsControls3dTemplateUrl) {
    return ngeoOlcsControls3dTemplateUrl;
  }

  var templateUrl = $attrs['ngeoOlcsControls3dTemplateUrl'];
  return templateUrl ? templateUrl : 'ngeo/olsc/controls3d';
}

myModule.run(["$templateCache", function ($templateCache) {
  $templateCache.put('ngeo/olsc/controls3d', __webpack_require__(/*! ./controls3d.html */ "./src/olcs/controls3d.html"));
}]);
var olscControls3dComponent = {
  bindings: {
    'minTilt': '<?',
    'maxTilt': '<?',
    'ol3dm': '<?'
  },
  controller: Controller,
  templateUrl: ngeoOlcsControls3dTemplateUrlInjectable
};
myModule.component('ngeoOlcsControls3d', olscControls3dComponent);
myModule.value('ngeoOlcsControls3dTemplateUrl', '');
/* harmony default export */ __webpack_exports__["default"] = (myModule);

/***/ }),

/***/ "./src/olcs/olcsModule.js":
/*!********************************!*\
  !*** ./src/olcs/olcsModule.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_olcs_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/olcs/Service */ "./src/olcs/Service.js");
/* harmony import */ var ngeo_olcs_controls3d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/olcs/controls3d */ "./src/olcs/controls3d.js");



var myModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoOlcsModule', [ngeo_olcs_controls3d__WEBPACK_IMPORTED_MODULE_2__["default"].name, ngeo_olcs_Service__WEBPACK_IMPORTED_MODULE_1__["default"].name]);
/* harmony default export */ __webpack_exports__["default"] = (myModule);

/***/ }),

/***/ 43:
/*!*****************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/simple3d.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/simple3d.js */"./examples/simple3d.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlM2QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc2ltcGxlM2QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29sY3MvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2xjcy9TZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9vbGNzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2xjcy9jb250cm9sczNkLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL29sY3MvY29udHJvbHMzZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2xjcy9vbGNzTW9kdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJzaW1wbGUzZFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdC8vIFNpbmNlIGFsbCByZWZlcmVuY2VkIGNodW5rcyBhcmUgYWxyZWFkeSBpbmNsdWRlZFxuIFx0Ly8gaW4gdGhpcyBmaWxlLCB0aGlzIGZ1bmN0aW9uIGlzIGVtcHR5IGhlcmUuXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKCkge1xuIFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbNDMsXCJjb21tb25zXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3LTIwMjEgQ2FtcHRvY2FtcCBTQVxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0ICcuL3NpbXBsZTNkLmNzcyc7XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBvbE1hcCBmcm9tICdvbC9NYXAnO1xuXG5pbXBvcnQgb2xWaWV3IGZyb20gJ29sL1ZpZXcnO1xuaW1wb3J0IG9sTGF5ZXJUaWxlIGZyb20gJ29sL2xheWVyL1RpbGUnO1xuaW1wb3J0IG9sU291cmNlT1NNIGZyb20gJ29sL3NvdXJjZS9PU00nO1xuaW1wb3J0IG5nZW9PbGNzT2xjc01vZHVsZSBmcm9tICduZ2VvL29sY3Mvb2xjc01vZHVsZSc7XG5pbXBvcnQgbmdlb01hcE1vZHVsZSBmcm9tICduZ2VvL21hcC9tb2R1bGUnO1xuaW1wb3J0IG5nZW9PbGNzTWFuYWdlciBmcm9tICduZ2VvL29sY3MvTWFuYWdlcic7XG5cbi8qKiBAdHlwZSB7YW5ndWxhci5JTW9kdWxlfSAqKi9cbmNvbnN0IG15TW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnZ2V0dGV4dCcsIG5nZW9NYXBNb2R1bGUubmFtZSwgbmdlb09sY3NPbGNzTW9kdWxlLm5hbWVdKTtcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBuZ0luamVjdFxuICogQHBhcmFtIHthbmd1bGFyLklTY29wZX0gJHJvb3RTY29wZSBSb290IHNjb3BlLlxuICogQHBhcmFtIHtpbXBvcnQoJ25nZW8vb2xjcy9TZXJ2aWNlJykuT2xjc1NlcnZpY2V9IG5nZW9PbGNzU2VydmljZSBUaGUgc2VydmljZS5cbiAqL1xuZnVuY3Rpb24gTWFpbkNvbnRyb2xsZXIoJHJvb3RTY29wZSwgbmdlb09sY3NTZXJ2aWNlKSB7XG4gIC8qKlxuICAgKiBAdHlwZSB7aW1wb3J0KCdvbC9NYXAnKS5kZWZhdWx0fVxuICAgKi9cbiAgdGhpcy5tYXAgPSBuZXcgb2xNYXAoe1xuICAgIGxheWVyczogW1xuICAgICAgbmV3IG9sTGF5ZXJUaWxlKHtcbiAgICAgICAgc291cmNlOiBuZXcgb2xTb3VyY2VPU00oKSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgdmlldzogbmV3IG9sVmlldyh7XG4gICAgICBjZW50ZXI6IFswLCAwXSxcbiAgICAgIHpvb206IDQsXG4gICAgfSksXG4gIH0pO1xuXG4gIGNvbnN0IGNlc2l1bVVybCA9IGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnbW9kZT1kZXYnKVxuICAgID8gJ2h0dHBzOi8vY2VzaXVtLmNvbS9kb3dubG9hZHMvY2VzaXVtanMvcmVsZWFzZXMvMS42Mi9CdWlsZC9DZXNpdW1Vbm1pbmlmaWVkL0Nlc2l1bS5qcydcbiAgICA6ICdodHRwczovL2Nlc2l1bS5jb20vZG93bmxvYWRzL2Nlc2l1bWpzL3JlbGVhc2VzLzEuNjIvQnVpbGQvQ2VzaXVtL0Nlc2l1bS5qcyc7XG5cbiAgdGhpcy5vbDNkbSA9IG5ldyBuZ2VvT2xjc01hbmFnZXIoY2VzaXVtVXJsLCAkcm9vdFNjb3BlLCB7XG4gICAgbWFwOiB0aGlzLm1hcCxcbiAgfSk7XG5cbiAgLy8gT3B0aW9uYWxseSwgdGhlIG1hbmFnZXIgY2FuIGJlIHJlZ2lzdGVyZWQgaW50byB0aGUgb2xjcyBzZXJ2aWNlXG4gIG5nZW9PbGNzU2VydmljZS5pbml0aWFsaXplKHRoaXMub2wzZG0pO1xufVxuXG5teU1vZHVsZS5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKTtcbm15TW9kdWxlLmNvbnN0YW50KCduZ2VvVXNlZEtleVJlZ2V4cCcsIFtdKTtcblxuZXhwb3J0IGRlZmF1bHQgbXlNb2R1bGU7XG4iLCJmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuaW1wb3J0IG9sY3NDb250cmliTWFuYWdlciBmcm9tICdvbGNzL2NvbnRyaWIvTWFuYWdlcic7XG5cbnZhciBNYW5hZ2VyID0gZnVuY3Rpb24gKF9vbGNzQ29udHJpYk1hbmFnZXIpIHtcbiAgX2luaGVyaXRzTG9vc2UoTWFuYWdlciwgX29sY3NDb250cmliTWFuYWdlcik7XG5cbiAgZnVuY3Rpb24gTWFuYWdlcih1cmwsICRyb290U2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9vbGNzQ29udHJpYk1hbmFnZXIuY2FsbCh0aGlzLCB1cmwsIG9wdGlvbnMpIHx8IHRoaXM7XG4gICAgX3RoaXMucm9vdFNjb3BlXyA9ICRyb290U2NvcGU7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE1hbmFnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by50b2dnbGUzZCA9IGZ1bmN0aW9uIHRvZ2dsZTNkKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBfb2xjc0NvbnRyaWJNYW5hZ2VyLnByb3RvdHlwZS50b2dnbGUzZC5jYWxsKHRoaXMpO1xuXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIucm9vdFNjb3BlXy4kYXBwbHkoKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gTWFuYWdlcjtcbn0ob2xjc0NvbnRyaWJNYW5hZ2VyKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlcjsiLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBuZ2VvTWlzY0RlYm91bmNlIGZyb20gJ25nZW8vbWlzYy9kZWJvdW5jZSc7XG5pbXBvcnQgbmdlb1N0YXRlbWFuYWdlckxvY2F0aW9uIGZyb20gJ25nZW8vc3RhdGVtYW5hZ2VyL0xvY2F0aW9uJztcbmltcG9ydCB7IFBlcm1hbGluazNkUGFyYW0gfSBmcm9tICduZ2VvL29sY3MvY29uc3RhbnRzJztcbmltcG9ydCBuZ2VvU3RhdGVtYW5hZ2VyU2VydmljZSBmcm9tICduZ2VvL3N0YXRlbWFuYWdlci9TZXJ2aWNlJztcbmltcG9ydCB7IHRvRGVncmVlcyB9IGZyb20gJ29sL21hdGgnO1xuZXhwb3J0IHZhciBPbGNzU2VydmljZSA9IGZ1bmN0aW9uICgpIHtcbiAgT2xjc1NlcnZpY2UuJGluamVjdCA9IFtcIm5nZW9EZWJvdW5jZVwiLCBcIm5nZW9Mb2NhdGlvblwiLCBcIm5nZW9TdGF0ZU1hbmFnZXJcIl07XG5cbiAgZnVuY3Rpb24gT2xjc1NlcnZpY2Uobmdlb0RlYm91bmNlLCBuZ2VvTG9jYXRpb24sIG5nZW9TdGF0ZU1hbmFnZXIpIHtcbiAgICB0aGlzLm1hbmFnZXJfID0gbnVsbDtcbiAgICB0aGlzLm5nZW9EZWJvdW5jZV8gPSBuZ2VvRGVib3VuY2U7XG4gICAgdGhpcy5uZ2VvTG9jYXRpb25fID0gbmdlb0xvY2F0aW9uO1xuICAgIHRoaXMubmdlb1N0YXRlTWFuYWdlcl8gPSBuZ2VvU3RhdGVNYW5hZ2VyO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE9sY3NTZXJ2aWNlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUobWFuYWdlcikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLm1hbmFnZXJfID0gbWFuYWdlcjtcbiAgICB0aGlzLm1hbmFnZXJfLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2FtZXJhVG9TdGF0ZV8oKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLm5nZW9TdGF0ZU1hbmFnZXJfLmdldEluaXRpYWxCb29sZWFuVmFsdWUoJzNkX2VuYWJsZWQnKSkge1xuICAgICAgdGhpcy5pbml0aWFsU3RhdGVUb0NhbWVyYV8oKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldE1hbmFnZXIgPSBmdW5jdGlvbiBnZXRNYW5hZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLm1hbmFnZXJfO1xuICB9O1xuXG4gIF9wcm90by5pbml0aWFsU3RhdGVUb0NhbWVyYV8gPSBmdW5jdGlvbiBpbml0aWFsU3RhdGVUb0NhbWVyYV8oKSB7XG4gICAgaWYgKCF0aGlzLm1hbmFnZXJfKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgbWFuYWdlcicpO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZU1hbmFnZXIgPSB0aGlzLm5nZW9TdGF0ZU1hbmFnZXJfO1xuICAgIHZhciBsb24gPSBzdGF0ZU1hbmFnZXIuZ2V0SW5pdGlhbE51bWJlclZhbHVlKFBlcm1hbGluazNkUGFyYW0uTE9OKTtcbiAgICB2YXIgbGF0ID0gc3RhdGVNYW5hZ2VyLmdldEluaXRpYWxOdW1iZXJWYWx1ZShQZXJtYWxpbmszZFBhcmFtLkxBVCk7XG4gICAgdmFyIGVsZXZhdGlvbiA9IHN0YXRlTWFuYWdlci5nZXRJbml0aWFsTnVtYmVyVmFsdWUoUGVybWFsaW5rM2RQYXJhbS5FTEVWQVRJT04pO1xuICAgIHZhciBoZWFkaW5nID0gc3RhdGVNYW5hZ2VyLmdldEluaXRpYWxOdW1iZXJWYWx1ZShQZXJtYWxpbmszZFBhcmFtLkhFQURJTkcpIHx8IDA7XG4gICAgdmFyIHBpdGNoID0gc3RhdGVNYW5hZ2VyLmdldEluaXRpYWxOdW1iZXJWYWx1ZShQZXJtYWxpbmszZFBhcmFtLlBJVENIKSB8fCAwO1xuXG4gICAgaWYgKCFsb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBsb24nKTtcbiAgICB9XG5cbiAgICBpZiAoIWxhdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGxhdCcpO1xuICAgIH1cblxuICAgIGlmICghZWxldmF0aW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZWxldmF0aW9uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubWFuYWdlcl8uc2V0M2RXaXRoVmlldyhsb24sIGxhdCwgZWxldmF0aW9uLCBoZWFkaW5nLCBwaXRjaCk7XG4gIH07XG5cbiAgX3Byb3RvLmNhbWVyYVRvU3RhdGVfID0gZnVuY3Rpb24gY2FtZXJhVG9TdGF0ZV8oKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMubWFuYWdlcl8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBtYW5hZ2VyJyk7XG4gICAgfVxuXG4gICAgdmFyIG1hbmFnZXIgPSB0aGlzLm1hbmFnZXJfO1xuICAgIHZhciBzY2VuZSA9IG1hbmFnZXIuZ2V0T2wzZCgpLmdldENlc2l1bVNjZW5lKCk7XG4gICAgdmFyIGNhbWVyYSA9IHNjZW5lLmNhbWVyYTtcbiAgICBjYW1lcmEubW92ZUVuZC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmdlb0RlYm91bmNlXyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMyJG5nZW9TdGF0ZU1hbmFnO1xuXG4gICAgICB2YXIgcG9zaXRpb24gPSBjYW1lcmEucG9zaXRpb25DYXJ0b2dyYXBoaWM7XG5cbiAgICAgIF90aGlzMi5uZ2VvU3RhdGVNYW5hZ2VyXy51cGRhdGVTdGF0ZSgoX3RoaXMyJG5nZW9TdGF0ZU1hbmFnID0ge30sIF90aGlzMiRuZ2VvU3RhdGVNYW5hZ1tQZXJtYWxpbmszZFBhcmFtLkVOQUJMRURdID0gdHJ1ZSwgX3RoaXMyJG5nZW9TdGF0ZU1hbmFnW1Blcm1hbGluazNkUGFyYW0uTE9OXSA9IHRvRGVncmVlcyhwb3NpdGlvbi5sb25naXR1ZGUpLnRvRml4ZWQoNSksIF90aGlzMiRuZ2VvU3RhdGVNYW5hZ1tQZXJtYWxpbmszZFBhcmFtLkxBVF0gPSB0b0RlZ3JlZXMocG9zaXRpb24ubGF0aXR1ZGUpLnRvRml4ZWQoNSksIF90aGlzMiRuZ2VvU3RhdGVNYW5hZ1tQZXJtYWxpbmszZFBhcmFtLkVMRVZBVElPTl0gPSBwb3NpdGlvbi5oZWlnaHQudG9GaXhlZCgwKSwgX3RoaXMyJG5nZW9TdGF0ZU1hbmFnW1Blcm1hbGluazNkUGFyYW0uSEVBRElOR10gPSB0b0RlZ3JlZXMoY2FtZXJhLmhlYWRpbmcpLnRvRml4ZWQoMyksIF90aGlzMiRuZ2VvU3RhdGVNYW5hZ1tQZXJtYWxpbmszZFBhcmFtLlBJVENIXSA9IHRvRGVncmVlcyhjYW1lcmEucGl0Y2gpLnRvRml4ZWQoMyksIF90aGlzMiRuZ2VvU3RhdGVNYW5hZykpO1xuICAgIH0sIDEwMDAsIHRydWUpKTtcbiAgICB0aGlzLm1hbmFnZXJfLm9uKCd0b2dnbGUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghZXZlbnQudGFyZ2V0LmlzM2RFbmFibGVkKCkpIHtcbiAgICAgICAgX3RoaXMyLnJlbW92ZTNkU3RhdGVfKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZTNkU3RhdGVfID0gZnVuY3Rpb24gcmVtb3ZlM2RTdGF0ZV8oKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLm5nZW9Mb2NhdGlvbl8uZ2V0UGFyYW1LZXlzV2l0aFByZWZpeChQZXJtYWxpbmszZFBhcmFtLlBSRUZJWCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBfdGhpczMubmdlb1N0YXRlTWFuYWdlcl8uZGVsZXRlUGFyYW0oa2V5KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gT2xjc1NlcnZpY2U7XG59KCk7XG52YXIgbXlNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShuYW1lLCBbbmdlb01pc2NEZWJvdW5jZS5uYW1lLCBuZ2VvU3RhdGVtYW5hZ2VyTG9jYXRpb24ubmFtZSwgbmdlb1N0YXRlbWFuYWdlclNlcnZpY2UubmFtZV0pLnNlcnZpY2UoJ25nZW9PbGNzU2VydmljZScsIE9sY3NTZXJ2aWNlKTtcbmV4cG9ydCBkZWZhdWx0IG15TW9kdWxlOyIsImV4cG9ydCB2YXIgUGVybWFsaW5rM2RQYXJhbSA9IHtcbiAgRU5BQkxFRDogJzNkX2VuYWJsZWQnLFxuICBMT046ICczZF9sb24nLFxuICBMQVQ6ICczZF9sYXQnLFxuICBFTEVWQVRJT046ICczZF9lbGV2YXRpb24nLFxuICBIRUFESU5HOiAnM2RfaGVhZGluZycsXG4gIFBJVENIOiAnM2RfcGl0Y2gnLFxuICBQUkVGSVg6ICczZF8nXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqKSB7XG5vYmogfHwgKG9iaiA9IHt9KTtcbnZhciBfX3QsIF9fcCA9ICcnO1xud2l0aCAob2JqKSB7XG5fX3AgKz0gJzxkaXYgY2xhc3M9XCJuZ2VvLXRvb2xzXCI+XFxuICA8ZGl2IGNsYXNzPVwibmdlby1hbmdsZVwiPjxkaXYgY2xhc3M9XCJuZ2VvLWFuZ2xlM2RcIj48L2Rpdj48L2Rpdj5cXG4gIDxidXR0b24gY2xhc3M9XCJuZ2VvLWxlZnQgbmdlby10aWx0LWxlZnRcIiBuZy1jbGljaz1cIiRjdHJsLnRpbHQoNSlcIj48L2J1dHRvbj5cXG4gIDxidXR0b24gY2xhc3M9XCJuZ2VvLXJpZ2h0IG5nZW8tdGlsdC1yaWdodFwiIG5nLWNsaWNrPVwiJGN0cmwudGlsdCgtNSlcIj48L2J1dHRvbj5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVwibmdlby16b29tXCI+XFxuICA8YnV0dG9uIGNsYXNzPVwib2wtem9vbS1pblwiIG5nLWNsaWNrPVwiJGN0cmwuem9vbSgxKVwiPjwvYnV0dG9uPlxcbiAgPGJ1dHRvbiBjbGFzcz1cIm9sLXpvb20tb3V0XCIgbmctY2xpY2s9XCIkY3RybC56b29tKC0xKVwiPjwvYnV0dG9uPlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XCJuZ2VvLXRvb2xzXCI+XFxuICA8ZGl2IGNsYXNzPVwibmdlby1yb3RhdGlvblwiPjxkaXYgY2xhc3M9XCJuZ2VvLXJvdGF0aW9uM2RcIj48L2Rpdj48L2Rpdj5cXG4gIDxidXR0b24gY2xhc3M9XCJuZ2VvLWxlZnRcIiBuZy1jbGljaz1cIiRjdHJsLnJvdGF0ZSgtMTUpXCI+PC9idXR0b24+XFxuICA8YnV0dG9uIGNsYXNzPVwibmdlby1yaWdodFwiIG5nLWNsaWNrPVwiJGN0cmwucm90YXRlKDE1KVwiPjwvYnV0dG9uPlxcbjwvZGl2Plxcbic7XG5cbn1cbnJldHVybiBfX3Bcbn0iLCJuZ2VvT2xjc0NvbnRyb2xzM2RUZW1wbGF0ZVVybEluamVjdGFibGUuJGluamVjdCA9IFtcIiRhdHRyc1wiLCBcIm5nZW9PbGNzQ29udHJvbHMzZFRlbXBsYXRlVXJsXCJdO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgKiBhcyBvbEVhc2luZyBmcm9tICdvbC9lYXNpbmcnO1xuaW1wb3J0IHsgdG9SYWRpYW5zIH0gZnJvbSAnb2wvbWF0aCc7XG5pbXBvcnQgb2xjc0NvcmUgZnJvbSAnb2xjcy9jb3JlJztcbnZhciBteU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCduZ2VvT2xjc0NvbnRyb2xzM2QnLCBbXSk7XG5cbmZ1bmN0aW9uIHNob3VsZFVwZGF0ZShvbGRlciwgbmV3ZXIpIHtcbiAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuZXdlcikgJiYgKCFOdW1iZXIuaXNGaW5pdGUob2xkZXIpIHx8IE1hdGguYWJzKG5ld2VyIC0gb2xkZXIpID4gMC4wNSk7XG59XG5cbmV4cG9ydCB2YXIgQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJGVsZW1lbnRcIiwgXCJuZ2VvT2xjc1NlcnZpY2VcIl07XG5cbiAgZnVuY3Rpb24gQ29udHJvbGxlcigkZWxlbWVudCwgbmdlb09sY3NTZXJ2aWNlKSB7XG4gICAgdGhpcy5lbGVtZW50XyA9ICRlbGVtZW50O1xuICAgIHRoaXMub2wzZG0gPSBudWxsO1xuICAgIHRoaXMubWluVGlsdCA9IC0xO1xuICAgIHRoaXMubWF4VGlsdCA9IC0xO1xuICAgIHRoaXMudGlsdFJpZ2h0RWxfID0gbnVsbDtcbiAgICB0aGlzLnRpbHRMZWZ0RWxfID0gbnVsbDtcbiAgICB0aGlzLnJvdGF0aW9uM2RFbF8gPSBudWxsO1xuICAgIHRoaXMuYW5nbGUzZEVsXyA9IG51bGw7XG4gICAgdGhpcy5wcmV2aW91c1JvdGF0aW9uXyA9IC0xO1xuICAgIHRoaXMucHJldmlvdXNWaWV3TWF0cml4XyA9IG51bGw7XG4gICAgdGhpcy5hbmltYXRpb25GcmFtZVJlcXVlc3RJZF8gPSAtMTtcbiAgICB0aGlzLm9sY3NTZXJ2aWNlXyA9IG5nZW9PbGNzU2VydmljZTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDb250cm9sbGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8udXBkYXRlV2lkZ2V0XyA9IGZ1bmN0aW9uIHVwZGF0ZVdpZGdldF8oKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICghdGhpcy5vbDNkbSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIG9sM2RtJyk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnJvdGF0aW9uM2RFbF8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByb3RhdGlvbjNkRWxfJyk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmFuZ2xlM2RFbF8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBhbmdsZTNkRWxfJyk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnRpbHRSaWdodEVsXykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHRpbHRSaWdodEVsXycpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy50aWx0TGVmdEVsXykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHRpbHRMZWZ0RWxfJyk7XG4gICAgfVxuXG4gICAgdmFyIG5ld1JvdGF0aW9uID0gdGhpcy5vbDNkbS5nZXRPbDNkKCkuZ2V0T2xWaWV3KCkuZ2V0Um90YXRpb24oKTtcblxuICAgIGlmIChzaG91bGRVcGRhdGUodGhpcy5wcmV2aW91c1JvdGF0aW9uXywgbmV3Um90YXRpb24pKSB7XG4gICAgICB0aGlzLnJvdGF0ZUVsZW1lbnRfKHRoaXMucm90YXRpb24zZEVsXywgbmV3Um90YXRpb24pO1xuICAgICAgdGhpcy5wcmV2aW91c1JvdGF0aW9uXyA9IG5ld1JvdGF0aW9uO1xuICAgIH1cblxuICAgIHZhciBuZXdWaWV3TWF0cml4ID0gdGhpcy5vbDNkbS5nZXRDZXNpdW1WaWV3TWF0cml4KCk7XG5cbiAgICBpZiAoIUNlc2l1bS5NYXRyaXg0LmVxdWFsc0Vwc2lsb24odGhpcy5wcmV2aW91c1ZpZXdNYXRyaXhfLCBuZXdWaWV3TWF0cml4LCAxZS01KSkge1xuICAgICAgdmFyIG5ld1RpbHQgPSB0aGlzLm9sM2RtLmdldFRpbHRPbkdsb2JlKCk7XG5cbiAgICAgIGlmIChuZXdUaWx0ICE9IHVuZGVmaW5lZCAmJiBOdW1iZXIuaXNGaW5pdGUobmV3VGlsdCB8fCAwKSkge1xuICAgICAgICB0aGlzLnJvdGF0ZUVsZW1lbnRfKHRoaXMuYW5nbGUzZEVsXywgbmV3VGlsdCk7XG4gICAgICAgIHRoaXMucHJldmlvdXNWaWV3TWF0cml4XyA9IENlc2l1bS5NYXRyaXg0LmNsb25lKG5ld1ZpZXdNYXRyaXgpO1xuICAgICAgICB2YXIgYnVmZmVyID0gMC4wMTtcblxuICAgICAgICBpZiAobmV3VGlsdCAtIHRoaXMubWluVGlsdCA8IGJ1ZmZlcikge1xuICAgICAgICAgIHRoaXMudGlsdFJpZ2h0RWxfLmFkZENsYXNzKCduZ2VvLXJpZ2h0LWluYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50aWx0UmlnaHRFbF8uaGFzQ2xhc3MoJ25nZW8tcmlnaHQtaW5hY3RpdmUnKSkge1xuICAgICAgICAgIHRoaXMudGlsdFJpZ2h0RWxfLnJlbW92ZUNsYXNzKCduZ2VvLXJpZ2h0LWluYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tYXhUaWx0IC0gbmV3VGlsdCA8IGJ1ZmZlcikge1xuICAgICAgICAgIHRoaXMudGlsdExlZnRFbF8uYWRkQ2xhc3MoJ25nZW8tbGVmdC1pbmFjdGl2ZScpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGlsdExlZnRFbF8uaGFzQ2xhc3MoJ25nZW8tbGVmdC1pbmFjdGl2ZScpKSB7XG4gICAgICAgICAgdGhpcy50aWx0TGVmdEVsXy5yZW1vdmVDbGFzcygnbmdlby1sZWZ0LWluYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lUmVxdWVzdElkXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMudXBkYXRlV2lkZ2V0XygpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by4kb25EZXN0cm95ID0gZnVuY3Rpb24gJG9uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5hbmltYXRpb25GcmFtZVJlcXVlc3RJZF8pIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWVSZXF1ZXN0SWRfKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLiRvbkluaXQgPSBmdW5jdGlvbiAkb25Jbml0KCkge1xuICAgIGlmICh0aGlzLm1pblRpbHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5taW5UaWx0ID0gMDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYXhUaWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubWF4VGlsdCA9IDcgKiBNYXRoLlBJIC8gMTY7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm9sM2RtKSB7XG4gICAgICB0aGlzLm9sM2RtID0gdGhpcy5vbGNzU2VydmljZV8uZ2V0TWFuYWdlcigpIHx8IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy50aWx0UmlnaHRFbF8gPSB0aGlzLmVsZW1lbnRfLmZpbmQoJy5uZ2VvLXRpbHQtcmlnaHQnKTtcbiAgICB0aGlzLnRpbHRMZWZ0RWxfID0gdGhpcy5lbGVtZW50Xy5maW5kKCcubmdlby10aWx0LWxlZnQnKTtcbiAgICB0aGlzLnJvdGF0aW9uM2RFbF8gPSB0aGlzLmVsZW1lbnRfLmZpbmQoJy5uZ2VvLXJvdGF0aW9uM2QnKTtcbiAgICB0aGlzLmFuZ2xlM2RFbF8gPSB0aGlzLmVsZW1lbnRfLmZpbmQoJy5uZ2VvLWFuZ2xlM2QnKTtcbiAgICB0aGlzLnVwZGF0ZVdpZGdldF8oKTtcbiAgfTtcblxuICBfcHJvdG8ucm90YXRlRWxlbWVudF8gPSBmdW5jdGlvbiByb3RhdGVFbGVtZW50XyhlbGVtZW50LCBhbmdsZSkge1xuICAgIHZhciByID0gXCJyb3RhdGUoXCIgKyBhbmdsZSArIFwicmFkKVwiO1xuICAgIGVsZW1lbnQuY3NzKHtcbiAgICAgICctbW96LXRyYW5zZm9ybSc6IHIsXG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiByLFxuICAgICAgJy1vLXRyYW5zZm9ybSc6IHIsXG4gICAgICAnLW1zLXRyYW5zZm9ybSc6IHIsXG4gICAgICAndHJhbnNmb3JtJzogclxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yb3RhdGUgPSBmdW5jdGlvbiByb3RhdGUoYW5nbGUpIHtcbiAgICBpZiAoIXRoaXMub2wzZG0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBvbDNkbScpO1xuICAgIH1cblxuICAgIHRoaXMub2wzZG0uc2V0SGVhZGluZyh0b1JhZGlhbnMoYW5nbGUpKTtcbiAgfTtcblxuICBfcHJvdG8udGlsdCA9IGZ1bmN0aW9uIHRpbHQoYW5nbGUpIHtcbiAgICBpZiAoIXRoaXMub2wzZG0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBvbDNkbScpO1xuICAgIH1cblxuICAgIGFuZ2xlID0gdG9SYWRpYW5zKGFuZ2xlKTtcbiAgICB2YXIgdGlsdE9uR2xvYmUgPSBOdW1iZXIodGhpcy5vbDNkbS5nZXRUaWx0T25HbG9iZSgpKTtcblxuICAgIGlmICh0aWx0T25HbG9iZSArIGFuZ2xlIDwgdGhpcy5taW5UaWx0KSB7XG4gICAgICBhbmdsZSA9IHRoaXMubWluVGlsdCAtIHRpbHRPbkdsb2JlO1xuICAgIH0gZWxzZSBpZiAodGlsdE9uR2xvYmUgKyBhbmdsZSA+IHRoaXMubWF4VGlsdCkge1xuICAgICAgYW5nbGUgPSB0aGlzLm1heFRpbHQgLSB0aWx0T25HbG9iZTtcbiAgICB9XG5cbiAgICB2YXIgc2NlbmUgPSB0aGlzLm9sM2RtLmdldENlc2l1bVNjZW5lKCk7XG4gICAgb2xjc0NvcmUucm90YXRlQXJvdW5kQm90dG9tQ2VudGVyKHNjZW5lLCBhbmdsZSk7XG4gIH07XG5cbiAgX3Byb3RvLnpvb20gPSBmdW5jdGlvbiB6b29tKGRlbHRhKSB7XG4gICAgaWYgKCF0aGlzLm9sM2RtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3Npbmcgb2wzZG0nKTtcbiAgICB9XG5cbiAgICB2YXIgdmlldyA9IHRoaXMub2wzZG0uZ2V0T2xWaWV3KCk7XG4gICAgdmFyIGN1ciA9IHZpZXcuZ2V0UmVzb2x1dGlvbigpO1xuICAgIHZhciBuZXdSZXNvbHV0aW9uID0gdmlldy5jb25zdHJhaW5SZXNvbHV0aW9uKGN1ciwgZGVsdGEpO1xuXG4gICAgaWYgKHZpZXcuZ2V0QW5pbWF0aW5nKCkpIHtcbiAgICAgIHZpZXcuY2FuY2VsQW5pbWF0aW9ucygpO1xuICAgIH1cblxuICAgIHZpZXcuYW5pbWF0ZSh7XG4gICAgICByZXNvbHV0aW9uOiBuZXdSZXNvbHV0aW9uLFxuICAgICAgZHVyYXRpb246IDI1MCxcbiAgICAgIGVhc2luZzogb2xFYXNpbmcuZWFzZU91dFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBDb250cm9sbGVyO1xufSgpO1xuXG5mdW5jdGlvbiBuZ2VvT2xjc0NvbnRyb2xzM2RUZW1wbGF0ZVVybEluamVjdGFibGUoJGF0dHJzLCBuZ2VvT2xjc0NvbnRyb2xzM2RUZW1wbGF0ZVVybCkge1xuICBpZiAobmdlb09sY3NDb250cm9sczNkVGVtcGxhdGVVcmwpIHtcbiAgICByZXR1cm4gbmdlb09sY3NDb250cm9sczNkVGVtcGxhdGVVcmw7XG4gIH1cblxuICB2YXIgdGVtcGxhdGVVcmwgPSAkYXR0cnNbJ25nZW9PbGNzQ29udHJvbHMzZFRlbXBsYXRlVXJsJ107XG4gIHJldHVybiB0ZW1wbGF0ZVVybCA/IHRlbXBsYXRlVXJsIDogJ25nZW8vb2xzYy9jb250cm9sczNkJztcbn1cblxubXlNb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ25nZW8vb2xzYy9jb250cm9sczNkJywgcmVxdWlyZSgnLi9jb250cm9sczNkLmh0bWwnKSk7XG59XSk7XG52YXIgb2xzY0NvbnRyb2xzM2RDb21wb25lbnQgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgJ21pblRpbHQnOiAnPD8nLFxuICAgICdtYXhUaWx0JzogJzw/JyxcbiAgICAnb2wzZG0nOiAnPD8nXG4gIH0sXG4gIGNvbnRyb2xsZXI6IENvbnRyb2xsZXIsXG4gIHRlbXBsYXRlVXJsOiBuZ2VvT2xjc0NvbnRyb2xzM2RUZW1wbGF0ZVVybEluamVjdGFibGVcbn07XG5teU1vZHVsZS5jb21wb25lbnQoJ25nZW9PbGNzQ29udHJvbHMzZCcsIG9sc2NDb250cm9sczNkQ29tcG9uZW50KTtcbm15TW9kdWxlLnZhbHVlKCduZ2VvT2xjc0NvbnRyb2xzM2RUZW1wbGF0ZVVybCcsICcnKTtcbmV4cG9ydCBkZWZhdWx0IG15TW9kdWxlOyIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnbmdlby9vbGNzL1NlcnZpY2UnO1xuaW1wb3J0IGNvbnRyb2wgZnJvbSAnbmdlby9vbGNzL2NvbnRyb2xzM2QnO1xudmFyIG15TW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ25nZW9PbGNzTW9kdWxlJywgW2NvbnRyb2wubmFtZSwgU2VydmljZS5uYW1lXSk7XG5leHBvcnQgZGVmYXVsdCBteU1vZHVsZTsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcktBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2TUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=