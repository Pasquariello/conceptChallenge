const initialState = {
  data: [],

};
let markerArray = []
const MarkerLocations = (state = initialState, action) => {
  switch (action.type) {
    case 'MARKER_SELECTED':

markerArray.push(action.data.latlng)



//WORK IN PROGRESS
// let last_element = markerArray[markerArray.length - 1];
// var index = markerArray.indexOf(action.data.latlng);
// var lastIndef = markerArray.lastIndexOf(action.data.latlng);
// console.log('lastIndex ' + lastIndef)
// console.log(index + ' index')
// if (lastIndef != index) {
//     markerArray.splice(action.data.latlng, 1);
// }

// for(var i = markerArray.length-1; i--;){
//   console.log(markerArray[i])
// 	if (markerArray[i] === action.data.latlng){
//     markerArray.splice(markerArray[i], );
//   }
// }

      return [markerArray]
    }

    console.log('missed action type for MARKER_SELECTED');
      return state;
  }




export default MarkerLocations;
