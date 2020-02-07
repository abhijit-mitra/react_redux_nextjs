import Router, { useRouter }  from 'next/router';
import {useState, useEffect} from 'react';

const initialState={
  data:null,
  error:null,
  isFetching: false
}

const getComments = async (state, setState) =>{
  const data = await getData();
  setState({
    ...state,
    isFetching: false,
    data
  });
}

export const Comments = () =>{
  const {query} = useRouter();
  const [state, setState] = useState(initialState);

  useEffect(()=>{
      setState({
        ...state,
        isFetching:true
      });
      getComments(state, setState);
  },[]);

  return(
    <div>
      {state.isFetching?
        <h1>Loading...</h1>:
        ((state.data && state.data.comments) || []).map((data, i)=>(
          <h2 key={i} onClick={()=>Router.push('/posts/[postId]/comments/[commentId]',
          `/posts/${query.postId}/comments/${i+1}`)}>
            {data}
          </h2>))
      }
    </div>
  )
}

const getData = () => new Promise((resolve, reject)=>{
  const data = {comments:['Hi','Hello','How r you?']};
  setTimeout(()=>{
    resolve(data);
  }, 5000);
});

export default Comments;
