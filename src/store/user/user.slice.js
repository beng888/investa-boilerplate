/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import userService from './user.service';

//* Login user
// export const login = createAsyncThunk('user/login', async (id, thunkAPI) => {
//   try {
//     return await userService.login(id);
//     dispatch(UserSlice.actions.setUserData());
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     return thunkAPI.rejectWithValue(message);
//   }
// });

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: null,
  },

  reducers: {
    // setUserData: (state, action) => {
    //   state.name = action.payload;
    // },
    setUserData: (state, action) => {
      // console.log('%c⧭', 'color: #1d3f73', action.payload);
      state.firstName = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      // console.log('HYDRATE', action.payload);

      if (action.payload.user) {
        state.firstName = action.payload.firstName;
      }
    },
  },
});

export const { setUserData } = UserSlice.actions;

export const login = createAsyncThunk('user/login', async (id, thunkAPI) => {
  try {
    const data = await userService.login(id);
    return thunkAPI.dispatch(setUserData(data));
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const selectUser = (state) => state.user;

// export const fetchUser = createAsyncThunk('user/login', async (id, thunkAPI) => {
//   try {
//     const data = await userService.login(id);
//     return thunkAPI.dispatch(setUserData(data));
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     return thunkAPI.rejectWithValue(message);
//   }
// });

export const fetchUser = (id) => async (dispatch) => {
  const data = await userService.login(id);
  dispatch(setUserData(data));
};

export default UserSlice.reducer;
