import React from 'react'
// import XMLToReact from 'xml-to-react';

// const xmlToReact = new XMLToReact({
//     Unselected: (attrs) => {}
// })

export const Unselected = (props) => {
    return (
        <svg 
        x={`${props.x}px`} y={`${props.y}px`} viewBox="0 0 1500 1875" enableBackground="new 0 0 100 100">
        <g>
            <path fill="#000" d="M50,6.957C26.265,6.957,6.956,26.266,6.956,50S26.265,93.043,50,93.043c23.735,0,43.044-19.309,43.044-43.043   S73.735,6.957,50,6.957z"/>
            <path fill="#000000" d="M50,5C25.187,5,5,25.187,5,50s20.187,45,45,45c24.813,0,45-20.187,45-45S74.813,5,50,5z M50,93.043   C26.265,93.043,6.956,73.734,6.956,50S26.265,6.957,50,6.957c23.735,0,43.044,19.309,43.044,43.043S73.735,93.043,50,93.043z"/>
        </g>
        </svg>
    )
}