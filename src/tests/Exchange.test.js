import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { Provider } from 'react-redux';
import Exchange from './Exchange';
import { FetchData } from './api';

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
  it('should render Exchange component correctly', () => {
    // Arrange
    const component = (
      <Provider store={mockStore}>
        <BrowserRouter>
          <Exchange />
        </BrowserRouter>
      </Provider>
    );

    // Act
    const tree = renderer.create(component).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
  });

  it('should call FetchData with the correct URL', async () => {
    // Arrange
    const expectedURL = 'https://api.currencyfreaks.com/v2.0/supported-currencies';

    // Act
    await mockStore.dispatch(FetchData());

    // Assert
    expect(axios.get).toHaveBeenCalledWith(expectedURL);
  });
});
