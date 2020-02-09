import fetch from 'isomorphic-unfetch';

import { GET_COMMENTS } from '../../types';


export const getComments = () => (dispatch, getState)=>{
  const state = getState();
  if(state.comments.data){
    return;
  }
  const callApi = async () =>{
    try{
      let res = await fetch('https://api.github.com/repos/zeit/next.js');
      res = await res.json();
      dispatch({type:`${GET_COMMENTS}_success`, payload: res});
    }catch(err){
      dispatch({type:`${GET_COMMENTS}_failed`, payload: err});
    }
  }

  dispatch({type:`${GET_COMMENTS}_started`});
  return Promise.resolve(callApi());

}
