import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import './CommentBox.css';
import RaisedButton from 'material-ui/RaisedButton';
import validate from 'validate.js';
import PropTypes from 'prop-types';

class CommentBox extends Component{

  constructor(props) {
    super(props);

    this.state = {
      body: [],
      email: [],
      name: [],
      id: null,
      nameText: '',
      emailText: '',
      bodyText: ''
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

  _handleSubmit(e) {
    e.preventDefault();

    let newComment = {
      name: this.state.nameText || this.name.getValue(),
      email: this.state.emailText || this.email.getValue(),
      body: this.state.bodyText || this.body.getValue()
    };

    if (this.props.comm) {
      newComment.id = this.props.comm.id;
    }

    if (this.applyValidation(newComment)) {
      this.props.onSubmitValidated(newComment);
    }
  }

  render() {
    return(
      <div className = "comment-box">
        <form onSubmit={this._handleSubmit.bind(this)} >

          <TextField
            ref = {(name) => this.name = name}
            hintText="Comment title*"
            floatingLabelText="Comment title*"
            errorText={this.state.name[0] || ''}
            value = {this.state.nameText || ((this.props.comm) ? this.props.comm.name: '')}
            onChange = {(e, newValue) => this.setState({nameText: newValue})}
          /><br />
          <TextField
            ref = {(email) => this.email = email}
            hintText="Email*"
            floatingLabelText="Email*"
            errorText={this.state.email[0] || ''}
            value={this.state.emailText || ((this.props.comm) ? this.props.comm.email: '')}
            onChange = {(e, newValue) => this.setState({emailText: newValue})}
          /><br />
          <TextField
            ref = {(body) => this.body = body}
            hintText="Comment"
            errorText={this.state.body[0] || ''}
            floatingLabelText="Comment*"
            multiLine={true}
            rows={2}
            value={this.state.bodyText || ((this.props.comm) ? this.props.comm.body: '')}
            onChange = {(e, newValue) => this.setState({bodyText: newValue})}
            fullWidth={true}
          /><br />

          <RaisedButton type="submit" label="Submit"/>
        </form>
      </div>
    );
  }
}

export default CommentBox;

CommentBox.propTypes = {
  onSubmitValidated: PropTypes.func.isRequired,
  comm: PropTypes.object.isRequired,
}
