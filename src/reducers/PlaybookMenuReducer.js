import { ADD_PLAYER } from '../actions/playbookMenu-actions'
import { defaultState } from '../index'

export default function playbookMenuReducer(state={...defaultState}, { type, payload }) {
    switch(type){
        case ADD_PLAYER:
            return {...state, players: [...state.players, payload]}
        default:
            return state
    }
}