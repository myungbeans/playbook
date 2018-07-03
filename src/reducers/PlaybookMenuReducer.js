import { ADD_PLAYER, SET_PLAYERS } from '../actions/playbookMenu-actions'
import { defaultState } from '../index'

export default function playbookMenuReducer(state={...defaultState}, { type, payload }) {
    switch(type){
        case ADD_PLAYER:
            return state.length > 0 ? [...state, {...payload}] : [{...payload}]
        case SET_PLAYERS:
            return [...state, ...payload]
        default:
            return state
    }
}