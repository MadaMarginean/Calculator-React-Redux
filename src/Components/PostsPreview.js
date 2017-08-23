import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import {Link} from 'react-router-dom';

class PostsPreview extends Component {
  render() {

    return(
        <List>
          {this.props.postsArray.map((post, index) => (
            <Link to={'/posts/' + post.id} key = {index}>
              <ListItem
                primaryText = {post.id + ". " + post.title}
                leftIcon={<ContentInbox />} />
            </Link>
          ))}
        </List>
    );
  }
}

PostsPreview.propTypes = {
  postsArray: PropTypes.array.isRequired
}

export default PostsPreview;
