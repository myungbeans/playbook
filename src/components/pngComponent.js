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
        // const { x, y } = this.state.deltaPosition;
        // this.setState({
        //     deltaPosition: {
        //         x: x+ui.deltaX,
        //         y: y+ui.deltaY,
        //     }
        // })
    }

    // controlledDrag = (e, position) => {
    //     e.preventDefault()
    //     e.stopPropagation()
        
    // }

    controlledStop = (e, position) => {
        const {x, y} = position;
        this.setState({controlledPosition: {x, y}})
        this.onStop()
    }

    //POST the new coordinates
    // fetch(http:`//localhost:3000/api/v1/players/${this.props.id}`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type" : "application/json"
        //     },
        //     body: JSON.stringify({ x:625, y:370 })
        // })
        // .then(res => res.json())
        // .then(json => {
        // this.props.addPlayer({...json})
        // })

    clickedPlayer = () => {
        console.log("Clicked")
        // this.setState({ clicked: true})
        this.props.selectPlayer(this.props.id)
    }

    render(){
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop}
        const {controlledPosition} = this.state;
        //TODO: bounds need to account for window resizing after the initial grid has been renderd. Might be fixed once the grid size becomes responsive to window size

        console.log("POSITION", this.state)
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