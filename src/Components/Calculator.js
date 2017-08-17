import React, { Component } from 'react';
import './Calculator.css';
import NumericButtonsContainer from '../Containers/NumericButtonsContainer';
import SpecialButtonsContainer from '../Containers/SpecialButtonsContainer';
import DisplayScreenContainer from '../Containers/DisplayScreenContainer';
import PropTypes from "prop-types";

class Calculator extends Component {

  render() {

    return (
      <div className = "Calculator" style = {{background: this.props.calcBackground}}>

        <DisplayScreenContainer />
        <NumericButtonsContainer />
        <SpecialButtonsContainer />

      </div>
    );
  }
}

Calculator.propTypes = {
  calcBackground: PropTypes.string.isRequired
}

export default Calculator;
