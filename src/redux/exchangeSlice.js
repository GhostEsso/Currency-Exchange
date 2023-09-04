import { createSlice } from '@reduxjs/toolkit';
import { FetchData, GetData, LatestData } from './api';

const initialState = {
  exchange: [],
  image1: [],
  image2: [],
  convert: [],
  latest: [],
  status: false,
  error: null,
};

const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    add: (state, action) => {
      state.image1 = action.payload;
    },
    add2: (state, action) => {
      state.image2 = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(FetchData.pending, (state) => {
        state.status = true;
      })
      .addCase(FetchData.fulfilled, (state, action) => {
        state.status = false;
        state.exchange = action.payload;
      })
      .addCase(FetchData.rejected, (state, action) => {
        state.status = true;
        state.error = action.error.message;
      })
      .addCase(GetData.pending, (state) => {
        state.status = true;
      })
      .addCase(GetData.fulfilled, (state, action) => {
        state.status = false;
        state.convert = action.payload;
      })
      .addCase(LatestData.pending, (state) => {
        state.status = true;
      })
      .addCase(LatestData.fulfilled, (state, action) => {
        state.status = false;
        state.latest = action.payload;
      });
  },
});
export const { add, add2 } = exchangeSlice.actions;
export default exchangeSlice;
