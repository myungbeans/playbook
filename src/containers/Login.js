import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { loginUser } from '../actions/auth-actions'
import { routeActions } from 'react-router-redux'
import { withRouter } from 'react-router-dom'

class Login extends Component {

    onSubmit = (event) => {
        event.preventDefault()
        event.persist()
        fetch("http://localhost:3000/api/v1/sessions/", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ username: event.target.username.value, password: event.target.password.value})
        })
        .then(res => res.json())
        .then(json => {
            localStorage.setItem('token', json.token);
            localStorage.setItem('id', json.id);
            this.props.history.push('/home')
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <TextField id={"username-input"} error={false} required name={"username"} label={"username"}/>
                <TextField id={"password-input"} error={false} required name={"password"} label={"password"} type={"password"}/>
                <Button type="submit" value="Login" variant={"text"}>Login</Button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return state
}

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        loginUser, ...routeActions
    }, dispatch)
}
  
export default withRouter(connect(mapStateToProps, mapActionsToProps)(Login));