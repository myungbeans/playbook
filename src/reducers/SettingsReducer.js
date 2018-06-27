import { UPDATE_GRID_SETTINGS } from '../actions/settings-actions'

export default function settingsReducer(state={}, { type, payload }) {
    switch (type){
        case UPDATE_GRID_SETTINGS:
            return payload.gridSettings
        default:
            return state
    }
}