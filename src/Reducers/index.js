import { combineReducers } from 'redux';
import calculator from './calculator';
import albums from './albums';
import posts from './posts';

export default combineReducers({
  calculator: calculator,
  albums: albums,
  posts: posts
});
