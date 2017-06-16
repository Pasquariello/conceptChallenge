require('isomorphic-fetch');


const storeAllLocations = (locations) => {

  return {
    type: 'STORE_LOCATIONS',
    data: locations.locations,
  };
};

const fetchAllLocations = () => {
  return (dispatch) => {
    return fetch('/locations', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
//this is the returne result of the service call
      .then(locations => locations.json())
      //this is the result of the locations.json() promise
      .then(json => {
        let saved = JSON.parse(localStorage.getItem('locations'));
        //remove this part once backend server storage hooked up
        json.locations = json.locations.concat(saved)
        dispatch(storeAllLocations(json))
      });
  };

};


export { fetchAllLocations }
