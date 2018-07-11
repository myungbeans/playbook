export const SET_MY_PLAYS = "homepage: setPlays"
export const SELECT_PLAY = "homepage: selectPlay"
export const ADD_PLAY = "homepage: addPlay"
export const DELETE_PLAY = "homepage: deletePlay"

export function addPlay(prevState, play){
    let newPlays = prevState || []
    prevState.indexOf()
    return {
        type: ADD_PLAY,
        payload: [...newPlays, play]
    }
}

export function deletePlay(newPlays){
    return {
        type: DELETE_PLAY,
        payload: [...newPlays]
    }
}

export function getPlays(userPlays){
    return {
        type: SET_MY_PLAYS,
        payload: {
            myPlays: [...userPlays]
        }
    }
}

export function selectPlay(playID){
    return {
        type: SELECT_PLAY,
        payload: { 
            playID
        }
    }
}