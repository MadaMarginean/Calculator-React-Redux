import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import CalculatorContainer from './Containers/CalculatorContainer';
import configureStore from './Middlewares/configureStore';
import { Router, Route, Switch } from 'react-router';
import browserHistory from './history';
import Home from './Components/Home';
import AlbumsContainer from './Containers/AlbumsContainer';
import AlbumContainer from './Containers/AlbumContainer';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

let store = configureStore(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Router history={browserHistory}>
            <Switch>

              <Route exact path = "/" component = {Home} />
              <Route path = "/calculator" component = {CalculatorContainer} />
              <Route exact path = "/albums/:id" component = {AlbumContainer} />
              <Route path = "/albums" component = {AlbumsContainer} />

            </Switch>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;

// const storeFromConfigureStore = configureStore(initialState);
