import fetch from 'isomorphic-unfetch';

import {GET_POSTS} from '../../types';


export const getPosts = () => (dispatch, getState)=>{
  const state = getState();
  if (state.posts.data) {
    return;
  }
  const callApi = async () =>{
    try {
      let res = await fetch('https://api.github.com/repos/zeit/next.js');
      res = await res.json();
      dispatch({type: `${GET_POSTS}_success`, payload: res});
    } catch (err) {
      dispatch({type: `${GET_POSTS}_failed`, payload: err});
    }
  };

  dispatch({type: `${GET_POSTS}_started`});
  return Promise.resolve(callApi());
};
