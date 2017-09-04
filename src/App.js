import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router';
import Home from './Components/Home';
import AlbumsContainer from './Containers/AlbumsContainer';
import AlbumContainer from './Containers/AlbumContainer';
import PostsContainer from './Containers/PostsContainer';
import PostContainer from './Containers/PostContainer';
import CalculatorContainer from './Containers/CalculatorContainer';
import Nav from './Nav';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import './nav.css';
import browserHistory from './history';
import { Router } from 'react-router';
import IsAuth from './Containers/IsAuth';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  componentDidUpdate(prevProps) {
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn
  }

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

function mapStateToProps(state) {
  return {
    isLoggedIn: state.login.userToken != null,
    redirectUrl: state.redirectUrl
  }
}

export default connect(mapStateToProps)(App);
