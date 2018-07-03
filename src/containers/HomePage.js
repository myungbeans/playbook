// import Button from '@material-ui/core/Button'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { routeActions } from 'react-router-redux'
import { withRouter } from 'react-router-dom'
import { getPlays } from '../actions/homepage-actions'

import {Grid} from '@material-ui/core/';

import PlayCard from '../components/PlayCard'
import AddCard from '../components/AddCard'

class HomePage extends Component {

    fetchPlay = () => {
        fetch(`http://localhost:3000/api/v1/users/${localStorage.getItem("id")}/plays/`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(data => {
            this.props.getPlays(data)
        })
    }

    componentDidMount(){
        this.fetchPlay()
    }

    render() {
        let delay = 200
        const myPlays = this.props.myPlays.map(play => {
            delay = delay+100
            return <PlayCard key={play.title} delay={delay} title={play.title} play_id={play.id}/>
        })
        
        return (
            <Grid container alignContent="center" id="PlayCards-Container">
                <Grid container justify="center" id="new-card-container">
                    <AddCard delay={100}/>
                </Grid>   
                <Grid container alignItems="center" justify="center" spacing={8} id="my-cards-container">
                    {myPlays}
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return state.homepage
}

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        ...routeActions, getPlays,
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(HomePage));