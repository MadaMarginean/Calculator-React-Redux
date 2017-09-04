import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';

import './editPostForm.css';
import { required, minLength } from '../../utility/validations';

const renderTextField = props => {
  let { input, meta: { touched, error } } = props;

  return (
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
                  validate={[required, minLength]}
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
                  validate={[required, minLength]}
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

export default reduxForm({
  form: 'EditPostForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(EditPostForm);
