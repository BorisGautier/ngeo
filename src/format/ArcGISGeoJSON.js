import {includes as olArrayIncludes} from 'ol/array.js';
import olFormatGeoJSON from 'ol/format/GeoJSON.js';


/**
 * @typedef {import("geojson").GeoJSON} GeoJSONObject
 * @typedef {import("geojson").FeatureCollection} GeoJSONFeatureCollection
 */


/**
 * @typedef {Object} Options
 * // Properties for ArcGISGeoJSON
 * @property {Array<string>} [layers] If set, only features of the given layers will be returned by the format when read.
 * // Properties from GeoJSON
 * @property {import("ol/proj.js").ProjectionLike} [dataProjection='EPSG:4326'] Default data projection.
 * @property {import("ol/proj.js").ProjectionLike} [featureProjection] Projection for features read or
 * written by the format.  Options passed to read or write methods will take precedence.
 * @property {string} [geometryName] Geometry name to use when creating features.
 * @property {boolean} [extractGeometryName=false] Certain GeoJSON providers include
 * the geometry_name field in the feature GeoJSON. If set to `true` the GeoJSON reader
 * will look for that field to set the geometry name. If both this field is set to `true`
 * and a `geometryName` is provided, the `geometryName` will take precedence.
 */


/**
 * @const
 * @type {string}
 */
const layerIdentifier = 'layerName';


class ArcGISGeoJSON extends olFormatGeoJSON {

  /**
   * @param {Options=} opt_options Options.
   */
  constructor(opt_options) {

    const options = opt_options ? opt_options : {};

    super(opt_options);

    /**
     * @private
     * @type {Array<string>}
     */
    this.layers_ = options.layers ? options.layers : null;
  }

  /**
   * @return {Array<string>} layers
   */
  getLayers() {
    return this.layers_;
  }

  /**
   * @param {Array<string>} layers Layers to parse.
   */
  setLayers(layers) {
    this.layers_ = layers;
  }

  /**
   * @param {Object} object Object.
   * @param {import("ol/format/Feature.js").ReadOptions=} opt_options Read options.
   * @protected
   * @return {Array<import('ol/Feature.js').default<import("ol/geom/Geometry.js").default>>} Features.
   * @override
   */
  readFeaturesFromObject(object, opt_options) {
    const geoJSONObject = /** @type {GeoJSONObject} */ (object);
    /** @type {Array<import('ol/Feature.js').default<import("ol/geom/Geometry.js").default>>} */
    const features = [];
    let geoJSONFeatures = null;
    if (geoJSONObject['type'] === 'FeatureCollection') {
      const geoJSONFeatureCollection = /** @type {GeoJSONFeatureCollection} */ (object);
      geoJSONFeatures = geoJSONFeatureCollection['features'];
    } else {
      geoJSONFeatures = [object];
    }
    for (let i = 0, ii = geoJSONFeatures.length; i < ii; ++i) {
      const layerName = geoJSONFeatures[i][layerIdentifier];
      // Exclude feature if its layer name is not set among the layers
      if (this.layers_ && !olArrayIncludes(this.layers_, layerName)) {
        continue;
      }
      features.push(this.readFeatureFromObject(geoJSONFeatures[i], opt_options));
    }
    return features;
  }
}


export default ArcGISGeoJSON;
