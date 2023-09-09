import {createSlice} from '@reduxjs/toolkit';

const discoverSlice = createSlice({
  name: 'discover',
  initialState: {
    counter: 9,
  },
  reducers: {
    increment(state) {
      state.counter++;
    },
  },
});

export const {increment} = discoverSlice.actions;

export default discoverSlice.reducer;
