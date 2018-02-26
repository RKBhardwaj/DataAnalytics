import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import LoginReducer from './LoginReducer';
import UserReducer from './UserReducer';

const appReducer = combineReducers({
  LoginReducer,
  UserReducer,
  routing: routerReducer
});

export default appReducer;
