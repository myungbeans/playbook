export const ADD_PLAYER = 'playbookMenu: addPlayer'
export const SET_PLAYERS = "playbookMenu: setPlayers"

export function addPlayer(data){
    return {
        type: ADD_PLAYER,
        payload: {...data}
    }
}

export function setPlayers(data){
    return {
        type: SET_PLAYERS,
        payload: data
    }
}