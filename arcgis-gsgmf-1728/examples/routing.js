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
/******/ 		"routing": 0
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
/******/ 	deferredModules.push([38,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/routing.css":
/*!******************************!*\
  !*** ./examples/routing.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/routing.js":
/*!*****************************!*\
  !*** ./examples/routing.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routing_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing.css */ "./examples/routing.css");
/* harmony import */ var _routing_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_routing_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ol_ol_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/ol.css */ "./node_modules/ol/ol.css");
/* harmony import */ var ol_ol_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ol_ol_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_free_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/fontawesome.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gmf_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gmf/map/component */ "./src/map/component.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options */ "./examples/options.js");
/* harmony import */ var ngeo_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngeo/routing/module */ "./src/routing/module.js");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js");
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

/**
 * This example shows the ngeo routing directive.
 */














/** @type {angular.IModule} **/
const myModule = angular__WEBPACK_IMPORTED_MODULE_4___default.a.module('app', ['gettext', gmf_map_component__WEBPACK_IMPORTED_MODULE_5__["default"].name, ngeo_routing_module__WEBPACK_IMPORTED_MODULE_7__["default"].name]);

/**
 * The application's main directive.
 *
 * @class
 * @ngInject
 */
function MainController() {
  /**
   * @type {import('ol/Map').default}
   */
  this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_8__["default"]({
    layers: [
      new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_10__["default"]({
        source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_11__["default"](),
      }),
    ],
    view: new ol_View__WEBPACK_IMPORTED_MODULE_9__["default"]({
      center: [931010.1535989442, 5961705.842297254],
      zoom: 9,
    }),
  });

  /**
   * @type {boolean}
   */
  this.routingPanelActive = true;
}

myModule.controller('MainController', MainController);
myModule.constant('ngeoRoutingOptions', {});
myModule.constant('ngeoNominatimUrl', 'https://nominatim.openstreetmap.org/');
myModule.constant('ngeoNominatimSearchDefaultParams', {});
Object(_options__WEBPACK_IMPORTED_MODULE_6__["default"])(myModule);

/* harmony default export */ __webpack_exports__["default"] = (myModule);


/***/ }),

/***/ "./src/routing/NominatimInputComponent.js":
/*!************************************************!*\
  !*** ./src/routing/NominatimInputComponent.js ***!
  \************************************************/
/*! exports provided: Controller, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_search_searchDirective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/search/searchDirective */ "./src/search/searchDirective.js");
/* harmony import */ var ngeo_routing_NominatimService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/routing/NominatimService */ "./src/routing/NominatimService.js");
Controller.$inject = ["$element", "$scope", "ngeoNominatimService"];



var myModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoRoutingNominatimInputComponent', [ngeo_search_searchDirective__WEBPACK_IMPORTED_MODULE_1__["default"].name, ngeo_routing_NominatimService__WEBPACK_IMPORTED_MODULE_2__["default"].name]);
myModule.run(["$templateCache", function ($templateCache) {
  $templateCache.put('ngeo/routing/nominatiminput', __webpack_require__(/*! ./nominatiminput.html */ "./src/routing/nominatiminput.html"));
}]);
myModule.value('ngeoRoutingNominatimInputComponentTemplateUrl', function ($attrs) {
  var templateUrl = $attrs.ngeoRoutingNominatimInputComponentTemplateUrl;
  return templateUrl !== undefined ? templateUrl : 'ngeo/routing/nominatiminput';
});
ngeoRoutingNominatimInputComponentTemplateUrl.$inject = ["$attrs", "ngeoRoutingNominatimInputComponentTemplateUrl"];

function ngeoRoutingNominatimInputComponentTemplateUrl($attrs, ngeoRoutingNominatimInputComponentTemplateUrl) {
  return ngeoRoutingNominatimInputComponentTemplateUrl($attrs);
}

function Controller($element, $scope, ngeoNominatimService) {
  this.element_ = $element;
  this.$scope_ = $scope;
  this.ngeoNominatimService = ngeoNominatimService;
  this.onSelect = null;
  this.inputValue = null;
  this.options = {};
  this.datasets = [{
    name: 'nominatim',
    display: 'name',
    source: this.ngeoNominatimService.typeaheadSourceDebounced
  }];
  this.listeners = {
    select: this.select_.bind(this)
  };
  this.placeholder = '';
}

Controller.prototype.select_ = function (event, suggestion, dataset) {
  if (this.onSelect) {
    this.onSelect(suggestion);
  }
};

var routingNominatimInputComponent = {
  controller: Controller,
  bindings: {
    'onSelect': '=?ngeoNominatimInputOnSelect',
    'inputValue': '=?ngeoNominatimInputValue',
    'placeholder': '@?ngeoNominatimInputPlaceholder'
  },
  templateUrl: ngeoRoutingNominatimInputComponentTemplateUrl
};
myModule.component('ngeoNominatimInput', routingNominatimInputComponent);
/* harmony default export */ __webpack_exports__["default"] = (myModule);

/***/ }),

/***/ "./src/routing/NominatimService.js":
/*!*****************************************!*\
  !*** ./src/routing/NominatimService.js ***!
  \*****************************************/
/*! exports provided: NominatimService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NominatimService", function() { return NominatimService; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_misc_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/misc/debounce */ "./src/misc/debounce.js");
NominatimService.$inject = ["$http", "ngeoDebounce", "ngeoNominatimUrl", "ngeoNominatimSearchDefaultParams"];


function NominatimService($http, ngeoDebounce, ngeoNominatimUrl, ngeoNominatimSearchDefaultParams) {
  this.$http_ = $http;
  this.ngeoDebounce_ = ngeoDebounce;
  this.nominatimUrl_ = ngeoNominatimUrl;

  if (this.nominatimUrl_.substr(-1) !== '/') {
    this.nominatimUrl_ += '/';
  }

  this.searchDefaultParams_ = ngeoNominatimSearchDefaultParams;
  this.typeaheadDebounceDelay_ = 500;
  this.typeaheadSourceDebounced = this.ngeoDebounce_(this.typeaheadSource_.bind(this), this.typeaheadDebounceDelay_, true);
}

NominatimService.prototype.search = function (query, params) {
  var url = this.nominatimUrl_ + "search?q=" + query;
  params = params || {};
  params = Object.assign({}, this.searchDefaultParams_, params);
  params.format = 'json';

  if (params) {
    url += '&';
    var options = [];

    for (var _i = 0, _Object$keys = Object.keys(params); _i < _Object$keys.length; _i++) {
      var option = _Object$keys[_i];
      options.push(option + "=" + params[option]);
    }

    url += options.join('&');
  }

  return this.$http_.get(url);
};

NominatimService.prototype.reverse = function (coordinate, params) {
  var url = this.nominatimUrl_ + "reverse";
  params = Object.assign({}, params);
  params.lon = "" + coordinate[0];
  params.lat = "" + coordinate[1];
  params.format = 'json';

  if (params) {
    url += '?';
    var options = [];

    for (var _i2 = 0, _Object$keys2 = Object.keys(params); _i2 < _Object$keys2.length; _i2++) {
      var option = _Object$keys2[_i2];
      options.push(option + "=" + params[option]);
    }

    url += options.join('&');
  }

  return this.$http_.get(url);
};

NominatimService.prototype.typeaheadSource_ = function (query, syncResults, asyncResults) {
  var onSuccess_ = function onSuccess_(resp) {
    var parse = function parse(result) {
      return {
        coordinate: [result.lon, result.lat],
        name: result.display_name
      };
    };

    if (asyncResults) {
      asyncResults(resp.data.map(parse));
    } else {
      syncResults(resp.data.map(parse));
    }
  };

  var onError_ = function onError_(resp) {
    if (asyncResults) {
      asyncResults([]);
    } else {
      syncResults([]);
    }
  };

  this.search(query, {}).then(onSuccess_, onError_);
};

var myModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoNominatimService', [ngeo_misc_debounce__WEBPACK_IMPORTED_MODULE_1__["default"].name]);
myModule.service('ngeoNominatimService', NominatimService);
/* harmony default export */ __webpack_exports__["default"] = (myModule);

/***/ }),

/***/ "./src/routing/RoutingComponent.js":
/*!*****************************************!*\
  !*** ./src/routing/RoutingComponent.js ***!
  \*****************************************/
/*! exports provided: Controller, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_misc_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/misc/debounce */ "./src/misc/debounce.js");
/* harmony import */ var ngeo_misc_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/misc/filters */ "./src/misc/filters.js");
/* harmony import */ var ngeo_routing_NominatimService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/routing/NominatimService */ "./src/routing/NominatimService.js");
/* harmony import */ var ngeo_routing_RoutingService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/routing/RoutingService */ "./src/routing/RoutingService.js");
/* harmony import */ var ngeo_routing_RoutingFeatureComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/routing/RoutingFeatureComponent */ "./src/routing/RoutingFeatureComponent.js");
/* harmony import */ var ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/format/GeoJSON */ "./node_modules/ol/format/GeoJSON.js");
/* harmony import */ var ol_geom_Point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/geom/Point */ "./node_modules/ol/geom/Point.js");
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/source/Vector */ "./node_modules/ol/source/Vector.js");
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/layer/Vector */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_style_Style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/style/Style */ "./node_modules/ol/style/Style.js");
/* harmony import */ var ol_style_Fill__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/style/Fill */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_Stroke__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/style/Stroke */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_Feature__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_geom_LineString__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/geom/LineString */ "./node_modules/ol/geom/LineString.js");
/* harmony import */ var ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngeo/sass/font.scss */ "./src/sass/font.scss");
/* harmony import */ var ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_16__);

















var myModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoRoutingComponent', [ngeo_misc_debounce__WEBPACK_IMPORTED_MODULE_1__["default"].name, ngeo_misc_filters__WEBPACK_IMPORTED_MODULE_2__["default"].name, ngeo_routing_NominatimService__WEBPACK_IMPORTED_MODULE_3__["default"].name, ngeo_routing_RoutingService__WEBPACK_IMPORTED_MODULE_4__["default"].name, ngeo_routing_RoutingFeatureComponent__WEBPACK_IMPORTED_MODULE_5__["default"].name]);
myModule.run(["$templateCache", function ($templateCache) {
  $templateCache.put('ngeo/routing/routing', __webpack_require__(/*! ./routing.html */ "./src/routing/routing.html"));
}]);
myModule.value('ngeoRoutingTemplateUrl', function ($attrs) {
  var templateUrl = $attrs.ngeoRoutingTemplateUrl;
  return templateUrl !== undefined ? templateUrl : 'ngeo/routing/routing';
});
ngeoRoutingTemplateUrl.$inject = ["$attrs", "ngeoRoutingTemplateUrl"];

function ngeoRoutingTemplateUrl($attrs, ngeoRoutingTemplateUrl) {
  return ngeoRoutingTemplateUrl($attrs);
}

