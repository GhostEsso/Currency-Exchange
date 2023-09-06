import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Support from '../components/currency/Supported';

// Import jest-dom for additional matchers
import '@testing-library/jest-dom/';

// Mock axios
jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({
    data: {
      supportedCurrenciesMap: {},
    },
  }),
}));

test('renders Support component', () => {
  const { getByText, asFragment } = render(
    <Provider store={store}>
      <Router>
        <Support />
      </Router>
    </Provider>,
  );

  const headingElement = getByText('Currency not found');
  expect(headingElement).toBeInTheDocument();

  // Take a snapshot of the rendered component
  expect(asFragment()).toMatchSnapshot();
});
