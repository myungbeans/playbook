import React, { Component } from 'react'
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import { selectPlayer } from '../actions/settings-actions'
// import { DragSource } from 'react-dnd'
import Draggable from 'react-draggable'

import emptyCircle from '../assets/PlayerTokens/emptyCircle.png'
import selectedCircle from '../assets/PlayerTokens/selectedCircle.png'

class Png extends Component {
    state = {
        clicked: false,
        activeDrags: 0,
        deltaPosition: {
            x: 150, y: 150
        }
    }
    
    style ={
        backgroundColor: "transparent",
        height: this.props.dimension,
        width: this.props.dimension,
        position: "absolute",
    }

    onStart = () => {
        this.setState({activeDrags: this.state.activeDrags + 1})
    }

    onStop = () => {
        this.setState({activeDrags: this.state.activeDrags - 1})
    }

    handleDrag = (e,ui) => {
        const { x, y } = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y+ui.deltaY,
            }
        })
    }

    clickedPlayer = () => {
        console.log("Clicked")
        // this.setState({ clicked: true})
        this.props.selectPlayer(this.props.id)
    }

    render(){
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop}
        return (
            <Draggable bounds={{left: 0, top: 65, right:this.props.width, bottom: this.props.height}} >
                <img onDrag={this.handleDrag} {...dragHandlers} src={this.state.clicked ? selectedCircle : emptyCircle} style={this.style} alt="Player Token"/> 
            </Draggable>
        )
    }
}

//Params for DragSource
// const type = "player"

// const itemSource = {
//     canDrag(props){
//         return "Yes"
//         // return props.isReady
//     },
//     beginDrag(props){
//         console.log("dragStart")
//         //describes current item being dragged
//     },
//     endDrag(props){
//         return "bye"
//         //call a fx or anything after successful drop
//         //otherwise use DropTarget
//     }
// }

// function collect(connect, monitor){
//     return {
//         connectDragSource: connect.dragSource(),
//         isDragging: monitor.isDragging(),
//     }
//     //returns ab object of props to be injected into component. DnD event handles and current dragging state passed to component
// }

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
// export default DragSource(type, itemSource, collect)(connect(mapStateToProps, mapActionsToProps)(Png))