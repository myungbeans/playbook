export const ADD_PLAYER = 'playbookMenu: addPlayer'
export const SET_PLAYERS = "playbookMenu: setPlayers"
export const SELECT_PLAYER = 'players: selectPlayer'
export const UPDATE_PLAYER = "players: updatePlayer"
export const UPDATE_ENDPOINT = "endPoint: updateEndPoint"
export const UPDATE_STARTPOINT = "startPoint: updateStartPoint"
export const SET_CURRENT_MOVE = "players: currentMove"

export function addPlayer(data){
    return {
        type: ADD_PLAYER,
        payload: {...data}
    }
}

export function setPlayers(data){
    return {
        type: SET_PLAYERS,
        payload: {...data}
    }
}

export function selectPlayer(data){
    return {
        type: SELECT_PLAYER,
        payload: data
    }
}

export function updatePlayer(data){
    return {
        type: UPDATE_PLAYER,
        payload: data
    }
}

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