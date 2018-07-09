import React, { Component } from 'react'
import { connect } from 'react-redux'

export const GridLine = (props) => {
    return (
            <line x1={props.x1} y1={props.y1} x2={props.x2} y2={props.y2} id={"gridLine-"+props.id}></line>
    )
}

class PathLine extends Component {
    // state = {
    //     move : {}
    // }
    
    style = {
        stroke: "#000",
    }

    adjustDimension = (value, axis) => {
        return axis === 'x' ? value + (this.props.settings.interval/2) : value + (this.props.settings.interval/2)
    }

    matchIDtoMove = () => {
        return this.props.moves.points[this.props.moveID]
    }

    //TODO: dynamically change color based on selected player
    render() {
        return (
            <line stroke={this.style.stroke} x1={this.adjustDimension(this.matchIDtoMove().startX, 'x')} y1={this.adjustDimension(this.matchIDtoMove().startY)} x2={this.adjustDimension(this.matchIDtoMove().endX,'x')} y2={this.adjustDimension(this.matchIDtoMove().endY)} id={"pathLine"} strokeDasharray="6" ></line>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, null)(PathLine)