export const UPDATE_POINT = "point: updatePoint"
export const SET_CURRENT_MOVE = "moves: currentMove"
export const STORE_POINTS = "moves: storePoints"

export function updatePoint(prevPoints, move){
    let newMoves = prevPoints
    newMoves[move.id] = move
    return {
        type: UPDATE_POINT,
        payload: {...newMoves}
    }
}

export function setCurrentMove(roster){
    let moveIndex
    if(roster[0]){
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
        payload: {...data} || {}
    }
}