import React from 'react'
import svgr from '@svgr/core'

export const svgify = (svgCode, name) => {
    return svgr(svgCode, { icon: true }, { componentName: name }).then(jsCode => {
        console.log(jsCode)
    })
}