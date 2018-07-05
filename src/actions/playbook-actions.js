export const ADD_PLAYER = 'playbookMenu: addPlayer'
export const SET_PLAYERS = "playbookMenu: setPlayers"
export const SELECT_PLAYER = 'player: selectPlayer'
export const UPDATE_PLAYER = "player: updatePlayer"

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