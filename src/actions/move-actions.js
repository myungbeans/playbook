export const UPDATE_POINT = "point: updatePoint"
export const SET_CURRENT_MOVE = "moves: currentMove"
export const REMOVE_MOVE = "moves: removeMove"
export const STORE_MOVES = "moves: storeMoves"
export const REVEAL_POINT = "point: reveal"
export const HIDE_POINT = "point: hide"


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
        type: STORE_MOVES,
        payload: {...data} || {}
    }
}

export function revealPoint(prevPoints, point){
    let newPoints = prevPoints || []
    newPoints.push(point.id)
    let setPoints = new Set(newPoints)
    return {
        type: REVEAL_POINT,
        payload: [...setPoints]
    }
}

export function hidePoint(prevPoints, point){
    let newPoints = [...prevPoints]
    let index = newPoints.indexOf(point.id)
    if (index > 0){
        newPoints.splice(index, 1)
    } else if (newPoints.length === 1) {
        newPoints = []
    }
    return {
        type: HIDE_POINT,
        payload: [...newPoints]
    }
}