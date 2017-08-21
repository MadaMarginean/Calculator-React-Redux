import { connect } from 'react-redux';
import { getInfoAboutAnAlbum, getPhotosOfAnAlbum, clearPage } from '../Actions/actions';
import Album from '../Components/Album'

const mapStateToProps = state => {
  return {
    oneAlbum: state.albums.oneAlbum,
    photosOfAnAlbum: state.albums.photosOfAnAlbum
  }
};

const mapDispatchToProps = dispatch => {
  return {
    requestAlbum: function(id) {
      dispatch(getInfoAboutAnAlbum(id))
    },

    requestPhotos: function(id) {
      dispatch(getPhotosOfAnAlbum(id))
    },

    clearPage: function(){
      dispatch(clearPage)
    }
  };
}

const displayAlbumContainer = connect(mapStateToProps, mapDispatchToProps)(Album);

export default displayAlbumContainer
