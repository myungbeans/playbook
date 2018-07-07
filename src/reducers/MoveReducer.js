import { UPDATE_ENDPOINT, UPDATE_STARTPOINT, SET_CURRENT_MOVE, STORE_ENDPOINTS } from '../actions/move-actions'
import { defaultState } from '../index'

export default function moveReducer(state={...defaultState}, { type, payload }) {    
    switch(type){
        case UPDATE_ENDPOINT:
            return {...state, moves: {...state.moves, endPoints: [...payload.moves]}}
        case UPDATE_STARTPOINT:
            return {...state, moves: {...state.moves, endPoints: [...payload.moves]}}
        case SET_CURRENT_MOVE:
            return {...state, moveIndex: payload}
        case STORE_ENDPOINTS:
            return {...state, endPoints: payload}
        default:
            return state
    }
}