import { ADD_PLAYER, SET_PLAYERS } from '../actions/playbookMenu-actions'
import { defaultState } from '../index'

export default function playbookMenuReducer(state={...defaultState}, { type, payload }) {    
    switch(type){
        case ADD_PLAYER:
            // debugger
            // if (state.length > 0) {
            //     return [...state, {...payload}]
            // } else {
            //     return [{...payload}]
            // }
            // break;
            return state.concat({...payload})
            // return state.length > 0 ? [...state, {...payload}] : [{...payload}]
        case SET_PLAYERS:
            return [...payload]
        default:
            return state
    }
}