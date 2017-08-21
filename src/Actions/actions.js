export const CONCATENATE_TO_NUMBER = "CONCATENATE_TO_NUMBER";
export const STORE_NUMBER_TO_ARRAY = "STORE_NUMBER_TO_ARRAY";
export const ADD = "ADD";
export const SUBSTRACT = "SUBSTRACT";
export const MULTIPLY = "MULTIPLY";
export const DIVISION = "DIVISION";
export const EQUAL = "EQUAL";
export const CHANGE_DISPLAY_COLOR = "CHANGE_DISPLAY_COLOR";

export const concatenateToNumber = function (digit) {
  return {
    type: CONCATENATE_TO_NUMBER,
    digit
  }
}

export const storeNumberToArray = function () {
  return {
    type: STORE_NUMBER_TO_ARRAY
  }
}

export const add = function () {
  return {
    type: ADD
  }
}

export const substract = function () {
  return {
    type: SUBSTRACT
  }
}

export const multiply = function () {
  return {
    type: MULTIPLY
  }
}

export const division = function () {
  return {
    type: DIVISION
  }
}

export const equal = function () {
  return {
    type: EQUAL
  }
}

export const changeDisplayColor = function () {
  return {
    type: CHANGE_DISPLAY_COLOR,
  }
}
