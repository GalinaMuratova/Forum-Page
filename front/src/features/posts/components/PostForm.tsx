import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { PostMutation } from '../../../types';
import FileInput from '../../../components/UI/FileInput/FileInput';

const PostForm = () => {
  const [state, setState] = useState<PostMutation>({
    author: '',
    message:'',
    image: null
  });

  const onSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    console.log('something')
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
   const {name, value} = e.target;
    setState(prevState => {
      return {...prevState, [name]: value};
    });
  };

  const filesInputChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;
    if (files) {
      setState((prevState) => ({
        ...prevState,
        [name]: files[0]
      }));
    }
  };

  return (
    <>
      <form
        autoComplete='on'
        onSubmit={onSubmit}
      >
        <Grid container direction="column" spacing={2}>
          <Grid item xs>
            <TextField
              id="author"
              label="Author"
              value={state.author}
              onChange={inputChangeHandler}
              name="author"
            />
          </Grid>
          <Grid item xs>
            <TextField
              multiline
              rows={3}
              id="message"
              label="Message"
              value={state.message}
              onChange={inputChangeHandler}
              name="message"
              required
            />
          </Grid>
          <Grid item xs>
            <FileInput
              name='image'
              label='image'
              onChange={filesInputChangeHandler} />
          </Grid>
          <Grid item xs>
            <Button type='submit'  variant="outlined">Send</Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default PostForm;