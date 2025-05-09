import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    
    signInSuccess: (state, action) => {
      console.log(action.payload)
      
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserStart: (state) => {
      console.log("in update start");
      state.loading = false;
    },
    updateUserSuccess: (state, action) => {
      console.log(action.payload);
      console.log(action.payload.data);

      state.currentUser = action.payload.data;
      state.loading = false;
      state.error = false;
    },
    updateUserFailure: (state, action) => {

      console.log(action.payload);
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOut: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOut,
} = userSlice.actions;

export default userSlice.reducer;
