import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectPlayer, updateEndPoint } from '../actions/playbook-actions'
import Draggable from 'react-draggable'

// import emptyCircle from '../assets/PlayerTokens/emptyCircle.png'
// import selectedCircle from '../assets/PlayerTokens/selectedCircle.png'
import dashCircle from '../assets/PlayerTokens/dashCircle.png'

class EndPoint extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeDrags: 0,
            controlledPosition: {
                x: this.props.moveSettings.endX, y: this.props.moveSettings.endY
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
        return this.props.players.selectedPlayer === this.props.moveSettings.player_id
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
        this.onStop()
        //TODO: consider making coords based on % of screen so as to maintain ratio when zooming
        this.persistEndCoords({x, y})
    }

    persistEndCoords = ({x, y}) => {
        fetch(`http://localhost:3000/api/v1/moves/${this.props.move_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ endX:x, endY:y })
        })
        .then(() => this.props.updateEndPoint({moveIndex: this.props.players.moveIndex, player_id: this.props.player_id, oldMoves: [...this.props.players.roster[this.props.player_id].moves], x, y}))
    }

    render(){
        const {controlledPosition} = this.state;
        //TODO: bounds need to account for window resizing after the initial grid has been renderd. Might be fixed once the grid size becomes responsive to window size
        return (
            <Draggable onStart={this.onStart} onStop={this.controlledStop} position={controlledPosition} bounds={{left: 0, top: 0, right:this.props.width, bottom: this.props.height - 17}} >
                <img src={dashCircle} style={this.style} alt="EndPoint Token"/>
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
        selectPlayer, updateEndPoint
    }, dispatch)
}
// updateEndPoint

export default connect(mapStateToProps, mapActionsToProps)(EndPoint)