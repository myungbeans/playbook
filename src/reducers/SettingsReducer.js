import { UPDATE_GRID_DIMENSIONS, INCREASE_GRID_INCREMENT, DECREASE_GRID_INCREMENT, SELECT_PLAYER } from '../actions/settings-actions'
import { defaultState } from '../index'

export default function settingsReducer(state={...defaultState}, { type, payload }) {
    switch(type){
        case UPDATE_GRID_DIMENSIONS:
            return {...state,
            ...state.settings,
            height: payload.height, width: payload.width};
        case INCREASE_GRID_INCREMENT:
            return {...state, 
                ...state.settings, 
                interval: payload};
        case DECREASE_GRID_INCREMENT:
            return {...state,
                ...state.settings,
                interval: payload};
        default:
            return state
    }
}

// case SELECT_PLAYER:
//             return {...state,
//                 ...state.settings,
//                 selectedPlayer: payload};