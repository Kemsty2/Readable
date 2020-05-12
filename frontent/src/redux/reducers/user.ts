import { LOGOUT_USER, LOGIN_USER } from '../actions';

const initialState = {
  info: {},
  isAuthenticated: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        info: { ...action.info },
        isAuthenticated: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        info: {},
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
