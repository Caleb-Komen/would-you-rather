export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export function login(id) {
    return {
        type: LOGIN_USER,
        id
    }
}

export function logout(id) {
    return {
        type: LOGOUT_USER,
        id: id
    }
}

export function setAuthedUser(id) {
    return logout(id)
}
