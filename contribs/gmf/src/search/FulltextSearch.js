// The MIT License (MIT)
//
// Copyright (c) 2017-2020 Camptocamp SA
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
import {encodeQueryString, decodeQueryString} from 'ngeo/utils.js';

/**
 * Provides the c2c-geoportal full-text search.
 * @param {angular.auto.IInjectorService} $injector Main injector.
 * @param {angular.IHttpService} $http Angular http service.
 * @constructor
 * @ngInject
 * @ngname gmfFulltextSearch
 * @hidden
 */
export function FulltextSearchService($injector, $http) {

  /**
   * @type {angular.IHttpService}
   * @private
   */
  this.$http_ = $http;

  /**
   * @type {string}
   * @private
   */
  this.url_ = /** @type {string} **/ ($injector.get('fulltextsearchUrl'));

  const url = this.url_.split('?');
  /**
   * @type {string}
   * @private
   */
  this.baseUrl_ = url[0];

  const queryString = (url.length == 2) ? `?${url[1]}` : '';
  /**
   * @type {Object<string, string>}
   * @private
   */
  this.defaultParams_ = decodeQueryString(queryString);
}

/**
 * Perform a search query on the c2c-geoportal full-text search.
 * @param {string} query Search query.
 * @param {Object<string, string>} params Additional parameters.
 * @return {Promise} Request promise with data array.
 */
FulltextSearchService.prototype.search = function(query, params) {
  const queryParams = Object.assign({}, this.defaultParams_, params);

  queryParams['query'] = query;

  const url = `${this.baseUrl_}?${encodeQueryString(queryParams)}`;

  return new Promise((resolve, reject) => {
    this.$http_.get(url)
      .then(resp => resolve(resp['data']))
      .catch(reject);
  });
};

/**
 * @type {angular.IModule}
 * @hidden
 */
const module = angular.module('gmfSearchFulltextSearch', []);
module.service('gmfSearchFulltextSearch', FulltextSearchService);


export default module;
