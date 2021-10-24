import { WORDS_COUNT } from '../types'

const wordsLengthCount = (count) => {
    return { type: WORDS_COUNT, count }
}

export {
    wordsLengthCount
}