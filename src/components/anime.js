// import React from 'react'
import anime from 'animejs'

export const errorOnClass = (targetID) => {
    return anime({
        targets: `.${targetID}`,
        translateX: [-10, 10, 0],
        duration: 30,
        direction: 'alternate',
        loop: 5,
    })
}