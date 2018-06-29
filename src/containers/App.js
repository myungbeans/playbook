import React, { Component } from 'react';
import { connect } from 'react-redux' //needed to set up connection between store and this file
import { Route, Switch, withRouter } from 'react-router-dom'

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
        <AppBar props={this.props} />
        <Switch history={this.props.history}>
          <Route path="/playbook" exact render={ () => <div><GridContainer/><CustomMenuContainer/></div> }/>
          <Route path="/login" exact render={ () => <Login/>}/>
          <Route path="/new_account" exact render={ () => <NewUser/>}/>
          <Route exact path="/home" render={ () => <HomePage/>}/>
        </Switch>
      </div>
    );
  }
}


//Redux functions
const mapStateToProps = state => {
  return state 
}

export default withRouter(connect(mapStateToProps)(App));
