import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import {editAPost} from '../Actions/actions';
import TextField from 'material-ui/TextField';
import './EditPostForm.css';

const form = reduxForm({
  form: 'EditPostForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
});

const renderTextField = props => {
  let { input } = props;
  let { meta: { touched, error } } = props;

  return(
    <div>
      <TextField
        hintText={props.label}
        floatingLabelText={props.label}
        errorText={touched ? error: null}
        multiLine={true}
        rows={1}
        fullWidth={true}
        {...input}
      />
    </div>
  );
}

class EditPostForm extends Component {
  handleFormSubmit(formProps) {
    this.props.submitFormAction(formProps);
    this.props.handleClose(formProps);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >

          <div className="edit-post-box">
            <div className="title">
              <label>Title:</label>
              <div>
                <Field
                  name="title"
                  type="text"
                  component={renderTextField}
                  validate={[required, minLength6]}
                />
              </div>
            </div>

            <div className="body">
              <label>Body:</label>
              <div>
                <Field
                  name="body"
                  type="text"
                  component={renderTextField}
                  validate={[required, minLength6]}
                />
              </div>
            </div>

            <button action="submit">Save changes</button>
          </div>
        </form>
      </div>
    )
  }
}

const required = function(value) {
  return value ? undefined : 'Required';
}
const minLength = min => value => {
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
}

const minLength6 = minLength(6);

function mapStateToProps(state) {
  return {
    initialValues: state.posts.onePost
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitFormAction: function(onePost) {
      dispatch(editAPost(onePost));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(form(EditPostForm));
