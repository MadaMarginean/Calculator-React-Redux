import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostsPreview from './PostsPreview';

class Posts extends Component {

  componentWillMount() {
      this.props.requestAllPosts();
  }

  render() {

    return (
      <div className = "Posts" >
        <PostsPreview postsArray = {this.props.postsArray} />
      </div>
    );
  }
}

Posts.propTypes = {
  requestAllPosts: PropTypes.func.isRequired,
  postsArray: PropTypes.array.isRequired
}

export default Posts;
