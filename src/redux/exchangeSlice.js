import { createSlice } from '@reduxjs/toolkit';
import {
  FetchData, LatestData,
} from './api';

const initialState = {
  exchange: [],
  filters: [],
  latest: [],
  status: false,
  error: null,
};

const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    filterdata: (state, action) => {
      state.filters = action.payload;
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
      .addCase(LatestData.pending, (state) => {
        state.status = true;
      })
      .addCase(LatestData.fulfilled, (state, action) => {
        state.status = false;
        state.latest = action.payload;
      });
  },
});
export const { filterdata } = exchangeSlice.actions;
export default exchangeSlice;
