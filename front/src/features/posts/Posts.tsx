import React, { useEffect } from 'react';
import PostForm from './components/PostForm';
import { Grid, Typography } from '@mui/material';
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
      <Typography component='div' variant='h4' style={{textAlign:'center', margin:"20px"}}>All posts</Typography>
      <Grid container spacing={2} style={{backgroundColor: 'aliceblue', padding:'20px'}}>
        {posts.map((el) => (
          <PostCard key={el.id} author={el.author} message={el.message} image={el.image} />
        ))}
      </Grid>
    </>
  );
};

export default Posts;