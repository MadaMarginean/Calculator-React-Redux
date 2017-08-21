import { CALL_API } from 'redux-api-middleware';

export const CONCATENATE_TO_NUMBER = "CONCATENATE_TO_NUMBER";
export const STORE_NUMBER_TO_ARRAY = "STORE_NUMBER_TO_ARRAY";
export const ADD = "ADD";
export const SUBSTRACT = "SUBSTRACT";
export const MULTIPLY = "MULTIPLY";
export const DIVISION = "DIVISION";
export const EQUAL = "EQUAL";
export const CHANGE_DISPLAY_COLOR = "CHANGE_DISPLAY_COLOR";
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const GET_ALL_ALBUMS_REQUEST = 'GET_ALL_ALBUMS_REQUEST';
export const GET_ALL_ALBUMS_SUCCESS = 'GET_ALL_ALBUMS_SUCCESS';
export const GET_ALL_ALBUMS_FAILURE = 'GET_ALL_ALBUMS_FAILURE';
export const INFO_ABOUT_AN_ALBUM = "INFO_ABOUT_AN_ALBUM";
export const GET_ALBUM_REQUEST = "GET_ALBUM_REQUEST";
export const GET_ALBUM_SUCCESS = "GET_ALBUM_SUCCESS";
export const GET_ALBUM_FAILURE = "GET_ALBUM_FAILURE";
export const GET_PHOTOS_REQUEST = "GET_PHOTOS_REQUEST";
export const GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS";
export const GET_PHOTOS_FAILURE = "GET_PHOTOS_FAILURE";
export const CLEAR_PAGE = "CLEAR_PAGE";

export const getAllAlbums = {
  [CALL_API]: {
    endpoint: 'https://jsonplaceholder.typicode.com/albums',
    method: 'GET',
    types: [
      GET_ALL_ALBUMS_REQUEST,
      GET_ALL_ALBUMS_SUCCESS,
      GET_ALL_ALBUMS_FAILURE
    ]
  }
}

export const getPhotosOfAnAlbum = function(id) {
  return {[CALL_API]: {
    endpoint: 'https://jsonplaceholder.typicode.com/photos?albumId=' +id,
    method: 'GET',
    types: [
      GET_PHOTOS_REQUEST,
      GET_PHOTOS_SUCCESS,
      GET_PHOTOS_FAILURE
    ]
  }
  };
}

export const clearPage = {
    type: CLEAR_PAGE
}

export const concatenateToNumber = function (digit) {
  return {
    type: CONCATENATE_TO_NUMBER,
    digit
  }
}

export const storeNumberToArray = function () {
  return {
    type: STORE_NUMBER_TO_ARRAY
  }
}

export const add = function () {
  return {
    type: ADD
  }
}

export const substract = function () {
  return {
    type: SUBSTRACT
  }
}

export const multiply = function () {
  return {
    type: MULTIPLY
  }
}

export const division = function () {
  return {
    type: DIVISION
  }
}

export const equal = function () {
  return {
    type: EQUAL
  }
}

export const changeDisplayColor = function () {
  return {
    type: CHANGE_DISPLAY_COLOR
  }
}

export const getInfoAboutAnAlbum = function(id) {
  return {
    [CALL_API]: {
    endpoint: 'https://jsonplaceholder.typicode.com/albums/' + id,
    method: 'GET',
    types: [
      GET_ALBUM_REQUEST,
      GET_ALBUM_SUCCESS,
      GET_ALBUM_FAILURE
    ]
    }
  }
}
