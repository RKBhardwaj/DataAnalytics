import { createStore } from 'redux';
import appReducer from '../reducers';
import createMiddleware from './middleware';

const configureStore = (initialState, history) => {
  const middleware = createMiddleware(history);
  return createStore(appReducer, initialState, middleware);
};

export default configureStore;
