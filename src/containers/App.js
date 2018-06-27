import React, { Component } from 'react';
import { connect } from 'react-redux' //needed to set up connection between store and this file

import '../stylesheets/Grid.css';

import AppBar from '../components/AppBar'
import GridContainer from './GridContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar/>
        <GridContainer/>
      </div>
    );
  }
}


//Redux functions
const mapStateToProps = state => {
  return state 
}

export default connect(mapStateToProps)(App);
