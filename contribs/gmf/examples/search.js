// The MIT License (MIT)
//
// Copyright (c) 2015-2020 Camptocamp SA
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
import './search.css';
import gmfMapComponent from 'gmf/map/component.js';

import gmfSearchModule from 'gmf/search/module.js';
import gmfThemeThemes from 'gmf/theme/Themes.js';
import ngeoMessageNotification from 'ngeo/message/Notification.js';
import {MessageType} from 'ngeo/message/Message.js';
import EPSG2056 from '@geoblocks/proj/src/EPSG_2056.js';
import ngeoMapModule from 'ngeo/map/module.js';
import olMap from 'ol/Map.js';
import olView from 'ol/View.js';
import olLayerTile from 'ol/layer/Tile.js';
import olSourceOSM from 'ol/source/OSM.js';
import olStyleCircle from 'ol/style/Circle.js';
import olStyleFill from 'ol/style/Fill.js';
import olStyleStroke from 'ol/style/Stroke.js';
import olStyleStyle from 'ol/style/Style.js';
import options, {SEARCH} from './options.js';

/**
 * @type {angular.IModule}
 * @hidden
 */
const module = angular.module('gmfapp', [
  'gettext',
  gmfMapComponent.name,
  gmfSearchModule.name,
  gmfThemeThemes.name,
  ngeoMapModule.name, // for ngeo.map.FeatureOverlay, perhaps remove me
  ngeoMessageNotification.name,
]);

/**
 * @param {import("gmf/theme/Themes.js").ThemesService} gmfThemes Themes service.
 * @param {import("ngeo/map/FeatureOverlayMgr.js").FeatureOverlayMgr} ngeoFeatureOverlayMgr The ngeo
 *    feature overlay manager service.
 * @param {import("ngeo/message/Notification.js").MessageNotification} ngeoNotification Ngeo notification
 *    service.
 * @constructor
 * @ngInject
 */
function MainController(gmfThemes, ngeoFeatureOverlayMgr, ngeoNotification) {
  gmfThemes.loadThemes();

  ngeoFeatureOverlayMgr.init(this.map);

  /**
   * @type {Array<import('gmf/search/component.js').SearchComponentDatasource>}
   */
  this.searchDatasources = [
    {
      datasetTitle: 'test',
      groupValues: ['osm', 'district'],
      groupActions: [],
      labelKey: 'label',
      projection: EPSG2056,
      bloodhoundOptions: /** @type {Bloodhound.BloodhoundOptions<any>} */ ({
        remote: {
          rateLimitWait: 250,
        },
      }),
      url: SEARCH,
    },
  ];

  const fill = new olStyleFill({color: [255, 255, 255, 0.6]});
  const stroke = new olStyleStroke({color: [255, 0, 0, 1], width: 2});
  /**
   * @type {Object<string, import("ol/style/Style.js").default>} Map of styles for search overlay.
   */
  this.searchStyles = {
    'osm': new olStyleStyle({
      fill: fill,
      image: new olStyleCircle({
        fill: fill,
        radius: 5,
        stroke: stroke,
      }),
      stroke: stroke,
    }),
  };

  /**
   * @type {Twitter.Typeahead.Options}
   */
  this.searchOptions = {
    minLength: 2,
  };

  /**
   * @type {string}
   */
  this.inputValue = '';

  /**
   * @type {import("ol/Map.js").default}
   */
  this.map = new olMap({
    layers: [
      new olLayerTile({
        source: new olSourceOSM(),
      }),
    ],
    view: new olView({
      center: [0, 0],
      zoom: 4,
    }),
  });

  /**
   * @type {function(): void}
   */
  this.searchIsReady = () => {
    ngeoNotification.notify({
      msg: 'gmf-search initialized',
      target: '#message',
      type: MessageType.SUCCESS,
    });
  };
}

module.controller('MainController', MainController);
options(module);

export default module;
