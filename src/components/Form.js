import React, { Component } from 'react';


class Form extends Component {
  submitForm(e, data) {
    e.preventDefault();
    this.props.saveLocation(data);
    //put data into local storage now since I do no thave server side service set up to handle yet
    let locationData = JSON.parse(localStorage.getItem('locations'))
    locationData.push(data)
    localStorage.setItem('locations', JSON.stringify(locationData))
    //clear form when done - refactor
    this.name.value="";
    this.lat.value="";
    this.lng.value="";

  }


  render() {

    return (
      <form className="form">
        <label>
          Name
          <input
            ref={(input) => { this.name = input }}
            type="text"
          />
        </label>
        <label>
          Lat
          <input
            ref={(input) => { this.lat = input }}
            type="number"
          />
        </label>
        <label>
          Lon
          <input

            ref={(input) => { this.lng = input }}
            type="number"/>
        </label>
        <button
          type="submit"
          onClick={(e) => this.submitForm(e, {
            name: this.name.value,
            lat: Number(this.lat.value),
            lng: Number(this.lng.value)
          })}
        >
            Save
        </button>
      </form>
    );
  }
}


export default Form;
