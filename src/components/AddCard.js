import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { withRouter } from 'react-router-dom'

//Actions
import { routeActions } from 'react-router-redux'
import { addPlay } from '../actions/homepage-actions'
//Components
import { Card, CardActions, CardContent, CardMedia, Typography, Zoom, Grid } from '@material-ui/core/';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
//Fetch
import { postNewPlay } from '../APICalls'
//Stylesheets
import '../stylesheets/index.css';
import '../stylesheets/Playcard.css'

class AddCard extends Component {
    state = {
        open: false,
        title: "",
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    newPlay = () => {
        console.log(this.state.title, localStorage.getItem("id"))
        let play = {title: this.state.title, user_id: localStorage.getItem("id")}
        postNewPlay(play)
        this.props.addPlay(this.props.myPlays, play)
        this.handleClose()
    }

    handleChange = (e) => {
        this.setState({title: e.target.value})
    }
    
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
                                <Button onClick={this.handleClickOpen} size="small" color="primary">
                                    New Play
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Zoom>

                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title" maxWidth={'md'} onBackdropClick={this.handleClose}>
                    <DialogTitle id="form-dialog-title">New Play</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter the name of your play:
                        </DialogContentText>
                        <TextField onChange={this.handleChange} autoFocus margin="dense" id="name" label="" value={this.state.name} type="email" fullWidth />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.newPlay} color="primary">
                        Create
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state.homepage
}

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        ...routeActions, addPlay
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(AddCard));