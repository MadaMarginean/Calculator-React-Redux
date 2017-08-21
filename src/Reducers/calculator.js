import {CONCATENATE_TO_NUMBER, STORE_NUMBER_TO_ARRAY, ADD, SUBSTRACT, MULTIPLY, DIVISION, EQUAL, CHANGE_DISPLAY_COLOR} from '../Actions/actions.js'

let calculatorDefaultState = {
  digitsString: '',
  arrayNumber: [],
  result: 0,
  displayColorsArray: ["white", "#D7D7D7", "#B9B9B9", "#AFAFAF"],
  background: 'white',
  i: 1,
  calculatorColorsArray: ["#E6E6FA", "#778899", "#708090", "#D7D7D7"],
  calcBackground: "#E6E6F"
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

    case CHANGE_DISPLAY_COLOR: {
      let index = (state.i + 1) % state.displayColorsArray.length;

      return Object.assign({}, state, {
        background: state.displayColorsArray[index],
        calcBackground: state.calculatorColorsArray[index],
        i: index
      });
    }

    default:
      return state
  }
}

export default calculator;
