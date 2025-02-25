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
import olMap from 'ol/Map';
import olStyleStyle from 'ol/style/Style';
import olView from 'ol/View';
import olFeature from 'ol/Feature';

/**
 * Compare two list of objects using only the properties of the expected objects.
 * For example to ignore 'ol_uid'.
 *
 * @param {any[]} data The data.
 * @param {any[]} expectedData Expected data.
 */
const compareGridData = function (data, expectedData) {
  expect(data.length).toBe(expectedData.length);
  for (let i = 0; i < data.length; i++) {
    expect(data[i]).toEqual(jasmine.objectContaining(expectedData[i]));
  }
};

describe('gmf.query.gridComponent', () => {
  /** @type {import('gmf/query/gridComponent').QueryGridController} */
  let queryGridController;
  /** @type {import('ngeo/query/MapQuerent').QueryResult} */
  let ngeoQueryResult;
  /** @type {angular.IScope} */
  let $scope;
  /** @type {angular.IScope} */
  let $rootScope;
  /** @type {angular.ITimeoutService} */
  let $timeout;

  beforeEach(() => {
    angular.mock.module(
      'ngeo',
      /**
       * @param {angular.IModule} $provide
       */
      ($provide) => {
        $provide.value('ngeoQueryOptions', {});
      }
    );

    angular.mock.inject(($injector, _$controller_, _$rootScope_) => {
      ngeoQueryResult = $injector.get('ngeoQueryResult');
      $timeout = $injector.get('$timeout');
      const $controller = _$controller_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();
      const data = {
        featuresStyleFn() {
          return new olStyleStyle();
        },
        /**
         * @type {function():olStyleStyle}
         */
        selectedFeatureStyleFn() {
          return undefined;
        },
        getMapFn() {
          return new olMap({
            view: new olView({
              center: [0, 0],
              zoom: 0,
            }),
          });
        },
      };
      queryGridController = $controller(
        'GmfDisplayquerygridController',
        {
          $scope: $scope,
          $element: $('<div></div>'),
        },
        data
      );
      $rootScope.$digest();
    });
  });

  describe('#updateData_', () => {
    it('deals with no sources', () => {
      ngeoQueryResult.total = 0;
      ngeoQueryResult.sources = [];
      $rootScope.$digest();
      expect(queryGridController.active).toBe(false);
    });

    it('deals with a single source', () => {
      ngeoQueryResult.total = 2;
      ngeoQueryResult.sources = [
        {
          features: [
            new olFeature({
              'osm_id': 1234,
              'name': 'A',
              'empty_column': undefined,
            }),
            new olFeature({
              'osm_id': 12345,
              'name': 'B',
              'empty_column': undefined,
            }),
          ],
          id: 123,
          label: 'Test',
          pending: false,
        },
      ];
      $rootScope.$digest();
      $timeout.flush();
      expect(queryGridController.active).toBe(true);
      expect(queryGridController.selectedTab).toBe('Test');

      const featuresForSource = queryGridController.featuresForSources_['Test'];
      expect(Object.keys(featuresForSource).length).toBe(2);

      const gridSource = queryGridController.gridSources['Test'];
      expect(gridSource).toBeDefined();

      const gridConfig = gridSource.configuration;
      /**
       * @type {any[]}
       */
      const expectedGridData = [
        {
          'osm_id': 1234,
          'name': 'A',
          'empty_column': undefined,
        },
        {
          'osm_id': 12345,
          'name': 'B',
          'empty_column': undefined,
        },
      ];
      compareGridData(gridConfig.data, expectedGridData);

      const expectedColumnDefs = [{'name': 'osm_id'}, {'name': 'name'}, {'name': 'empty_column'}];
      expect(gridConfig.columnDefs).toEqual(expectedColumnDefs);
    });

    it('removes empty columns', () => {
      queryGridController.options.removeEmptyColumns = true;

      ngeoQueryResult.total = 2;
      ngeoQueryResult.sources = [
        {
          features: [
            new olFeature({
              'osm_id': 1234,
              'name': 'A',
              'empty_column': undefined,
            }),
            new olFeature({
              'osm_id': 12345,
              'name': 'B',
              'empty_column': undefined,
            }),
          ],
          id: 123,
          label: 'Test',
          pending: false,
        },
      ];
      $rootScope.$digest();
      $timeout.flush();
      expect(queryGridController.active).toBe(true);

      const gridSource = queryGridController.gridSources['Test'];
      expect(gridSource).toBeDefined();

      const gridConfig = gridSource.configuration;
      const expectedGridData = [
        {
          'osm_id': 1234,
          'name': 'A',
        },
        {
          'osm_id': 12345,
          'name': 'B',
        },
      ];
      compareGridData(gridConfig.data, expectedGridData);

      const expectedColumnDefs = [{'name': 'osm_id'}, {'name': 'name'}];
      expect(gridConfig.columnDefs).toEqual(expectedColumnDefs);
    });

    it('does not create a grid if only empty columns', () => {
      queryGridController.options.removeEmptyColumns = true;

      ngeoQueryResult.total = 2;
      ngeoQueryResult.sources = [
        {
          features: [
            new olFeature({
              'empty_column': undefined,
              '2n-empty_column': undefined,
            }),
            new olFeature({
              'empty_column': undefined,
              '2n-empty_column': undefined,
            }),
          ],
          id: 123,
          label: 'Test',
          pending: false,
        },
      ];
      $rootScope.$digest();
      $timeout.flush();
      expect(queryGridController.active).toBe(false);

      const gridSource = queryGridController.gridSources['Test'];
      expect(gridSource).toBeUndefined();
    });

    it('deals with multiple sources', () => {
      ngeoQueryResult.total = 3;
      ngeoQueryResult.sources = [
        {
          features: [
            new olFeature({
              'osm_id': 1234,
              'name': 'A',
            }),
            new olFeature({
              'osm_id': 12345,
              'name': 'B',
            }),
          ],
          id: 123,
          label: 'Test 1',
          pending: false,
        },
        {
          features: [],
          id: 234,
          label: 'Test 2',
          pending: false,
        },
        {
          features: [
            new olFeature({
              'id': 1234,
              'label': 'C',
            }),
          ],
          id: 345,
          label: 'Test 3',
          pending: false,
        },
      ];
      $rootScope.$digest();
      $timeout.flush();
      expect(queryGridController.active).toBe(true);

      // grid source 1
      const gridSource1 = queryGridController.gridSources['Test 1'];
      expect(gridSource1).toBeDefined();

      const gridConfig1 = gridSource1.configuration;
      const expectedGridData1 = [
        {
          'osm_id': 1234,
          'name': 'A',
        },
        {
          'osm_id': 12345,
          'name': 'B',
        },
      ];
      compareGridData(gridConfig1.data, expectedGridData1);

      const expectedColumnDefs1 = [{'name': 'osm_id'}, {'name': 'name'}];
      expect(gridConfig1.columnDefs).toEqual(expectedColumnDefs1);

      // grid source 2
      const gridSource2 = queryGridController.gridSources['Test 2'];
      expect(gridSource2).not.toBeDefined();

      // grid source 3
      const gridSource3 = queryGridController.gridSources['Test 3'];
      expect(gridSource3).toBeDefined();

      const gridConfig3 = gridSource3.configuration;
      const expectedGridData3 = [
        {
          'id': 1234,
          'label': 'C',
        },
      ];
      compareGridData(gridConfig3.data, expectedGridData3);

      const expectedColumnDefs3 = [{'name': 'id'}, {'name': 'label'}];
      expect(gridConfig3.columnDefs).toEqual(expectedColumnDefs3);
    });

    it('deals with sources with too many features', () => {
      ngeoQueryResult.total = 2;
      ngeoQueryResult.sources = [
        {
          features: [
            new olFeature({
              'osm_id': 1234,
              'name': 'A',
            }),
            new olFeature({
              'osm_id': 12345,
              'name': 'B',
            }),
          ],
          id: 123,
          label: 'Test 1',
          pending: false,
        },
        {
          features: [],
          id: 345,
          label: 'Test 3',
          pending: false,
          tooManyResults: true,
          totalFeatureCount: 351,
        },
      ];
      $rootScope.$digest();
      $timeout.flush();
      expect(queryGridController.active).toBe(true);

      // grid source 1
      const gridSource1 = queryGridController.gridSources['Test 1'];
      expect(gridSource1).toBeDefined();

      // grid source 2
      const gridSource2 = queryGridController.gridSources['Test 3'];
      expect(gridSource2).toBeDefined();
      expect(gridSource2.configuration).toBe(undefined);
    });

    it('deals with sources that all have too many features', () => {
      ngeoQueryResult.total = 0;
      ngeoQueryResult.sources = [
        {
          features: [],
          id: 123,
          label: 'Test 1',
          pending: false,
          tooManyResults: true,
          totalFeatureCount: 123,
        },
        {
          features: [],
          id: 345,
          label: 'Test 3',
          pending: false,
          tooManyResults: true,
          totalFeatureCount: 351,
        },
      ];
      $rootScope.$digest();
      $timeout.flush();
      expect(queryGridController.active).toBe(true);

      // grid source 1
      const gridSource1 = queryGridController.gridSources['Test 1'];
      expect(gridSource1).toBeDefined();
      expect(gridSource1.configuration).toBe(undefined);

      // grid source 2
      const gridSource2 = queryGridController.gridSources['Test 3'];
      expect(gridSource2).toBeDefined();
      expect(gridSource2.configuration).toBe(undefined);
    });

    it('merges sources', () => {
      ngeoQueryResult.total = 4;
      ngeoQueryResult.sources = [
        {
          features: [
            new olFeature({
              'osm_id': 1234,
              'name': 'A',
            }),
            new olFeature({
              'osm_id': 12345,
              'name': 'B',
            }),
          ],
          id: 123,
          label: 'Test 1',
          pending: false,
        },
        {
          features: [
            new olFeature({
              'osm_id': 123456,
              'name': 'C',
            }),
          ],
          id: 234,
          label: 'Test 2',
          pending: false,
        },
        {
          features: [
            new olFeature({
              'id': 1234,
              'label': 'D',
            }),
          ],
          id: 345,
          label: 'Test 3',
          pending: false,
        },
      ];

      queryGridController.options.mergeTabs = {
        'merged_source': ['Test 1', 'Test 2'],
      };

      $rootScope.$digest();
      $timeout.flush();
      expect(queryGridController.active).toBe(true);

      // merged source
      const gridSource1 = queryGridController.gridSources['merged_source'];
      expect(gridSource1).toBeDefined();

      const gridConfig1 = gridSource1.configuration;
      const expectedGridData1 = [
        {
          'osm_id': 1234,
          'name': 'A',
        },
        {
          'osm_id': 12345,
          'name': 'B',
        },
        {
          'osm_id': 123456,
          'name': 'C',
        },
      ];
      compareGridData(gridConfig1.data, expectedGridData1);

      const expectedColumnDefs1 = [{'name': 'osm_id'}, {'name': 'name'}];
      expect(gridConfig1.columnDefs).toEqual(expectedColumnDefs1);

      // grid source 3
      const gridSource3 = queryGridController.gridSources['Test 3'];
      expect(gridSource3).toBeDefined();

      const gridConfig3 = gridSource3.configuration;
      const expectedGridData3 = [
        {
          'id': 1234,
          'label': 'D',
        },
      ];
      compareGridData(gridConfig3.data, expectedGridData3);

      const expectedColumnDefs3 = [{'name': 'id'}, {'name': 'label'}];
      expect(gridConfig3.columnDefs).toEqual(expectedColumnDefs3);
    });

    it('merges sources with too many features', () => {
      ngeoQueryResult.total = 4;
      ngeoQueryResult.sources = [
        {
          features: [
            new olFeature({
              'osm_id': 1234,
              'name': 'A',
            }),
            new olFeature({
              'osm_id': 12345,
              'name': 'B',
            }),
          ],
          id: 123,
          label: 'Test 1',
          pending: false,
          totalFeatureCount: 2,
        },
        {
          features: [],
          id: 234,
          label: 'Test 2',
          pending: false,
          tooManyResults: true,
          totalFeatureCount: 351,
        },
        {
          features: [
            new olFeature({
              'id': 1234,
              'label': 'D',
            }),
          ],
          id: 345,
          label: 'Test 3',
          pending: false,
        },
      ];

      queryGridController.options.mergeTabs = {
        'merged_source': ['Test 1', 'Test 2'],
      };

      $rootScope.$digest();
      $timeout.flush();
      expect(queryGridController.active).toBe(true);

      // merged source
      const gridSource1 = queryGridController.gridSources['merged_source'];
      expect(gridSource1).toBeDefined();
      expect(gridSource1.configuration).toBeDefined();
      expect(gridSource1.source.tooManyResults).toBe(true);
      expect(gridSource1.source.totalFeatureCount).toBe(353);
      expect(gridSource1.source.features.length).toBe(2);

      // grid source 3
      const gridSource3 = queryGridController.gridSources['Test 3'];
      expect(gridSource3).toBeDefined();
    });
  });

  describe('#selectTab', () => {
    beforeEach(() => {
      ngeoQueryResult.total = 5;
      ngeoQueryResult.sources = [
        {
          features: [
            new olFeature({
              'osm_id': 1234,
              'name': 'A',
            }),
          ],
          id: 123,
          label: 'Test 1',
          pending: false,
        },
        {
          features: [
            new olFeature({
              'id': 2345,
              'label': 'C',
            }),
          ],
          id: 345,
          label: 'Test 3',
          pending: false,
        },
      ];
      $rootScope.$digest();
      expect(queryGridController.active).toBe(true);
    });

    it('allows to switch between tabs', () => {
      $timeout.flush();
      // check that the first source is selected by default
      expect(queryGridController.selectedTab).toBe('Test 1');
      expect(queryGridController.features_.item(0).get('name')).toBe('A');
      expect(queryGridController.highlightFeatures_.getLength()).toBe(0);

      // select the 2nd source
      queryGridController.selectTab(queryGridController.gridSources['Test 3']);
      expect(queryGridController.selectedTab).toBe('Test 3');
      expect(queryGridController.features_.item(0).get('label')).toBe('C');
      expect(queryGridController.highlightFeatures_.getLength()).toBe(0);
    });

    it('remembers selected rows when switching tabs', () => {
      const gridSource1 = queryGridController.gridSources['Test 1'];
      const row1 = gridSource1.configuration.data[0];
      gridSource1.configuration.selectRow(row1);
      $rootScope.$digest();
      $timeout.flush();

      // check that the first source is selected by default
      expect(queryGridController.selectedTab).toBe('Test 1');
      expect(queryGridController.features_.getLength()).toBe(0);
      expect(queryGridController.highlightFeatures_.item(0).get('name')).toBe('A');

      // select the 2nd source
      queryGridController.selectTab(queryGridController.gridSources['Test 3']);
      expect(queryGridController.selectedTab).toBe('Test 3');
      expect(queryGridController.features_.item(0).get('label')).toBe('C');
      expect(queryGridController.highlightFeatures_.getLength()).toBe(0);

      // and then select again source 1
      queryGridController.selectTab(queryGridController.gridSources['Test 1']);
      expect(queryGridController.selectedTab).toBe('Test 1');
      expect(queryGridController.features_.getLength()).toBe(0);
      expect(queryGridController.highlightFeatures_.item(0).get('name')).toBe('A');
    });
  });
});
