import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Album.css';
import GridListAlbum from './GridListAlbum';
import GridListSubheaderAlbum from './GridListSubheaderAlbum';

class Album extends Component {

  componentWillMount() {
    let albumId = this.props.match.params.id;

    this.props.requestAlbum(albumId);
    this.props.requestPhotos(albumId);
  }

  render() {
    return (
      <div className = "album">
        <table>
          <tbody>
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
        </tbody>
      </table>

      <GridListAlbum photosOfAnAlbum = {this.props.photosOfAnAlbum} />

      <GridListSubheaderAlbum photosOfAnAlbum = {this.props.photosOfAnAlbum} />

      </div>
    );
  }

  componentWillUnmount() {
    this.props.clearPage();
  }
}

Album.propTypes = {
  requestAlbum: PropTypes.func.isRequired,
  oneAlbum: PropTypes.object.isRequired,
  requestPhotos: PropTypes.func.isRequired,
  clearPage: PropTypes.func.isRequired,
  photosOfAnAlbum: PropTypes.array.isRequired
}

export default Album
