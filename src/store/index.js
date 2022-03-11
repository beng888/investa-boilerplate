import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import userSlice from './user/user.slice';

const makeStore = () =>
  configureStore({
    reducer: {
      user: userSlice,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
