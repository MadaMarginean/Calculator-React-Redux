import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import PropTypes from 'prop-types';
import CommentBox from './CommentBox';

class CommentCard extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />
    ];

    console.log("comm in CommentCard", this.props.comm);
    return (
      <Card>
        <CardTitle title = {this.props.comm.email} />
        <CardText > Title:
          {" "+this.props.comm.name}
        </CardText>
        <CardText >
          {this.props.comm.body}
        </CardText>
        <CardActions>
          <RaisedButton label="Edit" onClick={this.handleOpen} />
          <Dialog
            title="Edit comment"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <CommentBox onSubmitValidated = {this.props.onSubmitValidated}
              comm = {this.props.comm}
            />
          </Dialog>
        </CardActions>
      </Card>
    );
  }

}

CommentCard.propTypes = {
  comm: PropTypes.object.isRequired,
  onSubmitValidated: PropTypes.func.isRequired,
}

export default CommentCard;
