import React from 'react';
import Login from './Login';
import BlueLayout from '../common/BlueLayout';

class LoginPage extends React.Component {
  render() {
    return (
      <BlueLayout>
        <div className="log-in-text">Log in</div>
        <div className="login-page">
          <Login />
        </div>
      </BlueLayout>
    );
  }
}

export default LoginPage;
