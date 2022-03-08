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
/******/ 		"displayquerygrid": 0
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
/******/ 	deferredModules.push([3,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contribs/gmf/examples/displayquerygrid.css":
/*!****************************************************!*\
  !*** ./contribs/gmf/examples/displayquerygrid.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./contribs/gmf/examples/displayquerygrid.js":
/*!***************************************************!*\
  !*** ./contribs/gmf/examples/displayquerygrid.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _displayquerygrid_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayquerygrid.css */ "./contribs/gmf/examples/displayquerygrid.css");
/* harmony import */ var _displayquerygrid_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_displayquerygrid_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gmf_hidden_inc_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gmf-hidden.inc.css */ "./contribs/gmf/examples/gmf-hidden.inc.css");
/* harmony import */ var _gmf_hidden_inc_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gmf_hidden_inc_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gmf_datasource_Manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gmf/datasource/Manager */ "./src/datasource/Manager.js");
/* harmony import */ var gmf_layertree_gmfComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gmf/layertree/gmfComponent */ "./src/layertree/gmfComponent.js");
/* harmony import */ var gmf_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gmf/map/component */ "./src/map/component.js");
/* harmony import */ var ngeo_map_FeatureOverlayMgr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngeo/map/FeatureOverlayMgr */ "./src/map/FeatureOverlayMgr.ts");
/* harmony import */ var gmf_query_gridComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gmf/query/gridComponent */ "./src/query/gridComponent.js");
/* harmony import */ var gmf_theme_Manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gmf/theme/Manager */ "./src/theme/Manager.js");
/* harmony import */ var gmf_theme_Themes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gmf/theme/Themes */ "./src/theme/Themes.js");
/* harmony import */ var ngeo_grid_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngeo/grid/module */ "./src/grid/module.js");
/* harmony import */ var ngeo_map_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngeo/map/module */ "./src/map/module.js");
/* harmony import */ var ngeo_misc_btnComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngeo/misc/btnComponent */ "./src/misc/btnComponent.js");
/* harmony import */ var ngeo_proj_EPSG_2056__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngeo/proj/EPSG_2056 */ "./src/proj/EPSG_2056.js");
/* harmony import */ var ngeo_query_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngeo/query/component */ "./src/query/component.js");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./options */ "./contribs/gmf/examples/options.js");
MainController.$inject = ["gmfThemes", "gmfDataSourcesManager", "gmfThemeManager", "defaultTheme"];
QueryresultController.$inject = ["ngeoQueryResult"];




















var myModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('gmfapp', ['gettext', gmf_datasource_Manager__WEBPACK_IMPORTED_MODULE_3__["default"].name, gmf_layertree_gmfComponent__WEBPACK_IMPORTED_MODULE_4__["default"].name, gmf_map_component__WEBPACK_IMPORTED_MODULE_5__["default"].name, gmf_query_gridComponent__WEBPACK_IMPORTED_MODULE_7__["default"].name, gmf_theme_Manager__WEBPACK_IMPORTED_MODULE_8__["default"].name, gmf_theme_Themes__WEBPACK_IMPORTED_MODULE_9__["default"].name, ngeo_grid_module__WEBPACK_IMPORTED_MODULE_10__["default"].name, ngeo_map_module__WEBPACK_IMPORTED_MODULE_11__["default"].name, ngeo_misc_btnComponent__WEBPACK_IMPORTED_MODULE_12__["default"].name, ngeo_query_component__WEBPACK_IMPORTED_MODULE_14__["default"].name]);
var queryresultComponent = {
  controller: 'gmfappQueryresultController',
  template: __webpack_require__(/*! ./partials/queryresult.html */ "./contribs/gmf/examples/partials/queryresult.html")
};
myModule.component('gmfappQueryresult', queryresultComponent);

function QueryresultController(ngeoQueryResult) {
  this.result = ngeoQueryResult;
}

myModule.controller('gmfappQueryresultController', QueryresultController);

function MainController(gmfThemes, gmfDataSourcesManager, gmfThemeManager, defaultTheme) {
  var _this = this;

  gmfThemes.loadThemes();
  this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_15__["default"]({
    layers: [new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_17__["default"]({
      source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_18__["default"]()
    })],
    view: new ol_View__WEBPACK_IMPORTED_MODULE_16__["default"]({
      projection: ngeo_proj_EPSG_2056__WEBPACK_IMPORTED_MODULE_13__["default"],
      resolutions: [200, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5],
      center: [2537635, 1152640],
      zoom: 3
    })
  });
  this.dimensions = {};
  gmfDataSourcesManager.setDatasourceMap(this.map);
  gmfDataSourcesManager.setDimensions(this.dimensions);
  this.queryActive = true;
  this.themes = undefined;
  this.selectedTheme = null;

  this.updateTheme = function () {
    gmfThemeManager.addTheme(this.selectedTheme);
  };

  this.queryGridActive = true;
  gmfThemes.getThemesObject().then(function (themes) {
    if (themes) {
      _this.themes = themes;
      themes.forEach(function (theme) {
        if (theme.name === defaultTheme) {
          _this.selectedTheme = theme;
          return;
        }
      });
    }
  });
  ngeo_map_FeatureOverlayMgr__WEBPACK_IMPORTED_MODULE_6__["default"].init(this.map);
}

myModule.controller('MainController', MainController);
myModule.constant('gmfDisplayQueryGridOptions', {
  featuresStyle: {
    fill: {
      color: [255, 170, 0, 0.6]
    },
    circle: {
      fill: {
        color: [255, 170, 0, 0.6]
      },
      radius: 5,
      stroke: {
        color: [255, 170, 0, 1],
        width: 2
      }
    },
    stroke: {
      color: [255, 170, 0, 1],
      width: 2
    }
  }
});
Object(_options__WEBPACK_IMPORTED_MODULE_19__["default"])(myModule);
/* harmony default export */ __webpack_exports__["default"] = (myModule);

/***/ }),

/***/ "./src/query/gridComponent.html":
/*!**************************************!*\
  !*** ./src/query/gridComponent.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="gmf-displayquerygrid panel" ng-show="ctrl.active">\n  <div class="close" ng-click="ctrl.clear()">&times;</div>\n\n  <ul class="nav nav-pills" role="tablist">\n    <li\n      class="nav-item"\n      ng-repeat="gridSource in ctrl.getGridSources() track by gridSource.source.label"\n      role="presentation"\n      ng-click="ctrl.selectTab(gridSource)"\n    >\n      <a\n        class="nav-link"\n        href="#{{ctrl.escapeValue(gridSource.source.label)}}"\n        ng-class="{\'active\' : ctrl.isSelected(gridSource)}"\n        data-target="#{{ctrl.escapeValue(gridSource.source.label)}}"\n        aria-controls="{{ctrl.escapeValue(gridSource.source.label)}}"\n        role="tab"\n        data-toggle="tab"\n      >\n        <span> {{gridSource.source.label | translate}} ({{gridSource.source.features.length}}) </span>\n      </a>\n    </li>\n  </ul>\n\n  <div class="tab-content">\n    <div\n      ng-repeat="gridSource in ctrl.getGridSources() track by gridSource.source.label"\n      role="tabpanel"\n      class="tab-pane"\n      ng-class="{\'active\' : ctrl.isSelected(gridSource)}"\n      id="{{ctrl.escapeValue(gridSource.source.label)}}"\n    >\n      <ngeo-grid ngeo-grid-configuration="gridSource.configuration"> </ngeo-grid>\n    </div>\n    <div class="container-fluid">\n      <div\n        ng-show="!ctrl.pending && ctrl.getActiveGridSource() && ctrl.getActiveGridSource().configuration !== null"\n        class="row"\n      >\n        <div class="col-md-5 my-auto">\n          <span ng-if="ctrl.hasOneWithTooManyResults_()" class="gmf-query-grid-too-many text-warning"\n            >{{\'Only\' | translate}} {{ctrl.sumOfFeatures}} {{\'of\' | translate}} {{ctrl.sumOfAvailableResults}}\n            {{\'results displayed, as the maximum number is reached. Please refine your query.\' | translate\n            }}</span\n          >\n        </div>\n        <div class="col-md-7" class="pull-right">\n          <ul class="nav justify-content-end">\n            <li class="ng-hide" ng-show="ctrl.isOneSelected()">\n              <div class="btn btn-sm ng-binding">\n                {{ctrl.getSelectedRowCount()}} <span translate>selected element(s)</span>\n              </div>\n            </li>\n\n            <li ng-show="ctrl.isOneSelected()" class="ng-hide">\n              <button\n                class="btn btn-link btn-sm"\n                title="{{\'Zoom to selection\' | translate}}"\n                ng-click="ctrl.zoomToSelection()"\n              >\n                <i class="fa fa-search-plus"></i> <span translate>Zoom to</span>\n              </button>\n            </li>\n\n            <li ng-show="ctrl.isOneSelected()" class="ng-hide">\n              <button\n                class="btn btn-link btn-sm"\n                title="{{\'Export selection as CSV\' | translate}}"\n                ng-click="ctrl.downloadCsv()"\n              >\n                <i class="fa fa-download"></i> <span translate>Export as CSV</span>\n              </button>\n            </li>\n\n            <li class="dropdown">\n              <button\n                type="button"\n                class="dropup btn btn-default btn-sm dropdown-toggle"\n                data-toggle="dropdown"\n                aria-haspopup="true"\n                aria-expanded="false"\n              >\n                <span translate>Select</span>\n              </button>\n              <ul class="dropdown-menu" aria-labelledby="dLabel">\n                <li>\n                  <a href="" ng-click="ctrl.selectAll()" translate>All</a>\n                </li>\n\n                <li>\n                  <a href="" ng-click="ctrl.unselectAll()" translate>None</a>\n                </li>\n\n                <li>\n                  <a href="" ng-click="ctrl.invertSelection()" translate>Reverse selection</a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <div ng-show="ctrl.pending" class="spinner-grid">\n      <i class="fa fa-spin"> ' +
((__t = (__webpack_require__(/*! gmf/icons/spinner.svg?viewbox&height=3rem */ "./src/icons/spinner.svg?viewbox&height=3rem"))) == null ? '' : __t) +
' </i>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./src/query/gridComponent.js":
/*!************************************!*\
  !*** ./src/query/gridComponent.js ***!
  \************************************/
/*! exports provided: QueryGridController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryGridController", function() { return QueryGridController; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_download_Csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/download/Csv */ "./src/download/Csv.ts");
/* harmony import */ var ngeo_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/grid/component */ "./src/grid/component.js");
/* harmony import */ var ngeo_grid_Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/grid/Config */ "./src/grid/Config.js");
/* harmony import */ var ngeo_map_FeatureOverlayMgr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/map/FeatureOverlayMgr */ "./src/map/FeatureOverlayMgr.ts");
/* harmony import */ var ngeo_query_MapQuerent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/query/MapQuerent */ "./src/query/MapQuerent.js");
/* harmony import */ var ol_Collection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/Collection */ "./node_modules/ol/Collection.js");
/* harmony import */ var ol_extent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/extent */ "./node_modules/ol/extent.js");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ngeo_options__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngeo/options */ "./src/options.js");
/* harmony import */ var gmfapi_store_panels__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gmfapi/store/panels */ "./srcapi/store/panels.ts");
/* harmony import */ var bootstrap_js_src_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap/js/src/dropdown */ "./node_modules/bootstrap/js/src/dropdown.js");
QueryGridController.$inject = ["$scope", "ngeoQueryResult", "ngeoMapQuerent", "$timeout", "ngeoQueryOptions", "gmfCsvFilename", "$element", "gmfDisplayQueryGridOptions"];












var myModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('gmfQueryGridComponent', [ngeo_grid_component__WEBPACK_IMPORTED_MODULE_2__["default"].name, ngeo_query_MapQuerent__WEBPACK_IMPORTED_MODULE_5__["default"].name]);
myModule.value('gmfDisplayquerygridTemplateUrl', function ($element, $attrs) {
  var templateUrl = $attrs.gmfDisplayquerygridTemplateurl;
  return templateUrl !== undefined ? templateUrl : 'gmf/query/gridComponent';
});
myModule.run(["$templateCache", function ($templateCache) {
  $templateCache.put('gmf/query/gridComponent', __webpack_require__(/*! ./gridComponent.html */ "./src/query/gridComponent.html"));
}]);
gmfDisplayquerygridTemplateUrl.$inject = ["$element", "$attrs", "gmfDisplayquerygridTemplateUrl"];

function gmfDisplayquerygridTemplateUrl($element, $attrs, gmfDisplayquerygridTemplateUrl) {
  return gmfDisplayquerygridTemplateUrl($element, $attrs);
}

var queryGridComponent = {
  controller: 'GmfDisplayquerygridController as ctrl',
  bindings: {
    'active': '=?gmfDisplayquerygridActive',
    'getMapFn': '&gmfDisplayquerygridMap'
  },
  templateUrl: gmfDisplayquerygridTemplateUrl
};
myModule.component('gmfDisplayquerygrid', queryGridComponent);
function QueryGridController($scope, ngeoQueryResult, ngeoMapQuerent, $timeout, ngeoQueryOptions, gmfCsvFilename, $element, gmfDisplayQueryGridOptions) {
  var _this = this;

  this.options = gmfDisplayQueryGridOptions;
  this.$scope_ = $scope;
  this.$timeout_ = $timeout;
  this.ngeoQueryResult = ngeoQueryResult;
  this.ngeoMapQuerent_ = ngeoMapQuerent;
  this.ngeoCsvDownload_ = ngeo_download_Csv__WEBPACK_IMPORTED_MODULE_1__["default"];
  this.$element_ = $element;
  this.maxResults = ngeoQueryOptions.limit !== undefined ? ngeoQueryOptions.limit : 50;
  this.active = false;
  this.pending = false;
  this.gridSources = {};
  this.loadedGridSources = [];
  this.selectedTab = null;
  this.featuresForSources_ = {};
  this.features_ = new ol_Collection__WEBPACK_IMPORTED_MODULE_6__["default"]();
  this.highlightFeatures_ = new ol_Collection__WEBPACK_IMPORTED_MODULE_6__["default"]();
  this.filename_ = gmfCsvFilename;
  this.map_ = null;
  this.sumOfFeatures = 0;
  this.sumOfAvailableResults = 0;
  this.$scope_.$watchCollection(function () {
    return ngeoQueryResult;
  }, function (newQueryResult, oldQueryResult) {
    if (ngeoQueryResult.pending) {
      _this.active = true;
      _this.pending = true;
      gmfapi_store_panels__WEBPACK_IMPORTED_MODULE_10__["default"].openFooterPanel('queryresult', {
        state: true,
        noError: true
      });
    }

    if (newQueryResult !== oldQueryResult) {
      _this.updateData_();
    }
  });
  this.unregisterSelectWatcher_ = null;
  this.getMapFn = null;
}

QueryGridController.prototype.$onInit = function () {
  if (!this.getMapFn) {
    throw new Error('Missing getMapFn');
  }

  var featuresOverlay = ngeo_map_FeatureOverlayMgr__WEBPACK_IMPORTED_MODULE_4__["default"].getFeatureOverlay();
  featuresOverlay.setFeatures(this.features_);
  featuresOverlay.setStyle(Object(ngeo_options__WEBPACK_IMPORTED_MODULE_9__["buildStyle"])(this.options.featuresStyle));
  var highlightFeaturesOverlay = ngeo_map_FeatureOverlayMgr__WEBPACK_IMPORTED_MODULE_4__["default"].getFeatureOverlay();
  highlightFeaturesOverlay.setFeatures(this.highlightFeatures_);
  var highlightFeatureStyle = Object(ngeo_options__WEBPACK_IMPORTED_MODULE_9__["buildStyle"])(this.options.selectedFeatureStyle);
  highlightFeaturesOverlay.setStyle(highlightFeatureStyle);
  var mapFn = this.getMapFn;

  if (mapFn) {
    var map = mapFn();

    if (!(map instanceof ol_Map__WEBPACK_IMPORTED_MODULE_8__["default"])) {
      throw new Error('Wrong map type');
    }

    this.map_ = map;
  }
};

QueryGridController.prototype.getGridSources = function () {
  var _this2 = this;

  return this.loadedGridSources.map(function (sourceLabel) {
    return _this2.gridSources[sourceLabel];
  });
};

QueryGridController.prototype.updateData_ = function () {
  var _this3 = this;

  if ((this.ngeoQueryResult.pending || this.ngeoQueryResult.total === 0) && !this.hasOneWithTooManyResults_()) {
    var oldActive = this.active;
    this.clear();

    if (oldActive) {
      this.active = this.ngeoQueryResult.pending;
      gmfapi_store_panels__WEBPACK_IMPORTED_MODULE_10__["default"].openFooterPanel('queryresult', {
        state: this.active
      });
      this.pending = this.ngeoQueryResult.pending;
    }

    return;
  }

  this.sumOfAvailableResults = 0;
  this.sumOfFeatures = 0;
  var countedSources = [];
  this.ngeoQueryResult.sources.forEach(function (source) {
    if (!countedSources.includes(source.label)) {
      _this3.sumOfFeatures += source.features.length;
    }

    if (!source.requestPartners || !source.requestPartners.some(function (label) {
      return countedSources.includes(label);
    })) {
      _this3.sumOfAvailableResults += source.totalFeatureCount;
    }

    countedSources.push(source.label);
  });
  this.active = true;
  gmfapi_store_panels__WEBPACK_IMPORTED_MODULE_10__["default"].openFooterPanel('queryresult', {
    state: true
  });
  this.pending = false;
  var sources = this.ngeoQueryResult.sources;

  if (Object.keys(this.options.mergeTabs || {}).length > 0) {
    sources = this.getMergedSources_(sources);
  }

  sources.forEach(function (source) {
    if (source.tooManyResults && source.features.length === 0) {
      _this3.makeGrid_(null, source);
    } else {
      source.id = _this3.escapeValue(source.id);
      var features = source.features;

      if (features.length > 0) {
        _this3.collectData_(source);
      }
    }
  });

  if (this.loadedGridSources.length === 0) {
    this.active = false;
    gmfapi_store_panels__WEBPACK_IMPORTED_MODULE_10__["default"].openFooterPanel('queryresult', {
      state: false,
      noError: true
    });
    return;
  }

  if (this.selectedTab === null || !("" + this.selectedTab in this.gridSources)) {
    this.$timeout_(function () {
      var firstSourceId = _this3.loadedGridSources[0];

      _this3.selectTab(_this3.gridSources[firstSourceId]);
    }, 0);
  }
};

QueryGridController.prototype.hasOneWithTooManyResults_ = function () {
  return this.ngeoQueryResult.sources.some(function (source) {
    return source.tooManyResults;
  });
};

QueryGridController.prototype.escapeValue = function (value) {
  if (typeof value == 'number') {
    return value;
  } else {
    var toEscape = /[-[\]/{}()*+?.\\^$ |]/g;

    if (value.match(toEscape) !== null) {
      return value.replace(toEscape, '_');
    } else {
      return value;
    }
  }
};

QueryGridController.prototype.isSelected = function (gridSource) {
  return this.selectedTab === gridSource.source.label;
};

QueryGridController.prototype.getMergedSources_ = function (sources) {
  var _this4 = this;

  var allSources = [];
  var mergedSources = {};
  sources.forEach(function (source) {
    var mergedSource = _this4.getMergedSource_(source, mergedSources);

    if (mergedSource === null) {
      allSources.push(source);
    }
  });

  for (var mergedSourceId in mergedSources) {
    allSources.push(mergedSources[mergedSourceId]);
  }

  return allSources;
};

QueryGridController.prototype.getMergedSource_ = function (source, mergedSources) {
  var mergeSourceId = null;

  for (var currentMergeSourceId in this.options.mergeTabs || {}) {
    var sourceLabels = this.options.mergeTabs[currentMergeSourceId];
    var containsSource = sourceLabels.some(function (sourceLabel) {
      return sourceLabel == source.label;
    });

    if (containsSource) {
      mergeSourceId = currentMergeSourceId;
      break;
    }
  }

  if (mergeSourceId === null) {
    return null;
  }

  var newRequest = true;
  var mergeSource;

  if (mergeSourceId in mergedSources) {
    mergeSource = mergedSources[mergeSourceId];

    if (source.requestPartners) {
      newRequest = !source.requestPartners.some(function (label) {
        return mergeSource.mergeComposants.includes(label);
      });
    }

    mergeSource.mergeComposants.push(source.label);
  } else {
    mergeSource = {
      features: [],
      id: mergeSourceId,
      label: mergeSourceId,
      limit: 0,
      pending: false,
      tooManyResults: false,
      mergeComposants: [source.label]
    };
    mergedSources[mergeSourceId] = mergeSource;
  }

  source.features.forEach(function (feature) {
    mergeSource.features.push(feature);
  });
  mergeSource.tooManyResults = mergeSource.tooManyResults || source.tooManyResults;

  if (newRequest) {
    if (source.totalFeatureCount !== undefined) {
      mergeSource.totalFeatureCount = mergeSource.totalFeatureCount !== undefined ? mergeSource.totalFeatureCount + source.totalFeatureCount : source.totalFeatureCount;
    }

    mergeSource.limit += source.limit;
  }

  return mergeSource;
};

QueryGridController.prototype.collectData_ = function (source) {
  var features = source.features;
  var allProperties = [];
  var featureGeometriesNames = [];
  var featuresForSource = {};
  var properties, featureGeometryName;
  features.forEach(function (feature) {
    properties = feature.getProperties();

    if (properties !== undefined) {
      featureGeometryName = feature.getGeometryName();

      if (!featureGeometriesNames.includes(featureGeometryName)) {
        featureGeometriesNames.push(featureGeometryName);
      }

      allProperties.push(properties);
      featuresForSource[Object(ngeo_grid_Config__WEBPACK_IMPORTED_MODULE_3__["getRowUid"])(properties)] = feature;
    }
  });
  this.cleanProperties_(allProperties, featureGeometriesNames);

  if (allProperties.length > 0) {
    var gridCreated = this.makeGrid_(allProperties, source);

    if (gridCreated) {
      this.featuresForSources_["" + source.label] = featuresForSource;
    }
  }
};

QueryGridController.prototype.cleanProperties_ = function (allProperties, featureGeometriesNames) {
  allProperties.forEach(function (properties) {
    featureGeometriesNames.forEach(function (featureGeometryName) {
      delete properties[featureGeometryName];
    });
    delete properties.boundedBy;
    delete properties.ngeo_feature_type_;
  });

  if (this.options.removeEmptyColumns === true) {
    this.removeEmptyColumnsFn_(allProperties);
  }
};

