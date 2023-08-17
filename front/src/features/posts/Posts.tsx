import React, { useEffect } from 'react';
import PostForm from './components/PostForm';
import { Grid } from '@mui/material';
import { useAppDispatch} from '../../app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { fetchPosts } from './postsThunk';
import PostCard from './components/PostCard';

const Posts = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector((state:RootState) => state.postsReducer.items);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <>
      <PostForm />
      <div style={{backgroundColor: 'aliceblue', padding:'20px'}}>
        <h2 style={{textAlign:'center'}}>Все записи</h2>
      </div>
      <Grid container spacing={2}>
        {posts.map((el) => (
          <PostCard key={el.id} author={el.author} message={el.message} image={el.image} />
        ))}
      </Grid>
    </>
  );
};

export default Posts;