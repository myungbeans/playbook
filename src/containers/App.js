import React, { Component } from 'react';
import { connect } from 'react-redux' //needed to set up connection between store and this file
import { bindActionCreators } from 'redux' 
import { Route, Switch, withRouter } from 'react-router-dom'
import '../stylesheets/Grid.css';

//Actions
import { toggleError, errorMsg } from '../actions/settings-actions'
//Components
import AppBar from '../components/AppBar'
import Login from '../containers/Login'
import HomePage from '../containers/HomePage'
import NewUser from './NewUser'
import Public from '../components/Public'
import Playbook from './Playbook'
import CustomizedSnackbars from '../components/Snackbar'
import { Snackbar } from '../../node_modules/@material-ui/core';

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
          { localStorage.getItem("token") === "undefined" || !localStorage.getItem("token") ? login : routes }
          <Route key={"default"} path="/" render={() => <Public/>}/>
        </Switch>
        <Snackbar/>
        <CustomizedSnackbars/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state 
}

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
      toggleError, errorMsg
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(App));