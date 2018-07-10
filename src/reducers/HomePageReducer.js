import { SET_MY_PLAYS, SELECT_PLAY, ADD_PLAY, DELETE_PLAY } from '../actions/homepage-actions'
import { defaultState } from '../index'

export default function homepageReducer(state={...defaultState}, { type, payload }){
    switch(type){
        case ADD_PLAY:
            return {...state, ...state.homepage, myPlays: payload}
        case DELETE_PLAY:
            return {...state, ...state.homepage, myPlays: payload}
        case SET_MY_PLAYS:
            return {...state, ...state.homepage, myPlays: payload.myPlays}
        case SELECT_PLAY:
            return {...state, ...state.homepage, selectedPlay: payload.playID}
        default:
            return state
    }
}