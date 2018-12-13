import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import {Map, TileLayer, Popup, GeoJSON, FeatureGroup, Circle} from 'react-leaflet';
import './MainMap.css';
import $ from "jquery";
import geojson from '../geojson/nord_trondelag.json';
// store the map configuration properties in an object,
// we could also move this to a separate file & import it if desired.
let config = {};
config.params = {
  center: [63.43,10.4],
  zoomControl: false,
  zoom: 12,
  scrollwheel: false,
  legends: true,
  infoControl: false,
  attributionControl: true
};
config.tileLayer = {
  uri: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  params: {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    id: '',
    accessToken: ''
  }
};

export function get_newgeojson(new_geojson) {
  var geojson = new_geojson
  this.setState({ geojson })
}


class MainMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      tileLayer: null,
      geojsonLayer: null,
      geojson: null,
    };
    this._mapNode = null;
    this.onEachFeature = this.onEachFeature.bind(this);
    get_newgeojson = get_newgeojson.bind(this)
  }

  // code to run just after the component "mounts" / DOM elements are created
  componentDidMount() {
    // fetches the initial geojson data.
    this.getData();
     // creates the Leaflet map object
    if (!this.state.map) this.init(this._mapNode);
  }

  // code to run when the component receives new props or state.
  componentDidUpdate(prevProps, prevState) {
    console.log("Component Update")
    // Render map again if new geojson data is added.
    if (this.state.geojson !== prevState.geojson){
      this.addGeoJSONLayer(this.state.geojson);
    }

  }
  // code to run just before unmounting the component
  componentWillUnmount() {
    // this destroys the Leaflet map object & related event listeners
    this.state.map.remove();
  }

// Loads the initial geojson data. (TODO: May be removed in future)
  getData() {
    this.setState({
      geojson
    });
  }

// Adds geojson layer to map, while giving it required features and class name
  addGeoJSONLayer(geojson) {
    console.log("Add geojon layer")
    const geojsonLayer = L.geoJson(geojson, {
      onEachFeature: this.onEachFeature,
    });

    // add our GeoJSON layer to the Leaflet map object
    geojsonLayer.setStyle({'className': 'map-path'}); //will add the required class
    geojsonLayer.addTo(this.state.map);

    // store the Leaflet GeoJSON layer in our component state.
    this.setState({ geojsonLayer });
   }

  zoomToFeature(target) {
    var fitBoundsParams = {
      paddingTopLeft: [200,10],
      paddingBottomRight: [10,10]
    };
  }

  onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.NAME) {

      // assemble the HTML for the markers' popups (Leaflet's bindPopup method doesn't accept React JSX)
      const popupContent = `<h3>${feature.properties.NAME}</h3>`

      // add our popups
      layer.bindPopup(popupContent);

    }


}

  // Initializs the map
  init(id) {
    if (this.state.map) return;
    // this function creates the Leaflet map object and is called after the Map component mounts
    let map = L.map(id, config.params);
    L.control.zoom({ position: "bottomleft"}).addTo(map);
    L.control.scale({ position: "bottomleft"}).addTo(map);

    // a TileLayer is used as the "basemap"
    const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);

    // set our state to include the tile layer
    this.setState({ map, tileLayer });
  }

  render() {
    //Set the map position and zoom level
    const position = [this.state.lat, this.state.lng]

    return (
      <div id="mapUI">
         <div ref={(node) => this._mapNode = node} id="map" />
     </div>
    );
  }
}

export function reorderLayers(layers) {
  var i;
  var g = document.getElementsByTagName("g");
  for (i=layers.length; i > -1; i--){
    var map_layer = document.getElementsByClassName(layers[i]+" leaflet-interactive")[0]
    console.log(map_layer)
    $(map_layer).appendTo(g);
  }
}



export default MainMap;
