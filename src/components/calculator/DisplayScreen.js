import React, { Component } from 'react';
import './displayScreen.css';
import PropTypes from 'prop-types';

class DisplayScreen extends Component {
  render() {
    const onDisplayClick = this.props.onDisplayClick;
    return (
      <div
        className="display-screen"
        style = {{background: this.props.background}}
        onClick = {function(){ onDisplayClick() }}>
        { this.props.digitsString }
      </div>
    );
  }
}

export default DisplayScreen;

DisplayScreen.propTypes = {
  digitsString: PropTypes.string.isRequired,
  onDisplayClick: PropTypes.func.isRequired,
  background: PropTypes.string.isRequired
}
