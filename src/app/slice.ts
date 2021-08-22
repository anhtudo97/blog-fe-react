import { createSlice } from '@reduxjs/toolkit';
import { IGlobalState } from '../types';

const initialState: IGlobalState = {
  auth: false,
  token: '',
  user: null,
  isFetching: false,
  error: false,
};

const GlobalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.auth = false;
      state.token = '';
      state.user = null;
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.auth = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isFetching = false;
      state.error = false;
    },
    loginFailure: (state) => {
      state.auth = false;
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
      state.auth = false;
      state.user = null;
      state.isFetching = false;
      state.error = false;
    },
    setAuth: (state, action) => {
      state.auth = action.payload !== '';
      state.token = action.payload;
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
  setAuth,
} = GlobalSlice.actions;
export default GlobalSlice.reducer;
