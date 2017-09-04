import {
  GET_ALL_ALBUMS_SUCCESS,
  GET_ALL_ALBUMS_FAILURE,
  GET_ALBUM_SUCCESS,
  GET_PHOTOS_SUCCESS,
  CLEAR_PAGE
} from '../config/constants';

const albumsDefaultState = {
  albumsObj: [],
  oneAlbum: {},
  photosOfAnAlbum: []
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

      case GET_PHOTOS_SUCCESS:
        return Object.assign({}, state, {
          photosOfAnAlbum: action.payload.map(photo => photo.url + '\n')
        });

      case CLEAR_PAGE:
        return albumsDefaultState;

    default:
      return state;
  }
}

export default albums;
