import {memo} from 'react';
import Link from 'next/link';
import {useAmp} from 'next/amp';

import {Button} from '../components/atoms/';
import style from './Button.module.css';

export const config = {amp: 'hybrid'};

const Index = memo((props) => {
  const isAmp = useAmp();
  return (
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
      <div className={style.primary}>Hi</div>
      {
        isAmp ?
        <amp-img
          width="300"
          height="300"
          src="/test_img.jpeg"
          alt="a cool image"
          layout="responsive"
        /> :
      <img width="300" height="300" src="/test_img.jpeg" alt="a cool image"/>
      }
    </>
  );
},
);

export default Index;
