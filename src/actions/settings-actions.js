export const UPDATE_GRID_DIMENSIONS = 'settings: updateGridDimensions'
export const INCREASE_GRID_INCREMENT = 'settings: increaseGridIncrement'
export const DECREASE_GRID_INCREMENT = 'settings: decreaseGridIncrement'
export const TOGGLE_LOADING = 'settings: loading'
export const TOGGLE_ERROR = 'settings: displayErrorMsg'
export const ERROR_MSG = 'settings: editErrorMsg'
export const HANDLE_ERROR = "settings: handleError"

export function handleError(data){
    let payload = {show: false, message: "No errors"}
    if (data.errors){
        payload.message = `${data.errors[0]}`
        payload.show = true
    }
    return {
        type: HANDLE_ERROR,
        payload: {...payload}
    }
}

export function toggleError(bool){
    return {
        type: TOGGLE_ERROR,
        payload: bool
    }
}

export function errorMsg(msg){
    return {
        type: ERROR_MSG,
        payload: msg
    }
}

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

export function toggleLoading(prevState, explicitToggle) {
    let status = explicitToggle || !prevState
    return {
        type: TOGGLE_LOADING,
        payload: status
    }
}