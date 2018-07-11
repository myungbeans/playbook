import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { withRouter } from 'react-router-dom'

//Actions
import { routeActions } from 'react-router-redux'
import { addPlay, getPlays } from '../actions/homepage-actions'
import { handleError } from '../actions/settings-actions'
//Components
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { errorOnClass, shrinkOnID } from './anime'
//Fetch
import { postNewPlay } from '../APICalls'


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
                return this.props.handleError({errors: ["Submitted a blank Title"]})
        }
    }

    mapMyPlaysTitles = () => {
        return Object.values(this.props.myPlays).map(play => play.title.toLowerCase())
    }

    verifyTitle = (title) => {
        if (this.state.title && !this.mapMyPlaysTitles().includes(this.state.title.toLowerCase()) && !!this.state.title.replace(/\s/g,'')){
            return true
        }
        return false
    }

    new = () => {
        let play = {title: this.state.title, user_id: localStorage.getItem("id")}
        if (this.verifyTitle()){
            postNewPlay(play, (play)=>this.props.addPlay(this.props.myPlays, play))
            this.setState({title: ""})
            this.props.close()
        } else {
            errorOnClass("dialog-box")
            let errorMsg = {errors: []}
            !this.state.title ? errorMsg.errors.push("Please enter a title.") : errorMsg.errors.push("Titles must be unique.")
            this.props.handleError(errorMsg)
        }
    }

    delete = () => {
        this.props.close()
        shrinkOnID(this.props.card_id)
        fetch(`http://localhost:3000/api/v1/plays/${this.props.play_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json",
            "Authorization": localStorage.getItem("token")
        },
        })
        .then(()=> {
            let newPlays = this.props.myPlays
            let play = newPlays.find(play => play.id === this.props.play_id)
            if (newPlays.length === 1){
                newPlays = []
            } else if (play){
                newPlays.splice(newPlays.indexOf(play), 1);
            }
            return this.props.getPlays(newPlays)
        })
    }

    edit = () => {
        // editPlay()
    }

    type = () => {
        switch(this.props.type){
            case("new"):
                return {title: "New Play", text: "Please enter a title:", action: "Create"}
            case("delete"):
                return {title: `Delete ${this.props.title}`, text: "Are you sure you want to Delete this?", action: "Delete"}
            case("edit"):
                return {title: `Edit ${this.props.title}`, text: "Please enter a title:", action: "Update"}
            default:
                return {title: "play-form"}
        }
    }

    render(){
        let settings = this.type()
        return (
            <Dialog className={"dialog-box"} open={this.props.open} onClose={this.props.close} aria-labelledby="form-dialog-title" maxWidth={'md'} onBackdropClick={this.props.close}>
                <DialogTitle id="form-dialog-title">{settings.title}</DialogTitle>
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
        ...routeActions, addPlay, handleError, getPlays
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(DialogBox));