var Controller = function () {
  Controller.$inject = ["$scope", "ngeoRoutingService", "ngeoNominatimService", "$q", "ngeoDebounce", "ngeoRoutingOptions"];

  function Controller($scope, ngeoRoutingService, ngeoNominatimService, $q, ngeoDebounce, ngeoRoutingOptions) {
    var _this = this;

    this.$scope_ = $scope;
    this.ngeoRoutingService_ = ngeoRoutingService;
    this.ngeoNominatimService_ = ngeoNominatimService;
    this.routingOptions_ = ngeoRoutingOptions;
    this.routingProfiles = this.routingOptions_.profiles || [];
    this.selectedRoutingProfile = this.routingProfiles.length > 0 ? this.routingProfiles[0] : null;
    $scope.$watch(function () {
      return _this.selectedRoutingProfile;
    }, this.calculateRoute.bind(this));
    this.$q_ = $q;
    this.map = null;
    this.errorMessage = '';
    this.startFeature_ = null;
    this.targetFeature_ = null;
    this.viaArray = [];
    this.colors = {
      startFill: '#6BE62E',
      startStroke: '#4CB01E',
      destinationFill: '#FF3E13',
      destinationStroke: '#CD3412',
      viaFill: '#767676',
      viaStroke: '#000000',
      lineRGBA: 'rgba(16, 112, 29, 0.6)'
    };
    this.routeSource_ = new ol_source_Vector__WEBPACK_IMPORTED_MODULE_8__["default"]({
      features: []
    });
    this.routeLayer_ = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_9__["default"]({
      source: this.routeSource_,
      style: new ol_style_Style__WEBPACK_IMPORTED_MODULE_10__["default"]({
        fill: new ol_style_Fill__WEBPACK_IMPORTED_MODULE_11__["default"]({
          color: this.colors.lineRGBA
        }),
        stroke: new ol_style_Stroke__WEBPACK_IMPORTED_MODULE_12__["default"]({
          color: this.colors.lineRGBA,
          width: 5
        })
      })
    });
    this.routeDistance = 0;
    this.routeDuration = null;
    this.regexIsFormattedCoord = /\d+\.\d+\/\d+\.\d+/;
    this.draw_ = null;
    var debounceDelay = 200;
    this.handleChange = ngeoDebounce(this.calculateRoute.bind(this), debounceDelay, true);
  }

  var _proto = Controller.prototype;

  _proto.$onInit = function $onInit() {
    if (this.map) {
      this.map.addLayer(this.routeLayer_);
    }
  };

  _proto.clearRoute = function clearRoute() {
    this.startFeature_ = null;
    this.targetFeature_ = null;
    this.viaArray = [];
    this.routeDistance = 0;
    this.routeDuration = null;
    this.routeSource_.clear();
    this.errorMessage = '';
  };

  _proto.getLonLatFromPoint_ = function getLonLatFromPoint_(point) {
    if (!this.map) {
      return null;
    }

    var geometry = point.getGeometry();

    if (!(geometry instanceof ol_geom_Point__WEBPACK_IMPORTED_MODULE_7__["default"])) {
      throw new Error('Wrong time values type');
    }

    var coords = geometry.getCoordinates();
    var projection = this.map.getView().getProjection();
    return Object(ol_proj__WEBPACK_IMPORTED_MODULE_13__["toLonLat"])(coords, projection);
  };

  _proto.reverseRoute = function reverseRoute() {
    var tmpFeature = this.startFeature_;
    this.startFeature_ = this.targetFeature_;
    this.targetFeature_ = tmpFeature;
    this.viaArray = this.viaArray.reverse();
  };

  _proto.parseRoute_ = function parseRoute_(route) {
    if (!this.map) {
      return [];
    }

    var parsedRoutes = [];
    var format = new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_6__["default"]();
    var formatConfig = {
      dataProjection: 'EPSG:4326',
      featureProjection: this.map.getView().getProjection()
    };

    if (route.legs) {
      var _ref;

      var parsedRoutes_ = route.legs.map(function (leg) {
        return leg.steps.map(function (step) {
          return new ol_Feature__WEBPACK_IMPORTED_MODULE_14__["default"]({
            geometry: format.readGeometry(step.geometry, formatConfig)
          });
        });
      });
      parsedRoutes = (_ref = []).concat.apply(_ref, parsedRoutes_);
    } else if (route.geometry) {
      parsedRoutes.push(new ol_Feature__WEBPACK_IMPORTED_MODULE_14__["default"]({
        geometry: format.readGeometry(route.geometry, formatConfig)
      }));
    }

    return parsedRoutes;
  };

  _proto.calculateRoute = function calculateRoute() {
    var _this2 = this;

    if (!this.startFeature_ || !this.targetFeature_) {
      return;
    }

    this.routeSource_.clear();
    var coordFrom = this.getLonLatFromPoint_(this.startFeature_);
    var coordTo = this.getLonLatFromPoint_(this.targetFeature_);
    var vias = this.viaArray.filter(function (via) {
      return via.feature !== null;
    }).map(function (via) {
      return _this2.getLonLatFromPoint_(via.feature);
    });
    var route = [coordFrom].concat(vias, [coordTo]);

    var onSuccess_ = function onSuccess_(resp) {
      if (!_this2.map || !_this2.startFeature_ || !_this2.targetFeature_) {
        return;
      }

      var features = _this2.parseRoute_(resp.data.routes[0]);

      if (features.length === 0) {
        console.log('No route or not supported format.');
        return;
      }

      _this2.routeSource_.addFeatures(features);

      _this2.map.getView().fit(_this2.routeSource_.getExtent());

      _this2.routeDistance = resp.data.routes[0].distance;
      _this2.routeDuration = resp.data.routes[0].duration;
      var startRoute = features[0].getGeometry().getCoordinateAt(0);
      var endRoute = features[features.length - 1].getGeometry().getCoordinateAt(1);
      var startToRoute = [_this2.startFeature_.getGeometry().getCoordinates(), startRoute];
      var routeToEnd = [endRoute, _this2.targetFeature_.getGeometry().getCoordinates()];
      var routeConnections = [new ol_Feature__WEBPACK_IMPORTED_MODULE_14__["default"](new ol_geom_LineString__WEBPACK_IMPORTED_MODULE_15__["default"](startToRoute)), new ol_Feature__WEBPACK_IMPORTED_MODULE_14__["default"](new ol_geom_LineString__WEBPACK_IMPORTED_MODULE_15__["default"](routeToEnd))];

      _this2.routeSource_.addFeatures(routeConnections);
    };

    var onError_ = function onError_(resp) {
      _this2.errorMessage = 'Error: routing server not responding.';
      console.log(resp);
    };

    var options = {};
    options.steps = true;
    options.overview = false;
    options.geometries = 'geojson';
    var config = {};
    config.options = options;

    if (this.selectedRoutingProfile) {
      config.instance = this.selectedRoutingProfile.profile;
    }

    this.$q_.when(this.ngeoRoutingService_.getRoute(route, config)).then(onSuccess_, onError_);
  };

  _proto.addVia = function addVia() {
    this.viaArray.push({});
  };

  _proto.deleteVia = function deleteVia(index) {
    if (this.viaArray.length > index) {
      this.viaArray.splice(index, 1);
      this.calculateRoute();
    }
  };

  return Controller;
}();
myModule.component('ngeoRouting', {
  controller: Controller,
  bindings: {
    'map': '<ngeoRoutingMap'
  },
  templateUrl: ngeoRoutingTemplateUrl
});
/* harmony default export */ __webpack_exports__["default"] = (myModule);

/***/ }),

/***/ "./src/routing/RoutingFeatureComponent.js":
/*!************************************************!*\
  !*** ./src/routing/RoutingFeatureComponent.js ***!
  \************************************************/
/*! exports provided: Controller, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_routing_NominatimService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/routing/NominatimService */ "./src/routing/NominatimService.js");
/* harmony import */ var ngeo_routing_NominatimInputComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/routing/NominatimInputComponent */ "./src/routing/NominatimInputComponent.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_Feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_Collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/Collection */ "./node_modules/ol/Collection.js");
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/Vector */ "./node_modules/ol/source/Vector.js");
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/layer/Vector */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_style_Style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/style/Style */ "./node_modules/ol/style/Style.js");
/* harmony import */ var ol_style_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/style/Text */ "./node_modules/ol/style/Text.js");
/* harmony import */ var ol_style_Fill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/style/Fill */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_Stroke__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/style/Stroke */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_geom_Point__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/geom/Point */ "./node_modules/ol/geom/Point.js");
/* harmony import */ var ol_interaction_Modify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/interaction/Modify */ "./node_modules/ol/interaction/Modify.js");
/* harmony import */ var ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/interaction/Draw */ "./node_modules/ol/interaction/Draw.js");
/* harmony import */ var ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngeo/sass/font.scss */ "./src/sass/font.scss");
/* harmony import */ var ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_15__);
















var myModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoRoutingFeatureComponent', [ngeo_routing_NominatimService__WEBPACK_IMPORTED_MODULE_1__["default"].name, ngeo_routing_NominatimInputComponent__WEBPACK_IMPORTED_MODULE_2__["default"].name]);
myModule.run(["$templateCache", function ($templateCache) {
  $templateCache.put('ngeo/routing/routingfeature', __webpack_require__(/*! ./routingfeature.html */ "./src/routing/routingfeature.html"));
}]);
myModule.value('ngeoRoutingFeatureTemplateUrl', function ($attrs) {
  var templateUrl = $attrs.ngeoRoutingFeatureTemplateUrl;
  return templateUrl !== undefined ? templateUrl : 'ngeo/routing/routingfeature';
});
ngeoRoutingFeatureTemplateUrl.$inject = ["$attrs", "ngeoRoutingFeatureTemplateUrl"];

function ngeoRoutingFeatureTemplateUrl($attrs, ngeoRoutingFeatureTemplateUrl) {
  return ngeoRoutingFeatureTemplateUrl($attrs);
}

var Controller = function () {
  Controller.$inject = ["$scope", "$timeout", "$q", "ngeoNominatimService"];

  function Controller($scope, $timeout, $q, ngeoNominatimService) {
    var _this = this;

    this.scope_ = $scope;
    this.timeout_ = $timeout;
    this.$q_ = $q;
    this.ngeoNominatimService_ = ngeoNominatimService;
    this.map = null;
    this.feature = null;
    this.featureLabel = '';
    this.fillColor = '';
    this.strokeColor = '';
    this.onChange = null;
    this.vectorFeatures_ = new ol_Collection__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.vectorSource_ = new ol_source_Vector__WEBPACK_IMPORTED_MODULE_6__["default"]({
      features: this.vectorFeatures_
    });
    this.vectorLayer_ = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_7__["default"]({
      source: this.vectorSource_,
      style: function style(feature, resolution) {
        return [new ol_style_Style__WEBPACK_IMPORTED_MODULE_8__["default"]({
          text: new ol_style_Text__WEBPACK_IMPORTED_MODULE_9__["default"]({
            fill: new ol_style_Fill__WEBPACK_IMPORTED_MODULE_10__["default"]({
              color: _this.fillColor || '#000000'
            }),
            font: '900 24px "Font Awesome 5 Free"',
            stroke: new ol_style_Stroke__WEBPACK_IMPORTED_MODULE_11__["default"]({
              width: 3,
              color: _this.strokeColor || '#000000'
            }),
            offsetY: -15,
            text: "\uF041"
          })
        })];
      }
    });
    this.modifyFeature_ = new ol_interaction_Modify__WEBPACK_IMPORTED_MODULE_13__["default"]({
      features: this.vectorFeatures_
    });
    this.draw_ = null;
    this.onSelect = this.onSelect_.bind(this);
    this.errorMessage = '';
  }

  var _proto = Controller.prototype;

  _proto.$onInit = function $onInit() {
    var _this2 = this;

    if (!this.map) {
      return;
    }

    this.map.addLayer(this.vectorLayer_);
    this.modifyFeature_.setActive(true);
    this.map.addInteraction(this.modifyFeature_);
    this.modifyFeature_.on('modifyend', function (event) {
      var feature = event.features.getArray()[0];

      _this2.vectorSource_.clear();

      _this2.snapFeature_(feature);
    });
    this.scope_.$watch(function () {
      return _this2.feature;
    }, function (newVal, oldVal) {
      if (newVal) {
        _this2.onFeatureChange_();
      }

      if (newVal === null) {
        _this2.vectorSource_.clear();

        _this2.featureLabel = '';
      }
    });
  };

  _proto.$onDestroy = function $onDestroy() {
    if (!this.map) {
      return;
    }

    this.map.removeLayer(this.vectorLayer_);
    this.modifyFeature_.setActive(false);
    this.map.removeInteraction(this.modifyFeature_);
  };

  _proto.set = function set() {
    var _this3 = this;

    if (!this.map) {
      return;
    }

    if (this.draw_) {
      this.map.removeInteraction(this.draw_);
    }

    this.draw_ = new ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_14__["default"]({
      features: this.vectorFeatures_,
      type: 'Point'
    });
    this.draw_.on('drawstart', function () {
      if (_this3.feature) {
        _this3.vectorSource_.removeFeature(_this3.feature);
      }
    });
    this.draw_.on('drawend', function (event) {
      if (_this3.draw_ && _this3.map) {
        _this3.map.removeInteraction(_this3.draw_);
      }

      _this3.snapFeature_(event.feature);

      _this3.modifyFeature_.setActive(true);
    });
    this.modifyFeature_.setActive(false);
    this.map.addInteraction(this.draw_);
  };

  _proto.setFeature_ = function setFeature_(coordinate, label) {
    if (!this.map) {
      return;
    }

    var transformedCoordinate = ol_proj__WEBPACK_IMPORTED_MODULE_3__["fromLonLat"](coordinate, this.map.getView().getProjection());

    if (label === '') {
      label = transformedCoordinate.join('/');
    }

    this.feature = new ol_Feature__WEBPACK_IMPORTED_MODULE_4__["default"]({
      geometry: new ol_geom_Point__WEBPACK_IMPORTED_MODULE_12__["default"](transformedCoordinate),
      name: label
    });
  };

  _proto.onFeatureChange_ = function onFeatureChange_() {
    var _this4 = this;

    if (!this.feature) {
      return;
    }

    this.featureLabel = this.feature.get('name') || '';
    this.vectorSource_.clear();
    this.vectorSource_.addFeature(this.feature);

    if (this.onChange) {
      this.timeout_(function () {
        if (_this4.feature && _this4.onChange) {
          _this4.onChange(_this4.feature);
        }
      });
    }
  };

  _proto.onSelect_ = function onSelect_(selected) {
    var coordinate = selected.coordinate.map(parseFloat);
    var label = selected.label;
    this.setFeature_(coordinate, label);
    var newCoordinates = this.feature.getGeometry().getCoordinates();
    this.map.getView().setCenter(newCoordinates);
  };

  _proto.snapFeature_ = function snapFeature_(feature) {
    var _this5 = this;

    var coord = this.getLonLatFromPoint_(feature);

    if (!coord) {
      return;
    }

    var config = {};

    var onSuccess = function onSuccess(resp) {
      var lon = parseFloat(resp.data.lon);
      var lat = parseFloat(resp.data.lat);
      var coordinate = [lon, lat];
      var label = resp.data.display_name;

      _this5.setFeature_(coordinate, label);
    };

    var onError = function onError(resp) {
      _this5.errorMessage = 'Error: nominatim server not responding.';
      console.log(resp);
    };

    this.$q_.when(this.ngeoNominatimService_.reverse(coord, config)).then(onSuccess, onError);
  };

  _proto.getLonLatFromPoint_ = function getLonLatFromPoint_(point) {
    if (!this.map) {
      return null;
    }

    var geometry = point.getGeometry();
    var coords = geometry.getCoordinates();
    var projection = this.map.getView().getProjection();
    return ol_proj__WEBPACK_IMPORTED_MODULE_3__["toLonLat"](coords, projection);
  };

  return Controller;
}();
var routingFeatureComponent = {
  controller: Controller,
  bindings: {
    'map': '<ngeoRoutingFeatureMap',
    'feature': '=ngeoRoutingFeatureFeature',
    'fillColor': '<?ngeoRoutingFeatureFillColor',
    'strokeColor': '<?ngeoRoutingFeatureStrokeColor',
    'onChange': '=?ngeoRoutingFeatureOnChange'
  },
  templateUrl: ngeoRoutingFeatureTemplateUrl
};
myModule.component('ngeoRoutingFeature', routingFeatureComponent);
/* harmony default export */ __webpack_exports__["default"] = (myModule);

/***/ }),

/***/ "./src/routing/RoutingService.js":
/*!***************************************!*\
  !*** ./src/routing/RoutingService.js ***!
  \***************************************/
