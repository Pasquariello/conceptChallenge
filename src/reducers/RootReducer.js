import { combineReducers } from 'redux';
import Locations from './LocationsReducer';
//import NewLocation from './newLocationReducer';
const RootReducer = combineReducers({
  Locations,
  //newLocation: NewLocation

});

export default RootReducer;
