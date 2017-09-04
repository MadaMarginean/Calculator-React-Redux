import { connect } from 'react-redux';
import { register } from '../actions/login';
import Register from '../components/login/Register';

const mapDispatchToProps = ({
  submitFormAction: register
});

export default connect(null, mapDispatchToProps)(Register);
