import * as types from '../actions/types';
import * as defaultProps from './defaultProps';

const defaultState = {
  loginDetails: defaultProps.loginDetails
};

const LoginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        loginDetails: action.data
      };
    default:
      return state;
  }
};

export default LoginReducer;
