import React, { Component } from 'react';
import './login.css';
import usernameImage from '../../assets/username.png';
import passwordImage from '../../assets/password.png';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../../actions/login';
import { LOGIN_SUCCESS } from '../../config/constants';
import { Link } from 'react-router-dom';
import { required, minLength } from '../../utility/validations';
import { renderTextField, renderCheckbox } from '../../utility/redux-form-components';
import browserHistory from '../../history';

const form = reduxForm({
  form: 'Login',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
});

class Login extends Component {
  handleFormSubmit(formProps) {
    if(formProps.checkbox) {
      localStorage.setItem("Username", formProps.username);
    }
    localStorage.setItem("Remember me", formProps.checkbox);
    this.props.submitFormAction(formProps).then(action => {
      if (action.type === LOGIN_SUCCESS) {
        browserHistory.replace('/');
      }
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="body">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >
          <div className="images">
            <img  src={usernameImage} alt="" className="img"/>
            <img src={passwordImage} alt="" className="img"/>
          </div>
          <div className="text-fields">
            <Field className="username"
              name="username"
              type="text"
              component={renderTextField.bind(this, 'Username')}
              validate={[required, minLength(6)]}
            /><br />
            <br />
            <Field
              className="password"
              name="password"
              type="password"
              component={renderTextField.bind(this, 'Password')}
              validate={[required, minLength(6)]}
            /><br />
            <div className="checkbox">
              <Field
                name="checkbox"
                id="remember-me"
                component={renderCheckbox}
                label="Remember me"
              />
            </div>
        </div>
        <div className="btn-and-down-textt">
          <RaisedButton className="login-btn" type="submit" label="LOGIN" secondary={true} style={{width: '100%', margin: '0', minWidth: '100%', height: '36px'}} buttonStyle={{lineHeight: '40px'}}/>
          <div className="down-page">
            <div className="register-now">
              <Link to="/register-now">Register Now!</Link>
            </div>
            <div className="forgot-passwordd">
              <Link to="/forgot-password">Forgot password?
              </Link>
            </div>
          </div>
        </div>
    </form>
  </div>
    );
  }
}

function mapStateToProps(state) {
  let rememberMe = localStorage.getItem("Remember me") === 'true';

  return {
    initialValues: {
      username: (rememberMe) ? localStorage.getItem("Username") : "",
      password: '',
      checkbox: rememberMe
    }
  };
}

const mapDispatchToProps = ({
  submitFormAction: login
});

export default connect(mapStateToProps, mapDispatchToProps)(form(Login));
