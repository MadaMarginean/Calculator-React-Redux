import { combineReducers } from 'redux'
import calculator from './calculator'
import albums from './albums'

export default combineReducers({
  calculator: calculator,
  albums: albums
});
