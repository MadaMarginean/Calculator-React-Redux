import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText }
from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import './post.css';
import CommentBox from './CommentBox';
import Comments from './Comments';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import EditPostForm from './EditPostForm';
import Nav from '../../Nav';
import '../common/common.css';

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
    this.props.updateComment(newComment);
  }

  constructor(props) {
    super(props);
    this.state = {open: false, openEdit: false, openAdd: false};
  }

  handleOpenEdit = () => {
   this.setState({open: true, openEdit: true, openAdd: false});
 };

 handleOpenAdd = () => {
  this.setState({open: true, openEdit: false, openAdd: true});
};

 handleClose = () => {
   this.setState({open: false, openEdit: false, openAdd: false});
 };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <div>
        <Nav />
          <div className="common">
            <div className="Post">
              <Card>
                <CardHeader
                  title= {this.props.user.name}
                  subtitle= {this.props.user.username}
                />

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
                  <RaisedButton label="Edit post" className = "edit-post-btn" onClick={this.handleOpenEdit} primary={true} />
                  <Dialog
                    title="Edit post"
                    actions={actions}
                    modal={false}
                    open={this.state.openEdit}
                    onRequestClose={this.handleClose}
                  >
                    <EditPostForm handleClose={this.handleClose} />
                  </Dialog>

                  <RaisedButton label="Add a comment" className = "edit-post-btn" onClick={this.handleOpenAdd} primary={true} />
                  <Dialog
                    title="Add a comment"
                    actions={actions}
                    modal={false}
                    open={this.state.openAdd}
                    onRequestClose={this.handleClose}
                  >
                    <CommentBox onSubmitValidated ={this.onCreateSubmitValidated.bind(this)} />
                  </Dialog>
                </CardActions>
              </Card>

              <div className = "comments">Comments</div>
              <Comments comments = {this.props.comments} onSubmitValidated = {this.onEditSubmitValidated.bind(this)}/>
            </div>
          </div>
        </div>

    );
  }

  componentWillUnmount() {
    this.props.clearPage();
  }
}

Post.propTypes = {
  onePost: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  createComment: PropTypes.func.isRequired,
  clearPage: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired
}

export default Post;
