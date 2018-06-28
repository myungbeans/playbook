export const LOGIN_USER = 'auth: loginUser'
export const CREATE_USER = 'auth: newUser'

export function loginUser(token) {
    return {
        type: LOGIN_USER,
        payload: token
    }
}

export function createUser(token) {
    console.log("ACTION", token)
    return {
        type: CREATE_USER,
        payload: token
    }
}