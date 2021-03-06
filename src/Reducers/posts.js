import {
  GET_ALL_POSTS_SUCCESS,
  GET_POST_SUCCESS,
  CLEAR_PAGE,
  GET_USER_SUCCESS,
  GET_COMMENTS_SUCCESS,
  POST_COMMENT_SUCCESS
} from '../Actions/actions';

const postsDefaultState = {
  postsArray: [],
  onePost: {},
  user: {},
  comments: []
};

const posts = (state = postsDefaultState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS_SUCCESS:
      return Object.assign({}, state, {
        postsArray: action.payload
      });

    case GET_POST_SUCCESS:
      return Object.assign({}, state, {
        onePost: action.payload
      });

    case GET_USER_SUCCESS:
      return Object.assign({}, state, {
        user: action.payload
      });

    case GET_COMMENTS_SUCCESS:
      return Object.assign({}, state, {
        comments: action.payload
      });

    case POST_COMMENT_SUCCESS:
      let commentsClone = state.comments.slice();

      commentsClone.push(action.payload);

      return Object.assign({}, state, {
        comments: commentsClone
      });

    case CLEAR_PAGE:
      return postsDefaultState;

    default:
      return state;
  }
}

export default posts;
