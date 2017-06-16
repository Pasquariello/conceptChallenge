const initialState = {
  data: [],
};

const Locations = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_LOCATIONS':

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