/*! exports provided: RoutingService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingService", function() { return RoutingService; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
RoutingService.$inject = ["$http", "ngeoRoutingOptions"];

function RoutingService($http, ngeoRoutingOptions) {
  this.$http_ = $http;
  this.routingOptions_ = ngeoRoutingOptions;
  this.ngeoOsrmBackendUrl_ = this.routingOptions_.backendUrl || 'https://router.project-osrm.org/';

  if (this.ngeoOsrmBackendUrl_.substr(-1) !== '/') {
    this.ngeoOsrmBackendUrl_ += '/';
  }

  this.protocolVersion_ = 'v1';
}

RoutingService.prototype.getRoute = function (coordinates, config) {
  config = config || {};

  if (!config.service) {
    config.service = 'route';
  }

  if (!config.profile) {
    config.profile = 'car';
  }

  var url = this.ngeoOsrmBackendUrl_;

  if (config.instance) {
    url += config.instance + "/";
  }

  url += config.service + "/" + this.protocolVersion_ + "/" + config.profile + "/";
  var coordinateString = coordinates.map(function (c) {
    return c.join(',');
  }).join(';');
  url += coordinateString;

  if (config.options) {
    url += '?';
    var options = [];

    for (var _i = 0, _Object$keys = Object.keys(config.options); _i < _Object$keys.length; _i++) {
      var option = _Object$keys[_i];
      options.push(option + "=" + config.options[option]);
    }

    url += options.join('&');
  }

  return this.$http_.get(url);
};

RoutingService.prototype.getNearest = function (coordinate, config) {
  config = config || {};
  config.service = 'nearest';

  if (!config.profile) {
    config.profile = 'car';
  }

  var url = this.ngeoOsrmBackendUrl_;

  if (config.instance) {
    url += config.instance + "/";
  }

  url += config.service + "/" + this.protocolVersion_ + "/" + config.profile + "/";
  var coordinateString = coordinate.join(',');
  url += coordinateString;

  if (config.options) {
    url += '?';
    var options = [];

    for (var _i2 = 0, _Object$keys2 = Object.keys(config.options); _i2 < _Object$keys2.length; _i2++) {
      var option = _Object$keys2[_i2];
      options.push(option + "=" + config.options[option]);
    }

    url += options.join('&');
  }

  return this.$http_.get(url);
};

var myModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoRoutingService', []);
myModule.service('ngeoRoutingService', RoutingService);
/* harmony default export */ __webpack_exports__["default"] = (myModule);

/***/ }),

/***/ "./src/routing/module.js":
/*!*******************************!*\
  !*** ./src/routing/module.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_routing_RoutingComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/routing/RoutingComponent */ "./src/routing/RoutingComponent.js");
/* harmony import */ var _routing_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routing.scss */ "./src/routing/routing.scss");
/* harmony import */ var _routing_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routing_scss__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoRoutingModule', [ngeo_routing_RoutingComponent__WEBPACK_IMPORTED_MODULE_1__["default"].name]));

/***/ }),

