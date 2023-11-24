import {LOGIN, SIGN_UP, LOGOUT} from './actionsTypes';
export const login = user => ({
  type: LOGIN,
  payload: user,
});

export const logout = user => ({
  type: LOGOUT,
});

export const signUp = user => ({
  type: SIGN_UP,
  payload: user,
});
