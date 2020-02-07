import fetch from 'isomorphic-unfetch';
import {getPosts} from '../redux/actions';
// import Link from 'next/link';
//
// function HomePage({ stars }) {
//   return (
//     <div>
//       <h1>Next stars: {stars}</h1>
//       <Link href="/posts">
//         <a>Posts</a>
//       </Link>
//     </div>)
// }
//
// HomePage.getInitialProps = async ({ req }) => {
//   const res = await fetch('https://api.github.com/repos/zeit/next.js')
//   const json = await res.json()
//   return { stars: json.stargazers_count }
// }
//
// export default HomePage



import { connect } from 'react-redux';
import initialize from '../utils/initialize';

const Index = (props) => console.log(props)||(
  <h1>HI</h1>
);

// Index.getInitialProps = function(ctx) {
//   ctx.store.dispatch(getPosts());
// };

export default connect(state => state)(Index);
