// import React from 'react'
import anime from 'animejs'

export const errorOnClass = (targetClassName) => {
    return anime({
        targets: `.${targetClassName}`,
        translateX: [-20, 20, 0],
        duration: 60,
        direction: 'easeInOutBack',
        loop: 5,
    })
}

export const shrinkOnID = (targetID) => {
    return anime({
        targets: `#${targetID}`,
        scale: 0,
        delay: 400,
        duration: 700,
        easing: 'easeOutCirc'
    })
}

export const createAnimationTimeline = () => {
    return anime.timeline({
        easing: 'linear',
        direction: 'linear',
    });
}

// export const homepageAnimationTimeline = () => {
//     return anime.timeline({
//         easing: 'linear',
//         direction: 'linear',
//     })
// }