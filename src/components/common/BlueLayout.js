import React, { Component } from 'react';
import './blue-layout.css';

export default class BlueLayout extends Component {
  render() {
    return (
      <div className="blue-layout">
        <div className="login-box">
          <div className="title">
            <div id="circle" />
              {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
