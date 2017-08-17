import React, { Component } from 'react';
import './Calculator.css';
import NumericButtonsContainer from '../Containers/NumericButtonsContainer'
import SpecialButtonsContainer from '../Containers/SpecialButtonsContainer'
import DisplayScreenContainer from '../Containers/DisplayScreenContainer'

class Calculator extends Component {

  render() {

    return (
      <div className = "Calculator">
        <DisplayScreenContainer />

        <NumericButtonsContainer />
        <SpecialButtonsContainer />

      </div>
    );
  }
}

export default Calculator;
