import React from 'react';
import LoginContainer from '../../containers/LoginContainer';
import BlueLayout from '../common/BlueLayout';

class LoginPage extends React.Component {
  render() {
    return (
      <BlueLayout>
        <div className="log-in-text">Log in</div>
        <div className="login-page">
          <LoginContainer />
        </div>
      </BlueLayout>
    );
  }
}

export default LoginPage;
