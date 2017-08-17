import {CONCATENATE_TO_NUMBER, STORE_NUMBER_TO_ARRAY, ADD, SUBSTRACT, MULTIPLY, DIVISION, EQUAL} from '../Actions/actions.js'

let calculatorDefaultState = {
  digitsString: '',
  arrayNumber: [],
  result: 0
}

const calculator = (state = calculatorDefaultState, action) => {

  console.log(state, 'action', action);

  let arrayClone = state.arrayNumber.slice();

  switch (action.type) {
    case CONCATENATE_TO_NUMBER:
      return Object.assign({}, state, {
        digitsString: state.digitsString + action.digit
      });
    case STORE_NUMBER_TO_ARRAY:
      arrayClone.push(parseInt(state.digitsString, 10));
      console.log('array: ', arrayClone);

      return Object.assign({}, state, {
        arrayNumber: arrayClone,
        digitsString: ''
      });

    case ADD:
      arrayClone.push("+");
      console.log('array: ', arrayClone);

      return Object.assign({}, state, {
        arrayNumber: arrayClone,
        digitsString: ''
      });

    case SUBSTRACT:
      arrayClone.push("-");
      console.log('array: ', arrayClone);

      return Object.assign({}, state, {
        arrayNumber: arrayClone,
        digitsString: ''
      });

    case MULTIPLY:
      arrayClone.push("*");
      console.log('array: ', arrayClone);

      return Object.assign({}, state, {
        arrayNumber: arrayClone,
        digitsString: ''
      });

    case DIVISION:
      arrayClone.push("/");
      console.log('array: ', arrayClone);

      return Object.assign({}, state, {
        arrayNumber: arrayClone,
        digitsString: ''
      });

    case EQUAL:
      arrayClone.push("=");
      console.log('array: ', arrayClone);
      var result;

      switch(arrayClone[1]) {
        case "+":
          result = arrayClone[0] + arrayClone[2];
          console.log('result', result);
          break;
        case "-":
            result = arrayClone[0] - arrayClone[2];
            console.log('result', result);
            break;
        case "*":
            result = arrayClone[0] * arrayClone[2];
            console.log('result', result);
            break;
        case "/":
            result = arrayClone[0] / arrayClone[2];
            console.log('result', result);
            break;
        default:
          break;
        }
      return Object.assign({}, state, {
          arrayNumber: [],
          digitsString: '' + result
        });

    default:
      return state
  }
}

export default calculator;
