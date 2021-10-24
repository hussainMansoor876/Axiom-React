import { LOGIN, LOGOUT } from '../types'

const reducer = (state = {}, action) => {
    switch (action?.type) {
        case LOGIN: {
            return { ...state, user: action?.user }
        }
        case LOGOUT: {
            return { ...state, user: null }
        }
        default: {
            return state
        }
    }
}

export default reducer