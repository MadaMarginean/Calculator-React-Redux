import { CALL_API } from 'redux-api-middleware';

import ACTIONS from '../config/constants';

export const loginRequest = (credentials) => ({
    [CALL_API]: {
      endpoint: `https://www.trudonapp.com/api/users/authenticate`,
      method: 'POST',
      types: [
        ACTIONS.LOGIN_REQUEST,
        ACTIONS.LOGIN_SUCCESS,
        ACTIONS.LOGIN_FAILURE
      ],
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: credentials.username,
        password: credentials.password
      })
    }
});

export const login = credentials => dispatch => {
  return dispatch(loginRequest(credentials));
}

export const register = () => ({
  type: ACTIONS.REGISTER_SUCCESS
});

export const logout = () => ({
  type: ACTIONS.LOGOUT
});
