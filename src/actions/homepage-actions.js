export const SET_MY_PLAYS = "homepage: setPlays"

export function setPlays(userPlays){
    return {
        type: SET_MY_PLAYS,
        payload: {
            plays: [...userPlays]
        }
    }
}