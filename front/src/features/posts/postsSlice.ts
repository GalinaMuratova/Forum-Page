import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../../types';
import { createPost, fetchPosts } from './postsThunk';

interface PostState {
  items: Post[];
  fetchLoading: boolean;
  createLoading: boolean;
}

const initialState: PostState = {
  items: [],
  fetchLoading: false,
  createLoading: false,
};

export const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {

    });

    builder.addCase(fetchPosts.fulfilled, (state, {payload: posts}) => {
      state.fetchLoading = false;
      state.items = posts;
    });

    builder.addCase(createPost.pending, (state) => {
      state.createLoading = true;
    });

    builder.addCase(createPost.fulfilled, (state) => {
      state.createLoading = false;
    });

    builder.addCase(createPost.rejected, (state) => {
      state.createLoading = false;
    });
  },
});

// Export the generated actions and reducer
export const { addPost } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
