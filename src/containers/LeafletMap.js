import React, { Component } from 'react';
import { Map, TileLayer, ZoomControl, Polygon } from 'react-leaflet';
import AllMarkers from './AllMarkers'
//import PolygonMaker from '../components/polygon';
//import L from 'leaflet'

class LeafletMap extends Component {

  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render() {
    console.log(this.props.markerLocations[0])
    //let positionsArray = this.props.markerLocations
    //console.log(positionsArray[0])
    let polyArray = ''
  if(this.props.markerLocations[0]){
      //console.log(positionsArray[0][0].lat)

    let temp = []
    polyArray = this.props.markerLocations[0].map((polyPoint, i) => {

      temp.push([polyPoint.lat, +polyPoint.lng])
      //console.log(temp)
      //console.log([polyPoint.lat, +polyPoint.lng])
      return (
        <Polygon
          key={i}
          positions={temp}
        />
      )
    })
  }

  const locationsArray = this.props.locations
  let center = [39.750809, -104.996810];

  var last_element = locationsArray[locationsArray.length - 1];
  if(last_element) {
    center = [last_element.lat, last_element.lng];
  }


    return (
      <div className="map-container">
        <Map
          className="map"
          zoomControl={false}
          center={center}
          zoom={4}
          maxBounds={[[85, 100], [-85, -280]]}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            maxZoom={10}
            minZoom={2}
          />
          <ZoomControl
            position="bottomright"
          />

          <AllMarkers />

           <div>
           {polyArray}
           </div>
        </Map>
      </div>
    );
  }
}



export default LeafletMap;
