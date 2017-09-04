import { CALL_API } from 'redux-api-middleware';

import ACTIONS from '../config/constants';

export const getAllPosts = () => ({
  [CALL_API]: {
    endpoint: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    types: [
      ACTIONS.GET_ALL_POSTS_REQUEST,
      ACTIONS.GET_ALL_POSTS_SUCCESS,
      ACTIONS.GET_ALL_POSTS_FAILURE
    ]
  }
});

export const getInfoAboutAPost = (id) => ({
  [CALL_API]: {
    endpoint: `https://jsonplaceholder.typicode.com/posts/${id}`,
    method: 'GET',
    types: [
      ACTIONS.GET_POST_REQUEST,
      ACTIONS.GET_POST_SUCCESS,
      ACTIONS.GET_POST_FAILURE
    ]
  }
});

export const editAPost = (onePost) => ({
  [CALL_API]: {
    endpoint: `https://jsonplaceholder.typicode.com/posts/${onePost.id}`,
    method: 'PUT',
    types: [
      ACTIONS.PUT_POST_REQUEST,
      ACTIONS.PUT_POST_SUCCESS,
      ACTIONS.PUT_POST_FAILURE
    ],
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: onePost.id,
      userId: onePost.userId,
      title: onePost.title,
      body: onePost.body
    })
  }
});

export const getCommentsForAPost = (id) => ({
  [CALL_API]: {
    endpoint: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    method: 'GET',
    types: [
      ACTIONS.GET_COMMENTS_REQUEST,
      ACTIONS.GET_COMMENTS_SUCCESS,
      ACTIONS.GET_COMMENTS_FAILURE
    ]
  }
});

export const addAComment = (id, comment) => ({
  [CALL_API]: {
    endpoint: `https://jsonplaceholder.typicode.com/comments`,
    method: 'POST',
    types: [
      ACTIONS.POST_COMMENT_REQUEST,
      ACTIONS.POST_COMMENT_SUCCESS,
      ACTIONS.POST_COMMENT_FAILURE
    ],
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      postId: id,
      email: comment.email,
      name: comment.name,
      body: comment.body
    })
  }
});

export const editAComment = (comment) => ({
  [CALL_API]: {
    endpoint: `https://jsonplaceholder.typicode.com/comments/${comment.id}`,
    method: 'PUT',
    types: [
      ACTIONS.ACTIONS.PUT_COMMENT_REQUEST,
      ACTIONS.PUT_COMMENT_SUCCESS,
      ACTIONS.PUT_COMMENT_FAILURE
    ],
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      postId: comment.postId,
      id: comment.id,
      email: comment.email,
      name: comment.name,
      body: comment.body
    })
  }
});

export const getUser = (id) => ({
  [CALL_API]: {
    endpoint: `https://jsonplaceholder.typicode.com/users/${id}`,
    method: 'GET',
    types: [
      ACTIONS.GET_USER_REQUEST,
      ACTIONS.GET_USER_SUCCESS,
      ACTIONS.GET_USER_FAILURE
    ]
  }
});
