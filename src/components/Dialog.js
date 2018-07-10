import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { withRouter } from 'react-router-dom'

//Actions
import { routeActions } from 'react-router-redux'
import { addPlay, deletePlay } from '../actions/homepage-actions'
//Components
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { errorOnClass } from './anime'
//Fetch
import { postNewPlay } from '../APICalls'
import { destroyPlay } from '../APICalls'


class DialogBox extends Component {
    state = {
        title: "",
    }

    handleChange = (e) => {
        this.setState({title: e.target.value})
    }

    buttonSubmit = () => {
        switch(this.props.type){
            case("new"):
                return this.new()
            case("delete"):
                return this.delete()
            case("edit"):
                return this.edit()
            default:
                return console.log("Submitted blank")
        }
    }

    mapMyPlaysTitles = () => {
        return Object.values(this.props.myPlays).map(play => play.title)
    }

    new = () => {
        let play = {title: this.state.title, user_id: localStorage.getItem("id")}
        if (this.state.title && !this.mapMyPlaysTitles().includes(this.state.title)){
            postNewPlay(play)
            this.props.addPlay(this.props.myPlays, play)
            this.props.close()
        } else {
            errorOnClass("dialog-box")
            console.log("Error: title must be present and unique")
        }
    }

    delete = () => {
        destroyPlay(this.props.play_id)
        this.props.deletePlay(this.props.play_id)
        this.props.close()
    }

    edit = () => {
        // editPlay()
    }

    type = () => {
        switch(this.props.type){
            case("new"):
                return {id: "new-play-form", text: "Please enter a title:", action: "Create"}
            case("delete"):
                return {id: "delete-play-form", text: "Are you sure you want to Delete this?", action: "Delete"}
            case("edit"):
                return {id: "edit-play-form", text: "Please enter a title:", action: "Update"}
            default:
                return {id: "play-form"}
        }
    }

    render(){
        let settings = this.type()
        return (
            <Dialog className={"dialog-box"} open={this.props.open} onClose={this.props.close} aria-labelledby="form-dialog-title" maxWidth={'md'} onBackdropClick={this.props.close}>
                <DialogTitle id="form-dialog-title">New Play</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {settings.text}
                    </DialogContentText>
                    {this.props.type === 'new'? <TextField required onChange={this.handleChange} autoFocus margin="dense" id="name" label="" value={this.state.title} type="email" fullWidth /> : null}
                </DialogContent>
                <DialogActions>
                <Button onClick={this.buttonSubmit} color="primary">
                    {settings.action}
                </Button>
                <Button onClick={this.props.close} color="primary">
                    Cancel
                </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

const mapStateToProps = state => {
    return state.homepage
}

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        ...routeActions, addPlay, deletePlay
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(DialogBox));