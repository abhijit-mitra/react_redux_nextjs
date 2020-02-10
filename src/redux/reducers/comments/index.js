import {handleActions} from 'redux-actions';

import {GET_COMMENTS} from '../../types';
import {createReducer, baseReducer} from '../utils';

const initialState = {
  ...baseReducer,
};

const getComments = createReducer(GET_COMMENTS, initialState);

const comments = handleActions(
    {
      ...getComments,
    },
    initialState,
);

export default comments;
