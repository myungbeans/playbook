import { UPDATE_GRID_SETTINGS } from '../actions/settings-actions'
import { INCREASE_GRID_INCREMENT } from '../actions/settings-actions'
import { DECREASE_GRID_INCREMENT } from '../actions/settings-actions'

export default function settingsReducer(state={}, { type, payload }) {
    switch (type){
        case UPDATE_GRID_SETTINGS:
            return payload.gridSettings
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