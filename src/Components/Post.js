import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import './Post.css';
import RaisedButton from 'material-ui/RaisedButton';
import validate from 'validate.js';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: [],
      email: [],
      name: []
    };

  }

  resetState() {
    this.setState({
      body: [],
      email: [],
      name: []
    });
  }

  applyValidation(newComment) {
    let constraints = {
      email: {
        email: true
      },
      name: {
        length: {minimum: 6}
      },
      body: {
        length: {minimum: 6}
      }
    };
    let errorMessages = validate(newComment, constraints);

    this.resetState();

    if (!errorMessages) {
      return true;
    }

    this.setState(errorMessages);

    return false;
  }

  componentWillMount()
  {
    let postId = this.props.match.params.id;

    this.props.getPost(postId);
  }

  _handleSubmit(e) {
    e.preventDefault();
    let postId = this.props.match.params.id;
    let newComment = {
      name: this.name.getValue(),
      email: this.email.getValue(),
      body: this.comment.getValue()
    };

    if (this.applyValidation(newComment)) {
      this.props.createComment(postId, newComment);
    }
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

        <div className = "comment-box">
          <form onSubmit={this._handleSubmit.bind(this)}>

            <TextField
              ref = {(name) => this.name = name}
              hintText="Comment title*"
              errorText={this.state.name[0] || ''}
            /><br />
            <TextField
              ref = {(email) => this.email = email}
              hintText="Email*"
              errorText={this.state.email[0] || ''}
            /><br />
            <TextField
              ref = {(comment) => this.comment = comment}
              hintText="Comment"
              errorText={this.state.body[0] || ''}
              floatingLabelText="Comment*"
              multiLine={true}
              rows={2}
            /><br />

            <RaisedButton type="submit" label="Submit" />
          </form>
        </div>

        <div className = "comments">Comments</div>
        {this.props.comments.map ((comm, index) =>(
          <Card key = {index}>
            <CardHeader
              title={comm.name}
              subtitle={comm.email}
            />

            <CardText >
              {comm.body}
            </CardText>
          </Card>
        ))}
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
  createComment: PropTypes.func.isRequired
}
