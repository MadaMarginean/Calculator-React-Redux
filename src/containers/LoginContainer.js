import { connect } from 'react-redux';
import { login } from '../actions/login';
import Login from '../components/login/Login';

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
