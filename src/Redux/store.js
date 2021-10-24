import { authReducers } from './Reducers'
import { createStore } from 'redux'

const store = createStore(authReducers)

export default store