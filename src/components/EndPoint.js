import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Draggable from 'react-draggable'

//Actions
import { selectPlayer } from '../actions/playbook-actions'
import { updatePoint } from '../actions/move-actions'
//Assets
import dashCircle2 from '../assets/PlayerTokens/dashCircle2.png'
//Fetch Calls
import { persistCoords } from '../APICalls'

class EndPoint extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeDrags: 0,
            controlledPosition: {
                x: this.props.ownProps.endX, y: this.props.ownProps.endY
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
        return this.props.players.selectedPlayer === this.props.ownProps.player_id
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

        let playerInfo = this.findPlayer()
        let move = this.props.ownProps
        move.endX = x
        move.endY = y
        persistCoords({
            player: {
                id: playerInfo.player_id,
                name: playerInfo.player.name,
                moves_attributes: 
                    [{...move, endX: x, endY: y, order: this.props.moves.moveIndex}]
            }
        }, () => this.props.updatePoint( this.props.moves.points, {...move}))
    }

    findPlayer = () => {
        return {
            player_id: this.props.ownProps.player_id,
            player: this.props.players.roster[this.props.ownProps.player_id]
        }
    }

    render(){
        const {controlledPosition} = this.state;
        return (
            <Draggable onStart={this.onStart} onStop={this.controlledStop} position={controlledPosition} bounds={{left: 0, top: 0, right:this.props.width, bottom: this.props.height - 17}} >
                <img src={dashCircle2} style={this.style} alt="EndPoint Token"/>
            </Draggable>
        )
    }
}

//Params for Redux
const mapStateToProps = (state) => {
    return state
}

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        selectPlayer, updatePoint
    }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(EndPoint)