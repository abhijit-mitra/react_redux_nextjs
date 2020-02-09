import {memo} from 'react';
import Link from 'next/link';
import {connect} from 'react-redux';

import {Button} from '../components/atoms/';
import style from './Button.module.css';

const Index = memo((props) => (
  <>
    <h1>Home Page</h1>
    <div>
      <Link href='posts'>
        <a>Posts</a>
      </Link>
    </div>
    <div>
      <Link href='comments'>
        <a>Comments</a>
      </Link>
    </div>
    <Button>
        Enjoy
    </Button>
    <Button>
        Enjoy2
    </Button>
    <div className={style.primary}></div>
  </>
));

export default Index;
