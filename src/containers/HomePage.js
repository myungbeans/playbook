// import Button from '@material-ui/core/Button'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { routeActions } from 'react-router-redux'
import { withRouter } from 'react-router-dom'

//Actions
import { getPlays } from '../actions/homepage-actions'
import { handleError } from '../actions/settings-actions'
//Components
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
            data.errors ? this.props.handleError(data) : this.props.getPlays(data)
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
            <Grid style={{paddingTop:"50px"}} container alignContent="center" id="PlayCards-Container">
                <Grid container justify="center" id="new-card-container">
                    <AddCard delay={100}/>
                </Grid>   
                <Grid container style={{paddingTop:"50px"}} alignItems="center" justify="center" spacing={8} id="my-cards-container">
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
        ...routeActions, getPlays, handleError
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(HomePage));