import {LOGIN, SIGN_UP, LOGOUT, TOGGLE_REMEMBER_ME} from './actionsTypes';
export const login = user => ({
  type: LOGIN,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});

export const signUp = user => ({
  type: SIGN_UP,
  payload: user,
});
export const toggleRememberMe = () => ({
  type: TOGGLE_REMEMBER_ME,
});
