import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Album.css';
import GridListAlbum from './GridListAlbum';
import GridListSubheaderAlbum from './GridListSubheaderAlbum';
import AppBarAlbum from './AppBarAlbum';
import TableImages from './TableImages';
import TableOneAlbum from './TableOneAlbum';

class Album extends Component {

  componentWillMount() {
    let albumId = this.props.match.params.id;

    this.props.requestAlbum(albumId);
    this.props.requestPhotos(albumId);
  }

  render() {
    return (
      <div>
        <AppBarAlbum />

        <div className = "album">
            <TableOneAlbum oneAlbum = {this.props.oneAlbum} />
        </div>

      <TableImages photosOfAnAlbum = {this.props.photosOfAnAlbum}/>

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
