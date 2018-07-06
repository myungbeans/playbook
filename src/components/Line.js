import React, { Component } from 'react'

export const GridLine = (props) => {
    return (
            <line x1={props.x1} y1={props.y1} x2={props.x2} y2={props.y2} id={"gridLine-"+props.id}></line>
    )
}

export class PathLine extends Component {
    style = {
        stroke: "#000",
    }

    adjustDimension = (value, axis) => {
        return axis === 'x' ? value + (this.props.dimension/2) : value + (this.props.dimension/2)
    }

    //TODO: dynamically change color based on selected player
    render() {
        return (
            <line stroke={this.style.stroke} x1={this.adjustDimension(this.props.x1, 'x')} y1={this.adjustDimension(this.props.y1)} x2={this.adjustDimension(this.props.x2,'x')} y2={this.adjustDimension(this.props.y2)} id={"pathLine"} strokeDasharray="6" ></line>
        )
    }
}