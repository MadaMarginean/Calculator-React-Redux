import React from 'react';
import Register from './Register';
import BlueLayout from '../common/BlueLayout';

class RegisterPage extends React.Component {
  render() {
    return (
      <BlueLayout className="register-page">
        <div className="log-in-text">Register Now!</div>
        <div className="register-page">
          <Register/>
        </div>
      </BlueLayout>
    );
  }
}

export default RegisterPage;
