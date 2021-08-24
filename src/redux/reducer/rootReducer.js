import { combineReducers } from 'redux'
import cakeReducer from './cakeReducer'
import iceCreamReducer from './iceCreamReducer'
import userReducer from './userReducer'
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer
})
export default rootReducer