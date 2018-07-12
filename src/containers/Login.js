import React, { Component } from 'react'
import {Paper, Typography, TextField, Button, Fade } from '@material-ui/core/';
import '../stylesheets/index.css';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { routeActions } from 'react-router-redux'
import { withRouter } from 'react-router-dom'

import { handleError } from '../actions/settings-actions'

class Login extends Component {
    state = {
        toggle: true,
        inOut: {enter: 1000, exit:1000}
    }
    
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
        .then(data => {
            if(data.errors){
                console.log(data.errors)
                this.props.handleError(data)
            } else { 
                this.setState({...this.state, toggle: false})
                localStorage.setItem('token', data.token);
                localStorage.setItem('id', data.id);
                setTimeout(()=> this.props.history.push('/home'), 1000)
            }
        })
    }

    redirectToSignup = () => {
        this.props.history.push('/new_account')
    }

    render() {
        return (
            <div id="login-form" className='outer-div'>
                <Fade in={this.state.toggle} timeout={this.state.inOut} >
                <Paper className='Input-Paper'elevation={1}>
                    <form onSubmit={this.onSubmit}>
                        <TextField required error={false} id="username-input" label="username" name="username" margin="normal"/><br />
                        <TextField required error={false} id="password-input" label="password" name="password" margin="normal" type="password"/><br />
                        <br />
                        <Button type="submit" variant='contained' color='secondary'> Log in </Button>
                    </form>
                    <br />
                    <p onClick={this.redirectToSignup}><Typography variant="caption">Don't Have an Account? Create one here</Typography></p>
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
        ...routeActions, handleError
    }, dispatch)
}
  
export default withRouter(connect(mapStateToProps, mapActionsToProps)(Login));