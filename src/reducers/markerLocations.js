const initialState = {
  data: [],

};
let markerArray = []
const MarkerLocations = (state = initialState, action) => {
  switch (action.type) {
    case 'MARKER_SELECTED':

markerArray.push(action.data.latlng)
      return [markerArray]
    }

    console.log('missed action type for MARKER_SELECTED');
      return state;
  }




export default MarkerLocations;
