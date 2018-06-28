import { LOGIN_USER, CREATE_USER } from '../actions/auth-actions'
import { defaultState } from '../index'

export default function authReducer(state={...defaultState}, { type, payload }){
    switch (type){
        case LOGIN_USER:
            return {...state, token: payload}
        case CREATE_USER:
            return {...state, token: payload}
        default:
            return state
    }
}