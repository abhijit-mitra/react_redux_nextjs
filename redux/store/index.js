import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';


export const initStore = (initialState = {}) => {
  return createStore(reducer, initialState, applyMiddleware(thunk));
};

import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const isDev = process.env.NODE_ENV !== 'production';

const { composeWithDevTools } = isDev ? require('redux-devtools-extension') : require('redux-devtools-extension/logOnlyInProduction');


export default (initialState={}) => {
  const middlewares = isDev ? [thunk, createLogger()] : [];
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
};
