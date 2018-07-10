export const SET_MY_PLAYS = "homepage: setPlays"
export const SELECT_PLAY = "homepage: selectPlay"
export const ADD_PLAY = "homepage: addPlay"

export function addPlay(prevState, play){
    let newPlays = prevState || []
    return {
        type: ADD_PLAY,
        payload: [...newPlays, play]
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