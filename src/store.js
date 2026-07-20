import { configureStore } from "@reduxjs/toolkit";
import loremReducer from './loremSlice'

export const store = configureStore({
  reducer: {
    lorem: loremReducer,
  },
});