import {LOGIN, SIGN_UP, LOGOUT, TOGGLE_REMEMBER_ME} from './actionsTypes';
// export const login = user => ({
//   type: LOGIN,
//   payload: user,
// });
export const login = param => {
  return {
    type: LOGIN,
    payload: param,
  };
};

export const logout = () => ({
  type: LOGOUT,
});

export const signUp = user => ({
  type: SIGN_UP,
  payload: user,
});
// export const toggleRememberMe = () => ({
//   type: TOGGLE_REMEMBER_ME,
// });

//new
export function registerUserData(param, navigation) {
  return (dispatch, getState) => {
    let all_users = getState().rootReducer?.all_users;
    all_users.push(param);

    dispatch(signUp(all_users));
    navigation.navigate('Login');
  };
}

export function onUserLogout(navigation) {
  return async (dispatch, getState) => {
    dispatch(logout());
    navigation.navigate('Login');
  };
}

export function loginUser(param, is_remember, navigation) {
  return async (dispatch, getState) => {
    dispatch(
      login({
        user: {...param},
        is_remember,
      }),
    );
    navigation.navigate('Home');
  };
}
