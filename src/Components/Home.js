import {Link} from 'react-router-dom';
import React, {Component} from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <button><Link to="/calculator">Calculator</Link></button>
        <button><Link to="/albums">Albums</Link></button>
        <button><Link to="/posts">Posts</Link></button>
      </div>
    );
  }
}

export default Home
