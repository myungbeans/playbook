export const UPDATE_GRID_SETTINGS = 'settings: updateGridSettings'
export const INCREASE_GRID_INCREMENT = 'settings: increaseGridIncrement'
export const DECREASE_GRID_INCREMENT = 'settings: decreaseGridIncrement'

export function updateGridSettings(settings) {
    return {
        type: UPDATE_GRID_SETTINGS,
        payload: {
            gridSettings: settings
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