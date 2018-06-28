import React, { Component } from 'react';
import { connect } from 'react-redux' //needed to set up connection between store and this file
import { Route, Switch} from 'react-router-dom'

import '../stylesheets/Grid.css';

import AppBar from '../components/AppBar'
import GridContainer from './GridContainer'
import CustomMenuContainer from './CustomMenuContainer';
import Login from '../containers/Login'
import HomePage from './HomePage'
import NewUser from './NewUser'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar/>
        <Switch>
          <Route path="/playbook" render={ () => <div><GridContainer/><CustomMenuContainer/></div> }/>
          <Route path="/login" render={ () => <Login/>}/>
          <Route path="/create_account" render={ () => <NewUser/>}/>
          <Route path="/" exact render={ () => <HomePage/> }/>
        </Switch>
      </div>
    );
  }
}


//Redux functions
const mapStateToProps = state => {
  return state 
}

export default connect(mapStateToProps)(App);
