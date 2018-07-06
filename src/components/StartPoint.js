import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectPlayer, updatePlayer, updateStartPoint } from '../actions/playbook-actions'
import Draggable from 'react-draggable'

import emptyCircle from '../assets/PlayerTokens/emptyCircle.png'
import selectedCircle from '../assets/PlayerTokens/selectedCircle.png'

class StartPoint extends Component {
    constructor(props) {
        super(props)

        this.state = {
            disabled: true,
            activeDrags: 0,
            controlledPosition: {
                x: this.props.x, y: this.props.y
            },
        }
    }
    
    style ={
        backgroundColor: "transparent",
        height: this.props.dimension,
        width: this.props.dimension,
        position: "absolute",
    }

    verifySelectedPlayer = () => {
        return this.props.players.selectedPlayer === this.props.player_id
    }

    imgSrc = () => {
        return this.verifySelectedPlayer() ? selectedCircle : emptyCircle
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
        this.persistCoords({x, y})
    }

    selectPlayer = (e) => {
        e.preventDefault()
        e.stopPropagation()
        return this.verifySelectedPlayer() ? null : this.props.selectPlayer(this.props.player_id)
    }

    persistCoords = ({x, y}) => {
        fetch(`http://localhost:3000/api/v1/players/${this.props.player_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ x:x, y:y })
        })
        .then(() => this.props.updatePlayer({id: this.props.player_id,x,y}))
        .then(() => this.props.updateStartPoint({moveIndex: this.props.players.moveIndex, player_id: this.props.player_id, oldMoves: [...this.props.players.roster[this.props.player_id].moves], x, y}))
        // .then(() => this.props.update)
    }

    render(){
        const {controlledPosition} = this.state;

        //TODO: bounds need to account for window resizing after the initial grid has been renderd. Might be fixed once the grid size becomes responsive to window size
        return (
            <Draggable onStart={this.onStart} onStop={this.controlledStop} position={controlledPosition} bounds={{left: 0, top: 0, right:this.props.width, bottom: this.props.height - 17}} >
                <img onMouseEnter={this.selectPlayer} src={this.imgSrc()} style={this.style} alt="Player Token"/>
            </Draggable>
        )
    }
}

//Params for Redux
const mapStateToProps = state => {
    return state
}

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        selectPlayer, updatePlayer, updateStartPoint
    }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(StartPoint)