import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { Provider } from 'react-redux';
import Exchange from '../../src/components/currency/Exchange';
import { FetchData } from '../redux/api';

// Mock axios module
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));

// Create a mock Redux store with thunk middleware
const mockStore = configureStore([thunk])({
  exchange: {
    exchange: {},
    supported: {
      symbols: {
        USD: {},
        AED: {},
      },
    },
  },
});

describe('Exchange Display', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Exchange />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('performs FetchData correctly', async () => {
    await mockStore.dispatch(FetchData()); // Dispatch the action asynchronously

    expect(axios.get).toHaveBeenCalledWith('https://api.currencyfreaks.com/v2.0/supported-currencies');
  });
});
