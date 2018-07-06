import React from 'react'
// import svgr from '@svgr/core'

// export const svgify = (svgCode, name) => {
//     return svgr(svgCode, { icon: true }, { componentName: name }).then(jsCode => {
//         console.log(jsCode)
//     })
// }

export const PathLine = (props) => {
    return (
            <line x1={props.x1} y1={props.y1} x2={props.x2} y2={props.y2} id={"pathLine"}></line>
    )
}