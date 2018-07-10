import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { withRouter } from 'react-router-dom'
//Actions
import { routeActions } from 'react-router-redux'
import { selectPlay } from '../actions/homepage-actions'
//Components
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Zoom, Grid } from '@material-ui/core/';
import DialogBox from './Dialog'
//Fetch
// import { deletePlay } from '../APICalls'
//Stylesheets
import '../stylesheets/index.css';
import '../stylesheets/Playcard.css'

class PlayCard extends Component {
    state = {
        open: false,
        type: ""
    };

    handleClickOpen = () => {
        this.setState({ type: "delete", open: true})
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSelectPlay = () => {
        this.props.selectPlay(this.props.play_id)
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
                                <Button size="small" color="primary" onClick={this.handleSelectPlay}>
                                    Play
                                </Button>
                                <Button size="small" color="primary" onClick={this.handleClickOpen}>
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Zoom>

                <DialogBox open={this.state.open} close={this.handleClose} player_id={this.props.player_id} type={this.state.type}/>
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