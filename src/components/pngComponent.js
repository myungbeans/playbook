import React, { Component } from 'react'
import { DragSource } from 'react-dnd'

class Png extends Component {
    style ={
        backgroundColor: "transparent",
        height: this.props.dimension,
        width: this.props.dimension,
        position: "absolute",
    }

    // dragStart = (e, v) => {
    //     e.dataTransfer.dropEffect = "move";
    //     e.dataTransfer.setData()
    // }

    render(){
        return (
            <img src={this.props.imgSrc} style={this.style} /> 
        )
    }
}

//Params for DragSource
const type = "player"

const itemSource = {
    beginDrag(props){
        return "hi"
        //describes current item being dragged
    },
    endDrag(props){
        return "bye"
        //call a fx or anything after successful drop
        //otherwise use DropTarget
    }
}

function collect(connect, monitor){
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
    //returns ab object of props to be injected into component. DnD event handles and current dragging state passed to component
}





export default DragSource("player", itemSource, collect)(Png)