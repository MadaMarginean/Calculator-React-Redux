import React, { Component } from 'react';
//import logo from './logo.svg';
import './DisplayScreen.css';
import PropTypes from 'prop-types';

class DisplayScreen extends Component {
  render() {
    return (
      <div className="display-screen">
        { this.props.digitsString }
      </div>
    );
  }
}

export default DisplayScreen;

DisplayScreen.propTypes = {
  digitsString: PropTypes.string.isRequired
}
