export const UPDATE_POINT = "point: updatePoint"
export const UPDATE_STARTPOINT = "startPoint: updateStartPoint"
export const SET_CURRENT_MOVE = "moves: currentMove"
export const STORE_POINTS = "moves: storePoints"

export function updatePoint({moveIndex, moves, x, y}){
    if (moves[moveIndex]){
        moves[moveIndex].endX = x
        moves[moveIndex].endY = y
    }
    return {
        type: UPDATE_POINT,
        payload: {moves}
    }
}

export function updateStartPoint({moveIndex, moves, x, y}){
    if (moves[moveIndex]){
        moves[moveIndex].startX = x
        moves[moveIndex].startY = y
    }
    return {
        type: UPDATE_POINT,
        payload: {moves}
    }
}

export function setCurrentMove(roster){
    let moveIndex
    if(roster[1]){
        moveIndex = roster[1].moves.length - 1
    } else {
        moveIndex = 0
    }
    return {
            type: SET_CURRENT_MOVE,
            payload: moveIndex
    }
}

export function storePoints(data){
    return {
        type: STORE_POINTS,
        payload: data || []
    }
}