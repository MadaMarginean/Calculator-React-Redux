import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

class Nav extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/calculator">Calculator</Link>
              </li>
              <li>
                <Link to="/albums">Albums</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li className="log-out">
                <Link to="/login" onClick = {this.props.logout}>Log out</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
