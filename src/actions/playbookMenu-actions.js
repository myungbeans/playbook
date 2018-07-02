export const ADD_PLAYER = 'playbookMenu: addPlayer'

export function addPlayer(data){
    return {
        type: ADD_PLAYER,
        payload: {...data}
    }
}