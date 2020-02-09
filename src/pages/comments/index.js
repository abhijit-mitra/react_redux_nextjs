import {memo, useEffect} from 'react';
import {connect} from 'react-redux';

import {getComments} from '../../redux/actions';

const Index = memo((props) => {
  useEffect(()=>{
    props.getComments();
  }, []);
  return (
    <>
      <h1>Comments</h1>
      <h1>{props.isFetching?'...Loading':props.data&& props.data.size}</h1>
    </>
  );
});

Index.getInitialProps = async function(ctx) {
  if (ctx.isServer) {
    await ctx.store.dispatch(getComments());
  }
};

export default connect((state)=>state.comments, {getComments})(Index);
