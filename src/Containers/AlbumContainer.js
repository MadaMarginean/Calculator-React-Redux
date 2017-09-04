import { connect } from 'react-redux';
import { getInfoAboutAnAlbum, getPhotosOfAnAlbum, clearPage } from '../Actions/actions';
import Album from '../Components/Album'

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
