import { connect } from 'react-redux';
import {
getInfoAboutAnAlbum,
getPhotosOfAnAlbum
} from '../actions/albums';
import clearPage from '../actions/commonActions';
import Album from '../components/albums/Album';

const mapStateToProps = state => ({
  oneAlbum: state.albums.oneAlbum,
  photosOfAnAlbum: state.albums.photosOfAnAlbum
});

const mapDispatchToProps = {
  requestAlbum: getInfoAboutAnAlbum,
  requestPhotos: getPhotosOfAnAlbum,
  clearPage
};

const displayAlbumContainer = connect(mapStateToProps, mapDispatchToProps)(Album);

export default displayAlbumContainer
