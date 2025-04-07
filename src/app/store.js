import { configureStore } from '@reduxjs/toolkit';
import sortReducer from './slice/sortSlice.js';

export const store = configureStore({
  reducer: {
    sortBy: sortReducer,
  },
});
