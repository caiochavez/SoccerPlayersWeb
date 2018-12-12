import { combineReducers } from 'redux'
import UserLoggedReducer from './UserLoggedReducer'

export default combineReducers({
  userLogged: UserLoggedReducer
})