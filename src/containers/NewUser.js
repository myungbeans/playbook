import React, { Component } from 'react'
import {Paper, Typography, TextField, Button, Fade} from '@material-ui/core/';
import '../stylesheets/index.css';

import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'
import { withRouter } from 'react-router-dom'

import { createUser } from '../actions/auth-actions'

class NewUser extends Component {
    state = {
        toggle: true,
        inOut: {enter: 2000, exit:1000}
    }

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
            //TODO: Check for error messages on the response
            //TODO: fadeout effect
            // localStorage.setItem('token', data.token)
            // localStorage.setItem('id', data.id)
            this.props.history.push('/login')
        })
    }

    redirectToLogin = () => {
        this.props.history.push('/login')
    }

    render() {
        console.log(this.props)
        return (
            <div className='outer-div-create-user'>
                <Fade in={this.state.toggle} timeout={this.state.inOut} >
                <Paper className='Input-Paper'elevation={1}>
                    <form onSubmit={this.onSubmit}>
                        <TextField required error={false} id="username-input" label="username" name="username" margin="normal"/><br />
                        <TextField required error={false} id="email-input" label="email" name="email" margin="normal"/><br />
                        <TextField required error={false} id="password-input" label="password" name="password" margin="normal" type="password"/><br />
                        <br />
                        <Button type="submit" variant='contained' color='primary'> Create User </Button>
                    </form>
                    <br />
                    <p onClick={this.redirectToLogin}><Typography variant="caption">Already have an Account? Click to Login</Typography></p>
                </Paper>
                </Fade>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        createUser, ...routeActions
    }, dispatch)
}
  
export default withRouter(connect(mapStateToProps, mapActionsToProps)(NewUser));