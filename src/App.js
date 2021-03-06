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
import PostsContainer from './Containers/PostsContainer';
import PostContainer from './Containers/PostContainer';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

let store = configureStore(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Router history={browserHistory}>
            <Switch>

              <Route exact path = "/" component = {Home} />
              <Route path = "/calculator" component = {CalculatorContainer} />
              <Route exact path = "/albums/:id" component = {AlbumContainer} />
              <Route path = "/albums" component = {AlbumsContainer} />
              <Route path = "/posts/:id" component = {PostContainer} />
              <Route exact path = "/posts" component = {PostsContainer} />

            </Switch>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
