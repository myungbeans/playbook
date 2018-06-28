import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default class Login extends Component {
    onSubmit = (e) => {
        e.preventDefault()

        console.log("Logging in!")
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <TextField error={false} required name={"Username"} label={"Username"}/>
                <TextField id={"password-input"} type={"password"} error={false} required name={"Password"} label={"Password"}/>
                <Button type="submit" value="Login" variant={"text"}>Login</Button>
            </form>
        )
    }
}