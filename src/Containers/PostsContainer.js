import { connect } from 'react-redux';
import { getAllPosts } from '../Actions/actions';
import Posts from '../Components/Posts'

const mapStateToProps = state => {
  return {
    postsArray: state.posts.postsArray
  }
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllPosts: function() {
      dispatch(getAllPosts)
    }
  };
}

const displayPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default displayPostsContainer
