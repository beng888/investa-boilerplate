import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import appSlice from './app.slice';
import userSlice from './user.slice';

const makeStore = () =>
  configureStore({
    reducer: {
      user: userSlice,
      app: appSlice,
    },
    //* Temporary solution to non serializable errors
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
