import { connect } from 'react-redux';
import {
getInfoAboutAPost,
getUser,
getCommentsForAPost,
addAComment,
editAComment } from '../actions/posts';
import clearPage from '../actions/commonActions';
import Post from '../components/posts/Post';

const mapStateToProps = state => ({
  onePost: state.posts.onePost,
  user: state.posts.user,
  comments: state.posts.comments
});

const mapDispatchToProps = dispatch => ({
  getPost: function(id) {
    dispatch(getInfoAboutAPost(id))
      .then(action => (dispatch(getUser(action.payload.userId))))
      .then(action => (dispatch(getCommentsForAPost(id))))
  },

  createComment: addAComment,
  updateComment: editAComment,
  clearPage: clearPage
});

const displayPostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default displayPostContainer
