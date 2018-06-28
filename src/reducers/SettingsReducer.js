import { UPDATE_GRID_DIMENSIONS } from '../actions/settings-actions'
import { INCREASE_GRID_INCREMENT } from '../actions/settings-actions'
import { DECREASE_GRID_INCREMENT } from '../actions/settings-actions'
import { defaultState } from '../index'

export default function settingsReducer(state={...defaultState}, { type, payload }) {
    switch (type){
        case UPDATE_GRID_DIMENSIONS:
            return {...state,
            ...state.settings,
            height: payload.height, width: payload.width}
        case INCREASE_GRID_INCREMENT:
            return {...state, 
                ...state.settings, 
                interval: payload}
        case DECREASE_GRID_INCREMENT:
                return {...state,
                ...state.settings,
                interval: payload}
        default:
            return state
    }
}