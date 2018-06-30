import React, { Component } from 'react';
import { connect } from 'react-redux' //needed to set up connection between store and this file
import { Route, Switch, withRouter } from 'react-router-dom'

import '../stylesheets/Grid.css';

import AppBar from '../components/AppBar'
import Login from '../containers/Login'
import HomePage from './Homepage'
import NewUser from './NewUser'
import Public from '../components/Public'
import Playbook from './Playbook'

class App extends Component {
  render() {
    const routes = [
    <Route key={"main"} path="/playbook" exact render={ () => <Playbook/> }/>,
    <Route key={"home"} exact path="/home" render={ () => <HomePage/>}/>
    ]
    const login = [<Route key={"login"} path="/login" exact render={ () => <Login/>}/>,<Route key={"signup"} path="/new_account" exact render={ () => <NewUser/>}/>]
    
    return (
      <div className="App">
        <AppBar props={this.props} />
        <Switch history={this.props.history}>
          { localStorage.getItem("token") ? routes : login }
          <Route key={"default"} path="/" render={() => <Public/>}/>
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
