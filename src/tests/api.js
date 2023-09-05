import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FetchData = createAsyncThunk('fetching/app', async () => {
  try {
    const res = await axios.get('https://api.currencyfreaks.com/v2.0/supported-currencies');
    const data = await res.data;
    return data.supportedCurrenciesMap;
  } catch (error) {
    return error;
  }
});

const LatestData = createAsyncThunk('latest/currency', async (value) => {
  const res = await axios.get(`https://api.exchangerate.host/latest?base=${value}`);
  const data = await res.data;
  return data;
});
export { FetchData, LatestData };
