import { connect } from 'react-redux';
import { getAllPosts } from '../actions/posts';
import Posts from '../components/posts/Posts';

const mapStateToProps = state => ({
  postsArray: state.posts.postsArray
});

const mapDispatchToProps = {
  requestAllPosts: getAllPosts
};

const displayPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default displayPostsContainer
