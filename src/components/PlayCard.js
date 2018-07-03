import React, { Component } from 'react'
import {Card, CardActions, CardContent, CardMedia, Typography, Button, Zoom, Grid} from '@material-ui/core/';
//Paper, TextField
import '../stylesheets/index.css';
import '../stylesheets/Playcard.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { routeActions } from 'react-router-redux'
import { withRouter } from 'react-router-dom'
import { selectPlay } from '../actions/homepage-actions'

class PlayCard extends Component {
    handleClick = () => {
        this.props.selectPlay(this.props.play_id) //TODO: REFACTOR --> play_id stored in localstorage. Maybe implement a check system to check localStorage vs storre
        localStorage.setItem("selectedPlay", this.props.play_id)
        this.props.history.push('/playbook')
    }

    render() {
        return (
            <div>
                <Zoom in style={{transitionDelay: this.props.delay}}>
                    <Grid sm item>
                        <Card className="card">
                            <CardMedia className="media" image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    {this.props.title}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" onClick={this.handleClick}>
                                    Play
                                </Button>
                                <Button size="small" color="primary">
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Zoom>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state.homepage
}

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        ...routeActions, selectPlay
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(PlayCard));