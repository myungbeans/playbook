import { UPDATE_POINT, SET_CURRENT_MOVE, STORE_POINTS, REVEAL_POINT } from '../actions/move-actions'
import { defaultState } from '../index'

export default function moveReducer(state={...defaultState}, { type, payload }) {    
    switch(type){
        case UPDATE_POINT:
            return {...state, points: payload}
        case SET_CURRENT_MOVE:
            return {...state, moveIndex: payload}
        case STORE_POINTS:
            return {...state, points: payload}
        case REVEAL_POINT:
            return {...state, activeEndPoints: payload}
        default:
            return state
    }
}