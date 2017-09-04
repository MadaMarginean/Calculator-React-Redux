import { connect } from 'react-redux';
import { logout } from '../actions/login';
import Nav from '../Nav';

const mapDispatchToProps = ({
  logout
});

export default connect(null, mapDispatchToProps)(Nav);
