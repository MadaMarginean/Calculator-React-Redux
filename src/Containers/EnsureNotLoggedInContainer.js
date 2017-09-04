import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import browserHistory from '../history';
import {setRedirectUrl} from '../Actions/actions';

class EnsureNotLoggedInContainer extends React.Component {
  componentDidMount() {
    const { dispatch, currentURL, isLoggedIn } = this.props;

    console.log('to be or not to be', isLoggedIn)

    if (isLoggedIn) {
      // dispatch(setRedirectUrl(currentURL));
      browserHistory.replace("/");
    }
  }

  render() {
    console.log('qweqe', this.props);
    if (!this.props.isLoggedIn) {
      return <div>{this.props.children}</div>
    }

    return null;
  };
}

function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.login.userToken != null,
    currentURL: ownProps.location.pathname
  }
}

export default connect(mapStateToProps)(EnsureNotLoggedInContainer);
