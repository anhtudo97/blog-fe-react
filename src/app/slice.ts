import { createSlice } from '@reduxjs/toolkit';
import { IGlobalState } from '../types';

const initialState: IGlobalState = {
  user: null,
  isFetching: false,
  error: false,
};

const GlobalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.user = null;
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isFetching = false;
      state.error = false;
    },
    loginFailure: (state) => {
      state.user = null;
      state.isFetching = false;
      state.error = true;
    },
    updateStart: (state) => {
      state.isFetching = true;
    },
    updateSuccess: (state, action) => {
      state.user = action.payload;
      state.isFetching = false;
      state.error = false;
    },
    updateFailure: (state) => {
      state.user = state.user;
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.user = null;
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  updateStart,
  updateSuccess,
  updateFailure,
  logout,
} = GlobalSlice.actions;
export default GlobalSlice.reducer;
