import {memo, useEffect} from 'react';
import {connect} from 'react-redux';

import {getPosts} from '../../redux/actions';

const Test = memo((props) => {
  useEffect(()=>{
    props.getPosts();
  }, []);
  return (
    <>
      <h1>Posts Screen</h1>
      <h1>{props.isFetching?'...Loading':props.data&& props.data.size}</h1>
    </>
  );
});

Test.getInitialProps = async function(ctx) {
  if (ctx.isServer) {
    await ctx.store.dispatch(getPosts());
  }
};

export default connect((state)=>state.posts, {getPosts})(Test);
