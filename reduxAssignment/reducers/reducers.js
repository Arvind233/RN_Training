import {
  LOGIN,
  LOGOUT,
  SIGN_UP,
  TOGGLE_REMEMBER_ME,
} from '../actions/actionsTypes';
// const initialState = {
//   user: {},
//   signUpSuccess: false,
//   registeredUsers: [],
//   is_remember: false,
//   remember_email: '',
//   remember_password: '',
// };

const initialState = {
  all_users: [],
  current_user: {},
  is_remember: false,
  remember_email: '',
  remember_password: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case LOGIN:
    //   // return {...state, user: action.payload};
    //   return {
    //     ...state,
    //     current_user: action.payload?.user,
    //     is_remember: action.payload?.is_remember,
    //     remember_email: action.payload?.is_remember
    //       ? action.payload?.user.email
    //       : '',
    //     remember_password: action.payload?.is_remember
    //       ? action.payload?.user.password
    //       : '',
    //   };
    // case SIGN_UP:
    //   return {
    //     ...state,
    //     signUpSuccess: true,
    //     registeredUsers: [...state.registeredUsers, action.payload],
    //   };
    // case TOGGLE_REMEMBER_ME:
    //   return {...state, rememberMe: !state.rememberMe};
    // case LOGOUT:
    //   return {...state, user: {}};
    // default:
    //   return state;

    case LOGOUT:
      return {
        ...state,
        current_user: {},
      };
    case SIGN_UP:
      return {
        ...state,
        all_users: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        current_user: action.payload?.user,
        is_remember: action.payload?.is_remember,
        remember_email: action.payload?.is_remember
          ? action.payload?.user.email
          : '',
        remember_password: action.payload?.is_remember
          ? action.payload?.user.password
          : '',
      };

    default:
      return state;
  }
};

export default rootReducer;
