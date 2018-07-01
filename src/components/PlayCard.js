import React, { Component } from 'react'
import {Card, CardActions, CardContent, CardMedia, Paper, Typography, TextField, Button, Zoom, Grid} from '@material-ui/core/';

import '../stylesheets/index.css';
import '../stylesheets/Playcard.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { routeActions } from 'react-router-redux'
import { withRouter } from 'react-router-dom'

class PlayCard extends Component {
    render() {
        console.log(this.props)
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
                                <Button size="small" color="primary">
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
        ...routeActions
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(PlayCard));