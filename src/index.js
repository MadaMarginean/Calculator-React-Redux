import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './Middlewares/configureStore';
import {Provider} from 'react-redux';

let devToolsSettings = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
let store = configureStore(
  devToolsSettings,
  Object.assign({}, devToolsSettings, {
    loginRoute: '/login'
  })
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
