import { handleActions } from 'redux-actions';

import { GET_POSTS } from '../../types';
import {createReducer, baseReducer} from '../utils';

const initialState = {
  ...baseReducer
};

const getPosts = createReducer(GET_POSTS);

const posts = handleActions(
  {
    ...getPosts
  },
  initialState,
);

export default posts;
