import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../style/App.css';
import { fetchAllLocations } from '../actions/locationActions';
import App from '../components/App';
//import Marker from '../components/Marker'

const mapStateToProps = (state) => {
  return {
    locations: state.Locations.data,
    markerLocations: state.MarkerLocations
   };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAllLocations }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
