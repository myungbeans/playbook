import React, { Component } from 'react'

export default class HomePage extends Component {

    getPlays = () => {
        fetch(`http:localhost:3000/users/${localStorage.getItem("id")}plays/`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(data => {
            //action to set the plays to store
        })
    }

    render() {
        return (
            <h1> HOMEPAGE </h1>
        )
    }
}