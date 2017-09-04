import { LOGIN_SUCCESS, REGISTER_SUCCESS, GET_HOME_SUCCESS } from '../Actions/actions';

const loginDefaultState = {
  userToken: 'asdasdas'
};

const login = (state = loginDefaultState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        userToken: action.payload.token
      });

    case REGISTER_SUCCESS:
      console.log("Register Success!");
      break;
      default:
        return state;
    }
}

export default login;
