import React, { Component } from 'react'
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import { selectPlayer } from '../actions/settings-actions'
import Draggable from 'react-draggable'

import emptyCircle from '../assets/PlayerTokens/emptyCircle.png'
import selectedCircle from '../assets/PlayerTokens/selectedCircle.png'

class Png extends Component {
    state = {
        clicked: false,
        activeDrags: 0,
        controlledPosition: {
            x: this.props.x, y: this.props.y
        },
    }
    
    style ={
        backgroundColor: "transparent",
        height: this.props.dimension,
        width: this.props.dimension,
        position: "absolute",
    }

    onStart = (e) => {
        e.preventDefault()
        this.setState({activeDrags: this.state.activeDrags + 1})
    }

    onStop = () => {
        this.setState({activeDrags: this.state.activeDrags - 1})
    }

    handleDrag = (e,ui) => {
        e.preventDefault()
        e.stopPropagation()
    }

    controlledStop = (e, position) => {
        const {x, y} = position;
        this.setState({controlledPosition: {x, y}})

        //TODO: consider making coords based on % of screen so as to maintain ratio when zooming

        this.onStop()
        this.persistCoords()
    }

    persistCoords = () => {
        console.log(this.state.controlledPosition)
        const {x, y} = this.state.controlledPosition
        fetch(`http://localhost:3000/api/v1/players/${this.props.player_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ x:x, y:y })
        })
    }

    clickedPlayer = () => {
        console.log("Clicked")
        // this.setState({ clicked: true})
        this.props.selectPlayer(this.props.id)
    }

    render(){
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop}
        const {controlledPosition} = this.state;
        //TODO: bounds need to account for window resizing after the initial grid has been renderd. Might be fixed once the grid size becomes responsive to window size
        return (
            <Draggable {...dragHandlers} onStop={this.controlledStop} position={controlledPosition} bounds={{left: 0, top: 0, right:this.props.width, bottom: this.props.height - 17}} >
                <img src={emptyCircle} style={this.style} alt="Player Token"/>
            </Draggable>
        )
    }
}

//Params for Redux
const mapStateToProps = state => {
    return state.settings
}

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        selectPlayer
    }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(Png)