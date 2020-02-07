import { handleActions } from 'redux-actions';

import { GET_POSTS, GET_COMMENTS } from '../../types';
import {createReducer, baseReducer} from '../utils';

const initialState = {
  posts:{...baseReducer},
  comments:{...baseReducer}
};

const getPosts = createReducer(GET_POSTS);
const getComments = createReducer(GET_COMMENTS);

const posts = handleActions(
  {
    ...getPosts,
    ...getComments
  },
  initialState,
);

export default posts;
