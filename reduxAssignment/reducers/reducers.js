import {
  LOGIN,
  LOGOUT,
  SIGN_UP,
  TOGGLE_REMEMBER_ME,
} from '../actions/actionsTypes';
const initialState = {
  user: {},
  signUpSuccess: false,
  registeredUsers: [],
  rememberMe: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, user: action.payload};
    case SIGN_UP:
      return {
        ...state,
        signUpSuccess: true,
        registeredUsers: [...state.registeredUsers, action.payload],
      };
    case TOGGLE_REMEMBER_ME:
      return {...state, rememberMe: !state.rememberMe};
    case LOGOUT:
      return {...state, user: {}};
    default:
      return state;
  }
};

export default rootReducer;
