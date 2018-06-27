import React, { Component } from 'react'

export const gridLine = (props) => {
    return (
            <line x1={props.x1} y1={props.y1} x2={props.x2} y2={props.y2} id={"gridLine-"+`${props.id}`}></line>
    )
}