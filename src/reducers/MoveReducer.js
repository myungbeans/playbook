import { UPDATE_POINT, UPDATE_STARTPOINT, SET_CURRENT_MOVE, STORE_POINTS } from '../actions/move-actions'
import { defaultState } from '../index'

export default function moveReducer(state={...defaultState}, { type, payload }) {    
    switch(type){
        case UPDATE_POINT:
            return {...state, points: payload}
        case UPDATE_STARTPOINT:
            return {...state, moves: {...state.moves, points: [...payload.moves]}}
        case SET_CURRENT_MOVE:
            return {...state, moveIndex: payload}
        case STORE_POINTS:
            return {...state, points: payload}
        default:
            return state
    }
}