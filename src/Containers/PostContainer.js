import { connect } from 'react-redux';
import { getInfoAboutAPost, clearPage, getUser, getCommentsForAPost } from '../Actions/actions';
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

    clearPage: function(){
      dispatch(clearPage)
    }
  };
}

const displayPostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default displayPostContainer
