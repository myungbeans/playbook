import { ADD_PLAYER, SET_PLAYERS, SELECT_PLAYER, UPDATE_PLAYER } from '../actions/playbookMenu-actions'
import { defaultState } from '../index'

export default function playbookMenuReducer(state={...defaultState}, { type, payload }) {    
    switch(type){
        case ADD_PLAYER:
            return state.concat({...payload})
        case SET_PLAYERS:
            return {...state, ...state.players, roster: {...payload}}
        case SELECT_PLAYER:
            return state.concat({...payload})
        case UPDATE_PLAYER:
            return [...payload]
        default:
            return state
    }
}