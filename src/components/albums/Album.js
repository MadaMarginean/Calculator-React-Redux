import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './album.css';
import GridListAlbum from './GridListAlbum';
import GridListSubheaderAlbum from './GridListSubheaderAlbum';
import AppBarAlbum from './AppBarAlbum';
import TableImages from './TableImages';
import TableOneAlbum from './TableOneAlbum';
import NavContainer from '../../containers/NavContainer';
import '../common/common.css';

class Album extends Component {
  componentWillMount() {
    let albumId = this.props.match.params.id;

    this.props.requestAlbum(albumId);
    this.props.requestPhotos(albumId);
  }

  render() {
    return (
      <div>
        <NavContainer />
          <div className="common">
            <div className="albumPage">
              <AppBarAlbum />
              <div className = "album">
                  <TableOneAlbum oneAlbum = {this.props.oneAlbum} />
              </div>
            <TableImages photosOfAnAlbum = {this.props.photosOfAnAlbum}/>
            <GridListAlbum photosOfAnAlbum = {this.props.photosOfAnAlbum} />
            <GridListSubheaderAlbum photosOfAnAlbum = {this.props.photosOfAnAlbum} />
            </div>
          </div>
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

export default Album;
