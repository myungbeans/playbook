import { ADD_PLAYER } from '../actions/playbookMenu-actions'
import { defaultState } from '../index'

export default function playbookMenuReducer(state={...defaultState}, { type, payload }) {
    switch(type){
        case ADD_PLAYER:
            return state.length > 0 ? [...state, {...payload}] : [{...payload}]
        default:
            return state
    }
}