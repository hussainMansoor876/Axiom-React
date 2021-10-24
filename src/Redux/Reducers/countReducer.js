import { WORDS_COUNT } from '../types'

const reducer = (state = {}, action) => {
    switch (action?.type) {
        case WORDS_COUNT: {
            return { ...state, count: action?.count }
        }
        default: {
            return state
        }
    }
}

export default reducer