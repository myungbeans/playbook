import { SET_MY_PLAYS } from '../actions/homepage-actions'
import { defaultState } from '../index'

export default function homepageReducer(state={...defaultState}, { type, payload }){
    switch(type){
        case SET_MY_PLAYS:
            return {...state, ...state.homepage, myPlays: payload.myPlays}
        default:
            return state
    }
}