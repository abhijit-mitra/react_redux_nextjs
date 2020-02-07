import Link from 'next/link';

const Posts = (props)=>(
  <h1>
    All Posts
    <Link href="/posts/[postId]" as="/posts/1">
      <a>Get Post Details</a>
    </Link>
  </h1>
)

export default Posts;
