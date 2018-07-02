export const ADD_PLAYER = 'playbookMenu: addPlayer'

export function addPlayer(player){
    return {
        type: ADD_PLAYER,
        payload: player
    }
}