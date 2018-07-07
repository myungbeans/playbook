export const UPDATE_ENDPOINT = "endPoint: updateEndPoint"
export const UPDATE_STARTPOINT = "startPoint: updateStartPoint"
export const SET_CURRENT_MOVE = "moves: currentMove"
export const STORE_ENDPOINTS = "moves: storeEndPoints"

export function updateEndPoint(data){
    if (data.oldMoves[data.moveIndex]){
        data.oldMoves[data.moveIndex].endX = data.x
        data.oldMoves[data.moveIndex].endY = data.y
        return {
            type: UPDATE_ENDPOINT,
            payload: {...data, moves: [...data.oldMoves]}
        }
    }
    return {
        type: UPDATE_ENDPOINT,
        payload: {...data, moves: [...data.oldMoves]}
    }
}

export function updateStartPoint(data){
    if (data.oldMoves[data.moveIndex]){
        data.oldMoves[data.moveIndex].startX = data.x
        data.oldMoves[data.moveIndex].startY = data.y
        return {
            type: UPDATE_ENDPOINT,
            payload: {...data, moves: [...data.oldMoves]}
        }
    }
    return {
        type: UPDATE_ENDPOINT,
        payload: {...data, moves: [...data.oldMoves]}
    }
}

export function setCurrentMove(data){
    if (data[Object.keys(data)[0]] && data[Object.keys(data)[0]].moves){
        return {
            type: SET_CURRENT_MOVE,
            payload: (data[Object.keys(data)[0]].moves.length - 1)
        }
    } else {
        return {
            type: SET_CURRENT_MOVE,
            payload: 0
        }
    }
}

export function storeEndPoints(data){
    return {
        type: STORE_ENDPOINTS,
        payload: data || []
    }
}