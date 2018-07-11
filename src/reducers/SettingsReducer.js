import { UPDATE_GRID_DIMENSIONS, INCREASE_GRID_INCREMENT, DECREASE_GRID_INCREMENT, TOGGLE_LOADING } from '../actions/settings-actions'
import { TOGGLE_ERROR, ERROR_MSG, HANDLE_ERROR  } from '../actions/settings-actions'
import { defaultState } from '../index'

export default function settingsReducer(state={...defaultState}, { type, payload }) {
    switch(type){
        case HANDLE_ERROR:
            return {...state, error: {...payload}}
        case TOGGLE_ERROR:
            return {...state, error: {...state.error, show: payload}};
        case ERROR_MSG:
            return {...state, error: {...state.error, message: payload}};
        case UPDATE_GRID_DIMENSIONS:
            return {...state, height: payload.height, width: payload.width};
        case INCREASE_GRID_INCREMENT:
            return {...state, interval: payload};
        case DECREASE_GRID_INCREMENT:
            return {...state, interval: payload};
        case TOGGLE_LOADING:
            return {...state, loading: payload};
        default:
            return state
    }
}