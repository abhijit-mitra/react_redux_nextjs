import {useRouter} from 'next/router';

const Post=(props)=>{
  const router = useRouter();
  const {postId} = router.query;
  return (
    <h1>
      {`${postId}:${process.env.NAME}`}
    </h1>
  );
};

export default Post;
