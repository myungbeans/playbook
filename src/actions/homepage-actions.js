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

export function deletePlay(prevState, playID){
    let newPlays = prevState
    for(let i=0; i < newPlays.length; i++){
        if(newPlays[i].id === playID){
            newPlays.splice(i,1)
            break;
        }else{
            continue
        }
    }
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