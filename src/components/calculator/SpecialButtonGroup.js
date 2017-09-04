import React, { Component } from 'react';
import './specialButtonGroup.css';
import Button from './Button';
import PropTypes from "prop-types";

class SpecialButtonGroup extends Component {
  render() {
    const {
      storeNumberToArray,
      onAddButtonClick,
      onSubstractButtonClick,
      onMultiplyButtonClick,
      onDivisionButtonClick,
      onEqualButtonClick
    } = this.props;

    return (
      <div className = "special-buttons">
        <Button key="+" text='+' onClick = {function() {
          storeNumberToArray();
          onAddButtonClick();
        }}/>
        <Button key="-" text='-' onClick = {function() {
          storeNumberToArray();
          onSubstractButtonClick();
        }}/>
        <Button key="*" text='*' onClick = {function() {
          storeNumberToArray();
          onMultiplyButtonClick();
        }}/>
        <Button key="/" text='/' onClick = {function() {
          storeNumberToArray();
          onDivisionButtonClick();
        }}/>
        <Button key="=" text='=' onClick = {function() {
          storeNumberToArray();
          onEqualButtonClick();
        }}/>
      </div>
    );
  }
}

SpecialButtonGroup.propTypes = {
  storeNumberToArray: PropTypes.func.isRequired,
  onAddButtonClick: PropTypes.func.isRequired,
  onSubstractButtonClick: PropTypes.func.isRequired,
  onMultiplyButtonClick: PropTypes.func.isRequired,
  onDivisionButtonClick: PropTypes.func.isRequired,
  onEqualButtonClick: PropTypes.func.isRequired
}

export default SpecialButtonGroup;
