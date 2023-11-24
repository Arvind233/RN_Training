import {LOGIN, LOGOUT, SIGN_UP} from '../actions/actionsTypes';
const initialState = {
  user: {},
  signUpSuccess: false,
  registeredUsers: [],
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
    case LOGOUT:
      return {...state, user: {}};
    default:
      return state;
  }
};

export default rootReducer;
