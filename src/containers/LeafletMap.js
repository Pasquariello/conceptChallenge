import React, { Component } from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';
import AllMarkers from './AllMarkers'

class LeafletMap extends Component {

  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render() {
    console.log(this.props.locations)
  const locationsArray = this.props.locations
    console.log(locationsArray)

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
          //center={[last_element.lat, last_element.lng]}
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
        </Map>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    locations: state.Locations.data,
    newLocation: state.newLocation

   }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}


export default LeafletMap;
