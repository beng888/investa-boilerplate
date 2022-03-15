import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import api from '@config/api';

//* Login user
const login = async (id) => {
  const response = await api.get(`/user/${id}`);
  // console.log('response.data', response.data)
  return response.data;
};

export const UserSlice = createSlice({
  name: 'user',
  initialState: {},

  reducers: {
    setUserData: (state, action) => {
      return action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.user,
      };
    },
  },
});

export const { setUserData } = UserSlice.actions;

export const fetchUser = createAsyncThunk('user/login', async (id, thunkAPI) => {
  try {
    const data = await login(id);
    thunkAPI.dispatch(setUserData(data));
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const selectUser = (state) => state.user;

export default UserSlice.reducer;
