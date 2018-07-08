import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Draggable from 'react-draggable'

//Actions
import { selectPlayer } from '../actions/playbook-actions'
import { updatePoint } from '../actions/move-actions'
//Assets
import emptyCircle from '../assets/PlayerTokens/emptyCircle.png'
import selectedCircle from '../assets/PlayerTokens/selectedCircle.png'
//Fetch Calls
import { persistCoords } from '../APICalls'

class StartPoint extends Component {
    constructor(props){
        super(props)

        this.state = {
            disabled: true,
            activeDrags: 0,
            controlledPosition: {
                x: this.props.ownProps.startX, y: this.props.ownProps.startY
            },
        }
    }

    style = {
        backgroundColor: "transparent",
        height: this.props.dimension,
        width: this.props.dimension,
        position: "absolute",
    }

    verifySelectedPlayer = () => {
        return this.props.players.selectedPlayer === this.props.ownProps.player_id
    }

    imgSrc = () => {
        return this.verifySelectedPlayer() ? selectedCircle : emptyCircle
    }

    updateSelectedPlayer = (e) => {
        e.preventDefault()
        e.stopPropagation()
        return this.verifySelectedPlayer() ? null : this.props.selectPlayer(this.props.ownProps.player_id)
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
        move.startX = x
        move.startY = y
        persistCoords({
            player: {
                id: playerInfo.player_id,
                name: playerInfo.player.name,
                moves_attributes: 
                    [{...move, startX: x, startY: y, order: this.props.moves.moveIndex}]
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
                <img onMouseEnter={this.updateSelectedPlayer} src={this.imgSrc()} style={this.style} alt="Player Token"/>
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
        selectPlayer, updatePoint
    }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(StartPoint)