QueryGridController.prototype.removeEmptyColumnsFn_ = function (allProperties) {
  var keysToKeep = [];
  var i, key;

  for (key in allProperties[0]) {
    for (i = 0; i < allProperties.length; i++) {
      if (allProperties[i][key] !== undefined) {
        keysToKeep.push(key);
        break;
      }
    }
  }

  var keyToRemove;
  allProperties.forEach(function (properties) {
    keyToRemove = [];

    for (key in properties) {
      if (!keysToKeep.includes(key)) {
        keyToRemove.push(key);
      }
    }

    keyToRemove.forEach(function (key) {
      delete properties[key];
    });
  });
};

QueryGridController.prototype.makeGrid_ = function (data, source) {
  var sourceLabel = "" + source.label;
  var gridConfig = null;

  if (data !== null) {
    gridConfig = this.getGridConfiguration_(data);

    if (gridConfig === null) {
      return false;
    }
  }

  if (!this.loadedGridSources.includes(sourceLabel)) {
    this.loadedGridSources.push(sourceLabel);
  }

  this.gridSources[sourceLabel] = {
    source: source
  };

  if (gridConfig) {
    this.gridSources[sourceLabel].configuration = gridConfig;
  }

  return true;
};

QueryGridController.prototype.getGridConfiguration_ = function (data) {
  if (!data.length) {
    throw new Error('Missing data');
  }

  var clone = {};
  Object.assign(clone, data[0]);
  delete clone.ol_uid;
  var columns = Object.keys(clone);
  var columnDefs = [];
  columns.forEach(function (column) {
    columnDefs.push({
      name: column
    });
  });

  if (columnDefs.length > 0) {
    return new ngeo_grid_Config__WEBPACK_IMPORTED_MODULE_3__["default"](data, columnDefs);
  } else {
    return null;
  }
};

QueryGridController.prototype.getActiveGridSource = function () {
  if (this.selectedTab === null) {
    return null;
  } else {
    return this.gridSources["" + this.selectedTab];
  }
};

QueryGridController.prototype.clear = function () {
  this.active = false;
  gmfapi_store_panels__WEBPACK_IMPORTED_MODULE_10__["default"].openFooterPanel('queryresult', {
    state: false,
    noError: true
  });
  this.pending = false;
  this.gridSources = {};
  this.loadedGridSources = [];
  this.selectedTab = null;
  this.tooManyResults = false;
  this.features_.clear();
  this.highlightFeatures_.clear();
  this.ngeoMapQuerent_.clear();
  this.featuresForSources_ = {};

  if (this.unregisterSelectWatcher_) {
    this.unregisterSelectWatcher_();
  }
};

QueryGridController.prototype.selectTab = function (gridSource) {
  var _this5 = this;

  var source = gridSource.source;
  this.selectedTab = source.label;

  if (this.unregisterSelectWatcher_) {
    this.unregisterSelectWatcher_();
    this.unregisterSelectWatcher_ = null;
  }

  if (gridSource.configuration !== undefined) {
    this.unregisterSelectWatcher_ = this.$scope_.$watchCollection(function () {
      return gridSource.configuration.selectedRows;
    }, function (newSelected, oldSelectedRows) {
      if (Object.keys(newSelected) !== Object.keys(oldSelectedRows)) {
        _this5.onSelectionChanged_();
      }
    });
  }

  this.updateFeatures_(gridSource);
  this.reflowGrid_();
};

QueryGridController.prototype.reflowGrid_ = function () {
  var id = this.escapeValue(this.selectedTab || '');
  var activePane = this.$element_.find("div.tab-pane#" + id);
  activePane.removeClass('active').addClass('active');
  this.$timeout_(function () {
    activePane.find('div.ngeo-grid-table-container table').trigger('reflow');
  });
};

QueryGridController.prototype.onSelectionChanged_ = function () {
  if (this.selectedTab === null) {
    return;
  }

  var gridSource = this.gridSources["" + this.selectedTab];
  this.updateFeatures_(gridSource);
};

QueryGridController.prototype.updateFeatures_ = function (gridSource) {
  this.features_.clear();
  this.highlightFeatures_.clear();

  if (!gridSource.configuration) {
    return;
  }

  var sourceLabel = "" + gridSource.source.label;
  var featuresForSource = this.featuresForSources_[sourceLabel];
  var selectedRows = gridSource.configuration.selectedRows;

  for (var rowId in featuresForSource) {
    var feature = featuresForSource[rowId];

    if (rowId in selectedRows) {
      this.highlightFeatures_.push(feature);
    } else {
      this.features_.push(feature);
    }
  }
};

QueryGridController.prototype.isOneSelected = function () {
  var source = this.getActiveGridSource();

  if (source === null || source.configuration === null) {
    return false;
  } else {
    return source.configuration.getSelectedCount() > 0;
  }
};

QueryGridController.prototype.getSelectedRowCount = function () {
  var source = this.getActiveGridSource();

  if (source === null || source.configuration === null) {
    return 0;
  } else {
    return source.configuration.getSelectedCount();
  }
};

QueryGridController.prototype.selectAll = function () {
  var source = this.getActiveGridSource();

  if (source !== null) {
    source.configuration.selectAll();
  }
};

QueryGridController.prototype.unselectAll = function () {
  var source = this.getActiveGridSource();

  if (source !== null) {
    source.configuration.unselectAll();
  }
};

QueryGridController.prototype.invertSelection = function () {
  var source = this.getActiveGridSource();

  if (source !== null) {
    source.configuration.invertSelection();
  }
};

QueryGridController.prototype.zoomToSelection = function () {
  if (!this.map_) {
    throw new Error('Missing map');
  }

  var source = this.getActiveGridSource();

  if (source !== null) {
    var extent = ol_extent__WEBPACK_IMPORTED_MODULE_7__["createEmpty"]();
    this.highlightFeatures_.forEach(function (feature) {
      var geometry = feature.getGeometry();

      if (!geometry) {
        throw new Error('Missing geometry');
      }

      ol_extent__WEBPACK_IMPORTED_MODULE_7__["extend"](extent, geometry.getExtent());
    });
    var size = this.map_.getSize();

    if (!size) {
      throw new Error('Missing size');
    }

    this.map_.getView().fit(extent, {
      size: size,
      maxZoom: this.options.maxRecenterZoom
    });
  }
};

QueryGridController.prototype.downloadCsv = function () {
  var source = this.getActiveGridSource();

  if (source !== null) {
    var columnDefs = source.configuration.columnDefs;

    if (!columnDefs) {
      throw new Error('Missing columnDefs');
    }

    var selectedRows = source.configuration.getSelectedRows();
    this.ngeoCsvDownload_.startDownload(selectedRows, columnDefs, this.filename_);
  }
};

myModule.controller('GmfDisplayquerygridController', QueryGridController);
/* harmony default export */ __webpack_exports__["default"] = (myModule);

/***/ }),

/***/ 3:
/*!**************************************************************************************************************************!*\
  !*** multi ./contribs/gmf/examples/common_dependencies.js gmf/mainmodule.js ./contribs/gmf/examples/displayquerygrid.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./contribs/gmf/examples/common_dependencies.js */"./contribs/gmf/examples/common_dependencies.js");
