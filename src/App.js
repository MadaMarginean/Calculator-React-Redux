import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Calculator from './Components/Calculator';

import reducers from './Reducers/index';

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Calculator />
      </Provider>
    );
  }
}

export default App;
