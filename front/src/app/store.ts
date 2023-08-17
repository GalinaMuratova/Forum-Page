import {configureStore} from "@reduxjs/toolkit";
import { postsReducer } from '../features/posts/postsSlice';
export const store = configureStore({
    reducer: {
      postsReducer: postsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;