import React from 'react';
import RegisterContainer from '../../containers/RegisterContainer';
import BlueLayout from '../common/BlueLayout';

class RegisterPage extends React.Component {
  render() {
    return (
      <BlueLayout className="register-page">
        <div className="log-in-text">Register Now!</div>
        <div className="register-page">
          <RegisterContainer />
        </div>
      </BlueLayout>
    );
  }
}

export default RegisterPage;