__webpack_require__(/*! gmf/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./contribs/gmf/examples/displayquerygrid.js */"./contribs/gmf/examples/displayquerygrid.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheXF1ZXJ5Z3JpZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9jb250cmlicy9nbWYvZXhhbXBsZXMvZGlzcGxheXF1ZXJ5Z3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlcnkvZ3JpZENvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9xdWVyeS9ncmlkQ29tcG9uZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJkaXNwbGF5cXVlcnlncmlkXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0Ly8gU2luY2UgYWxsIHJlZmVyZW5jZWQgY2h1bmtzIGFyZSBhbHJlYWR5IGluY2x1ZGVkXG4gXHQvLyBpbiB0aGlzIGZpbGUsIHRoaXMgZnVuY3Rpb24gaXMgZW1wdHkgaGVyZS5cbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoKSB7XG4gXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFszLFwiY29tbW9uc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIk1haW5Db250cm9sbGVyLiRpbmplY3QgPSBbXCJnbWZUaGVtZXNcIiwgXCJnbWZEYXRhU291cmNlc01hbmFnZXJcIiwgXCJnbWZUaGVtZU1hbmFnZXJcIiwgXCJkZWZhdWx0VGhlbWVcIl07XG5RdWVyeXJlc3VsdENvbnRyb2xsZXIuJGluamVjdCA9IFtcIm5nZW9RdWVyeVJlc3VsdFwiXTtcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0ICcuL2Rpc3BsYXlxdWVyeWdyaWQuY3NzJztcbmltcG9ydCAnLi9nbWYtaGlkZGVuLmluYy5jc3MnO1xuaW1wb3J0IGdtZkRhdGFzb3VyY2VNYW5hZ2VyIGZyb20gJ2dtZi9kYXRhc291cmNlL01hbmFnZXInO1xuaW1wb3J0IGdtZkxheWVydHJlZUNvbXBvbmVudCBmcm9tICdnbWYvbGF5ZXJ0cmVlL2dtZkNvbXBvbmVudCc7XG5pbXBvcnQgZ21mTWFwQ29tcG9uZW50IGZyb20gJ2dtZi9tYXAvY29tcG9uZW50JztcbmltcG9ydCBuZ2VvTWFwRmVhdHVyZU92ZXJsYXlNZ3IgZnJvbSAnbmdlby9tYXAvRmVhdHVyZU92ZXJsYXlNZ3InO1xuaW1wb3J0IGdtZlF1ZXJ5R3JpZENvbXBvbmVudCBmcm9tICdnbWYvcXVlcnkvZ3JpZENvbXBvbmVudCc7XG5pbXBvcnQgZ21mVGhlbWVNYW5hZ2VyIGZyb20gJ2dtZi90aGVtZS9NYW5hZ2VyJztcbmltcG9ydCBnbWZUaGVtZVRoZW1lcyBmcm9tICdnbWYvdGhlbWUvVGhlbWVzJztcbmltcG9ydCBuZ2VvR3JpZE1vZHVsZSBmcm9tICduZ2VvL2dyaWQvbW9kdWxlJztcbmltcG9ydCBuZ2VvTWFwTW9kdWxlIGZyb20gJ25nZW8vbWFwL21vZHVsZSc7XG5pbXBvcnQgbmdlb01pc2NCdG5Db21wb25lbnQgZnJvbSAnbmdlby9taXNjL2J0bkNvbXBvbmVudCc7XG5pbXBvcnQgRVBTRzIwNTYgZnJvbSAnbmdlby9wcm9qL0VQU0dfMjA1Nic7XG5pbXBvcnQgbmdlb1F1ZXJ5Q29tcG9uZW50IGZyb20gJ25nZW8vcXVlcnkvY29tcG9uZW50JztcbmltcG9ydCBvbE1hcCBmcm9tICdvbC9NYXAnO1xuaW1wb3J0IG9sVmlldyBmcm9tICdvbC9WaWV3JztcbmltcG9ydCBvbExheWVyVGlsZSBmcm9tICdvbC9sYXllci9UaWxlJztcbmltcG9ydCBvbFNvdXJjZU9TTSBmcm9tICdvbC9zb3VyY2UvT1NNJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG52YXIgbXlNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnZ21mYXBwJywgWydnZXR0ZXh0JywgZ21mRGF0YXNvdXJjZU1hbmFnZXIubmFtZSwgZ21mTGF5ZXJ0cmVlQ29tcG9uZW50Lm5hbWUsIGdtZk1hcENvbXBvbmVudC5uYW1lLCBnbWZRdWVyeUdyaWRDb21wb25lbnQubmFtZSwgZ21mVGhlbWVNYW5hZ2VyLm5hbWUsIGdtZlRoZW1lVGhlbWVzLm5hbWUsIG5nZW9HcmlkTW9kdWxlLm5hbWUsIG5nZW9NYXBNb2R1bGUubmFtZSwgbmdlb01pc2NCdG5Db21wb25lbnQubmFtZSwgbmdlb1F1ZXJ5Q29tcG9uZW50Lm5hbWVdKTtcbnZhciBxdWVyeXJlc3VsdENvbXBvbmVudCA9IHtcbiAgY29udHJvbGxlcjogJ2dtZmFwcFF1ZXJ5cmVzdWx0Q29udHJvbGxlcicsXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL3BhcnRpYWxzL3F1ZXJ5cmVzdWx0Lmh0bWwnKVxufTtcbm15TW9kdWxlLmNvbXBvbmVudCgnZ21mYXBwUXVlcnlyZXN1bHQnLCBxdWVyeXJlc3VsdENvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIFF1ZXJ5cmVzdWx0Q29udHJvbGxlcihuZ2VvUXVlcnlSZXN1bHQpIHtcbiAgdGhpcy5yZXN1bHQgPSBuZ2VvUXVlcnlSZXN1bHQ7XG59XG5cbm15TW9kdWxlLmNvbnRyb2xsZXIoJ2dtZmFwcFF1ZXJ5cmVzdWx0Q29udHJvbGxlcicsIFF1ZXJ5cmVzdWx0Q29udHJvbGxlcik7XG5cbmZ1bmN0aW9uIE1haW5Db250cm9sbGVyKGdtZlRoZW1lcywgZ21mRGF0YVNvdXJjZXNNYW5hZ2VyLCBnbWZUaGVtZU1hbmFnZXIsIGRlZmF1bHRUaGVtZSkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIGdtZlRoZW1lcy5sb2FkVGhlbWVzKCk7XG4gIHRoaXMubWFwID0gbmV3IG9sTWFwKHtcbiAgICBsYXllcnM6IFtuZXcgb2xMYXllclRpbGUoe1xuICAgICAgc291cmNlOiBuZXcgb2xTb3VyY2VPU00oKVxuICAgIH0pXSxcbiAgICB2aWV3OiBuZXcgb2xWaWV3KHtcbiAgICAgIHByb2plY3Rpb246IEVQU0cyMDU2LFxuICAgICAgcmVzb2x1dGlvbnM6IFsyMDAsIDEwMCwgNTAsIDIwLCAxMCwgNSwgMi41LCAyLCAxLCAwLjVdLFxuICAgICAgY2VudGVyOiBbMjUzNzYzNSwgMTE1MjY0MF0sXG4gICAgICB6b29tOiAzXG4gICAgfSlcbiAgfSk7XG4gIHRoaXMuZGltZW5zaW9ucyA9IHt9O1xuICBnbWZEYXRhU291cmNlc01hbmFnZXIuc2V0RGF0YXNvdXJjZU1hcCh0aGlzLm1hcCk7XG4gIGdtZkRhdGFTb3VyY2VzTWFuYWdlci5zZXREaW1lbnNpb25zKHRoaXMuZGltZW5zaW9ucyk7XG4gIHRoaXMucXVlcnlBY3RpdmUgPSB0cnVlO1xuICB0aGlzLnRoZW1lcyA9IHVuZGVmaW5lZDtcbiAgdGhpcy5zZWxlY3RlZFRoZW1lID0gbnVsbDtcblxuICB0aGlzLnVwZGF0ZVRoZW1lID0gZnVuY3Rpb24gKCkge1xuICAgIGdtZlRoZW1lTWFuYWdlci5hZGRUaGVtZSh0aGlzLnNlbGVjdGVkVGhlbWUpO1xuICB9O1xuXG4gIHRoaXMucXVlcnlHcmlkQWN0aXZlID0gdHJ1ZTtcbiAgZ21mVGhlbWVzLmdldFRoZW1lc09iamVjdCgpLnRoZW4oZnVuY3Rpb24gKHRoZW1lcykge1xuICAgIGlmICh0aGVtZXMpIHtcbiAgICAgIF90aGlzLnRoZW1lcyA9IHRoZW1lcztcbiAgICAgIHRoZW1lcy5mb3JFYWNoKGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgICBpZiAodGhlbWUubmFtZSA9PT0gZGVmYXVsdFRoZW1lKSB7XG4gICAgICAgICAgX3RoaXMuc2VsZWN0ZWRUaGVtZSA9IHRoZW1lO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgbmdlb01hcEZlYXR1cmVPdmVybGF5TWdyLmluaXQodGhpcy5tYXApO1xufVxuXG5teU1vZHVsZS5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKTtcbm15TW9kdWxlLmNvbnN0YW50KCdnbWZEaXNwbGF5UXVlcnlHcmlkT3B0aW9ucycsIHtcbiAgZmVhdHVyZXNTdHlsZToge1xuICAgIGZpbGw6IHtcbiAgICAgIGNvbG9yOiBbMjU1LCAxNzAsIDAsIDAuNl1cbiAgICB9LFxuICAgIGNpcmNsZToge1xuICAgICAgZmlsbDoge1xuICAgICAgICBjb2xvcjogWzI1NSwgMTcwLCAwLCAwLjZdXG4gICAgICB9LFxuICAgICAgcmFkaXVzOiA1LFxuICAgICAgc3Ryb2tlOiB7XG4gICAgICAgIGNvbG9yOiBbMjU1LCAxNzAsIDAsIDFdLFxuICAgICAgICB3aWR0aDogMlxuICAgICAgfVxuICAgIH0sXG4gICAgc3Ryb2tlOiB7XG4gICAgICBjb2xvcjogWzI1NSwgMTcwLCAwLCAxXSxcbiAgICAgIHdpZHRoOiAyXG4gICAgfVxuICB9XG59KTtcbm9wdGlvbnMobXlNb2R1bGUpO1xuZXhwb3J0IGRlZmF1bHQgbXlNb2R1bGU7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmopIHtcbm9iaiB8fCAob2JqID0ge30pO1xudmFyIF9fdCwgX19wID0gJyc7XG53aXRoIChvYmopIHtcbl9fcCArPSAnPGRpdiBjbGFzcz1cImdtZi1kaXNwbGF5cXVlcnlncmlkIHBhbmVsXCIgbmctc2hvdz1cImN0cmwuYWN0aXZlXCI+XFxuICA8ZGl2IGNsYXNzPVwiY2xvc2VcIiBuZy1jbGljaz1cImN0cmwuY2xlYXIoKVwiPiZ0aW1lczs8L2Rpdj5cXG5cXG4gIDx1bCBjbGFzcz1cIm5hdiBuYXYtcGlsbHNcIiByb2xlPVwidGFibGlzdFwiPlxcbiAgICA8bGlcXG4gICAgICBjbGFzcz1cIm5hdi1pdGVtXCJcXG4gICAgICBuZy1yZXBlYXQ9XCJncmlkU291cmNlIGluIGN0cmwuZ2V0R3JpZFNvdXJjZXMoKSB0cmFjayBieSBncmlkU291cmNlLnNvdXJjZS5sYWJlbFwiXFxuICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXFxuICAgICAgbmctY2xpY2s9XCJjdHJsLnNlbGVjdFRhYihncmlkU291cmNlKVwiXFxuICAgID5cXG4gICAgICA8YVxcbiAgICAgICAgY2xhc3M9XCJuYXYtbGlua1wiXFxuICAgICAgICBocmVmPVwiI3t7Y3RybC5lc2NhcGVWYWx1ZShncmlkU291cmNlLnNvdXJjZS5sYWJlbCl9fVwiXFxuICAgICAgICBuZy1jbGFzcz1cIntcXCdhY3RpdmVcXCcgOiBjdHJsLmlzU2VsZWN0ZWQoZ3JpZFNvdXJjZSl9XCJcXG4gICAgICAgIGRhdGEtdGFyZ2V0PVwiI3t7Y3RybC5lc2NhcGVWYWx1ZShncmlkU291cmNlLnNvdXJjZS5sYWJlbCl9fVwiXFxuICAgICAgICBhcmlhLWNvbnRyb2xzPVwie3tjdHJsLmVzY2FwZVZhbHVlKGdyaWRTb3VyY2Uuc291cmNlLmxhYmVsKX19XCJcXG4gICAgICAgIHJvbGU9XCJ0YWJcIlxcbiAgICAgICAgZGF0YS10b2dnbGU9XCJ0YWJcIlxcbiAgICAgID5cXG4gICAgICAgIDxzcGFuPiB7e2dyaWRTb3VyY2Uuc291cmNlLmxhYmVsIHwgdHJhbnNsYXRlfX0gKHt7Z3JpZFNvdXJjZS5zb3VyY2UuZmVhdHVyZXMubGVuZ3RofX0pIDwvc3Bhbj5cXG4gICAgICA8L2E+XFxuICAgIDwvbGk+XFxuICA8L3VsPlxcblxcbiAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+XFxuICAgIDxkaXZcXG4gICAgICBuZy1yZXBlYXQ9XCJncmlkU291cmNlIGluIGN0cmwuZ2V0R3JpZFNvdXJjZXMoKSB0cmFjayBieSBncmlkU291cmNlLnNvdXJjZS5sYWJlbFwiXFxuICAgICAgcm9sZT1cInRhYnBhbmVsXCJcXG4gICAgICBjbGFzcz1cInRhYi1wYW5lXCJcXG4gICAgICBuZy1jbGFzcz1cIntcXCdhY3RpdmVcXCcgOiBjdHJsLmlzU2VsZWN0ZWQoZ3JpZFNvdXJjZSl9XCJcXG4gICAgICBpZD1cInt7Y3RybC5lc2NhcGVWYWx1ZShncmlkU291cmNlLnNvdXJjZS5sYWJlbCl9fVwiXFxuICAgID5cXG4gICAgICA8bmdlby1ncmlkIG5nZW8tZ3JpZC1jb25maWd1cmF0aW9uPVwiZ3JpZFNvdXJjZS5jb25maWd1cmF0aW9uXCI+IDwvbmdlby1ncmlkPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxcbiAgICAgIDxkaXZcXG4gICAgICAgIG5nLXNob3c9XCIhY3RybC5wZW5kaW5nICYmIGN0cmwuZ2V0QWN0aXZlR3JpZFNvdXJjZSgpICYmIGN0cmwuZ2V0QWN0aXZlR3JpZFNvdXJjZSgpLmNvbmZpZ3VyYXRpb24gIT09IG51bGxcIlxcbiAgICAgICAgY2xhc3M9XCJyb3dcIlxcbiAgICAgID5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNSBteS1hdXRvXCI+XFxuICAgICAgICAgIDxzcGFuIG5nLWlmPVwiY3RybC5oYXNPbmVXaXRoVG9vTWFueVJlc3VsdHNfKClcIiBjbGFzcz1cImdtZi1xdWVyeS1ncmlkLXRvby1tYW55IHRleHQtd2FybmluZ1wiXFxuICAgICAgICAgICAgPnt7XFwnT25seVxcJyB8IHRyYW5zbGF0ZX19IHt7Y3RybC5zdW1PZkZlYXR1cmVzfX0ge3tcXCdvZlxcJyB8IHRyYW5zbGF0ZX19IHt7Y3RybC5zdW1PZkF2YWlsYWJsZVJlc3VsdHN9fVxcbiAgICAgICAgICAgIHt7XFwncmVzdWx0cyBkaXNwbGF5ZWQsIGFzIHRoZSBtYXhpbXVtIG51bWJlciBpcyByZWFjaGVkLiBQbGVhc2UgcmVmaW5lIHlvdXIgcXVlcnkuXFwnIHwgdHJhbnNsYXRlXFxuICAgICAgICAgICAgfX08L3NwYW5cXG4gICAgICAgICAgPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIiBjbGFzcz1cInB1bGwtcmlnaHRcIj5cXG4gICAgICAgICAgPHVsIGNsYXNzPVwibmF2IGp1c3RpZnktY29udGVudC1lbmRcIj5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJuZy1oaWRlXCIgbmctc2hvdz1cImN0cmwuaXNPbmVTZWxlY3RlZCgpXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuIGJ0bi1zbSBuZy1iaW5kaW5nXCI+XFxuICAgICAgICAgICAgICAgIHt7Y3RybC5nZXRTZWxlY3RlZFJvd0NvdW50KCl9fSA8c3BhbiB0cmFuc2xhdGU+c2VsZWN0ZWQgZWxlbWVudChzKTwvc3Bhbj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvbGk+XFxuXFxuICAgICAgICAgICAgPGxpIG5nLXNob3c9XCJjdHJsLmlzT25lU2VsZWN0ZWQoKVwiIGNsYXNzPVwibmctaGlkZVwiPlxcbiAgICAgICAgICAgICAgPGJ1dHRvblxcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tbGluayBidG4tc21cIlxcbiAgICAgICAgICAgICAgICB0aXRsZT1cInt7XFwnWm9vbSB0byBzZWxlY3Rpb25cXCcgfCB0cmFuc2xhdGV9fVwiXFxuICAgICAgICAgICAgICAgIG5nLWNsaWNrPVwiY3RybC56b29tVG9TZWxlY3Rpb24oKVwiXFxuICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoLXBsdXNcIj48L2k+IDxzcGFuIHRyYW5zbGF0ZT5ab29tIHRvPC9zcGFuPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPC9saT5cXG5cXG4gICAgICAgICAgICA8bGkgbmctc2hvdz1cImN0cmwuaXNPbmVTZWxlY3RlZCgpXCIgY2xhc3M9XCJuZy1oaWRlXCI+XFxuICAgICAgICAgICAgICA8YnV0dG9uXFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbVwiXFxuICAgICAgICAgICAgICAgIHRpdGxlPVwie3tcXCdFeHBvcnQgc2VsZWN0aW9uIGFzIENTVlxcJyB8IHRyYW5zbGF0ZX19XCJcXG4gICAgICAgICAgICAgICAgbmctY2xpY2s9XCJjdHJsLmRvd25sb2FkQ3N2KClcIlxcbiAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWRvd25sb2FkXCI+PC9pPiA8c3BhbiB0cmFuc2xhdGU+RXhwb3J0IGFzIENTVjwvc3Bhbj5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvbGk+XFxuXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd25cIj5cXG4gICAgICAgICAgICAgIDxidXR0b25cXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcHVwIGJ0biBidG4tZGVmYXVsdCBidG4tc20gZHJvcGRvd24tdG9nZ2xlXCJcXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXFxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcXG4gICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcXG4gICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgPHNwYW4gdHJhbnNsYXRlPlNlbGVjdDwvc3Bhbj5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cImRMYWJlbFwiPlxcbiAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIG5nLWNsaWNrPVwiY3RybC5zZWxlY3RBbGwoKVwiIHRyYW5zbGF0ZT5BbGw8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuXFxuICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgbmctY2xpY2s9XCJjdHJsLnVuc2VsZWN0QWxsKClcIiB0cmFuc2xhdGU+Tm9uZTwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG5cXG4gICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBuZy1jbGljaz1cImN0cmwuaW52ZXJ0U2VsZWN0aW9uKClcIiB0cmFuc2xhdGU+UmV2ZXJzZSBzZWxlY3Rpb248L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgIDwvdWw+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgbmctc2hvdz1cImN0cmwucGVuZGluZ1wiIGNsYXNzPVwic3Bpbm5lci1ncmlkXCI+XFxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zcGluXCI+ICcgK1xuKChfX3QgPSAocmVxdWlyZSgnZ21mL2ljb25zL3NwaW5uZXIuc3ZnP3ZpZXdib3gmaGVpZ2h0PTNyZW0nKSkpID09IG51bGwgPyAnJyA6IF9fdCkgK1xuJyA8L2k+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuJztcblxufVxucmV0dXJuIF9fcFxufSIsIlF1ZXJ5R3JpZENvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzY29wZVwiLCBcIm5nZW9RdWVyeVJlc3VsdFwiLCBcIm5nZW9NYXBRdWVyZW50XCIsIFwiJHRpbWVvdXRcIiwgXCJuZ2VvUXVlcnlPcHRpb25zXCIsIFwiZ21mQ3N2RmlsZW5hbWVcIiwgXCIkZWxlbWVudFwiLCBcImdtZkRpc3BsYXlRdWVyeUdyaWRPcHRpb25zXCJdO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgZG93bmxvYWRDc3ZTZXJ2aWNlIGZyb20gJ25nZW8vZG93bmxvYWQvQ3N2JztcbmltcG9ydCBuZ2VvR3JpZENvbXBvbmVudCBmcm9tICduZ2VvL2dyaWQvY29tcG9uZW50JztcbmltcG9ydCBuZ2VvR3JpZENvbmZpZywgeyBnZXRSb3dVaWQgfSBmcm9tICduZ2VvL2dyaWQvQ29uZmlnJztcbmltcG9ydCBuZ2VvTWFwRmVhdHVyZU92ZXJsYXlNZ3IgZnJvbSAnbmdlby9tYXAvRmVhdHVyZU92ZXJsYXlNZ3InO1xuaW1wb3J0IG5nZW9RdWVyeU1hcFF1ZXJlbnQgZnJvbSAnbmdlby9xdWVyeS9NYXBRdWVyZW50JztcbmltcG9ydCBvbENvbGxlY3Rpb24gZnJvbSAnb2wvQ29sbGVjdGlvbic7XG5pbXBvcnQgKiBhcyBvbEV4dGVudCBmcm9tICdvbC9leHRlbnQnO1xuaW1wb3J0IG9sTWFwIGZyb20gJ29sL01hcCc7XG5pbXBvcnQgeyBidWlsZFN0eWxlIH0gZnJvbSAnbmdlby9vcHRpb25zJztcbmltcG9ydCBwYW5lbHMgZnJvbSAnZ21mYXBpL3N0b3JlL3BhbmVscyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9zcmMvZHJvcGRvd24nO1xudmFyIG15TW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2dtZlF1ZXJ5R3JpZENvbXBvbmVudCcsIFtuZ2VvR3JpZENvbXBvbmVudC5uYW1lLCBuZ2VvUXVlcnlNYXBRdWVyZW50Lm5hbWVdKTtcbm15TW9kdWxlLnZhbHVlKCdnbWZEaXNwbGF5cXVlcnlncmlkVGVtcGxhdGVVcmwnLCBmdW5jdGlvbiAoJGVsZW1lbnQsICRhdHRycykge1xuICB2YXIgdGVtcGxhdGVVcmwgPSAkYXR0cnMuZ21mRGlzcGxheXF1ZXJ5Z3JpZFRlbXBsYXRldXJsO1xuICByZXR1cm4gdGVtcGxhdGVVcmwgIT09IHVuZGVmaW5lZCA/IHRlbXBsYXRlVXJsIDogJ2dtZi9xdWVyeS9ncmlkQ29tcG9uZW50Jztcbn0pO1xubXlNb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2dtZi9xdWVyeS9ncmlkQ29tcG9uZW50JywgcmVxdWlyZSgnLi9ncmlkQ29tcG9uZW50Lmh0bWwnKSk7XG59XSk7XG5nbWZEaXNwbGF5cXVlcnlncmlkVGVtcGxhdGVVcmwuJGluamVjdCA9IFtcIiRlbGVtZW50XCIsIFwiJGF0dHJzXCIsIFwiZ21mRGlzcGxheXF1ZXJ5Z3JpZFRlbXBsYXRlVXJsXCJdO1xuXG5mdW5jdGlvbiBnbWZEaXNwbGF5cXVlcnlncmlkVGVtcGxhdGVVcmwoJGVsZW1lbnQsICRhdHRycywgZ21mRGlzcGxheXF1ZXJ5Z3JpZFRlbXBsYXRlVXJsKSB7XG4gIHJldHVybiBnbWZEaXNwbGF5cXVlcnlncmlkVGVtcGxhdGVVcmwoJGVsZW1lbnQsICRhdHRycyk7XG59XG5cbnZhciBxdWVyeUdyaWRDb21wb25lbnQgPSB7XG4gIGNvbnRyb2xsZXI6ICdHbWZEaXNwbGF5cXVlcnlncmlkQ29udHJvbGxlciBhcyBjdHJsJyxcbiAgYmluZGluZ3M6IHtcbiAgICAnYWN0aXZlJzogJz0/Z21mRGlzcGxheXF1ZXJ5Z3JpZEFjdGl2ZScsXG4gICAgJ2dldE1hcEZuJzogJyZnbWZEaXNwbGF5cXVlcnlncmlkTWFwJ1xuICB9LFxuICB0ZW1wbGF0ZVVybDogZ21mRGlzcGxheXF1ZXJ5Z3JpZFRlbXBsYXRlVXJsXG59O1xubXlNb2R1bGUuY29tcG9uZW50KCdnbWZEaXNwbGF5cXVlcnlncmlkJywgcXVlcnlHcmlkQ29tcG9uZW50KTtcbmV4cG9ydCBmdW5jdGlvbiBRdWVyeUdyaWRDb250cm9sbGVyKCRzY29wZSwgbmdlb1F1ZXJ5UmVzdWx0LCBuZ2VvTWFwUXVlcmVudCwgJHRpbWVvdXQsIG5nZW9RdWVyeU9wdGlvbnMsIGdtZkNzdkZpbGVuYW1lLCAkZWxlbWVudCwgZ21mRGlzcGxheVF1ZXJ5R3JpZE9wdGlvbnMpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB0aGlzLm9wdGlvbnMgPSBnbWZEaXNwbGF5UXVlcnlHcmlkT3B0aW9ucztcbiAgdGhpcy4kc2NvcGVfID0gJHNjb3BlO1xuICB0aGlzLiR0aW1lb3V0XyA9ICR0aW1lb3V0O1xuICB0aGlzLm5nZW9RdWVyeVJlc3VsdCA9IG5nZW9RdWVyeVJlc3VsdDtcbiAgdGhpcy5uZ2VvTWFwUXVlcmVudF8gPSBuZ2VvTWFwUXVlcmVudDtcbiAgdGhpcy5uZ2VvQ3N2RG93bmxvYWRfID0gZG93bmxvYWRDc3ZTZXJ2aWNlO1xuICB0aGlzLiRlbGVtZW50XyA9ICRlbGVtZW50O1xuICB0aGlzLm1heFJlc3VsdHMgPSBuZ2VvUXVlcnlPcHRpb25zLmxpbWl0ICE9PSB1bmRlZmluZWQgPyBuZ2VvUXVlcnlPcHRpb25zLmxpbWl0IDogNTA7XG4gIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICB0aGlzLmdyaWRTb3VyY2VzID0ge307XG4gIHRoaXMubG9hZGVkR3JpZFNvdXJjZXMgPSBbXTtcbiAgdGhpcy5zZWxlY3RlZFRhYiA9IG51bGw7XG4gIHRoaXMuZmVhdHVyZXNGb3JTb3VyY2VzXyA9IHt9O1xuICB0aGlzLmZlYXR1cmVzXyA9IG5ldyBvbENvbGxlY3Rpb24oKTtcbiAgdGhpcy5oaWdobGlnaHRGZWF0dXJlc18gPSBuZXcgb2xDb2xsZWN0aW9uKCk7XG4gIHRoaXMuZmlsZW5hbWVfID0gZ21mQ3N2RmlsZW5hbWU7XG4gIHRoaXMubWFwXyA9IG51bGw7XG4gIHRoaXMuc3VtT2ZGZWF0dXJlcyA9IDA7XG4gIHRoaXMuc3VtT2ZBdmFpbGFibGVSZXN1bHRzID0gMDtcbiAgdGhpcy4kc2NvcGVfLiR3YXRjaENvbGxlY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZ2VvUXVlcnlSZXN1bHQ7XG4gIH0sIGZ1bmN0aW9uIChuZXdRdWVyeVJlc3VsdCwgb2xkUXVlcnlSZXN1bHQpIHtcbiAgICBpZiAobmdlb1F1ZXJ5UmVzdWx0LnBlbmRpbmcpIHtcbiAgICAgIF90aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICBfdGhpcy5wZW5kaW5nID0gdHJ1ZTtcbiAgICAgIHBhbmVscy5vcGVuRm9vdGVyUGFuZWwoJ3F1ZXJ5cmVzdWx0Jywge1xuICAgICAgICBzdGF0ZTogdHJ1ZSxcbiAgICAgICAgbm9FcnJvcjogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG5ld1F1ZXJ5UmVzdWx0ICE9PSBvbGRRdWVyeVJlc3VsdCkge1xuICAgICAgX3RoaXMudXBkYXRlRGF0YV8oKTtcbiAgICB9XG4gIH0pO1xuICB0aGlzLnVucmVnaXN0ZXJTZWxlY3RXYXRjaGVyXyA9IG51bGw7XG4gIHRoaXMuZ2V0TWFwRm4gPSBudWxsO1xufVxuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS4kb25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuZ2V0TWFwRm4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZ2V0TWFwRm4nKTtcbiAgfVxuXG4gIHZhciBmZWF0dXJlc092ZXJsYXkgPSBuZ2VvTWFwRmVhdHVyZU92ZXJsYXlNZ3IuZ2V0RmVhdHVyZU92ZXJsYXkoKTtcbiAgZmVhdHVyZXNPdmVybGF5LnNldEZlYXR1cmVzKHRoaXMuZmVhdHVyZXNfKTtcbiAgZmVhdHVyZXNPdmVybGF5LnNldFN0eWxlKGJ1aWxkU3R5bGUodGhpcy5vcHRpb25zLmZlYXR1cmVzU3R5bGUpKTtcbiAgdmFyIGhpZ2hsaWdodEZlYXR1cmVzT3ZlcmxheSA9IG5nZW9NYXBGZWF0dXJlT3ZlcmxheU1nci5nZXRGZWF0dXJlT3ZlcmxheSgpO1xuICBoaWdobGlnaHRGZWF0dXJlc092ZXJsYXkuc2V0RmVhdHVyZXModGhpcy5oaWdobGlnaHRGZWF0dXJlc18pO1xuICB2YXIgaGlnaGxpZ2h0RmVhdHVyZVN0eWxlID0gYnVpbGRTdHlsZSh0aGlzLm9wdGlvbnMuc2VsZWN0ZWRGZWF0dXJlU3R5bGUpO1xuICBoaWdobGlnaHRGZWF0dXJlc092ZXJsYXkuc2V0U3R5bGUoaGlnaGxpZ2h0RmVhdHVyZVN0eWxlKTtcbiAgdmFyIG1hcEZuID0gdGhpcy5nZXRNYXBGbjtcblxuICBpZiAobWFwRm4pIHtcbiAgICB2YXIgbWFwID0gbWFwRm4oKTtcblxuICAgIGlmICghKG1hcCBpbnN0YW5jZW9mIG9sTWFwKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBtYXAgdHlwZScpO1xuICAgIH1cblxuICAgIHRoaXMubWFwXyA9IG1hcDtcbiAgfVxufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0R3JpZFNvdXJjZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gIHJldHVybiB0aGlzLmxvYWRlZEdyaWRTb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlTGFiZWwpIHtcbiAgICByZXR1cm4gX3RoaXMyLmdyaWRTb3VyY2VzW3NvdXJjZUxhYmVsXTtcbiAgfSk7XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS51cGRhdGVEYXRhXyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgaWYgKCh0aGlzLm5nZW9RdWVyeVJlc3VsdC5wZW5kaW5nIHx8IHRoaXMubmdlb1F1ZXJ5UmVzdWx0LnRvdGFsID09PSAwKSAmJiAhdGhpcy5oYXNPbmVXaXRoVG9vTWFueVJlc3VsdHNfKCkpIHtcbiAgICB2YXIgb2xkQWN0aXZlID0gdGhpcy5hY3RpdmU7XG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgaWYgKG9sZEFjdGl2ZSkge1xuICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLm5nZW9RdWVyeVJlc3VsdC5wZW5kaW5nO1xuICAgICAgcGFuZWxzLm9wZW5Gb290ZXJQYW5lbCgncXVlcnlyZXN1bHQnLCB7XG4gICAgICAgIHN0YXRlOiB0aGlzLmFjdGl2ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLnBlbmRpbmcgPSB0aGlzLm5nZW9RdWVyeVJlc3VsdC5wZW5kaW5nO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuc3VtT2ZBdmFpbGFibGVSZXN1bHRzID0gMDtcbiAgdGhpcy5zdW1PZkZlYXR1cmVzID0gMDtcbiAgdmFyIGNvdW50ZWRTb3VyY2VzID0gW107XG4gIHRoaXMubmdlb1F1ZXJ5UmVzdWx0LnNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgaWYgKCFjb3VudGVkU291cmNlcy5pbmNsdWRlcyhzb3VyY2UubGFiZWwpKSB7XG4gICAgICBfdGhpczMuc3VtT2ZGZWF0dXJlcyArPSBzb3VyY2UuZmVhdHVyZXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGlmICghc291cmNlLnJlcXVlc3RQYXJ0bmVycyB8fCAhc291cmNlLnJlcXVlc3RQYXJ0bmVycy5zb21lKGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgcmV0dXJuIGNvdW50ZWRTb3VyY2VzLmluY2x1ZGVzKGxhYmVsKTtcbiAgICB9KSkge1xuICAgICAgX3RoaXMzLnN1bU9mQXZhaWxhYmxlUmVzdWx0cyArPSBzb3VyY2UudG90YWxGZWF0dXJlQ291bnQ7XG4gICAgfVxuXG4gICAgY291bnRlZFNvdXJjZXMucHVzaChzb3VyY2UubGFiZWwpO1xuICB9KTtcbiAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICBwYW5lbHMub3BlbkZvb3RlclBhbmVsKCdxdWVyeXJlc3VsdCcsIHtcbiAgICBzdGF0ZTogdHJ1ZVxuICB9KTtcbiAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gIHZhciBzb3VyY2VzID0gdGhpcy5uZ2VvUXVlcnlSZXN1bHQuc291cmNlcztcblxuICBpZiAoT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1lcmdlVGFicyB8fCB7fSkubGVuZ3RoID4gMCkge1xuICAgIHNvdXJjZXMgPSB0aGlzLmdldE1lcmdlZFNvdXJjZXNfKHNvdXJjZXMpO1xuICB9XG5cbiAgc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICBpZiAoc291cmNlLnRvb01hbnlSZXN1bHRzICYmIHNvdXJjZS5mZWF0dXJlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIF90aGlzMy5tYWtlR3JpZF8obnVsbCwgc291cmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc291cmNlLmlkID0gX3RoaXMzLmVzY2FwZVZhbHVlKHNvdXJjZS5pZCk7XG4gICAgICB2YXIgZmVhdHVyZXMgPSBzb3VyY2UuZmVhdHVyZXM7XG5cbiAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF90aGlzMy5jb2xsZWN0RGF0YV8oc291cmNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0aGlzLmxvYWRlZEdyaWRTb3VyY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgcGFuZWxzLm9wZW5Gb290ZXJQYW5lbCgncXVlcnlyZXN1bHQnLCB7XG4gICAgICBzdGF0ZTogZmFsc2UsXG4gICAgICBub0Vycm9yOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHRoaXMuc2VsZWN0ZWRUYWIgPT09IG51bGwgfHwgIShcIlwiICsgdGhpcy5zZWxlY3RlZFRhYiBpbiB0aGlzLmdyaWRTb3VyY2VzKSkge1xuICAgIHRoaXMuJHRpbWVvdXRfKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBmaXJzdFNvdXJjZUlkID0gX3RoaXMzLmxvYWRlZEdyaWRTb3VyY2VzWzBdO1xuXG4gICAgICBfdGhpczMuc2VsZWN0VGFiKF90aGlzMy5ncmlkU291cmNlc1tmaXJzdFNvdXJjZUlkXSk7XG4gICAgfSwgMCk7XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmhhc09uZVdpdGhUb29NYW55UmVzdWx0c18gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLm5nZW9RdWVyeVJlc3VsdC5zb3VyY2VzLnNvbWUoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIHJldHVybiBzb3VyY2UudG9vTWFueVJlc3VsdHM7XG4gIH0pO1xufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuZXNjYXBlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdG9Fc2NhcGUgPSAvWy1bXFxdL3t9KCkqKz8uXFxcXF4kIHxdL2c7XG5cbiAgICBpZiAodmFsdWUubWF0Y2godG9Fc2NhcGUpICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSh0b0VzY2FwZSwgJ18nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuaXNTZWxlY3RlZCA9IGZ1bmN0aW9uIChncmlkU291cmNlKSB7XG4gIHJldHVybiB0aGlzLnNlbGVjdGVkVGFiID09PSBncmlkU291cmNlLnNvdXJjZS5sYWJlbDtcbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmdldE1lcmdlZFNvdXJjZXNfID0gZnVuY3Rpb24gKHNvdXJjZXMpIHtcbiAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgdmFyIGFsbFNvdXJjZXMgPSBbXTtcbiAgdmFyIG1lcmdlZFNvdXJjZXMgPSB7fTtcbiAgc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICB2YXIgbWVyZ2VkU291cmNlID0gX3RoaXM0LmdldE1lcmdlZFNvdXJjZV8oc291cmNlLCBtZXJnZWRTb3VyY2VzKTtcblxuICAgIGlmIChtZXJnZWRTb3VyY2UgPT09IG51bGwpIHtcbiAgICAgIGFsbFNvdXJjZXMucHVzaChzb3VyY2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgZm9yICh2YXIgbWVyZ2VkU291cmNlSWQgaW4gbWVyZ2VkU291cmNlcykge1xuICAgIGFsbFNvdXJjZXMucHVzaChtZXJnZWRTb3VyY2VzW21lcmdlZFNvdXJjZUlkXSk7XG4gIH1cblxuICByZXR1cm4gYWxsU291cmNlcztcbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmdldE1lcmdlZFNvdXJjZV8gPSBmdW5jdGlvbiAoc291cmNlLCBtZXJnZWRTb3VyY2VzKSB7XG4gIHZhciBtZXJnZVNvdXJjZUlkID0gbnVsbDtcblxuICBmb3IgKHZhciBjdXJyZW50TWVyZ2VTb3VyY2VJZCBpbiB0aGlzLm9wdGlvbnMubWVyZ2VUYWJzIHx8IHt9KSB7XG4gICAgdmFyIHNvdXJjZUxhYmVscyA9IHRoaXMub3B0aW9ucy5tZXJnZVRhYnNbY3VycmVudE1lcmdlU291cmNlSWRdO1xuICAgIHZhciBjb250YWluc1NvdXJjZSA9IHNvdXJjZUxhYmVscy5zb21lKGZ1bmN0aW9uIChzb3VyY2VMYWJlbCkge1xuICAgICAgcmV0dXJuIHNvdXJjZUxhYmVsID09IHNvdXJjZS5sYWJlbDtcbiAgICB9KTtcblxuICAgIGlmIChjb250YWluc1NvdXJjZSkge1xuICAgICAgbWVyZ2VTb3VyY2VJZCA9IGN1cnJlbnRNZXJnZVNvdXJjZUlkO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1lcmdlU291cmNlSWQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBuZXdSZXF1ZXN0ID0gdHJ1ZTtcbiAgdmFyIG1lcmdlU291cmNlO1xuXG4gIGlmIChtZXJnZVNvdXJjZUlkIGluIG1lcmdlZFNvdXJjZXMpIHtcbiAgICBtZXJnZVNvdXJjZSA9IG1lcmdlZFNvdXJjZXNbbWVyZ2VTb3VyY2VJZF07XG5cbiAgICBpZiAoc291cmNlLnJlcXVlc3RQYXJ0bmVycykge1xuICAgICAgbmV3UmVxdWVzdCA9ICFzb3VyY2UucmVxdWVzdFBhcnRuZXJzLnNvbWUoZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgICAgIHJldHVybiBtZXJnZVNvdXJjZS5tZXJnZUNvbXBvc2FudHMuaW5jbHVkZXMobGFiZWwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWVyZ2VTb3VyY2UubWVyZ2VDb21wb3NhbnRzLnB1c2goc291cmNlLmxhYmVsKTtcbiAgfSBlbHNlIHtcbiAgICBtZXJnZVNvdXJjZSA9IHtcbiAgICAgIGZlYXR1cmVzOiBbXSxcbiAgICAgIGlkOiBtZXJnZVNvdXJjZUlkLFxuICAgICAgbGFiZWw6IG1lcmdlU291cmNlSWQsXG4gICAgICBsaW1pdDogMCxcbiAgICAgIHBlbmRpbmc6IGZhbHNlLFxuICAgICAgdG9vTWFueVJlc3VsdHM6IGZhbHNlLFxuICAgICAgbWVyZ2VDb21wb3NhbnRzOiBbc291cmNlLmxhYmVsXVxuICAgIH07XG4gICAgbWVyZ2VkU291cmNlc1ttZXJnZVNvdXJjZUlkXSA9IG1lcmdlU291cmNlO1xuICB9XG5cbiAgc291cmNlLmZlYXR1cmVzLmZvckVhY2goZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICBtZXJnZVNvdXJjZS5mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICB9KTtcbiAgbWVyZ2VTb3VyY2UudG9vTWFueVJlc3VsdHMgPSBtZXJnZVNvdXJjZS50b29NYW55UmVzdWx0cyB8fCBzb3VyY2UudG9vTWFueVJlc3VsdHM7XG5cbiAgaWYgKG5ld1JlcXVlc3QpIHtcbiAgICBpZiAoc291cmNlLnRvdGFsRmVhdHVyZUNvdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG1lcmdlU291cmNlLnRvdGFsRmVhdHVyZUNvdW50ID0gbWVyZ2VTb3VyY2UudG90YWxGZWF0dXJlQ291bnQgIT09IHVuZGVmaW5lZCA/IG1lcmdlU291cmNlLnRvdGFsRmVhdHVyZUNvdW50ICsgc291cmNlLnRvdGFsRmVhdHVyZUNvdW50IDogc291cmNlLnRvdGFsRmVhdHVyZUNvdW50O1xuICAgIH1cblxuICAgIG1lcmdlU291cmNlLmxpbWl0ICs9IHNvdXJjZS5saW1pdDtcbiAgfVxuXG4gIHJldHVybiBtZXJnZVNvdXJjZTtcbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmNvbGxlY3REYXRhXyA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgdmFyIGZlYXR1cmVzID0gc291cmNlLmZlYXR1cmVzO1xuICB2YXIgYWxsUHJvcGVydGllcyA9IFtdO1xuICB2YXIgZmVhdHVyZUdlb21ldHJpZXNOYW1lcyA9IFtdO1xuICB2YXIgZmVhdHVyZXNGb3JTb3VyY2UgPSB7fTtcbiAgdmFyIHByb3BlcnRpZXMsIGZlYXR1cmVHZW9tZXRyeU5hbWU7XG4gIGZlYXR1cmVzLmZvckVhY2goZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICBwcm9wZXJ0aWVzID0gZmVhdHVyZS5nZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICBpZiAocHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBmZWF0dXJlR2VvbWV0cnlOYW1lID0gZmVhdHVyZS5nZXRHZW9tZXRyeU5hbWUoKTtcblxuICAgICAgaWYgKCFmZWF0dXJlR2VvbWV0cmllc05hbWVzLmluY2x1ZGVzKGZlYXR1cmVHZW9tZXRyeU5hbWUpKSB7XG4gICAgICAgIGZlYXR1cmVHZW9tZXRyaWVzTmFtZXMucHVzaChmZWF0dXJlR2VvbWV0cnlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgYWxsUHJvcGVydGllcy5wdXNoKHByb3BlcnRpZXMpO1xuICAgICAgZmVhdHVyZXNGb3JTb3VyY2VbZ2V0Um93VWlkKHByb3BlcnRpZXMpXSA9IGZlYXR1cmU7XG4gICAgfVxuICB9KTtcbiAgdGhpcy5jbGVhblByb3BlcnRpZXNfKGFsbFByb3BlcnRpZXMsIGZlYXR1cmVHZW9tZXRyaWVzTmFtZXMpO1xuXG4gIGlmIChhbGxQcm9wZXJ0aWVzLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgZ3JpZENyZWF0ZWQgPSB0aGlzLm1ha2VHcmlkXyhhbGxQcm9wZXJ0aWVzLCBzb3VyY2UpO1xuXG4gICAgaWYgKGdyaWRDcmVhdGVkKSB7XG4gICAgICB0aGlzLmZlYXR1cmVzRm9yU291cmNlc19bXCJcIiArIHNvdXJjZS5sYWJlbF0gPSBmZWF0dXJlc0ZvclNvdXJjZTtcbiAgICB9XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmNsZWFuUHJvcGVydGllc18gPSBmdW5jdGlvbiAoYWxsUHJvcGVydGllcywgZmVhdHVyZUdlb21ldHJpZXNOYW1lcykge1xuICBhbGxQcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICBmZWF0dXJlR2VvbWV0cmllc05hbWVzLmZvckVhY2goZnVuY3Rpb24gKGZlYXR1cmVHZW9tZXRyeU5hbWUpIHtcbiAgICAgIGRlbGV0ZSBwcm9wZXJ0aWVzW2ZlYXR1cmVHZW9tZXRyeU5hbWVdO1xuICAgIH0pO1xuICAgIGRlbGV0ZSBwcm9wZXJ0aWVzLmJvdW5kZWRCeTtcbiAgICBkZWxldGUgcHJvcGVydGllcy5uZ2VvX2ZlYXR1cmVfdHlwZV87XG4gIH0pO1xuXG4gIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZlRW1wdHlDb2x1bW5zID09PSB0cnVlKSB7XG4gICAgdGhpcy5yZW1vdmVFbXB0eUNvbHVtbnNGbl8oYWxsUHJvcGVydGllcyk7XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZUVtcHR5Q29sdW1uc0ZuXyA9IGZ1bmN0aW9uIChhbGxQcm9wZXJ0aWVzKSB7XG4gIHZhciBrZXlzVG9LZWVwID0gW107XG4gIHZhciBpLCBrZXk7XG5cbiAgZm9yIChrZXkgaW4gYWxsUHJvcGVydGllc1swXSkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBhbGxQcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYWxsUHJvcGVydGllc1tpXVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAga2V5c1RvS2VlcC5wdXNoKGtleSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBrZXlUb1JlbW92ZTtcbiAgYWxsUHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG4gICAga2V5VG9SZW1vdmUgPSBbXTtcblxuICAgIGZvciAoa2V5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgIGlmICgha2V5c1RvS2VlcC5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIGtleVRvUmVtb3ZlLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBrZXlUb1JlbW92ZS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlbGV0ZSBwcm9wZXJ0aWVzW2tleV07XG4gICAgfSk7XG4gIH0pO1xufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUubWFrZUdyaWRfID0gZnVuY3Rpb24gKGRhdGEsIHNvdXJjZSkge1xuICB2YXIgc291cmNlTGFiZWwgPSBcIlwiICsgc291cmNlLmxhYmVsO1xuICB2YXIgZ3JpZENvbmZpZyA9IG51bGw7XG5cbiAgaWYgKGRhdGEgIT09IG51bGwpIHtcbiAgICBncmlkQ29uZmlnID0gdGhpcy5nZXRHcmlkQ29uZmlndXJhdGlvbl8oZGF0YSk7XG5cbiAgICBpZiAoZ3JpZENvbmZpZyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmICghdGhpcy5sb2FkZWRHcmlkU291cmNlcy5pbmNsdWRlcyhzb3VyY2VMYWJlbCkpIHtcbiAgICB0aGlzLmxvYWRlZEdyaWRTb3VyY2VzLnB1c2goc291cmNlTGFiZWwpO1xuICB9XG5cbiAgdGhpcy5ncmlkU291cmNlc1tzb3VyY2VMYWJlbF0gPSB7XG4gICAgc291cmNlOiBzb3VyY2VcbiAgfTtcblxuICBpZiAoZ3JpZENvbmZpZykge1xuICAgIHRoaXMuZ3JpZFNvdXJjZXNbc291cmNlTGFiZWxdLmNvbmZpZ3VyYXRpb24gPSBncmlkQ29uZmlnO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5nZXRHcmlkQ29uZmlndXJhdGlvbl8gPSBmdW5jdGlvbiAoZGF0YSkge1xuICBpZiAoIWRhdGEubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGRhdGEnKTtcbiAgfVxuXG4gIHZhciBjbG9uZSA9IHt9O1xuICBPYmplY3QuYXNzaWduKGNsb25lLCBkYXRhWzBdKTtcbiAgZGVsZXRlIGNsb25lLm9sX3VpZDtcbiAgdmFyIGNvbHVtbnMgPSBPYmplY3Qua2V5cyhjbG9uZSk7XG4gIHZhciBjb2x1bW5EZWZzID0gW107XG4gIGNvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgY29sdW1uRGVmcy5wdXNoKHtcbiAgICAgIG5hbWU6IGNvbHVtblxuICAgIH0pO1xuICB9KTtcblxuICBpZiAoY29sdW1uRGVmcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIG5ldyBuZ2VvR3JpZENvbmZpZyhkYXRhLCBjb2x1bW5EZWZzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0QWN0aXZlR3JpZFNvdXJjZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuc2VsZWN0ZWRUYWIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5ncmlkU291cmNlc1tcIlwiICsgdGhpcy5zZWxlY3RlZFRhYl07XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICBwYW5lbHMub3BlbkZvb3RlclBhbmVsKCdxdWVyeXJlc3VsdCcsIHtcbiAgICBzdGF0ZTogZmFsc2UsXG4gICAgbm9FcnJvcjogdHJ1ZVxuICB9KTtcbiAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gIHRoaXMuZ3JpZFNvdXJjZXMgPSB7fTtcbiAgdGhpcy5sb2FkZWRHcmlkU291cmNlcyA9IFtdO1xuICB0aGlzLnNlbGVjdGVkVGFiID0gbnVsbDtcbiAgdGhpcy50b29NYW55UmVzdWx0cyA9IGZhbHNlO1xuICB0aGlzLmZlYXR1cmVzXy5jbGVhcigpO1xuICB0aGlzLmhpZ2hsaWdodEZlYXR1cmVzXy5jbGVhcigpO1xuICB0aGlzLm5nZW9NYXBRdWVyZW50Xy5jbGVhcigpO1xuICB0aGlzLmZlYXR1cmVzRm9yU291cmNlc18gPSB7fTtcblxuICBpZiAodGhpcy51bnJlZ2lzdGVyU2VsZWN0V2F0Y2hlcl8pIHtcbiAgICB0aGlzLnVucmVnaXN0ZXJTZWxlY3RXYXRjaGVyXygpO1xuICB9XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5zZWxlY3RUYWIgPSBmdW5jdGlvbiAoZ3JpZFNvdXJjZSkge1xuICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICB2YXIgc291cmNlID0gZ3JpZFNvdXJjZS5zb3VyY2U7XG4gIHRoaXMuc2VsZWN0ZWRUYWIgPSBzb3VyY2UubGFiZWw7XG5cbiAgaWYgKHRoaXMudW5yZWdpc3RlclNlbGVjdFdhdGNoZXJfKSB7XG4gICAgdGhpcy51bnJlZ2lzdGVyU2VsZWN0V2F0Y2hlcl8oKTtcbiAgICB0aGlzLnVucmVnaXN0ZXJTZWxlY3RXYXRjaGVyXyA9IG51bGw7XG4gIH1cblxuICBpZiAoZ3JpZFNvdXJjZS5jb25maWd1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnVucmVnaXN0ZXJTZWxlY3RXYXRjaGVyXyA9IHRoaXMuJHNjb3BlXy4kd2F0Y2hDb2xsZWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBncmlkU291cmNlLmNvbmZpZ3VyYXRpb24uc2VsZWN0ZWRSb3dzO1xuICAgIH0sIGZ1bmN0aW9uIChuZXdTZWxlY3RlZCwgb2xkU2VsZWN0ZWRSb3dzKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMobmV3U2VsZWN0ZWQpICE9PSBPYmplY3Qua2V5cyhvbGRTZWxlY3RlZFJvd3MpKSB7XG4gICAgICAgIF90aGlzNS5vblNlbGVjdGlvbkNoYW5nZWRfKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0aGlzLnVwZGF0ZUZlYXR1cmVzXyhncmlkU291cmNlKTtcbiAgdGhpcy5yZWZsb3dHcmlkXygpO1xufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUucmVmbG93R3JpZF8gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9IHRoaXMuZXNjYXBlVmFsdWUodGhpcy5zZWxlY3RlZFRhYiB8fCAnJyk7XG4gIHZhciBhY3RpdmVQYW5lID0gdGhpcy4kZWxlbWVudF8uZmluZChcImRpdi50YWItcGFuZSNcIiArIGlkKTtcbiAgYWN0aXZlUGFuZS5yZW1vdmVDbGFzcygnYWN0aXZlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICB0aGlzLiR0aW1lb3V0XyhmdW5jdGlvbiAoKSB7XG4gICAgYWN0aXZlUGFuZS5maW5kKCdkaXYubmdlby1ncmlkLXRhYmxlLWNvbnRhaW5lciB0YWJsZScpLnRyaWdnZXIoJ3JlZmxvdycpO1xuICB9KTtcbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLm9uU2VsZWN0aW9uQ2hhbmdlZF8gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnNlbGVjdGVkVGFiID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGdyaWRTb3VyY2UgPSB0aGlzLmdyaWRTb3VyY2VzW1wiXCIgKyB0aGlzLnNlbGVjdGVkVGFiXTtcbiAgdGhpcy51cGRhdGVGZWF0dXJlc18oZ3JpZFNvdXJjZSk7XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS51cGRhdGVGZWF0dXJlc18gPSBmdW5jdGlvbiAoZ3JpZFNvdXJjZSkge1xuICB0aGlzLmZlYXR1cmVzXy5jbGVhcigpO1xuICB0aGlzLmhpZ2hsaWdodEZlYXR1cmVzXy5jbGVhcigpO1xuXG4gIGlmICghZ3JpZFNvdXJjZS5jb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHNvdXJjZUxhYmVsID0gXCJcIiArIGdyaWRTb3VyY2Uuc291cmNlLmxhYmVsO1xuICB2YXIgZmVhdHVyZXNGb3JTb3VyY2UgPSB0aGlzLmZlYXR1cmVzRm9yU291cmNlc19bc291cmNlTGFiZWxdO1xuICB2YXIgc2VsZWN0ZWRSb3dzID0gZ3JpZFNvdXJjZS5jb25maWd1cmF0aW9uLnNlbGVjdGVkUm93cztcblxuICBmb3IgKHZhciByb3dJZCBpbiBmZWF0dXJlc0ZvclNvdXJjZSkge1xuICAgIHZhciBmZWF0dXJlID0gZmVhdHVyZXNGb3JTb3VyY2Vbcm93SWRdO1xuXG4gICAgaWYgKHJvd0lkIGluIHNlbGVjdGVkUm93cykge1xuICAgICAgdGhpcy5oaWdobGlnaHRGZWF0dXJlc18ucHVzaChmZWF0dXJlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mZWF0dXJlc18ucHVzaChmZWF0dXJlKTtcbiAgICB9XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmlzT25lU2VsZWN0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzLmdldEFjdGl2ZUdyaWRTb3VyY2UoKTtcblxuICBpZiAoc291cmNlID09PSBudWxsIHx8IHNvdXJjZS5jb25maWd1cmF0aW9uID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzb3VyY2UuY29uZmlndXJhdGlvbi5nZXRTZWxlY3RlZENvdW50KCkgPiAwO1xuICB9XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5nZXRTZWxlY3RlZFJvd0NvdW50ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc291cmNlID0gdGhpcy5nZXRBY3RpdmVHcmlkU291cmNlKCk7XG5cbiAgaWYgKHNvdXJjZSA9PT0gbnVsbCB8fCBzb3VyY2UuY29uZmlndXJhdGlvbiA9PT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzb3VyY2UuY29uZmlndXJhdGlvbi5nZXRTZWxlY3RlZENvdW50KCk7XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLnNlbGVjdEFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNvdXJjZSA9IHRoaXMuZ2V0QWN0aXZlR3JpZFNvdXJjZSgpO1xuXG4gIGlmIChzb3VyY2UgIT09IG51bGwpIHtcbiAgICBzb3VyY2UuY29uZmlndXJhdGlvbi5zZWxlY3RBbGwoKTtcbiAgfVxufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUudW5zZWxlY3RBbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzLmdldEFjdGl2ZUdyaWRTb3VyY2UoKTtcblxuICBpZiAoc291cmNlICE9PSBudWxsKSB7XG4gICAgc291cmNlLmNvbmZpZ3VyYXRpb24udW5zZWxlY3RBbGwoKTtcbiAgfVxufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuaW52ZXJ0U2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc291cmNlID0gdGhpcy5nZXRBY3RpdmVHcmlkU291cmNlKCk7XG5cbiAgaWYgKHNvdXJjZSAhPT0gbnVsbCkge1xuICAgIHNvdXJjZS5jb25maWd1cmF0aW9uLmludmVydFNlbGVjdGlvbigpO1xuICB9XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS56b29tVG9TZWxlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5tYXBfKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIG1hcCcpO1xuICB9XG5cbiAgdmFyIHNvdXJjZSA9IHRoaXMuZ2V0QWN0aXZlR3JpZFNvdXJjZSgpO1xuXG4gIGlmIChzb3VyY2UgIT09IG51bGwpIHtcbiAgICB2YXIgZXh0ZW50ID0gb2xFeHRlbnQuY3JlYXRlRW1wdHkoKTtcbiAgICB0aGlzLmhpZ2hsaWdodEZlYXR1cmVzXy5mb3JFYWNoKGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICB2YXIgZ2VvbWV0cnkgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCk7XG5cbiAgICAgIGlmICghZ2VvbWV0cnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGdlb21ldHJ5Jyk7XG4gICAgICB9XG5cbiAgICAgIG9sRXh0ZW50LmV4dGVuZChleHRlbnQsIGdlb21ldHJ5LmdldEV4dGVudCgpKTtcbiAgICB9KTtcbiAgICB2YXIgc2l6ZSA9IHRoaXMubWFwXy5nZXRTaXplKCk7XG5cbiAgICBpZiAoIXNpemUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBzaXplJyk7XG4gICAgfVxuXG4gICAgdGhpcy5tYXBfLmdldFZpZXcoKS5maXQoZXh0ZW50LCB7XG4gICAgICBzaXplOiBzaXplLFxuICAgICAgbWF4Wm9vbTogdGhpcy5vcHRpb25zLm1heFJlY2VudGVyWm9vbVxuICAgIH0pO1xuICB9XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5kb3dubG9hZENzdiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNvdXJjZSA9IHRoaXMuZ2V0QWN0aXZlR3JpZFNvdXJjZSgpO1xuXG4gIGlmIChzb3VyY2UgIT09IG51bGwpIHtcbiAgICB2YXIgY29sdW1uRGVmcyA9IHNvdXJjZS5jb25maWd1cmF0aW9uLmNvbHVtbkRlZnM7XG5cbiAgICBpZiAoIWNvbHVtbkRlZnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBjb2x1bW5EZWZzJyk7XG4gICAgfVxuXG4gICAgdmFyIHNlbGVjdGVkUm93cyA9IHNvdXJjZS5jb25maWd1cmF0aW9uLmdldFNlbGVjdGVkUm93cygpO1xuICAgIHRoaXMubmdlb0NzdkRvd25sb2FkXy5zdGFydERvd25sb2FkKHNlbGVjdGVkUm93cywgY29sdW1uRGVmcywgdGhpcy5maWxlbmFtZV8pO1xuICB9XG59O1xuXG5teU1vZHVsZS5jb250cm9sbGVyKCdHbWZEaXNwbGF5cXVlcnlncmlkQ29udHJvbGxlcicsIFF1ZXJ5R3JpZENvbnRyb2xsZXIpO1xuZXhwb3J0IGRlZmF1bHQgbXlNb2R1bGU7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=