/***/ "./src/routing/nominatiminput.html":
/*!*****************************************!*\
  !*** ./src/routing/nominatiminput.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="ngeo-nominatim-input">\n  <input\n    type="text"\n    class="form-control"\n    placeholder="{{$ctrl.placeholder}}"\n    ng-model="$ctrl.inputValue"\n    ngeo-search="$ctrl.options"\n    ngeo-search-datasets="$ctrl.datasets"\n    ngeo-search-listeners="$ctrl.listeners"\n  />\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./src/routing/routing.html":
/*!**********************************!*\
  !*** ./src/routing/routing.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="ngeo-routing">\n  <div class="ngeo-routing-start form-group">\n    <ngeo-routing-feature\n      ngeo-routing-feature-map="$ctrl.map"\n      ngeo-routing-feature-feature="$ctrl.startFeature_"\n      ngeo-routing-feature-fill-color="$ctrl.colors.startFill"\n      ngeo-routing-feature-stroke-color="$ctrl.colors.startStroke"\n      ngeo-routing-feature-on-change="$ctrl.handleChange"\n    >\n    </ngeo-routing-feature>\n  </div>\n\n  <div class="ngeo-routing-vias form-group" ng-repeat="(index, via) in $ctrl.viaArray">\n    <div class="form-inline">\n      <div class="form-group">\n        <ngeo-routing-feature\n          ngeo-routing-feature-map="$ctrl.map"\n          ngeo-routing-feature-feature="via.feature"\n          ngeo-routing-feature-fill-color="$ctrl.colors.viaFill"\n          ngeo-routing-feature-stroke-color="$ctrl.colors.viaStroke"\n          ngeo-routing-feature-on-change="$ctrl.handleChange"\n        >\n        </ngeo-routing-feature>\n      </div>\n      <button type="button" class="btn prime delete-via" ng-click="$ctrl.deleteVia(index)">\n        <span class="fa fa-trash"></span>\n      </button>\n    </div>\n  </div>\n\n  <div class="ngeo-routing-destination form-group">\n    <ngeo-routing-feature\n      ngeo-routing-feature-map="$ctrl.map"\n      ngeo-routing-feature-feature="$ctrl.targetFeature_"\n      ngeo-routing-feature-fill-color="$ctrl.colors.destinationFill"\n      ngeo-routing-feature-stroke-color="$ctrl.colors.destinationStroke"\n      ngeo-routing-feature-on-change="$ctrl.handleChange"\n    >\n    </ngeo-routing-feature>\n  </div>\n\n  <div class="form-group fill">\n    <button type="button" class="btn prime" ng-click="$ctrl.clearRoute()">\n      <span class="fa fa-trash"></span> <span translate>Clear</span>\n    </button>\n    <button type="button" class="btn prime" ng-click="$ctrl.reverseRoute()">\n      <span class="fa fa-exchange-alt"></span> <span translate>Reverse</span>\n    </button>\n    <button type="button" class="btn prime" ng-click="$ctrl.addVia()">\n      <span class="fa fa-plus"></span> <span translate>Add via</span>\n    </button>\n  </div>\n\n  <div class="clearfix"></div>\n\n  <div ng-if="$ctrl.routingProfiles.length > 1">\n    <div class="form-group">\n      <label class="col-form-label col-md-4" translate>Profile</label>\n      <div class="col-md-8">\n        <select class="form-control" ng-model="$ctrl.selectedRoutingProfile">\n          <option ng-repeat="profile in $ctrl.routingProfiles" ng-value="profile">{{profile.label}}</option>\n        </select>\n      </div>\n    </div>\n  </div>\n\n  <div class="ngeo-routing-error form-group clearfix" ng-hide="$ctrl.errorMessage === \'\'">\n    {{$ctrl.errorMessage}}\n  </div>\n\n  <div class="clearfix"></div>\n\n  <div ng-hide="$ctrl.routeDuration === null && $ctrl.routeDistance <= 0">\n    <div class="row">\n      <div class="col-md-12">\n        <strong translate>Route statistics</strong>\n      </div>\n    </div>\n    <div class="row" ng-hide="$ctrl.routeDuration === null">\n      <div class="col-md-4 text-right" translate>Duration</div>\n      <div class="col-md-8">{{$ctrl.routeDuration | ngeoDuration}}</div>\n    </div>\n\n    <div class="row" ng-hide="$ctrl.routeDistance <= 0">\n      <div class="col-md-4 text-right" translate>Distance</div>\n      <div class="col-md-8">{{$ctrl.routeDistance | ngeoUnitPrefix:\'m\'}}</div>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./src/routing/routing.scss":
/*!**********************************!*\
  !*** ./src/routing/routing.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/routing/routingfeature.html":
/*!*****************************************!*\
  !*** ./src/routing/routingfeature.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="ngeo-routing-feature">\n  <div class="input-group">\n    <ngeo-nominatim-input\n      ngeo-nominatim-input-value="$ctrl.featureLabel"\n      ngeo-nominatim-input-placeholder="{{\'Search...\' | translate}}"\n      ngeo-nominatim-input-on-select="$ctrl.onSelect"\n    >\n    </ngeo-nominatim-input>\n    <div class="input-group-addon btn" ng-click="$ctrl.set()">\n      <span class="fa fa-map-marker"></span>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ 38:
/*!****************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/routing.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/routing.js */"./examples/routing.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0aW5nL05vbWluYXRpbUlucHV0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0aW5nL05vbWluYXRpbVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRpbmcvUm91dGluZ0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGluZy9Sb3V0aW5nRmVhdHVyZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGluZy9Sb3V0aW5nU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGluZy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRpbmcvbm9taW5hdGltaW5wdXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGluZy9yb3V0aW5nLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRpbmcvcm91dGluZ2ZlYXR1cmUuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicm91dGluZ1wiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdC8vIFNpbmNlIGFsbCByZWZlcmVuY2VkIGNodW5rcyBhcmUgYWxyZWFkeSBpbmNsdWRlZFxuIFx0Ly8gaW4gdGhpcyBmaWxlLCB0aGlzIGZ1bmN0aW9uIGlzIGVtcHR5IGhlcmUuXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKCkge1xuIFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMzgsXCJjb21tb25zXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE4LTIwMjIgQ2FtcHRvY2FtcCBTQVxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLyoqXG4gKiBUaGlzIGV4YW1wbGUgc2hvd3MgdGhlIG5nZW8gcm91dGluZyBkaXJlY3RpdmUuXG4gKi9cbmltcG9ydCAnLi9yb3V0aW5nLmNzcyc7XG5pbXBvcnQgJ29sL29sLmNzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2ZvbnRhd2Vzb21lLm1pbi5jc3MnO1xuXG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBnbWZNYXBDb21wb25lbnQgZnJvbSAnZ21mL21hcC9jb21wb25lbnQnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCBuZ2VvUm91dGluZ01vZHVsZSBmcm9tICduZ2VvL3JvdXRpbmcvbW9kdWxlJztcbmltcG9ydCBvbE1hcCBmcm9tICdvbC9NYXAnO1xuaW1wb3J0IG9sVmlldyBmcm9tICdvbC9WaWV3JztcbmltcG9ydCBvbExheWVyVGlsZSBmcm9tICdvbC9sYXllci9UaWxlJztcbmltcG9ydCBvbFNvdXJjZU9TTSBmcm9tICdvbC9zb3VyY2UvT1NNJztcblxuLyoqIEB0eXBlIHthbmd1bGFyLklNb2R1bGV9ICoqL1xuY29uc3QgbXlNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWydnZXR0ZXh0JywgZ21mTWFwQ29tcG9uZW50Lm5hbWUsIG5nZW9Sb3V0aW5nTW9kdWxlLm5hbWVdKTtcblxuLyoqXG4gKiBUaGUgYXBwbGljYXRpb24ncyBtYWluIGRpcmVjdGl2ZS5cbiAqXG4gKiBAY2xhc3NcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBNYWluQ29udHJvbGxlcigpIHtcbiAgLyoqXG4gICAqIEB0eXBlIHtpbXBvcnQoJ29sL01hcCcpLmRlZmF1bHR9XG4gICAqL1xuICB0aGlzLm1hcCA9IG5ldyBvbE1hcCh7XG4gICAgbGF5ZXJzOiBbXG4gICAgICBuZXcgb2xMYXllclRpbGUoe1xuICAgICAgICBzb3VyY2U6IG5ldyBvbFNvdXJjZU9TTSgpLFxuICAgICAgfSksXG4gICAgXSxcbiAgICB2aWV3OiBuZXcgb2xWaWV3KHtcbiAgICAgIGNlbnRlcjogWzkzMTAxMC4xNTM1OTg5NDQyLCA1OTYxNzA1Ljg0MjI5NzI1NF0sXG4gICAgICB6b29tOiA5LFxuICAgIH0pLFxuICB9KTtcblxuICAvKipcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICB0aGlzLnJvdXRpbmdQYW5lbEFjdGl2ZSA9IHRydWU7XG59XG5cbm15TW9kdWxlLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpO1xubXlNb2R1bGUuY29uc3RhbnQoJ25nZW9Sb3V0aW5nT3B0aW9ucycsIHt9KTtcbm15TW9kdWxlLmNvbnN0YW50KCduZ2VvTm9taW5hdGltVXJsJywgJ2h0dHBzOi8vbm9taW5hdGltLm9wZW5zdHJlZXRtYXAub3JnLycpO1xubXlNb2R1bGUuY29uc3RhbnQoJ25nZW9Ob21pbmF0aW1TZWFyY2hEZWZhdWx0UGFyYW1zJywge30pO1xub3B0aW9ucyhteU1vZHVsZSk7XG5cbmV4cG9ydCBkZWZhdWx0IG15TW9kdWxlO1xuIiwiQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJGVsZW1lbnRcIiwgXCIkc2NvcGVcIiwgXCJuZ2VvTm9taW5hdGltU2VydmljZVwiXTtcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IG5nZW9TZWFyY2hTZWFyY2hEaXJlY3RpdmUgZnJvbSAnbmdlby9zZWFyY2gvc2VhcmNoRGlyZWN0aXZlJztcbmltcG9ydCBuZ2VvUm91dGluZ05vbWluYXRpbVNlcnZpY2UgZnJvbSAnbmdlby9yb3V0aW5nL05vbWluYXRpbVNlcnZpY2UnO1xudmFyIG15TW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ25nZW9Sb3V0aW5nTm9taW5hdGltSW5wdXRDb21wb25lbnQnLCBbbmdlb1NlYXJjaFNlYXJjaERpcmVjdGl2ZS5uYW1lLCBuZ2VvUm91dGluZ05vbWluYXRpbVNlcnZpY2UubmFtZV0pO1xubXlNb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ25nZW8vcm91dGluZy9ub21pbmF0aW1pbnB1dCcsIHJlcXVpcmUoJy4vbm9taW5hdGltaW5wdXQuaHRtbCcpKTtcbn1dKTtcbm15TW9kdWxlLnZhbHVlKCduZ2VvUm91dGluZ05vbWluYXRpbUlucHV0Q29tcG9uZW50VGVtcGxhdGVVcmwnLCBmdW5jdGlvbiAoJGF0dHJzKSB7XG4gIHZhciB0ZW1wbGF0ZVVybCA9ICRhdHRycy5uZ2VvUm91dGluZ05vbWluYXRpbUlucHV0Q29tcG9uZW50VGVtcGxhdGVVcmw7XG4gIHJldHVybiB0ZW1wbGF0ZVVybCAhPT0gdW5kZWZpbmVkID8gdGVtcGxhdGVVcmwgOiAnbmdlby9yb3V0aW5nL25vbWluYXRpbWlucHV0Jztcbn0pO1xubmdlb1JvdXRpbmdOb21pbmF0aW1JbnB1dENvbXBvbmVudFRlbXBsYXRlVXJsLiRpbmplY3QgPSBbXCIkYXR0cnNcIiwgXCJuZ2VvUm91dGluZ05vbWluYXRpbUlucHV0Q29tcG9uZW50VGVtcGxhdGVVcmxcIl07XG5cbmZ1bmN0aW9uIG5nZW9Sb3V0aW5nTm9taW5hdGltSW5wdXRDb21wb25lbnRUZW1wbGF0ZVVybCgkYXR0cnMsIG5nZW9Sb3V0aW5nTm9taW5hdGltSW5wdXRDb21wb25lbnRUZW1wbGF0ZVVybCkge1xuICByZXR1cm4gbmdlb1JvdXRpbmdOb21pbmF0aW1JbnB1dENvbXBvbmVudFRlbXBsYXRlVXJsKCRhdHRycyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb250cm9sbGVyKCRlbGVtZW50LCAkc2NvcGUsIG5nZW9Ob21pbmF0aW1TZXJ2aWNlKSB7XG4gIHRoaXMuZWxlbWVudF8gPSAkZWxlbWVudDtcbiAgdGhpcy4kc2NvcGVfID0gJHNjb3BlO1xuICB0aGlzLm5nZW9Ob21pbmF0aW1TZXJ2aWNlID0gbmdlb05vbWluYXRpbVNlcnZpY2U7XG4gIHRoaXMub25TZWxlY3QgPSBudWxsO1xuICB0aGlzLmlucHV0VmFsdWUgPSBudWxsO1xuICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgdGhpcy5kYXRhc2V0cyA9IFt7XG4gICAgbmFtZTogJ25vbWluYXRpbScsXG4gICAgZGlzcGxheTogJ25hbWUnLFxuICAgIHNvdXJjZTogdGhpcy5uZ2VvTm9taW5hdGltU2VydmljZS50eXBlYWhlYWRTb3VyY2VEZWJvdW5jZWRcbiAgfV07XG4gIHRoaXMubGlzdGVuZXJzID0ge1xuICAgIHNlbGVjdDogdGhpcy5zZWxlY3RfLmJpbmQodGhpcylcbiAgfTtcbiAgdGhpcy5wbGFjZWhvbGRlciA9ICcnO1xufVxuXG5Db250cm9sbGVyLnByb3RvdHlwZS5zZWxlY3RfID0gZnVuY3Rpb24gKGV2ZW50LCBzdWdnZXN0aW9uLCBkYXRhc2V0KSB7XG4gIGlmICh0aGlzLm9uU2VsZWN0KSB7XG4gICAgdGhpcy5vblNlbGVjdChzdWdnZXN0aW9uKTtcbiAgfVxufTtcblxudmFyIHJvdXRpbmdOb21pbmF0aW1JbnB1dENvbXBvbmVudCA9IHtcbiAgY29udHJvbGxlcjogQ29udHJvbGxlcixcbiAgYmluZGluZ3M6IHtcbiAgICAnb25TZWxlY3QnOiAnPT9uZ2VvTm9taW5hdGltSW5wdXRPblNlbGVjdCcsXG4gICAgJ2lucHV0VmFsdWUnOiAnPT9uZ2VvTm9taW5hdGltSW5wdXRWYWx1ZScsXG4gICAgJ3BsYWNlaG9sZGVyJzogJ0A/bmdlb05vbWluYXRpbUlucHV0UGxhY2Vob2xkZXInXG4gIH0sXG4gIHRlbXBsYXRlVXJsOiBuZ2VvUm91dGluZ05vbWluYXRpbUlucHV0Q29tcG9uZW50VGVtcGxhdGVVcmxcbn07XG5teU1vZHVsZS5jb21wb25lbnQoJ25nZW9Ob21pbmF0aW1JbnB1dCcsIHJvdXRpbmdOb21pbmF0aW1JbnB1dENvbXBvbmVudCk7XG5leHBvcnQgZGVmYXVsdCBteU1vZHVsZTsiLCJOb21pbmF0aW1TZXJ2aWNlLiRpbmplY3QgPSBbXCIkaHR0cFwiLCBcIm5nZW9EZWJvdW5jZVwiLCBcIm5nZW9Ob21pbmF0aW1VcmxcIiwgXCJuZ2VvTm9taW5hdGltU2VhcmNoRGVmYXVsdFBhcmFtc1wiXTtcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IG5nZW9NaXNjRGVib3VuY2UgZnJvbSAnbmdlby9taXNjL2RlYm91bmNlJztcbmV4cG9ydCBmdW5jdGlvbiBOb21pbmF0aW1TZXJ2aWNlKCRodHRwLCBuZ2VvRGVib3VuY2UsIG5nZW9Ob21pbmF0aW1VcmwsIG5nZW9Ob21pbmF0aW1TZWFyY2hEZWZhdWx0UGFyYW1zKSB7XG4gIHRoaXMuJGh0dHBfID0gJGh0dHA7XG4gIHRoaXMubmdlb0RlYm91bmNlXyA9IG5nZW9EZWJvdW5jZTtcbiAgdGhpcy5ub21pbmF0aW1VcmxfID0gbmdlb05vbWluYXRpbVVybDtcblxuICBpZiAodGhpcy5ub21pbmF0aW1VcmxfLnN1YnN0cigtMSkgIT09ICcvJykge1xuICAgIHRoaXMubm9taW5hdGltVXJsXyArPSAnLyc7XG4gIH1cblxuICB0aGlzLnNlYXJjaERlZmF1bHRQYXJhbXNfID0gbmdlb05vbWluYXRpbVNlYXJjaERlZmF1bHRQYXJhbXM7XG4gIHRoaXMudHlwZWFoZWFkRGVib3VuY2VEZWxheV8gPSA1MDA7XG4gIHRoaXMudHlwZWFoZWFkU291cmNlRGVib3VuY2VkID0gdGhpcy5uZ2VvRGVib3VuY2VfKHRoaXMudHlwZWFoZWFkU291cmNlXy5iaW5kKHRoaXMpLCB0aGlzLnR5cGVhaGVhZERlYm91bmNlRGVsYXlfLCB0cnVlKTtcbn1cblxuTm9taW5hdGltU2VydmljZS5wcm90b3R5cGUuc2VhcmNoID0gZnVuY3Rpb24gKHF1ZXJ5LCBwYXJhbXMpIHtcbiAgdmFyIHVybCA9IHRoaXMubm9taW5hdGltVXJsXyArIFwic2VhcmNoP3E9XCIgKyBxdWVyeTtcbiAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuICBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNlYXJjaERlZmF1bHRQYXJhbXNfLCBwYXJhbXMpO1xuICBwYXJhbXMuZm9ybWF0ID0gJ2pzb24nO1xuXG4gIGlmIChwYXJhbXMpIHtcbiAgICB1cmwgKz0gJyYnO1xuICAgIHZhciBvcHRpb25zID0gW107XG5cbiAgICBmb3IgKHZhciBfaSA9IDAsIF9PYmplY3Qka2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcyk7IF9pIDwgX09iamVjdCRrZXlzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIG9wdGlvbiA9IF9PYmplY3Qka2V5c1tfaV07XG4gICAgICBvcHRpb25zLnB1c2gob3B0aW9uICsgXCI9XCIgKyBwYXJhbXNbb3B0aW9uXSk7XG4gICAgfVxuXG4gICAgdXJsICs9IG9wdGlvbnMuam9pbignJicpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuJGh0dHBfLmdldCh1cmwpO1xufTtcblxuTm9taW5hdGltU2VydmljZS5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uIChjb29yZGluYXRlLCBwYXJhbXMpIHtcbiAgdmFyIHVybCA9IHRoaXMubm9taW5hdGltVXJsXyArIFwicmV2ZXJzZVwiO1xuICBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpO1xuICBwYXJhbXMubG9uID0gXCJcIiArIGNvb3JkaW5hdGVbMF07XG4gIHBhcmFtcy5sYXQgPSBcIlwiICsgY29vcmRpbmF0ZVsxXTtcbiAgcGFyYW1zLmZvcm1hdCA9ICdqc29uJztcblxuICBpZiAocGFyYW1zKSB7XG4gICAgdXJsICs9ICc/JztcbiAgICB2YXIgb3B0aW9ucyA9IFtdO1xuXG4gICAgZm9yICh2YXIgX2kyID0gMCwgX09iamVjdCRrZXlzMiA9IE9iamVjdC5rZXlzKHBhcmFtcyk7IF9pMiA8IF9PYmplY3Qka2V5czIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIG9wdGlvbiA9IF9PYmplY3Qka2V5czJbX2kyXTtcbiAgICAgIG9wdGlvbnMucHVzaChvcHRpb24gKyBcIj1cIiArIHBhcmFtc1tvcHRpb25dKTtcbiAgICB9XG5cbiAgICB1cmwgKz0gb3B0aW9ucy5qb2luKCcmJyk7XG4gIH1cblxuICByZXR1cm4gdGhpcy4kaHR0cF8uZ2V0KHVybCk7XG59O1xuXG5Ob21pbmF0aW1TZXJ2aWNlLnByb3RvdHlwZS50eXBlYWhlYWRTb3VyY2VfID0gZnVuY3Rpb24gKHF1ZXJ5LCBzeW5jUmVzdWx0cywgYXN5bmNSZXN1bHRzKSB7XG4gIHZhciBvblN1Y2Nlc3NfID0gZnVuY3Rpb24gb25TdWNjZXNzXyhyZXNwKSB7XG4gICAgdmFyIHBhcnNlID0gZnVuY3Rpb24gcGFyc2UocmVzdWx0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb29yZGluYXRlOiBbcmVzdWx0LmxvbiwgcmVzdWx0LmxhdF0sXG4gICAgICAgIG5hbWU6IHJlc3VsdC5kaXNwbGF5X25hbWVcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGlmIChhc3luY1Jlc3VsdHMpIHtcbiAgICAgIGFzeW5jUmVzdWx0cyhyZXNwLmRhdGEubWFwKHBhcnNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN5bmNSZXN1bHRzKHJlc3AuZGF0YS5tYXAocGFyc2UpKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIG9uRXJyb3JfID0gZnVuY3Rpb24gb25FcnJvcl8ocmVzcCkge1xuICAgIGlmIChhc3luY1Jlc3VsdHMpIHtcbiAgICAgIGFzeW5jUmVzdWx0cyhbXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN5bmNSZXN1bHRzKFtdKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5zZWFyY2gocXVlcnksIHt9KS50aGVuKG9uU3VjY2Vzc18sIG9uRXJyb3JfKTtcbn07XG5cbnZhciBteU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCduZ2VvTm9taW5hdGltU2VydmljZScsIFtuZ2VvTWlzY0RlYm91bmNlLm5hbWVdKTtcbm15TW9kdWxlLnNlcnZpY2UoJ25nZW9Ob21pbmF0aW1TZXJ2aWNlJywgTm9taW5hdGltU2VydmljZSk7XG5leHBvcnQgZGVmYXVsdCBteU1vZHVsZTsiLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBuZ2VvTWlzY0RlYm91bmNlIGZyb20gJ25nZW8vbWlzYy9kZWJvdW5jZSc7XG5pbXBvcnQgbmdlb01pc2NGaWx0ZXJzIGZyb20gJ25nZW8vbWlzYy9maWx0ZXJzJztcbmltcG9ydCBuZ2VvUm91dGluZ05vbWluYXRpbVNlcnZpY2UgZnJvbSAnbmdlby9yb3V0aW5nL05vbWluYXRpbVNlcnZpY2UnO1xuaW1wb3J0IG5nZW9Sb3V0aW5nUm91dGluZ1NlcnZpY2UgZnJvbSAnbmdlby9yb3V0aW5nL1JvdXRpbmdTZXJ2aWNlJztcbmltcG9ydCBuZ2VvUm91dGluZ1JvdXRpbmdGZWF0dXJlQ29tcG9uZW50IGZyb20gJ25nZW8vcm91dGluZy9Sb3V0aW5nRmVhdHVyZUNvbXBvbmVudCc7XG5pbXBvcnQgb2xGb3JtYXRHZW9KU09OIGZyb20gJ29sL2Zvcm1hdC9HZW9KU09OJztcbmltcG9ydCBvbEdlb21Qb2ludCBmcm9tICdvbC9nZW9tL1BvaW50JztcbmltcG9ydCBvbFNvdXJjZVZlY3RvciBmcm9tICdvbC9zb3VyY2UvVmVjdG9yJztcbmltcG9ydCBvbExheWVyVmVjdG9yIGZyb20gJ29sL2xheWVyL1ZlY3Rvcic7XG5pbXBvcnQgb2xTdHlsZVN0eWxlIGZyb20gJ29sL3N0eWxlL1N0eWxlJztcbmltcG9ydCBvbFN0eWxlRmlsbCBmcm9tICdvbC9zdHlsZS9GaWxsJztcbmltcG9ydCBvbFN0eWxlU3Ryb2tlIGZyb20gJ29sL3N0eWxlL1N0cm9rZSc7XG5pbXBvcnQgeyB0b0xvbkxhdCB9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IG9sRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlJztcbmltcG9ydCBvbEdlb21MaW5lU3RyaW5nIGZyb20gJ29sL2dlb20vTGluZVN0cmluZyc7XG5pbXBvcnQgJ25nZW8vc2Fzcy9mb250LnNjc3MnO1xudmFyIG15TW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ25nZW9Sb3V0aW5nQ29tcG9uZW50JywgW25nZW9NaXNjRGVib3VuY2UubmFtZSwgbmdlb01pc2NGaWx0ZXJzLm5hbWUsIG5nZW9Sb3V0aW5nTm9taW5hdGltU2VydmljZS5uYW1lLCBuZ2VvUm91dGluZ1JvdXRpbmdTZXJ2aWNlLm5hbWUsIG5nZW9Sb3V0aW5nUm91dGluZ0ZlYXR1cmVDb21wb25lbnQubmFtZV0pO1xubXlNb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ25nZW8vcm91dGluZy9yb3V0aW5nJywgcmVxdWlyZSgnLi9yb3V0aW5nLmh0bWwnKSk7XG59XSk7XG5teU1vZHVsZS52YWx1ZSgnbmdlb1JvdXRpbmdUZW1wbGF0ZVVybCcsIGZ1bmN0aW9uICgkYXR0cnMpIHtcbiAgdmFyIHRlbXBsYXRlVXJsID0gJGF0dHJzLm5nZW9Sb3V0aW5nVGVtcGxhdGVVcmw7XG4gIHJldHVybiB0ZW1wbGF0ZVVybCAhPT0gdW5kZWZpbmVkID8gdGVtcGxhdGVVcmwgOiAnbmdlby9yb3V0aW5nL3JvdXRpbmcnO1xufSk7XG5uZ2VvUm91dGluZ1RlbXBsYXRlVXJsLiRpbmplY3QgPSBbXCIkYXR0cnNcIiwgXCJuZ2VvUm91dGluZ1RlbXBsYXRlVXJsXCJdO1xuXG5mdW5jdGlvbiBuZ2VvUm91dGluZ1RlbXBsYXRlVXJsKCRhdHRycywgbmdlb1JvdXRpbmdUZW1wbGF0ZVVybCkge1xuICByZXR1cm4gbmdlb1JvdXRpbmdUZW1wbGF0ZVVybCgkYXR0cnMpO1xufVxuXG5leHBvcnQgdmFyIENvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG4gIENvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzY29wZVwiLCBcIm5nZW9Sb3V0aW5nU2VydmljZVwiLCBcIm5nZW9Ob21pbmF0aW1TZXJ2aWNlXCIsIFwiJHFcIiwgXCJuZ2VvRGVib3VuY2VcIiwgXCJuZ2VvUm91dGluZ09wdGlvbnNcIl07XG5cbiAgZnVuY3Rpb24gQ29udHJvbGxlcigkc2NvcGUsIG5nZW9Sb3V0aW5nU2VydmljZSwgbmdlb05vbWluYXRpbVNlcnZpY2UsICRxLCBuZ2VvRGVib3VuY2UsIG5nZW9Sb3V0aW5nT3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLiRzY29wZV8gPSAkc2NvcGU7XG4gICAgdGhpcy5uZ2VvUm91dGluZ1NlcnZpY2VfID0gbmdlb1JvdXRpbmdTZXJ2aWNlO1xuICAgIHRoaXMubmdlb05vbWluYXRpbVNlcnZpY2VfID0gbmdlb05vbWluYXRpbVNlcnZpY2U7XG4gICAgdGhpcy5yb3V0aW5nT3B0aW9uc18gPSBuZ2VvUm91dGluZ09wdGlvbnM7XG4gICAgdGhpcy5yb3V0aW5nUHJvZmlsZXMgPSB0aGlzLnJvdXRpbmdPcHRpb25zXy5wcm9maWxlcyB8fCBbXTtcbiAgICB0aGlzLnNlbGVjdGVkUm91dGluZ1Byb2ZpbGUgPSB0aGlzLnJvdXRpbmdQcm9maWxlcy5sZW5ndGggPiAwID8gdGhpcy5yb3V0aW5nUHJvZmlsZXNbMF0gOiBudWxsO1xuICAgICRzY29wZS4kd2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnNlbGVjdGVkUm91dGluZ1Byb2ZpbGU7XG4gICAgfSwgdGhpcy5jYWxjdWxhdGVSb3V0ZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLiRxXyA9ICRxO1xuICAgIHRoaXMubWFwID0gbnVsbDtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgIHRoaXMuc3RhcnRGZWF0dXJlXyA9IG51bGw7XG4gICAgdGhpcy50YXJnZXRGZWF0dXJlXyA9IG51bGw7XG4gICAgdGhpcy52aWFBcnJheSA9IFtdO1xuICAgIHRoaXMuY29sb3JzID0ge1xuICAgICAgc3RhcnRGaWxsOiAnIzZCRTYyRScsXG4gICAgICBzdGFydFN0cm9rZTogJyM0Q0IwMUUnLFxuICAgICAgZGVzdGluYXRpb25GaWxsOiAnI0ZGM0UxMycsXG4gICAgICBkZXN0aW5hdGlvblN0cm9rZTogJyNDRDM0MTInLFxuICAgICAgdmlhRmlsbDogJyM3Njc2NzYnLFxuICAgICAgdmlhU3Ryb2tlOiAnIzAwMDAwMCcsXG4gICAgICBsaW5lUkdCQTogJ3JnYmEoMTYsIDExMiwgMjksIDAuNiknXG4gICAgfTtcbiAgICB0aGlzLnJvdXRlU291cmNlXyA9IG5ldyBvbFNvdXJjZVZlY3Rvcih7XG4gICAgICBmZWF0dXJlczogW11cbiAgICB9KTtcbiAgICB0aGlzLnJvdXRlTGF5ZXJfID0gbmV3IG9sTGF5ZXJWZWN0b3Ioe1xuICAgICAgc291cmNlOiB0aGlzLnJvdXRlU291cmNlXyxcbiAgICAgIHN0eWxlOiBuZXcgb2xTdHlsZVN0eWxlKHtcbiAgICAgICAgZmlsbDogbmV3IG9sU3R5bGVGaWxsKHtcbiAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcnMubGluZVJHQkFcbiAgICAgICAgfSksXG4gICAgICAgIHN0cm9rZTogbmV3IG9sU3R5bGVTdHJva2Uoe1xuICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9ycy5saW5lUkdCQSxcbiAgICAgICAgICB3aWR0aDogNVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KTtcbiAgICB0aGlzLnJvdXRlRGlzdGFuY2UgPSAwO1xuICAgIHRoaXMucm91dGVEdXJhdGlvbiA9IG51bGw7XG4gICAgdGhpcy5yZWdleElzRm9ybWF0dGVkQ29vcmQgPSAvXFxkK1xcLlxcZCtcXC9cXGQrXFwuXFxkKy87XG4gICAgdGhpcy5kcmF3XyA9IG51bGw7XG4gICAgdmFyIGRlYm91bmNlRGVsYXkgPSAyMDA7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSBuZ2VvRGVib3VuY2UodGhpcy5jYWxjdWxhdGVSb3V0ZS5iaW5kKHRoaXMpLCBkZWJvdW5jZURlbGF5LCB0cnVlKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDb250cm9sbGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uJG9uSW5pdCA9IGZ1bmN0aW9uICRvbkluaXQoKSB7XG4gICAgaWYgKHRoaXMubWFwKSB7XG4gICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLnJvdXRlTGF5ZXJfKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyUm91dGUgPSBmdW5jdGlvbiBjbGVhclJvdXRlKCkge1xuICAgIHRoaXMuc3RhcnRGZWF0dXJlXyA9IG51bGw7XG4gICAgdGhpcy50YXJnZXRGZWF0dXJlXyA9IG51bGw7XG4gICAgdGhpcy52aWFBcnJheSA9IFtdO1xuICAgIHRoaXMucm91dGVEaXN0YW5jZSA9IDA7XG4gICAgdGhpcy5yb3V0ZUR1cmF0aW9uID0gbnVsbDtcbiAgICB0aGlzLnJvdXRlU291cmNlXy5jbGVhcigpO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gIH07XG5cbiAgX3Byb3RvLmdldExvbkxhdEZyb21Qb2ludF8gPSBmdW5jdGlvbiBnZXRMb25MYXRGcm9tUG9pbnRfKHBvaW50KSB7XG4gICAgaWYgKCF0aGlzLm1hcCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGdlb21ldHJ5ID0gcG9pbnQuZ2V0R2VvbWV0cnkoKTtcblxuICAgIGlmICghKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2xHZW9tUG9pbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dyb25nIHRpbWUgdmFsdWVzIHR5cGUnKTtcbiAgICB9XG5cbiAgICB2YXIgY29vcmRzID0gZ2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICB2YXIgcHJvamVjdGlvbiA9IHRoaXMubWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCk7XG4gICAgcmV0dXJuIHRvTG9uTGF0KGNvb3JkcywgcHJvamVjdGlvbik7XG4gIH07XG5cbiAgX3Byb3RvLnJldmVyc2VSb3V0ZSA9IGZ1bmN0aW9uIHJldmVyc2VSb3V0ZSgpIHtcbiAgICB2YXIgdG1wRmVhdHVyZSA9IHRoaXMuc3RhcnRGZWF0dXJlXztcbiAgICB0aGlzLnN0YXJ0RmVhdHVyZV8gPSB0aGlzLnRhcmdldEZlYXR1cmVfO1xuICAgIHRoaXMudGFyZ2V0RmVhdHVyZV8gPSB0bXBGZWF0dXJlO1xuICAgIHRoaXMudmlhQXJyYXkgPSB0aGlzLnZpYUFycmF5LnJldmVyc2UoKTtcbiAgfTtcblxuICBfcHJvdG8ucGFyc2VSb3V0ZV8gPSBmdW5jdGlvbiBwYXJzZVJvdXRlXyhyb3V0ZSkge1xuICAgIGlmICghdGhpcy5tYXApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICB2YXIgcGFyc2VkUm91dGVzID0gW107XG4gICAgdmFyIGZvcm1hdCA9IG5ldyBvbEZvcm1hdEdlb0pTT04oKTtcbiAgICB2YXIgZm9ybWF0Q29uZmlnID0ge1xuICAgICAgZGF0YVByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgZmVhdHVyZVByb2plY3Rpb246IHRoaXMubWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKClcbiAgICB9O1xuXG4gICAgaWYgKHJvdXRlLmxlZ3MpIHtcbiAgICAgIHZhciBfcmVmO1xuXG4gICAgICB2YXIgcGFyc2VkUm91dGVzXyA9IHJvdXRlLmxlZ3MubWFwKGZ1bmN0aW9uIChsZWcpIHtcbiAgICAgICAgcmV0dXJuIGxlZy5zdGVwcy5tYXAoZnVuY3Rpb24gKHN0ZXApIHtcbiAgICAgICAgICByZXR1cm4gbmV3IG9sRmVhdHVyZSh7XG4gICAgICAgICAgICBnZW9tZXRyeTogZm9ybWF0LnJlYWRHZW9tZXRyeShzdGVwLmdlb21ldHJ5LCBmb3JtYXRDb25maWcpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBwYXJzZWRSb3V0ZXMgPSAoX3JlZiA9IFtdKS5jb25jYXQuYXBwbHkoX3JlZiwgcGFyc2VkUm91dGVzXyk7XG4gICAgfSBlbHNlIGlmIChyb3V0ZS5nZW9tZXRyeSkge1xuICAgICAgcGFyc2VkUm91dGVzLnB1c2gobmV3IG9sRmVhdHVyZSh7XG4gICAgICAgIGdlb21ldHJ5OiBmb3JtYXQucmVhZEdlb21ldHJ5KHJvdXRlLmdlb21ldHJ5LCBmb3JtYXRDb25maWcpXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZFJvdXRlcztcbiAgfTtcblxuICBfcHJvdG8uY2FsY3VsYXRlUm91dGUgPSBmdW5jdGlvbiBjYWxjdWxhdGVSb3V0ZSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICghdGhpcy5zdGFydEZlYXR1cmVfIHx8ICF0aGlzLnRhcmdldEZlYXR1cmVfKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yb3V0ZVNvdXJjZV8uY2xlYXIoKTtcbiAgICB2YXIgY29vcmRGcm9tID0gdGhpcy5nZXRMb25MYXRGcm9tUG9pbnRfKHRoaXMuc3RhcnRGZWF0dXJlXyk7XG4gICAgdmFyIGNvb3JkVG8gPSB0aGlzLmdldExvbkxhdEZyb21Qb2ludF8odGhpcy50YXJnZXRGZWF0dXJlXyk7XG4gICAgdmFyIHZpYXMgPSB0aGlzLnZpYUFycmF5LmZpbHRlcihmdW5jdGlvbiAodmlhKSB7XG4gICAgICByZXR1cm4gdmlhLmZlYXR1cmUgIT09IG51bGw7XG4gICAgfSkubWFwKGZ1bmN0aW9uICh2aWEpIHtcbiAgICAgIHJldHVybiBfdGhpczIuZ2V0TG9uTGF0RnJvbVBvaW50Xyh2aWEuZmVhdHVyZSk7XG4gICAgfSk7XG4gICAgdmFyIHJvdXRlID0gW2Nvb3JkRnJvbV0uY29uY2F0KHZpYXMsIFtjb29yZFRvXSk7XG5cbiAgICB2YXIgb25TdWNjZXNzXyA9IGZ1bmN0aW9uIG9uU3VjY2Vzc18ocmVzcCkge1xuICAgICAgaWYgKCFfdGhpczIubWFwIHx8ICFfdGhpczIuc3RhcnRGZWF0dXJlXyB8fCAhX3RoaXMyLnRhcmdldEZlYXR1cmVfKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGZlYXR1cmVzID0gX3RoaXMyLnBhcnNlUm91dGVfKHJlc3AuZGF0YS5yb3V0ZXNbMF0pO1xuXG4gICAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdObyByb3V0ZSBvciBub3Qgc3VwcG9ydGVkIGZvcm1hdC4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpczIucm91dGVTb3VyY2VfLmFkZEZlYXR1cmVzKGZlYXR1cmVzKTtcblxuICAgICAgX3RoaXMyLm1hcC5nZXRWaWV3KCkuZml0KF90aGlzMi5yb3V0ZVNvdXJjZV8uZ2V0RXh0ZW50KCkpO1xuXG4gICAgICBfdGhpczIucm91dGVEaXN0YW5jZSA9IHJlc3AuZGF0YS5yb3V0ZXNbMF0uZGlzdGFuY2U7XG4gICAgICBfdGhpczIucm91dGVEdXJhdGlvbiA9IHJlc3AuZGF0YS5yb3V0ZXNbMF0uZHVyYXRpb247XG4gICAgICB2YXIgc3RhcnRSb3V0ZSA9IGZlYXR1cmVzWzBdLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZUF0KDApO1xuICAgICAgdmFyIGVuZFJvdXRlID0gZmVhdHVyZXNbZmVhdHVyZXMubGVuZ3RoIC0gMV0uZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlQXQoMSk7XG4gICAgICB2YXIgc3RhcnRUb1JvdXRlID0gW190aGlzMi5zdGFydEZlYXR1cmVfLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKSwgc3RhcnRSb3V0ZV07XG4gICAgICB2YXIgcm91dGVUb0VuZCA9IFtlbmRSb3V0ZSwgX3RoaXMyLnRhcmdldEZlYXR1cmVfLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKV07XG4gICAgICB2YXIgcm91dGVDb25uZWN0aW9ucyA9IFtuZXcgb2xGZWF0dXJlKG5ldyBvbEdlb21MaW5lU3RyaW5nKHN0YXJ0VG9Sb3V0ZSkpLCBuZXcgb2xGZWF0dXJlKG5ldyBvbEdlb21MaW5lU3RyaW5nKHJvdXRlVG9FbmQpKV07XG5cbiAgICAgIF90aGlzMi5yb3V0ZVNvdXJjZV8uYWRkRmVhdHVyZXMocm91dGVDb25uZWN0aW9ucyk7XG4gICAgfTtcblxuICAgIHZhciBvbkVycm9yXyA9IGZ1bmN0aW9uIG9uRXJyb3JfKHJlc3ApIHtcbiAgICAgIF90aGlzMi5lcnJvck1lc3NhZ2UgPSAnRXJyb3I6IHJvdXRpbmcgc2VydmVyIG5vdCByZXNwb25kaW5nLic7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwKTtcbiAgICB9O1xuXG4gICAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgICBvcHRpb25zLnN0ZXBzID0gdHJ1ZTtcbiAgICBvcHRpb25zLm92ZXJ2aWV3ID0gZmFsc2U7XG4gICAgb3B0aW9ucy5nZW9tZXRyaWVzID0gJ2dlb2pzb24nO1xuICAgIHZhciBjb25maWcgPSB7fTtcbiAgICBjb25maWcub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZFJvdXRpbmdQcm9maWxlKSB7XG4gICAgICBjb25maWcuaW5zdGFuY2UgPSB0aGlzLnNlbGVjdGVkUm91dGluZ1Byb2ZpbGUucHJvZmlsZTtcbiAgICB9XG5cbiAgICB0aGlzLiRxXy53aGVuKHRoaXMubmdlb1JvdXRpbmdTZXJ2aWNlXy5nZXRSb3V0ZShyb3V0ZSwgY29uZmlnKSkudGhlbihvblN1Y2Nlc3NfLCBvbkVycm9yXyk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZFZpYSA9IGZ1bmN0aW9uIGFkZFZpYSgpIHtcbiAgICB0aGlzLnZpYUFycmF5LnB1c2goe30pO1xuICB9O1xuXG4gIF9wcm90by5kZWxldGVWaWEgPSBmdW5jdGlvbiBkZWxldGVWaWEoaW5kZXgpIHtcbiAgICBpZiAodGhpcy52aWFBcnJheS5sZW5ndGggPiBpbmRleCkge1xuICAgICAgdGhpcy52aWFBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5jYWxjdWxhdGVSb3V0ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ29udHJvbGxlcjtcbn0oKTtcbm15TW9kdWxlLmNvbXBvbmVudCgnbmdlb1JvdXRpbmcnLCB7XG4gIGNvbnRyb2xsZXI6IENvbnRyb2xsZXIsXG4gIGJpbmRpbmdzOiB7XG4gICAgJ21hcCc6ICc8bmdlb1JvdXRpbmdNYXAnXG4gIH0sXG4gIHRlbXBsYXRlVXJsOiBuZ2VvUm91dGluZ1RlbXBsYXRlVXJsXG59KTtcbmV4cG9ydCBkZWZhdWx0IG15TW9kdWxlOyIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IG5nZW9Sb3V0aW5nTm9taW5hdGltU2VydmljZSBmcm9tICduZ2VvL3JvdXRpbmcvTm9taW5hdGltU2VydmljZSc7XG5pbXBvcnQgbmdlb1JvdXRpbmdOb21pbmF0aW1JbnB1dENvbXBvbmVudCBmcm9tICduZ2VvL3JvdXRpbmcvTm9taW5hdGltSW5wdXRDb21wb25lbnQnO1xuaW1wb3J0ICogYXMgb2xQcm9qIGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IG9sRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlJztcbmltcG9ydCBvbENvbGxlY3Rpb24gZnJvbSAnb2wvQ29sbGVjdGlvbic7XG5pbXBvcnQgb2xTb3VyY2VWZWN0b3IgZnJvbSAnb2wvc291cmNlL1ZlY3Rvcic7XG5pbXBvcnQgb2xMYXllclZlY3RvciBmcm9tICdvbC9sYXllci9WZWN0b3InO1xuaW1wb3J0IG9sU3R5bGVTdHlsZSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XG5pbXBvcnQgb2xTdHlsZVRleHQgZnJvbSAnb2wvc3R5bGUvVGV4dCc7XG5pbXBvcnQgb2xTdHlsZUZpbGwgZnJvbSAnb2wvc3R5bGUvRmlsbCc7XG5pbXBvcnQgb2xTdHlsZVN0cm9rZSBmcm9tICdvbC9zdHlsZS9TdHJva2UnO1xuaW1wb3J0IG9sR2VvbVBvaW50IGZyb20gJ29sL2dlb20vUG9pbnQnO1xuaW1wb3J0IG9sSW50ZXJhY3Rpb25Nb2RpZnkgZnJvbSAnb2wvaW50ZXJhY3Rpb24vTW9kaWZ5JztcbmltcG9ydCBvbEludGVyYWN0aW9uRHJhdyBmcm9tICdvbC9pbnRlcmFjdGlvbi9EcmF3JztcbmltcG9ydCAnbmdlby9zYXNzL2ZvbnQuc2Nzcyc7XG52YXIgbXlNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnbmdlb1JvdXRpbmdGZWF0dXJlQ29tcG9uZW50JywgW25nZW9Sb3V0aW5nTm9taW5hdGltU2VydmljZS5uYW1lLCBuZ2VvUm91dGluZ05vbWluYXRpbUlucHV0Q29tcG9uZW50Lm5hbWVdKTtcbm15TW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCduZ2VvL3JvdXRpbmcvcm91dGluZ2ZlYXR1cmUnLCByZXF1aXJlKCcuL3JvdXRpbmdmZWF0dXJlLmh0bWwnKSk7XG59XSk7XG5teU1vZHVsZS52YWx1ZSgnbmdlb1JvdXRpbmdGZWF0dXJlVGVtcGxhdGVVcmwnLCBmdW5jdGlvbiAoJGF0dHJzKSB7XG4gIHZhciB0ZW1wbGF0ZVVybCA9ICRhdHRycy5uZ2VvUm91dGluZ0ZlYXR1cmVUZW1wbGF0ZVVybDtcbiAgcmV0dXJuIHRlbXBsYXRlVXJsICE9PSB1bmRlZmluZWQgPyB0ZW1wbGF0ZVVybCA6ICduZ2VvL3JvdXRpbmcvcm91dGluZ2ZlYXR1cmUnO1xufSk7XG5uZ2VvUm91dGluZ0ZlYXR1cmVUZW1wbGF0ZVVybC4kaW5qZWN0ID0gW1wiJGF0dHJzXCIsIFwibmdlb1JvdXRpbmdGZWF0dXJlVGVtcGxhdGVVcmxcIl07XG5cbmZ1bmN0aW9uIG5nZW9Sb3V0aW5nRmVhdHVyZVRlbXBsYXRlVXJsKCRhdHRycywgbmdlb1JvdXRpbmdGZWF0dXJlVGVtcGxhdGVVcmwpIHtcbiAgcmV0dXJuIG5nZW9Sb3V0aW5nRmVhdHVyZVRlbXBsYXRlVXJsKCRhdHRycyk7XG59XG5cbmV4cG9ydCB2YXIgQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHNjb3BlXCIsIFwiJHRpbWVvdXRcIiwgXCIkcVwiLCBcIm5nZW9Ob21pbmF0aW1TZXJ2aWNlXCJdO1xuXG4gIGZ1bmN0aW9uIENvbnRyb2xsZXIoJHNjb3BlLCAkdGltZW91dCwgJHEsIG5nZW9Ob21pbmF0aW1TZXJ2aWNlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuc2NvcGVfID0gJHNjb3BlO1xuICAgIHRoaXMudGltZW91dF8gPSAkdGltZW91dDtcbiAgICB0aGlzLiRxXyA9ICRxO1xuICAgIHRoaXMubmdlb05vbWluYXRpbVNlcnZpY2VfID0gbmdlb05vbWluYXRpbVNlcnZpY2U7XG4gICAgdGhpcy5tYXAgPSBudWxsO1xuICAgIHRoaXMuZmVhdHVyZSA9IG51bGw7XG4gICAgdGhpcy5mZWF0dXJlTGFiZWwgPSAnJztcbiAgICB0aGlzLmZpbGxDb2xvciA9ICcnO1xuICAgIHRoaXMuc3Ryb2tlQ29sb3IgPSAnJztcbiAgICB0aGlzLm9uQ2hhbmdlID0gbnVsbDtcbiAgICB0aGlzLnZlY3RvckZlYXR1cmVzXyA9IG5ldyBvbENvbGxlY3Rpb24oKTtcbiAgICB0aGlzLnZlY3RvclNvdXJjZV8gPSBuZXcgb2xTb3VyY2VWZWN0b3Ioe1xuICAgICAgZmVhdHVyZXM6IHRoaXMudmVjdG9yRmVhdHVyZXNfXG4gICAgfSk7XG4gICAgdGhpcy52ZWN0b3JMYXllcl8gPSBuZXcgb2xMYXllclZlY3Rvcih7XG4gICAgICBzb3VyY2U6IHRoaXMudmVjdG9yU291cmNlXyxcbiAgICAgIHN0eWxlOiBmdW5jdGlvbiBzdHlsZShmZWF0dXJlLCByZXNvbHV0aW9uKSB7XG4gICAgICAgIHJldHVybiBbbmV3IG9sU3R5bGVTdHlsZSh7XG4gICAgICAgICAgdGV4dDogbmV3IG9sU3R5bGVUZXh0KHtcbiAgICAgICAgICAgIGZpbGw6IG5ldyBvbFN0eWxlRmlsbCh7XG4gICAgICAgICAgICAgIGNvbG9yOiBfdGhpcy5maWxsQ29sb3IgfHwgJyMwMDAwMDAnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZvbnQ6ICc5MDAgMjRweCBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIicsXG4gICAgICAgICAgICBzdHJva2U6IG5ldyBvbFN0eWxlU3Ryb2tlKHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMsXG4gICAgICAgICAgICAgIGNvbG9yOiBfdGhpcy5zdHJva2VDb2xvciB8fCAnIzAwMDAwMCdcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgb2Zmc2V0WTogLTE1LFxuICAgICAgICAgICAgdGV4dDogXCJcXHVGMDQxXCJcbiAgICAgICAgICB9KVxuICAgICAgICB9KV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5tb2RpZnlGZWF0dXJlXyA9IG5ldyBvbEludGVyYWN0aW9uTW9kaWZ5KHtcbiAgICAgIGZlYXR1cmVzOiB0aGlzLnZlY3RvckZlYXR1cmVzX1xuICAgIH0pO1xuICAgIHRoaXMuZHJhd18gPSBudWxsO1xuICAgIHRoaXMub25TZWxlY3QgPSB0aGlzLm9uU2VsZWN0Xy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ29udHJvbGxlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLiRvbkluaXQgPSBmdW5jdGlvbiAkb25Jbml0KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLm1hcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMudmVjdG9yTGF5ZXJfKTtcbiAgICB0aGlzLm1vZGlmeUZlYXR1cmVfLnNldEFjdGl2ZSh0cnVlKTtcbiAgICB0aGlzLm1hcC5hZGRJbnRlcmFjdGlvbih0aGlzLm1vZGlmeUZlYXR1cmVfKTtcbiAgICB0aGlzLm1vZGlmeUZlYXR1cmVfLm9uKCdtb2RpZnllbmQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBmZWF0dXJlID0gZXZlbnQuZmVhdHVyZXMuZ2V0QXJyYXkoKVswXTtcblxuICAgICAgX3RoaXMyLnZlY3RvclNvdXJjZV8uY2xlYXIoKTtcblxuICAgICAgX3RoaXMyLnNuYXBGZWF0dXJlXyhmZWF0dXJlKTtcbiAgICB9KTtcbiAgICB0aGlzLnNjb3BlXy4kd2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzMi5mZWF0dXJlO1xuICAgIH0sIGZ1bmN0aW9uIChuZXdWYWwsIG9sZFZhbCkge1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICBfdGhpczIub25GZWF0dXJlQ2hhbmdlXygpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV3VmFsID09PSBudWxsKSB7XG4gICAgICAgIF90aGlzMi52ZWN0b3JTb3VyY2VfLmNsZWFyKCk7XG5cbiAgICAgICAgX3RoaXMyLmZlYXR1cmVMYWJlbCA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by4kb25EZXN0cm95ID0gZnVuY3Rpb24gJG9uRGVzdHJveSgpIHtcbiAgICBpZiAoIXRoaXMubWFwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy52ZWN0b3JMYXllcl8pO1xuICAgIHRoaXMubW9kaWZ5RmVhdHVyZV8uc2V0QWN0aXZlKGZhbHNlKTtcbiAgICB0aGlzLm1hcC5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLm1vZGlmeUZlYXR1cmVfKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0ID0gZnVuY3Rpb24gc2V0KCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLm1hcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRyYXdfKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmRyYXdfKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYXdfID0gbmV3IG9sSW50ZXJhY3Rpb25EcmF3KHtcbiAgICAgIGZlYXR1cmVzOiB0aGlzLnZlY3RvckZlYXR1cmVzXyxcbiAgICAgIHR5cGU6ICdQb2ludCdcbiAgICB9KTtcbiAgICB0aGlzLmRyYXdfLm9uKCdkcmF3c3RhcnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMzLmZlYXR1cmUpIHtcbiAgICAgICAgX3RoaXMzLnZlY3RvclNvdXJjZV8ucmVtb3ZlRmVhdHVyZShfdGhpczMuZmVhdHVyZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5kcmF3Xy5vbignZHJhd2VuZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzMy5kcmF3XyAmJiBfdGhpczMubWFwKSB7XG4gICAgICAgIF90aGlzMy5tYXAucmVtb3ZlSW50ZXJhY3Rpb24oX3RoaXMzLmRyYXdfKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMzLnNuYXBGZWF0dXJlXyhldmVudC5mZWF0dXJlKTtcblxuICAgICAgX3RoaXMzLm1vZGlmeUZlYXR1cmVfLnNldEFjdGl2ZSh0cnVlKTtcbiAgICB9KTtcbiAgICB0aGlzLm1vZGlmeUZlYXR1cmVfLnNldEFjdGl2ZShmYWxzZSk7XG4gICAgdGhpcy5tYXAuYWRkSW50ZXJhY3Rpb24odGhpcy5kcmF3Xyk7XG4gIH07XG5cbiAgX3Byb3RvLnNldEZlYXR1cmVfID0gZnVuY3Rpb24gc2V0RmVhdHVyZV8oY29vcmRpbmF0ZSwgbGFiZWwpIHtcbiAgICBpZiAoIXRoaXMubWFwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZSA9IG9sUHJvai5mcm9tTG9uTGF0KGNvb3JkaW5hdGUsIHRoaXMubWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCkpO1xuXG4gICAgaWYgKGxhYmVsID09PSAnJykge1xuICAgICAgbGFiZWwgPSB0cmFuc2Zvcm1lZENvb3JkaW5hdGUuam9pbignLycpO1xuICAgIH1cblxuICAgIHRoaXMuZmVhdHVyZSA9IG5ldyBvbEZlYXR1cmUoe1xuICAgICAgZ2VvbWV0cnk6IG5ldyBvbEdlb21Qb2ludCh0cmFuc2Zvcm1lZENvb3JkaW5hdGUpLFxuICAgICAgbmFtZTogbGFiZWxcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ub25GZWF0dXJlQ2hhbmdlXyA9IGZ1bmN0aW9uIG9uRmVhdHVyZUNoYW5nZV8oKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuZmVhdHVyZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZmVhdHVyZUxhYmVsID0gdGhpcy5mZWF0dXJlLmdldCgnbmFtZScpIHx8ICcnO1xuICAgIHRoaXMudmVjdG9yU291cmNlXy5jbGVhcigpO1xuICAgIHRoaXMudmVjdG9yU291cmNlXy5hZGRGZWF0dXJlKHRoaXMuZmVhdHVyZSk7XG5cbiAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy50aW1lb3V0XyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpczQuZmVhdHVyZSAmJiBfdGhpczQub25DaGFuZ2UpIHtcbiAgICAgICAgICBfdGhpczQub25DaGFuZ2UoX3RoaXM0LmZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uU2VsZWN0XyA9IGZ1bmN0aW9uIG9uU2VsZWN0XyhzZWxlY3RlZCkge1xuICAgIHZhciBjb29yZGluYXRlID0gc2VsZWN0ZWQuY29vcmRpbmF0ZS5tYXAocGFyc2VGbG9hdCk7XG4gICAgdmFyIGxhYmVsID0gc2VsZWN0ZWQubGFiZWw7XG4gICAgdGhpcy5zZXRGZWF0dXJlXyhjb29yZGluYXRlLCBsYWJlbCk7XG4gICAgdmFyIG5ld0Nvb3JkaW5hdGVzID0gdGhpcy5mZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICB0aGlzLm1hcC5nZXRWaWV3KCkuc2V0Q2VudGVyKG5ld0Nvb3JkaW5hdGVzKTtcbiAgfTtcblxuICBfcHJvdG8uc25hcEZlYXR1cmVfID0gZnVuY3Rpb24gc25hcEZlYXR1cmVfKGZlYXR1cmUpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHZhciBjb29yZCA9IHRoaXMuZ2V0TG9uTGF0RnJvbVBvaW50XyhmZWF0dXJlKTtcblxuICAgIGlmICghY29vcmQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY29uZmlnID0ge307XG5cbiAgICB2YXIgb25TdWNjZXNzID0gZnVuY3Rpb24gb25TdWNjZXNzKHJlc3ApIHtcbiAgICAgIHZhciBsb24gPSBwYXJzZUZsb2F0KHJlc3AuZGF0YS5sb24pO1xuICAgICAgdmFyIGxhdCA9IHBhcnNlRmxvYXQocmVzcC5kYXRhLmxhdCk7XG4gICAgICB2YXIgY29vcmRpbmF0ZSA9IFtsb24sIGxhdF07XG4gICAgICB2YXIgbGFiZWwgPSByZXNwLmRhdGEuZGlzcGxheV9uYW1lO1xuXG4gICAgICBfdGhpczUuc2V0RmVhdHVyZV8oY29vcmRpbmF0ZSwgbGFiZWwpO1xuICAgIH07XG5cbiAgICB2YXIgb25FcnJvciA9IGZ1bmN0aW9uIG9uRXJyb3IocmVzcCkge1xuICAgICAgX3RoaXM1LmVycm9yTWVzc2FnZSA9ICdFcnJvcjogbm9taW5hdGltIHNlcnZlciBub3QgcmVzcG9uZGluZy4nO1xuICAgICAgY29uc29sZS5sb2cocmVzcCk7XG4gICAgfTtcblxuICAgIHRoaXMuJHFfLndoZW4odGhpcy5uZ2VvTm9taW5hdGltU2VydmljZV8ucmV2ZXJzZShjb29yZCwgY29uZmlnKSkudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICB9O1xuXG4gIF9wcm90by5nZXRMb25MYXRGcm9tUG9pbnRfID0gZnVuY3Rpb24gZ2V0TG9uTGF0RnJvbVBvaW50Xyhwb2ludCkge1xuICAgIGlmICghdGhpcy5tYXApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBnZW9tZXRyeSA9IHBvaW50LmdldEdlb21ldHJ5KCk7XG4gICAgdmFyIGNvb3JkcyA9IGdlb21ldHJ5LmdldENvb3JkaW5hdGVzKCk7XG4gICAgdmFyIHByb2plY3Rpb24gPSB0aGlzLm1hcC5nZXRWaWV3KCkuZ2V0UHJvamVjdGlvbigpO1xuICAgIHJldHVybiBvbFByb2oudG9Mb25MYXQoY29vcmRzLCBwcm9qZWN0aW9uKTtcbiAgfTtcblxuICByZXR1cm4gQ29udHJvbGxlcjtcbn0oKTtcbnZhciByb3V0aW5nRmVhdHVyZUNvbXBvbmVudCA9IHtcbiAgY29udHJvbGxlcjogQ29udHJvbGxlcixcbiAgYmluZGluZ3M6IHtcbiAgICAnbWFwJzogJzxuZ2VvUm91dGluZ0ZlYXR1cmVNYXAnLFxuICAgICdmZWF0dXJlJzogJz1uZ2VvUm91dGluZ0ZlYXR1cmVGZWF0dXJlJyxcbiAgICAnZmlsbENvbG9yJzogJzw/bmdlb1JvdXRpbmdGZWF0dXJlRmlsbENvbG9yJyxcbiAgICAnc3Ryb2tlQ29sb3InOiAnPD9uZ2VvUm91dGluZ0ZlYXR1cmVTdHJva2VDb2xvcicsXG4gICAgJ29uQ2hhbmdlJzogJz0/bmdlb1JvdXRpbmdGZWF0dXJlT25DaGFuZ2UnXG4gIH0sXG4gIHRlbXBsYXRlVXJsOiBuZ2VvUm91dGluZ0ZlYXR1cmVUZW1wbGF0ZVVybFxufTtcbm15TW9kdWxlLmNvbXBvbmVudCgnbmdlb1JvdXRpbmdGZWF0dXJlJywgcm91dGluZ0ZlYXR1cmVDb21wb25lbnQpO1xuZXhwb3J0IGRlZmF1bHQgbXlNb2R1bGU7IiwiUm91dGluZ1NlcnZpY2UuJGluamVjdCA9IFtcIiRodHRwXCIsIFwibmdlb1JvdXRpbmdPcHRpb25zXCJdO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5leHBvcnQgZnVuY3Rpb24gUm91dGluZ1NlcnZpY2UoJGh0dHAsIG5nZW9Sb3V0aW5nT3B0aW9ucykge1xuICB0aGlzLiRodHRwXyA9ICRodHRwO1xuICB0aGlzLnJvdXRpbmdPcHRpb25zXyA9IG5nZW9Sb3V0aW5nT3B0aW9ucztcbiAgdGhpcy5uZ2VvT3NybUJhY2tlbmRVcmxfID0gdGhpcy5yb3V0aW5nT3B0aW9uc18uYmFja2VuZFVybCB8fCAnaHR0cHM6Ly9yb3V0ZXIucHJvamVjdC1vc3JtLm9yZy8nO1xuXG4gIGlmICh0aGlzLm5nZW9Pc3JtQmFja2VuZFVybF8uc3Vic3RyKC0xKSAhPT0gJy8nKSB7XG4gICAgdGhpcy5uZ2VvT3NybUJhY2tlbmRVcmxfICs9ICcvJztcbiAgfVxuXG4gIHRoaXMucHJvdG9jb2xWZXJzaW9uXyA9ICd2MSc7XG59XG5cblJvdXRpbmdTZXJ2aWNlLnByb3RvdHlwZS5nZXRSb3V0ZSA9IGZ1bmN0aW9uIChjb29yZGluYXRlcywgY29uZmlnKSB7XG4gIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblxuICBpZiAoIWNvbmZpZy5zZXJ2aWNlKSB7XG4gICAgY29uZmlnLnNlcnZpY2UgPSAncm91dGUnO1xuICB9XG5cbiAgaWYgKCFjb25maWcucHJvZmlsZSkge1xuICAgIGNvbmZpZy5wcm9maWxlID0gJ2Nhcic7XG4gIH1cblxuICB2YXIgdXJsID0gdGhpcy5uZ2VvT3NybUJhY2tlbmRVcmxfO1xuXG4gIGlmIChjb25maWcuaW5zdGFuY2UpIHtcbiAgICB1cmwgKz0gY29uZmlnLmluc3RhbmNlICsgXCIvXCI7XG4gIH1cblxuICB1cmwgKz0gY29uZmlnLnNlcnZpY2UgKyBcIi9cIiArIHRoaXMucHJvdG9jb2xWZXJzaW9uXyArIFwiL1wiICsgY29uZmlnLnByb2ZpbGUgKyBcIi9cIjtcbiAgdmFyIGNvb3JkaW5hdGVTdHJpbmcgPSBjb29yZGluYXRlcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYy5qb2luKCcsJyk7XG4gIH0pLmpvaW4oJzsnKTtcbiAgdXJsICs9IGNvb3JkaW5hdGVTdHJpbmc7XG5cbiAgaWYgKGNvbmZpZy5vcHRpb25zKSB7XG4gICAgdXJsICs9ICc/JztcbiAgICB2YXIgb3B0aW9ucyA9IFtdO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfT2JqZWN0JGtleXMgPSBPYmplY3Qua2V5cyhjb25maWcub3B0aW9ucyk7IF9pIDwgX09iamVjdCRrZXlzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIG9wdGlvbiA9IF9PYmplY3Qka2V5c1tfaV07XG4gICAgICBvcHRpb25zLnB1c2gob3B0aW9uICsgXCI9XCIgKyBjb25maWcub3B0aW9uc1tvcHRpb25dKTtcbiAgICB9XG5cbiAgICB1cmwgKz0gb3B0aW9ucy5qb2luKCcmJyk7XG4gIH1cblxuICByZXR1cm4gdGhpcy4kaHR0cF8uZ2V0KHVybCk7XG59O1xuXG5Sb3V0aW5nU2VydmljZS5wcm90b3R5cGUuZ2V0TmVhcmVzdCA9IGZ1bmN0aW9uIChjb29yZGluYXRlLCBjb25maWcpIHtcbiAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICBjb25maWcuc2VydmljZSA9ICduZWFyZXN0JztcblxuICBpZiAoIWNvbmZpZy5wcm9maWxlKSB7XG4gICAgY29uZmlnLnByb2ZpbGUgPSAnY2FyJztcbiAgfVxuXG4gIHZhciB1cmwgPSB0aGlzLm5nZW9Pc3JtQmFja2VuZFVybF87XG5cbiAgaWYgKGNvbmZpZy5pbnN0YW5jZSkge1xuICAgIHVybCArPSBjb25maWcuaW5zdGFuY2UgKyBcIi9cIjtcbiAgfVxuXG4gIHVybCArPSBjb25maWcuc2VydmljZSArIFwiL1wiICsgdGhpcy5wcm90b2NvbFZlcnNpb25fICsgXCIvXCIgKyBjb25maWcucHJvZmlsZSArIFwiL1wiO1xuICB2YXIgY29vcmRpbmF0ZVN0cmluZyA9IGNvb3JkaW5hdGUuam9pbignLCcpO1xuICB1cmwgKz0gY29vcmRpbmF0ZVN0cmluZztcblxuICBpZiAoY29uZmlnLm9wdGlvbnMpIHtcbiAgICB1cmwgKz0gJz8nO1xuICAgIHZhciBvcHRpb25zID0gW107XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwLCBfT2JqZWN0JGtleXMyID0gT2JqZWN0LmtleXMoY29uZmlnLm9wdGlvbnMpOyBfaTIgPCBfT2JqZWN0JGtleXMyLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBvcHRpb24gPSBfT2JqZWN0JGtleXMyW19pMl07XG4gICAgICBvcHRpb25zLnB1c2gob3B0aW9uICsgXCI9XCIgKyBjb25maWcub3B0aW9uc1tvcHRpb25dKTtcbiAgICB9XG5cbiAgICB1cmwgKz0gb3B0aW9ucy5qb2luKCcmJyk7XG4gIH1cblxuICByZXR1cm4gdGhpcy4kaHR0cF8uZ2V0KHVybCk7XG59O1xuXG52YXIgbXlNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnbmdlb1JvdXRpbmdTZXJ2aWNlJywgW10pO1xubXlNb2R1bGUuc2VydmljZSgnbmdlb1JvdXRpbmdTZXJ2aWNlJywgUm91dGluZ1NlcnZpY2UpO1xuZXhwb3J0IGRlZmF1bHQgbXlNb2R1bGU7IiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgbmdlb1JvdXRpbmdSb3V0aW5nQ29tcG9uZW50IGZyb20gJ25nZW8vcm91dGluZy9Sb3V0aW5nQ29tcG9uZW50JztcbmltcG9ydCAnLi9yb3V0aW5nLnNjc3MnO1xuZXhwb3J0IGRlZmF1bHQgYW5ndWxhci5tb2R1bGUoJ25nZW9Sb3V0aW5nTW9kdWxlJywgW25nZW9Sb3V0aW5nUm91dGluZ0NvbXBvbmVudC5uYW1lXSk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmopIHtcbm9iaiB8fCAob2JqID0ge30pO1xudmFyIF9fdCwgX19wID0gJyc7XG53aXRoIChvYmopIHtcbl9fcCArPSAnPGRpdiBjbGFzcz1cIm5nZW8tbm9taW5hdGltLWlucHV0XCI+XFxuICA8aW5wdXRcXG4gICAgdHlwZT1cInRleHRcIlxcbiAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXFxuICAgIHBsYWNlaG9sZGVyPVwie3skY3RybC5wbGFjZWhvbGRlcn19XCJcXG4gICAgbmctbW9kZWw9XCIkY3RybC5pbnB1dFZhbHVlXCJcXG4gICAgbmdlby1zZWFyY2g9XCIkY3RybC5vcHRpb25zXCJcXG4gICAgbmdlby1zZWFyY2gtZGF0YXNldHM9XCIkY3RybC5kYXRhc2V0c1wiXFxuICAgIG5nZW8tc2VhcmNoLWxpc3RlbmVycz1cIiRjdHJsLmxpc3RlbmVyc1wiXFxuICAvPlxcbjwvZGl2Plxcbic7XG5cbn1cbnJldHVybiBfX3Bcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaikge1xub2JqIHx8IChvYmogPSB7fSk7XG52YXIgX190LCBfX3AgPSAnJztcbndpdGggKG9iaikge1xuX19wICs9ICc8ZGl2IGNsYXNzPVwibmdlby1yb3V0aW5nXCI+XFxuICA8ZGl2IGNsYXNzPVwibmdlby1yb3V0aW5nLXN0YXJ0IGZvcm0tZ3JvdXBcIj5cXG4gICAgPG5nZW8tcm91dGluZy1mZWF0dXJlXFxuICAgICAgbmdlby1yb3V0aW5nLWZlYXR1cmUtbWFwPVwiJGN0cmwubWFwXCJcXG4gICAgICBuZ2VvLXJvdXRpbmctZmVhdHVyZS1mZWF0dXJlPVwiJGN0cmwuc3RhcnRGZWF0dXJlX1wiXFxuICAgICAgbmdlby1yb3V0aW5nLWZlYXR1cmUtZmlsbC1jb2xvcj1cIiRjdHJsLmNvbG9ycy5zdGFydEZpbGxcIlxcbiAgICAgIG5nZW8tcm91dGluZy1mZWF0dXJlLXN0cm9rZS1jb2xvcj1cIiRjdHJsLmNvbG9ycy5zdGFydFN0cm9rZVwiXFxuICAgICAgbmdlby1yb3V0aW5nLWZlYXR1cmUtb24tY2hhbmdlPVwiJGN0cmwuaGFuZGxlQ2hhbmdlXCJcXG4gICAgPlxcbiAgICA8L25nZW8tcm91dGluZy1mZWF0dXJlPlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2IGNsYXNzPVwibmdlby1yb3V0aW5nLXZpYXMgZm9ybS1ncm91cFwiIG5nLXJlcGVhdD1cIihpbmRleCwgdmlhKSBpbiAkY3RybC52aWFBcnJheVwiPlxcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1pbmxpbmVcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxcbiAgICAgICAgPG5nZW8tcm91dGluZy1mZWF0dXJlXFxuICAgICAgICAgIG5nZW8tcm91dGluZy1mZWF0dXJlLW1hcD1cIiRjdHJsLm1hcFwiXFxuICAgICAgICAgIG5nZW8tcm91dGluZy1mZWF0dXJlLWZlYXR1cmU9XCJ2aWEuZmVhdHVyZVwiXFxuICAgICAgICAgIG5nZW8tcm91dGluZy1mZWF0dXJlLWZpbGwtY29sb3I9XCIkY3RybC5jb2xvcnMudmlhRmlsbFwiXFxuICAgICAgICAgIG5nZW8tcm91dGluZy1mZWF0dXJlLXN0cm9rZS1jb2xvcj1cIiRjdHJsLmNvbG9ycy52aWFTdHJva2VcIlxcbiAgICAgICAgICBuZ2VvLXJvdXRpbmctZmVhdHVyZS1vbi1jaGFuZ2U9XCIkY3RybC5oYW5kbGVDaGFuZ2VcIlxcbiAgICAgICAgPlxcbiAgICAgICAgPC9uZ2VvLXJvdXRpbmctZmVhdHVyZT5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBwcmltZSBkZWxldGUtdmlhXCIgbmctY2xpY2s9XCIkY3RybC5kZWxldGVWaWEoaW5kZXgpXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9zcGFuPlxcbiAgICAgIDwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcblxcbiAgPGRpdiBjbGFzcz1cIm5nZW8tcm91dGluZy1kZXN0aW5hdGlvbiBmb3JtLWdyb3VwXCI+XFxuICAgIDxuZ2VvLXJvdXRpbmctZmVhdHVyZVxcbiAgICAgIG5nZW8tcm91dGluZy1mZWF0dXJlLW1hcD1cIiRjdHJsLm1hcFwiXFxuICAgICAgbmdlby1yb3V0aW5nLWZlYXR1cmUtZmVhdHVyZT1cIiRjdHJsLnRhcmdldEZlYXR1cmVfXCJcXG4gICAgICBuZ2VvLXJvdXRpbmctZmVhdHVyZS1maWxsLWNvbG9yPVwiJGN0cmwuY29sb3JzLmRlc3RpbmF0aW9uRmlsbFwiXFxuICAgICAgbmdlby1yb3V0aW5nLWZlYXR1cmUtc3Ryb2tlLWNvbG9yPVwiJGN0cmwuY29sb3JzLmRlc3RpbmF0aW9uU3Ryb2tlXCJcXG4gICAgICBuZ2VvLXJvdXRpbmctZmVhdHVyZS1vbi1jaGFuZ2U9XCIkY3RybC5oYW5kbGVDaGFuZ2VcIlxcbiAgICA+XFxuICAgIDwvbmdlby1yb3V0aW5nLWZlYXR1cmU+XFxuICA8L2Rpdj5cXG5cXG4gIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGZpbGxcIj5cXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gcHJpbWVcIiBuZy1jbGljaz1cIiRjdHJsLmNsZWFyUm91dGUoKVwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L3NwYW4+IDxzcGFuIHRyYW5zbGF0ZT5DbGVhcjwvc3Bhbj5cXG4gICAgPC9idXR0b24+XFxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIHByaW1lXCIgbmctY2xpY2s9XCIkY3RybC5yZXZlcnNlUm91dGUoKVwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtZXhjaGFuZ2UtYWx0XCI+PC9zcGFuPiA8c3BhbiB0cmFuc2xhdGU+UmV2ZXJzZTwvc3Bhbj5cXG4gICAgPC9idXR0b24+XFxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIHByaW1lXCIgbmctY2xpY2s9XCIkY3RybC5hZGRWaWEoKVwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvc3Bhbj4gPHNwYW4gdHJhbnNsYXRlPkFkZCB2aWE8L3NwYW4+XFxuICAgIDwvYnV0dG9uPlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cXG5cXG4gIDxkaXYgbmctaWY9XCIkY3RybC5yb3V0aW5nUHJvZmlsZXMubGVuZ3RoID4gMVwiPlxcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxcbiAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1mb3JtLWxhYmVsIGNvbC1tZC00XCIgdHJhbnNsYXRlPlByb2ZpbGU8L2xhYmVsPlxcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOFwiPlxcbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5nLW1vZGVsPVwiJGN0cmwuc2VsZWN0ZWRSb3V0aW5nUHJvZmlsZVwiPlxcbiAgICAgICAgICA8b3B0aW9uIG5nLXJlcGVhdD1cInByb2ZpbGUgaW4gJGN0cmwucm91dGluZ1Byb2ZpbGVzXCIgbmctdmFsdWU9XCJwcm9maWxlXCI+e3twcm9maWxlLmxhYmVsfX08L29wdGlvbj5cXG4gICAgICAgIDwvc2VsZWN0PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcblxcbiAgPGRpdiBjbGFzcz1cIm5nZW8tcm91dGluZy1lcnJvciBmb3JtLWdyb3VwIGNsZWFyZml4XCIgbmctaGlkZT1cIiRjdHJsLmVycm9yTWVzc2FnZSA9PT0gXFwnXFwnXCI+XFxuICAgIHt7JGN0cmwuZXJyb3JNZXNzYWdlfX1cXG4gIDwvZGl2PlxcblxcbiAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XFxuXFxuICA8ZGl2IG5nLWhpZGU9XCIkY3RybC5yb3V0ZUR1cmF0aW9uID09PSBudWxsICYmICRjdHJsLnJvdXRlRGlzdGFuY2UgPD0gMFwiPlxcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxcbiAgICAgICAgPHN0cm9uZyB0cmFuc2xhdGU+Um91dGUgc3RhdGlzdGljczwvc3Ryb25nPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiIG5nLWhpZGU9XCIkY3RybC5yb3V0ZUR1cmF0aW9uID09PSBudWxsXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IHRleHQtcmlnaHRcIiB0cmFuc2xhdGU+RHVyYXRpb248L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj57eyRjdHJsLnJvdXRlRHVyYXRpb24gfCBuZ2VvRHVyYXRpb259fTwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiIG5nLWhpZGU9XCIkY3RybC5yb3V0ZURpc3RhbmNlIDw9IDBcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgdGV4dC1yaWdodFwiIHRyYW5zbGF0ZT5EaXN0YW5jZTwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOFwiPnt7JGN0cmwucm91dGVEaXN0YW5jZSB8IG5nZW9Vbml0UHJlZml4OlxcJ21cXCd9fTwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2Plxcbic7XG5cbn1cbnJldHVybiBfX3Bcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaikge1xub2JqIHx8IChvYmogPSB7fSk7XG52YXIgX190LCBfX3AgPSAnJztcbndpdGggKG9iaikge1xuX19wICs9ICc8ZGl2IGNsYXNzPVwibmdlby1yb3V0aW5nLWZlYXR1cmVcIj5cXG4gIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxcbiAgICA8bmdlby1ub21pbmF0aW0taW5wdXRcXG4gICAgICBuZ2VvLW5vbWluYXRpbS1pbnB1dC12YWx1ZT1cIiRjdHJsLmZlYXR1cmVMYWJlbFwiXFxuICAgICAgbmdlby1ub21pbmF0aW0taW5wdXQtcGxhY2Vob2xkZXI9XCJ7e1xcJ1NlYXJjaC4uLlxcJyB8IHRyYW5zbGF0ZX19XCJcXG4gICAgICBuZ2VvLW5vbWluYXRpbS1pbnB1dC1vbi1zZWxlY3Q9XCIkY3RybC5vblNlbGVjdFwiXFxuICAgID5cXG4gICAgPC9uZ2VvLW5vbWluYXRpbS1pbnB1dD5cXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uIGJ0blwiIG5nLWNsaWNrPVwiJGN0cmwuc2V0KClcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLW1hcC1tYXJrZXJcIj48L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuJztcblxufVxucmV0dXJuIF9fcFxufSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaFBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDNVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9