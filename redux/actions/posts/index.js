import fetch from 'isomorphic-unfetch';

import { GET_POSTS } from '../../types';


export const getPosts = () => async (dispatch)=>{
  dispatch({type:`${GET_POSTS}_started`});
  try{
    let res = await fetch('https://api.github.com/repos/zeit/next.js');
    res = await res.json();
    dispatch({type:`${GET_POSTS}_success`, payload: res});
  }catch(err){
    dispatch({type:`${GET_POSTS}_failed`, payload: err});
  }

}
