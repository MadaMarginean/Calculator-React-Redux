import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

class Post extends Component {

  componentWillMount()
  {
    let postId = this.props.match.params.id;

    this.props.getPost(postId);
  }

  render() {
    return (
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
  user: PropTypes.object.isRequired
}
