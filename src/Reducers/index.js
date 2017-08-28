import { combineReducers } from 'redux';
import calculator from './calculator';
import albums from './albums';
import posts from './posts';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  calculator: calculator,
  albums: albums,
  posts: posts,
  form: formReducer
});
