import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditPostForm from '../components/posts/EditPostForm';
import { editAPost } from '../actions/posts';

class EditPostFormContainer extends Component {
  render() {
    return <EditPostForm {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  initialValues: state.posts.onePost
});

const mapDispatchToProps = {
  submitFormAction: editAPost
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);
