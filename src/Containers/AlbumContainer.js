import { connect } from 'react-redux';
import { getInfoAboutAnAlbum } from '../Actions/actions';
import Album from '../Components/Album'

const mapStateToProps = state => {
  return {
    oneAlbum: state.albums.oneAlbum
  }
};

const mapDispatchToProps = dispatch => {
  return {
    requestAlbum: function(id) {
      dispatch(getInfoAboutAnAlbum(id))
    }
  };
}

const displayAlbumContainer = connect(mapStateToProps, mapDispatchToProps)(Album);

export default displayAlbumContainer
