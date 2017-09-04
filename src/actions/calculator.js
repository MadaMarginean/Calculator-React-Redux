import ACTIONS from '../config/constants';

export const concatenateToNumber = (digit) => ({
  type: ACTIONS.CONCATENATE_TO_NUMBER,
  digit
});

export const storeNumberToArray = () => ({
  type: ACTIONS.STORE_NUMBER_TO_ARRAY
});

export const add = () => ({
  type: ACTIONS.ADD
});

export const substract = () => ({
  type: ACTIONS.SUBSTRACT
});

export const multiply = () => ({
  type: ACTIONS.MULTIPLY
});

export const division = () => ({
  type: ACTIONS.DIVISION
});

export const equal = () => ({
  type: ACTIONS.EQUAL
});

export const changeDisplayColor = () => ({
  type: ACTIONS.CHANGE_DISPLAY_COLOR
});
