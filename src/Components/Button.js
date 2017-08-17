import React, { Component } from 'react';
//import logo from './logo.svg';
import './Button.css';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    let {onClick, text} = this.props;

    return (
      <button className="button" onClick={onClick}>{text}</button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;
