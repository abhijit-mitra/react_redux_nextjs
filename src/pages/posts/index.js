import {memo, useEffect, useState} from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import {getPosts} from '../../redux/actions';

const Posts = memo((props) => {
  useEffect(()=>{
    props.getPosts();
  },[])
  return(
    <>
      <h1>Posts Screen</h1>
      <h1>{props.isFetching?'...Loading':props.data&& props.data.size}</h1>
    </>
  );
});

Posts.getInitialProps = async function(ctx) {
  if(ctx.isServer){
      await ctx.store.dispatch(getPosts());
  }
};

export default connect(state=>state.posts,{getPosts})(Posts);
