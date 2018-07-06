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
    data.oldMoves[data.move_id - 1].endX = data.x
    data.oldMoves[data.move_id - 1].endY = data.y
    return {
        type: UPDATE_ENDPOINT,
        payload: {...data, moves: [...data.oldMoves]}
    }
}

export function updateStartPoint(data){
    // const player = this.props.players.roster[data.player_id]
    // const move = player.moves.select()
    debugger

    return {
        type: UPDATE_ENDPOINT,
        payload: {...data, moves: [...data.oldMoves]}
    }
}

export function setCurrentMove(data){
    return{
        type: SET_CURRENT_MOVE,
        payload: (data[Object.keys(data)[0]].moves.length - 1)
    }
}