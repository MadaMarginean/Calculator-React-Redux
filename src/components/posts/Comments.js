import React from 'react';
import PropTypes from 'prop-types';
import CommentCard from './CommentCard';

export default class Comments extends React.Component {
  render() {
    return (
      <div>
        {this.props.comments.map ((comm, index) => (
          <CommentCard key = {index} comm = {comm} onSubmitValidated = {this.props.onSubmitValidated}/>
          ))}
      </div>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  onSubmitValidated: PropTypes.func.isRequired
}
