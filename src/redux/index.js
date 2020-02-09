import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducers from './reducers';

const isDev = process.env.NODE_ENV !== 'production';

const {composeWithDevTools} = isDev ? require('redux-devtools-extension') :
require('redux-devtools-extension/logOnlyInProduction');

const initStore = (initialState={}) => {
  const middlewares = [thunk, createLogger()];
  return createStore(reducers, initialState, composeWithDevTools(
      applyMiddleware(...middlewares)));
};

export default initStore;
