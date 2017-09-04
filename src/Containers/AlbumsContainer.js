import { connect } from 'react-redux';
import { getAllAlbums } from '../actions/albums';
import Albums from '../components/albums/Albums'

const mapStateToProps = state => ({
    albumsObj: state.albums.albumsObj
});

const mapDispatchToProps = {
    requestAllAlbums: getAllAlbums
};

const displayAlbumsContainer = connect(mapStateToProps, mapDispatchToProps)(Albums);

export default displayAlbumsContainer
