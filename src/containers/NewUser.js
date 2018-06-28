import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { createUser } from '../actions/auth-actions'

class NewUser extends Component {

    onSubmit = (event) => {
        event.preventDefault()
        event.persist()
        fetch("http://localhost:3000/api/v1/users/", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ username: event.target.username.value, password: event.target.password.value, email: event.target.email.value})
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data.token)
            localStorage.setItem('id', data.id)
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <TextField id={"username-input"} error={false} required name={"username"} label={"username"}/>
                <TextField id={"email"} error={false} required name={"email"} label={"email"}/>
                <TextField id={"password-input"} error={false} required name={"password"} label={"password"} type={"password"}/>
                <Button type="submit" value="Login" variant={"text"}>Create User</Button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return state
}

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        createUser
    }, dispatch)
}
  
export default connect(mapStateToProps, mapActionsToProps)(NewUser);