import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav__container">
          <div className="Nav__right">
            <ul className="Nav__item-wrapper">
              <li className="Nav__item">
                <Link className="Nav__link" to="/">Home</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/calculator">Calculator</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/albums">Albums</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/posts">Posts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
