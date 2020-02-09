import {useRouter} from 'next/router';

const Id=(props)=>{
  const router = useRouter();
  const {id} = router.query;
  return (
    <h1>
      {`${id}:${process.env.NAME}`}
    </h1>
  );
};

export default Id;
