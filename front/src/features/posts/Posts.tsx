import React from 'react';
import PostForm from './components/PostForm';
import FileInput from '../../components/UI/FileInput/FileInput';

const Posts = () => {
  return (
    <>
      <PostForm />
      <div style={{backgroundColor: 'aliceblue', padding:'20px'}}>
        <h2 style={{textAlign:'center'}}>Все записи</h2>
      </div>
    </>
  );
};

export default Posts;