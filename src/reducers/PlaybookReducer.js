import { ADD_PLAYER, SET_PLAYERS, SELECT_PLAYER, UPDATE_PLAYER } from '../actions/playbook-actions'
import { defaultState } from '../index'

export default function playbookReducer(state={...defaultState}, { type, payload }) {    
    switch(type){
        case ADD_PLAYER:
            return {...state, roster: {...state.roster, ...payload}}
        case SET_PLAYERS:
            return {...state, ...state.players, roster: {...payload}}
        case SELECT_PLAYER:
            return {...state, selectedPlayer: payload}
        case UPDATE_PLAYER:
            return {...state, moves: {...state.moves, points: {...state.roster[payload.id], x: payload.x, y:payload.y}}}
        default:
            return state
    }
}