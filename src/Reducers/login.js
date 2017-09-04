import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGOUT
} from '../config/constants';

const loginDefaultState = {
  userToken: 'sknds'
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

    case LOGOUT:
      return Object.assign({}, state, {
        userToken: null
      });

    default:
        return state;
    }
}

export default login;
