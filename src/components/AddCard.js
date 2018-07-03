import React, { Component } from 'react'
import {Card, CardActions, CardContent, CardMedia, Typography, Button, Zoom, Grid} from '@material-ui/core/';
//TextField, Paper
import '../stylesheets/index.css';
import '../stylesheets/Playcard.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { routeActions } from 'react-router-redux'
import { withRouter } from 'react-router-dom'

class AddCard extends Component {
    render() {
        return (
            <div>
                <Zoom in style={{transitionDelay: this.props.delay}}>
                    <Grid item>
                        <Card className="card">
                            <CardMedia className="media" image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    New Play
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    New Play
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

export default withRouter(connect(mapStateToProps, mapActionsToProps)(AddCard));