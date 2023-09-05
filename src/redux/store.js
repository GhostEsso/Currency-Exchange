import { configureStore } from '@reduxjs/toolkit';
import exchangeSlice from './exchangeSlice';

const store = configureStore({
  reducer: {
    exchange: exchangeSlice.reducer,
  },
});

export default store;
