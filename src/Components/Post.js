import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import './Post.css';
import CommentBox from './CommentBox';
import Comments from './Comments';

class Post extends Component {

  componentWillMount()
  {
    let postId = this.props.match.params.id;

    this.props.getPost(postId);
  }

  onCreateSubmitValidated(newComment) {
    let postId = this.props.match.params.id;

    this.props.createComment(postId, newComment);
  }

  onEditSubmitValidated(newComment) {
    let postId = this.props.match.params.id;

    this.props.updateComment(postId, newComment);
  }

  render() {
    console.log('this.state', this.state);

    return (
      <div>
        <Card>
          <CardHeader
            title= {this.props.user.name}
            subtitle= {this.props.user.username}
          /> }
         <CardMedia
            overlay={<CardTitle title= {this.props.user.website}  />}
          >
            <img src="http://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg" alt="" />
          </CardMedia>

          <CardTitle title = {this.props.onePost.title} />
          <CardText>
            {this.props.onePost.body}
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>

        <div className = "add-a-comment">Add a comment</div>
        <CommentBox onSubmitValidated ={this.onCreateSubmitValidated.bind(this)} />

        <div className = "comments">Comments</div>
        <Comments comments = {this.props.comments} onSubmitValidated = {this.onEditSubmitValidated.bind(this)}/>
      </div>

    );
  }

  componentWillUnmount() {
    this.props.clearPage();
  }
}

export default Post;

Post.propTypes = {
  onePost: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  createComment: PropTypes.func.isRequired,
  clearPage: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired
}
