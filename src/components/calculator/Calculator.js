import React, { Component } from 'react';
import './calculator.css';
import NumericButtonsContainer from '../../containers/NumericButtonsContainer';
import SpecialButtonsContainer from '../../containers/SpecialButtonsContainer';
import DisplayScreenContainer from '../../containers/DisplayScreenContainer';
import PropTypes from "prop-types";
import NavContainer from '../../containers/NavContainer';
import '../common/common.css';

class Calculator extends Component {
  render() {
    return (
      <div>
        <NavContainer />
          <div className="common">
            <div className = "calculator" style = {{background: this.props.calcBackground}}>
              <DisplayScreenContainer />
              <NumericButtonsContainer />
              <SpecialButtonsContainer />
            </div>
          </div>
        </div>
    );
  }
}

Calculator.propTypes = {
  calcBackground: PropTypes.string.isRequired
}

export default Calculator;
