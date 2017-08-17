import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NumericButtonGroup.css';
import Button from './Button';


class NumericButtonGroup extends Component {
  constructor() {
    super();
    this.renderNumericButtons.bind(this);
  }

  renderNumericButtons = () => {
    const buttons = [];
    const onButtonClick = this.props.onButtonClick;


    for(let j= 1; j<=9; j++) {
      buttons.push(<Button key={j} text={'' + j} onClick = {function(){ onButtonClick(j) }}/>);
      console.log(this.props.onButtonClick);
    }
    return buttons;
  }

  render(){
    const numericButtons = this.renderNumericButtons();

    console.log('onButtonClick', this.props.onButtonClick);

    return (
      <div className = "numeric-buttons">
        {numericButtons}
      </div>
    );
  }
}

NumericButtonGroup.propTypes = {
  onButtonClick: PropTypes.func.isRequired
}

export default NumericButtonGroup
