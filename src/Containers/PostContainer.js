import { connect } from 'react-redux';
import { getInfoAboutAPost, clearPage, getUser, getCommentsForAPost, addAComment, editAComment, editAPost } from '../Actions/actions';
import Post from '../Components/Post'

const mapStateToProps = state => {
  return {
    onePost: state.posts.onePost,
    user: state.posts.user,
    comments: state.posts.comments
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getPost: function(id) {
      dispatch(getInfoAboutAPost(id))
        .then(action => (dispatch(getUser(action.payload.userId))))
        .then(action => (dispatch(getCommentsForAPost(id))))
    },

    createComment: function(id, comment) {
      dispatch(addAComment(id, comment))
    },

    updateComment: function(comment) {
      dispatch(editAComment(comment))
    },

    clearPage: function(){
      dispatch(clearPage)
    }
  };
}

const displayPostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default displayPostContainer
