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

export const errorOnID = (targetID) => {
    return anime({
        targets: `#${targetID}`,
        translateX: [-20, +20, 0],
        duration: 60,
        direction: 'easeInOutBack',
        loop: 5,
    })
}

export const shrinkOnID = (targetID) => {
    return anime({
        targets: `#${targetID}`,
        scale: 0,
        duration: 500,
        easing: 'easeOutQuint'
    })
}

export const createAnimationTimeline = () => {
    return anime.timeline({
        easing: 'linear',
        direction: 'linear',
    });
}

export const hoverTitle = () => {
    return anime.timeline({
        targets: `#title-P`,
        direction: 'alternate',
        translanteX: [{value: 3.2, duration: 1000, easing: "easeInOutQuint"}],
    })
}

// export const homepageAnimationTimeline = () => {
//     return anime.timeline({
//         easing: 'linear',
//         direction: 'linear',
//     })
// }