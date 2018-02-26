import * as types from '../actions/types';
import * as defaultProps from './defaultProps';

const defaultState = {
  users: defaultProps.users
};

const UserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.data
      };
    default:
      return state;
  }
};

export default UserReducer;
