import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { withRouter } from 'react-router-dom'

//Actions
import { routeActions } from 'react-router-redux'
// import { addPlay } from '../actions/homepage-actions'
//Components
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Zoom, Grid } from '@material-ui/core/';
import DialogBox from './Dialog'
//Fetch
import { postNewPlay } from '../APICalls'
//Stylesheets
import '../stylesheets/index.css';
import '../stylesheets/Playcard.css'

class AddCard extends Component {
    state = {
        open: false,
        type: ""
    };

    handleClickOpen = () => {
        this.setState({ type: "new", open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    
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

                <DialogBox open={this.state.open} close={this.handleClose} type={this.state.type}/>
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