import {
  GET_ALL_ALBUMS_SUCCESS,
  GET_ALL_ALBUMS_FAILURE,
  GET_ALBUM_SUCCESS,
} from '../Actions/actions';

const albumsDefaultState = {
  albumsObj: [],
  oneAlbum: {}
};

const albums = (state = albumsDefaultState, action) => {

  switch (action.type) {
    case GET_ALL_ALBUMS_SUCCESS:
      return Object.assign({}, state, {
        albumsObj: action.payload
      });

    case GET_ALL_ALBUMS_FAILURE:
      return state;

    case GET_ALBUM_SUCCESS:
      return Object.assign({}, state, {
        oneAlbum: action.payload
      });

    default:
      return state;
  }
}

export default albums;
