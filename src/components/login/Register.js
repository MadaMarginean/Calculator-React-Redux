import React from 'react';
import TextField from 'material-ui/TextField';
import './register.css';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../actions/login';
import { required, minLength, matchPassword } from '../../utility/validations';
import { renderTextField, renderCheckbox } from '../../utility/redux-form-components';

const form = reduxForm({
  form: 'Register',
  enableReinitialize: true,
});

class Register extends React.Component {
  handleFormSubmit(formProps) {
    this.props.submitFormAction(formProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="body">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >
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
            <Field
              className="confirm-password"
              name="confirm-password"
              type="password"
              component={renderTextField.bind(this, 'Confirm Password')}
              validate={[required, minLength(6), matchPassword]}
            /><br />
        </div>
        <div className="btn-and-down-text">
          <RaisedButton
            className="login-btn"
            type="submit"
            label="REGISTER"
            secondary={true}
            style={{width: '100%', margin: '-1170px 50px 15px 20px', minWidth: '100%', height: '36px'}}
            buttonStyle={{lineHeight: '35px'}}
          />
          <div className="down-page">
            <div className="forgot-password">
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

const mapDispatchToProps = ({
  submitFormAction: register
});

export default connect(null, mapDispatchToProps)(form(Register));
