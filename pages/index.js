import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

function HomePage({ stars }) {
  return (
    <div>
      <h1>Next stars: {stars}</h1>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </div>)
}

HomePage.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default HomePage
