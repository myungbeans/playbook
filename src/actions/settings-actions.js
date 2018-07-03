export const UPDATE_GRID_DIMENSIONS = 'settings: updateGridDimensions'
export const INCREASE_GRID_INCREMENT = 'settings: increaseGridIncrement'
export const DECREASE_GRID_INCREMENT = 'settings: decreaseGridIncrement'
export const SELECT_PLAYER = "settings: selectPlayer"

export function updateGridDimensions(dimensions) {
    return {
        type: UPDATE_GRID_DIMENSIONS,
        payload: {
            height: dimensions.height,
            width: dimensions.width
        }
    }
}

export function increaseGridIncrement(increment) {
    return {
        type: INCREASE_GRID_INCREMENT,
        payload: increment
    }
}

export function decreaseGridIncrement(increment) {
    return {
        type: DECREASE_GRID_INCREMENT,
        payload: increment
    }
}

export function selectPlayer(player){
    return {
        type: SELECT_PLAYER,
        payload: player
    }
}