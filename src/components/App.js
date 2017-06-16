import React, { Component } from 'react';
import LeafletMap from '../containers/LeafletMap';
import FormContainer from '../containers/FormContainer';

class App extends Component {
  componentDidMount() {
    this.getLocations();
  }
  getLocations() {
   this.props.fetchAllLocations();

  }
  render() {
    //have to pass in properties from dispatch to be used!
    return (
      <div className="App">
        <FormContainer />

        <LeafletMap locations={this.props.locations} markerLocations={this.props.markerLocations} />
      </div>
    );
  }
}

export default App;
