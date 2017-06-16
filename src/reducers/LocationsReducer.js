const initialState = {
  data: [],
};

const Locations = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_LOCATIONS':


// const locationsArray = state.data.concat(action.data)
// localStorage.setItem('locations', JSON.stringify(locationsArray));
// console.log(locationsArray)

      // store an array of locations to state
      return Object.assign({}, state, {
        data: state.data.concat(action.data),
        //data: locationsArray,
      });
    default:
    console.log('missed action type');
      return state;
  }
};

export default Locations;
