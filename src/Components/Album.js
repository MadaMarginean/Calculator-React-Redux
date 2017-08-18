import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AlbumPreview from './AlbumPreview';
import './Album.css';

class Album extends Component {
  componentWillMount() {
    let albumId = this.props.match.params.id;

    this.props.requestAlbum(albumId);
  }

  render(){
    return(
      <div className = "album">
        <table>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
          </tr>

          <tr>
            <th>{this.props.oneAlbum.userId}</th>
            <th>{this.props.oneAlbum.id}</th>
            <th>{this.props.oneAlbum.title}</th>
          </tr>
        </table>
      </div>
    );
  }
}

Album.propTypes = {
  requestAlbum: PropTypes.func.isRequired,
  oneAlbum: PropTypes.object.isRequired
}

export default Album
