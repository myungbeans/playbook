import React from 'react'

export const GridLine = (props) => {
    return (
            <line x1={props.x1} y1={props.y1} x2={props.x2} y2={props.y2} id={"gridLine-"+props.id}></line>
    )
}

export const PathLine = (props) => {
    let style = {
        stroke: "#000"
    }
    //TODO: dynamically change color based on selected player
    return (
            <line stroke={style.stroke} x1={props.x1} y1={props.y1} x2={props.x2} y2={props.y2} id={"pathLine"} stroke-dasharray="6" ></line>
    )
}