import React, { Component } from 'react'
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'
import { withRouter } from 'react-router-dom'

//Actions
import { handleError } from '../actions/settings-actions'
//Components
import {Paper, Typography, TextField, Button, Fade} from '@material-ui/core/';
//Stylesheets
import '../stylesheets/index.css';


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
            data.errors ? this.props.handleError(data) : this.redirectToLogin()
        })
    }

    redirectToLogin = () => {
        this.props.history.push('/login')
    }

    render() {
        return (
            <div className='outer-div-create-user'>
                <Fade in={this.state.toggle} timeout={this.state.inOut} >
                <Paper className='Input-Paper'elevation={1}>
                    <form onSubmit={this.onSubmit}>
                        <TextField required error={false} id="username-input" label="username" name="username" margin="normal"/><br />
                        <TextField required error={false} id="email-input" label="email" name="email" margin="normal"/><br />
                        <TextField required error={false} id="password-input" label="password" name="password" margin="normal" type="password"/><br />
                        <br />
                        <Button type="submit" variant='contained' color='secondary'> Create User </Button>
                    </form>
                    <br />
                    <p onClick={this.redirectToLogin}><Typography color='secondary' variant="caption">Already have an Account? Click to Login</Typography></p>
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
  
export default withRouter(connect(mapStateToProps, mapActionsToProps)(NewUser));