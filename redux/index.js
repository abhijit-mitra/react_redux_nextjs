import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


export const initStore = (initialState = {}) => {
  return createStore(reducers, initialState, applyMiddleware(thunk));
};

const isDev = process.env.NODE_ENV !== 'production';

// const { composeWithDevTools } = isDev ? require('redux-devtools-extension') : require('redux-devtools-extension/logOnlyInProduction');

// const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState={}) => {
  const middlewares = isDev ? [thunk, createLogger()] : [thunk];
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
};
