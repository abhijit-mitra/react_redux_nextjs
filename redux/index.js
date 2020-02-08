import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';


export const initStore = (initialState = {}) => {
  return createStore(reducers, initialState, applyMiddleware(thunk));
};

const isDev = process.env.NODE_ENV !== 'production';

const { composeWithDevTools } = isDev ? require('redux-devtools-extension') : require('redux-devtools-extension/logOnlyInProduction');

export default (initialState={}) => {
  const middlewares = isDev ? [thunk, createLogger()] : [thunk];
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
};
