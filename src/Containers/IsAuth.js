import React, { Component } from 'react';
import { connect } from 'react-redux';
import browserHistory from '../history';

// This function takes a component...
function IsAuth(shouldBeAuthenticated) {

  function wrapComponent(WrappedComponent) {

    class AuthWrapper extends Component {
      render() {
        if (shouldBeAuthenticated === this.props.isAuthenticated) {
          return <WrappedComponent {...this.props} />;
        }

        let redirectPath = shouldBeAuthenticated ? '/login' : '/';
        browserHistory.replace(redirectPath);

        return null;
      }
    };

    const mapStateToProps = state => ({
      isAuthenticated: state.login.userToken != null
    });

    return connect(mapStateToProps)(AuthWrapper);
  }

  return wrapComponent;
};

export default IsAuth;
