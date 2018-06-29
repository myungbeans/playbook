// import Button from '@material-ui/core/Button'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { routeActions } from 'react-router-redux'
import { withRouter } from 'react-router-dom'

import {Grid} from '@material-ui/core/';

import PlayCard from '../components/PlayCard'
import AddCard from '../components/AddCard'

class HomePage extends Component {

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
            <Grid container alignContent="center" id="PlayCards-Container">
                <Grid container justify="center" id="new-card-container">
                    <AddCard/>
                </Grid>   
                <Grid container alignItems="center" sm justify="center" spacing={12} id="my-cards-container">
                    {/*TODO: Map this ish*/}
                    <PlayCard delay={500}/>
                    <PlayCard delay={600}/>
                    <PlayCard delay={700}/>
                    <PlayCard delay={800}/>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return state
}

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        ...routeActions
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(HomePage));