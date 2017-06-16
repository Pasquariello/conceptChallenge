import { combineReducers } from 'redux';
import Locations from './LocationsReducer';
import MarkerLocations from './markerLocations';
const RootReducer = combineReducers({
  Locations,
  MarkerLocations

});

export default RootReducer;
