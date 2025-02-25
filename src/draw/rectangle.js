// The MIT License (MIT)
//
// Copyright (c) 2016-2021 Camptocamp SA
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
import ngeoGeometryType from 'ngeo/GeometryType';
import {listen} from 'ol/events';
import olInteractionDraw from 'ol/interaction/Draw';
import olGeomPolygon from 'ol/geom/Polygon';

/**
 * @type {angular.IModule}
 * @hidden
 */
const myModule = angular.module('ngeoDrawrectangle', []);

/**
 * @returns {angular.IDirective} The directive specs.
 * @ngInject
 * @ngdoc directive
 * @ngname ngeoDrawrectangle
 */
function drawRectangleComponent() {
  return {
    restrict: 'A',
    require: '^^ngeoDrawfeature',
    /**
     * @param {angular.IScope} $scope Scope.
     * @param {JQuery} element Element.
     * @param {angular.IAttributes} attrs Attributes.
     * @param {angular.IController} [drawFeatureCtrl] Controller.
     */
    link: ($scope, element, attrs, drawFeatureCtrl) => {
      if (!drawFeatureCtrl) {
        throw new Error('Missing drawFeatureCtrl');
      }

      const drawRectangle = new olInteractionDraw({
        type: 'LineString',
        geometryFunction: (coordinates, geometry) => {
          if (!geometry) {
            geometry = new olGeomPolygon([]);
          }
          const start = coordinates[0];
          if (!Array.isArray(start)) {
            throw new Error('Wrong coordinates type');
          }
          const end = coordinates[1];
          if (!Array.isArray(end)) {
            throw new Error('Wrong coordinates type');
          }
          geometry.setCoordinates([[start, [start[0], end[1]], end, [end[0], start[1]], start]]);
          return geometry;
        },
        maxPoints: 2,
      });

      if (drawFeatureCtrl.uid) {
        drawRectangle.set('ngeo-interaction-draw-uid', `${drawFeatureCtrl.uid}-rectangle`);
      }

      drawFeatureCtrl.registerInteraction(drawRectangle);
      drawFeatureCtrl.drawRectangle = drawRectangle;

      listen(
        drawRectangle,
        'drawend',
        drawFeatureCtrl.handleDrawEnd.bind(drawFeatureCtrl, ngeoGeometryType.RECTANGLE),
        drawFeatureCtrl
      );
      listen(drawRectangle, 'change:active', drawFeatureCtrl.handleActiveChange, drawFeatureCtrl);
    },
  };
}

myModule.directive('ngeoDrawrectangle', drawRectangleComponent);

export default myModule;
