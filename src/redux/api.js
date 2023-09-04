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

const GetData = createAsyncThunk('getdata/app', async ({ amount, from, to }) => {
  const res = await axios.get(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`);
  const data = await res.data;
  return data;
});

const LatestData = createAsyncThunk('latest/currency', async () => {
  const res = await axios.get('https://api.exchangerate.host/latest?base=USD');
  const data = await res.data;
  return data;
});
export { GetData, FetchData, LatestData };
