import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostsPreview from './PostsPreview';
import '../common/common.css';
import NavContainer from '../../containers/NavContainer';

class Posts extends Component {
  componentWillMount() {
      this.props.requestAllPosts();
  }

  render() {

    return (
      <div>
        <NavContainer />
        <div className = "common" >
          <PostsPreview postsArray = {this.props.postsArray} />
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  requestAllPosts: PropTypes.func.isRequired,
  postsArray: PropTypes.array.isRequired
}

export default Posts;
