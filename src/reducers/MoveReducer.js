import { UPDATE_POINT, SET_CURRENT_MOVE, STORE_POINTS } from '../actions/move-actions'
import { defaultState } from '../index'

export default function moveReducer(state={...defaultState}, { type, payload }) {    
    switch(type){
        case UPDATE_POINT:
            return {...state, points: payload}
        case SET_CURRENT_MOVE:
            return {...state, moveIndex: payload}
        case STORE_POINTS:
            return {...state, points: payload}
        default:
            return state
    }
}