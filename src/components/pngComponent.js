import React, { Component } from 'react'

class Png extends Component {
    style ={
        backgroundColor: "transparent",
        height: this.props.dimension,
        width: this.props.dimension,
        position: "absolute",
    }

    render(){
        return (
            <img draggable src={this.props.imgSrc} style={this.style}/> 
        )
    }
}

export default Png