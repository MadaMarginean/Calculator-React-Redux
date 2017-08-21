import { connect } from 'react-redux';
import { getAllAlbums } from '../Actions/actions';
import Albums from '../Components/Albums'

const mapStateToProps = state => {
  return {
    albumsObj: state.albums.albumsObj
  }
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllAlbums: function() {
      dispatch(getAllAlbums)
    }
  };
}

const displayAlbumsContainer = connect(mapStateToProps, mapDispatchToProps)(Albums);

export default displayAlbumsContainer
