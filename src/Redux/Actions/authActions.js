import { LOGIN } from '../types'

const loginUser = async (user) => {
    await setTimeout(() => {
        console.log('Hello')
    }, 2000)
    return { type: LOGIN, user }
}

export {
    loginUser
}