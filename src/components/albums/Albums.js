import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlbumPreview from './AlbumPreview';
import NavContainer from '../../containers/NavContainer';
import '../common/common.css';

class Albums extends Component {
  componentWillMount() {
      this.props.requestAllAlbums();
  }

  render() {
    return (
      <div>
        <NavContainer />
        <div className = "common">
          {
            this.props.albumsObj.map((albumObj) => (
              <AlbumPreview key={albumObj.id} {...albumObj} />
            ))
          }
        </div>
      </div>
    );
  }
}

Albums.propTypes = {
  requestAllAlbums: PropTypes.func.isRequired,
  albumsObj: PropTypes.array.isRequired
}

export default Albums;
