import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class AlbumPreview extends Component {
  render() {
    let { id, title} = this.props;

    return(
      <div className = "AlbumPreview" >
        <Link to={'/albums/' + id}>
          <div className = 'Album'>
            <span>{id}. </span>
            <span>{title}</span>
          </div>
        </Link>
      </div>
    );
  }
}

AlbumPreview.propTypes = {
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default AlbumPreview;
