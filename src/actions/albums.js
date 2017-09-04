import { CALL_API } from 'redux-api-middleware';

import ACTIONS from '../config/constants';

export const getAllAlbums = () => ({
  [CALL_API]: {
    endpoint: 'https://jsonplaceholder.typicode.com/albums',
    method: 'GET',
    types: [
      ACTIONS.GET_ALL_ALBUMS_REQUEST,
      ACTIONS.GET_ALL_ALBUMS_SUCCESS,
      ACTIONS.GET_ALL_ALBUMS_FAILURE
    ]
  }
});

export const getPhotosOfAnAlbum = (id) => ({
  [CALL_API]: {
    endpoint: `https://jsonplaceholder.typicode.com/photos?albumId=${id}`,
    method: 'GET',
    types: [
      ACTIONS.GET_PHOTOS_REQUEST,
      ACTIONS.GET_PHOTOS_SUCCESS,
      ACTIONS.GET_PHOTOS_FAILURE
    ]
  }
});

export const getInfoAboutAnAlbum = (id) => ({
  [CALL_API]: {
    endpoint: `https://jsonplaceholder.typicode.com/albums/${id}`,
    method: 'GET',
    types: [
      ACTIONS.GET_ALBUM_REQUEST,
      ACTIONS.GET_ALBUM_SUCCESS,
      ACTIONS.GET_ALBUM_FAILURE
    ]
  }
});
