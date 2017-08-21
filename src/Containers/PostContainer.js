import { connect } from 'react-redux';
import { getInfoAboutAPost, clearPage, getUser } from '../Actions/actions';
import Post from '../Components/Post'

const mapStateToProps = state => {
  return {
    onePost: state.posts.onePost,
    user: state.posts.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getPost: function(id) {
      dispatch(getInfoAboutAPost(id))
        .then(action => {
          dispatch(getUser(action.payload.userId));
        });
    },

    clearPage: function(){
      dispatch(clearPage)
    }
  };
}

const displayPostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default displayPostContainer
