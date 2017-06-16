import React, { Component } from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet'
import tealdot from '../imgs/tealdot.svg'
import { connect } from 'react-redux';


class MapMarker extends Component {

submitMarker(data){
  //console.log(data.latlng)
  this.props.saveMarker(data);
}


  render() {
    let icon = L.icon({
      iconUrl: tealdot,
      iconSize: [15, 15]
    });

    return (
      <div className="marker-container">
          <Marker
            position={this.props.location}
            icon={icon}
            onClick={(e) => this.submitMarker(e, {
              position: this.position,
              })}
          >
            <Tooltip
              sticky
              interactive
            >
              <div>
                <h4>{this.props.name}</h4>
              </div>
            </Tooltip>
          </Marker>
        </div>


    )
  }
}

//need to upgrade this to a container component
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) =>{
  //Whenever saveMarker is called, the result should be passed to all of our reducers
  // return bindActionCreators({saveMarker: saveMarker }, dispatch)
  return {
    saveMarker: (data) => {
        //console.log('A marker has been selected', data);
      dispatch({
        type: 'MARKER_SELECTED',
        data: data,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapMarker);
