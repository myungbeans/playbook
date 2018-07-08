import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Draggable from 'react-draggable'

//Actions
import { selectPlayer, updatePlayer } from '../actions/playbook-actions'
import { updateStartPoint } from '../actions/move-actions'
//Assets
import emptyCircle from '../assets/PlayerTokens/emptyCircle.png'
import selectedCircle from '../assets/PlayerTokens/selectedCircle.png'
//Fetch Calls
import { persistStartCoords, persistEndCoords } from '../APICalls'

class StartPoint extends Component {
    constructor(props) {
        super(props)

        this.state = {
            disabled: true,
            activeDrags: 0,
            controlledPosition: {
                x: this.props.ownProps.x, y: this.props.ownProps.y
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
        return this.props.players.selectedPlayer === this.props.ownProps.id
    }

    imgSrc = () => {
        return this.verifySelectedPlayer() ? selectedCircle : emptyCircle
    }

    hoveredPlayer = (e) => {
        e.preventDefault()
        e.stopPropagation()
        return this.verifySelectedPlayer() ? null : this.props.selectPlayer(this.props.ownProps.id)
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
        let player = this.props.ownProps
        this.setState({controlledPosition: {x, y}})
        this.onStop()
        persistStartCoords({x, y}, player.id, ()=>this.props.updatePlayer({id: player.id,x,y}))


        // this.props.updateStartPoint({x, y, moveIndex: this.props.moves.moveIndex, moves: [...player.moves]})
        // this.updateEndPointIfExists({x, y, player})
    }

    updateEndPointIfExists = ({x, y, player}) => {
        let move = player.moves[this.props.moves.moveIndex]
        if (!!move) {persistEndCoords({x, y}, move)}
    }

    render(){
        const {controlledPosition} = this.state;

        return (
            <Draggable onStart={this.onStart} onStop={this.controlledStop} position={controlledPosition} bounds={{left: 0, top: 0, right:this.props.width, bottom: this.props.height - 17}} >
                <img onMouseEnter={this.hoveredPlayer} src={this.imgSrc()} style={this.style} alt="Player Token"/>
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