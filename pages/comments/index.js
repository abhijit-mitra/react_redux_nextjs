import {memo, useEffect, useState} from 'react';
import { connect } from 'react-redux';

import {getComments} from '../../redux/actions';

const Posts = memo((props) => {
  useEffect(()=>{
    props.getComments();
  },[])
  return(
    <>
      <h1>Posts</h1>
      <h1>{props.isFetching?'...Loading':props.data&& props.data.size}</h1>
    </>
  );
});

Posts.getInitialProps = async function(ctx) {
  if(ctx.isServer){
      await ctx.store.dispatch(getComments());
  }
};

export default connect(state=>state.comments,{getComments})(Posts);
