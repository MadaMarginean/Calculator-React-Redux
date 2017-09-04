export const required = function(value) {
  return value ? undefined : 'Required';
}
export const minLength = min => value => {
  if (value && value.length < min) {
    return `Must be ${min} characters or more`;
  } else {
    return undefined;
  }
}
