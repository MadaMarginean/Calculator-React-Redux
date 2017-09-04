import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS
} from '../config/constants';

const loginDefaultState = {
  userToken: null
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
