import {memo, useEffect, useState} from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import {getPosts} from '../redux/actions';
import {Button} from '../components/atoms/';

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
    </>
  ));

export default Index;
