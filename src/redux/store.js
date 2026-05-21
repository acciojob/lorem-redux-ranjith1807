import { configureStore } from '@reduxjs/toolkit';
import loremReducer from './loremSlice';

// Redux Connection: Setting up the store
export const store = configureStore({
  reducer: {
    lorem: loremReducer,
  },
});