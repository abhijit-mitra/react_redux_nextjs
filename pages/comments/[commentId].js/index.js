import { useRouter }  from 'next/router';

export const Comment = (props)=>{
  const {query} = useRouter();
  return (
    <h3>{query.commentId}</h3>
  )
}

export default Comment;
