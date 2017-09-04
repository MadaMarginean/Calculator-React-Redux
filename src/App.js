import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router';
import Home from './components/home/Home';
import AlbumsContainer from './containers/AlbumsContainer';
import AlbumContainer from './containers/AlbumContainer';
import PostsContainer from './containers/PostsContainer';
import PostContainer from './containers/PostContainer';
import CalculatorContainer from './containers/CalculatorContainer';
import LoginPage from './components/login/LoginPage';
import RegisterPage from './components/login/RegisterPage';
import './nav.css';
import browserHistory from './history';
import { Router } from 'react-router';
import IsAuth from './containers/IsAuth';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  onChangeRoute(a, b, c) {
    console.log('route changed', a, b, c);
  }

  render() {
    console.log('????', browserHistory);
    browserHistory.listen(location => this.onChangeRoute(location));

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Router history={browserHistory}>
          <Switch>
            <Route path="/login" component={IsAuth(false)(LoginPage)} />
            <Route path="/register-now" component={IsAuth(false)(RegisterPage)} />
            <Route exact path="/" component={IsAuth(true)(Home)} />
            <Route
              path="/calculator"
              component={IsAuth(true)(CalculatorContainer)}
              onEnter={IsAuth(true)(this.requireAuth)}
              onChange={IsAuth(true)(this.onChangeRoute)}
            />
            <Route exact
              path="/albums/:id"
              component={IsAuth(true)(AlbumContainer)}
              onEnter={IsAuth(true)(this.requireAuth)}
              onChange={IsAuth(true)(this.onChangeRoute)}
            />
            <Route
              path="/albums"
              component={IsAuth(true)(AlbumsContainer)}
              onEnter={IsAuth(true)(this.requireAuth)}
              onChange={IsAuth(true)(this.onChangeRoute)}
            />
            <Route
              path="/posts/:id"
              component={IsAuth(true)(PostContainer)}
              onEnter={this.requireAuth}
              onChange={this.onChangeRoute}
            />
            <Route
              path="/posts"
              component={IsAuth(true)(PostsContainer)}
              onEnter={this.requireAuth}
              onChange={this.onChangeRoute}
            />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.userToken != null,
  redirectUrl: state.redirectUrl
});

export default connect(mapStateToProps)(App);
