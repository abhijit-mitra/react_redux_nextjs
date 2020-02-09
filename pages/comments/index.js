import {memo, useEffect, useState} from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

import {getComments} from '../../redux/actions';

const Comments = memo((props) => {
  useEffect(()=>{
    props.getComments();
  },[])
  return(
    <>
      <h1>Comments</h1>
      <h1>{props.isFetching?'...Loading':props.data&& props.data.size}</h1>
      <Link href='comments/[commentId]' as='comments/1'>
        <a>Description</a>
      </Link>
    </>
  );
});

Comments.getInitialProps = async function(ctx) {
  if(ctx.isServer){
      await ctx.store.dispatch(getComments());
  }
};

export default connect(state=>state.comments,{getComments})(Comments);
