import React from 'react';
import {TextField, Checkbox} from 'material-ui';

export const renderTextField = (placeholder, props) => {
  let {input, type, meta: { touched, error } } = props;

  return (
    <TextField
      hintText={placeholder}
      errorText={touched ? error : null}
      fullWidth={true}
      type={type}
      style={{width: '100%', height: '30px'}}
      {...input}
    />
  );
}

export const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
    {...input}
  />
);
