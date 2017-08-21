import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlbumPreview from './AlbumPreview';


class Albums extends Component {

  componentWillMount() {
      this.props.requestAllAlbums();
  }

  render() {

    return (
      <div className = "Albums" >
        {
          this.props.albumsObj.map((albumObj) => (
            <AlbumPreview key={albumObj.id} {...albumObj} />
          ))
        }
      </div>
    );
  }
}

Albums.propTypes = {
  requestAllAlbums: PropTypes.func.isRequired,
  albumsObj: PropTypes.array.isRequired
}

export default Albums;
