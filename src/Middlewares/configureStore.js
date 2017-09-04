import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import reducers from '../Reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, apiMiddleware)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducers, initialState);
}
