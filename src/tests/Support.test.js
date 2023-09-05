import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Support from './Support';

import '@testing-library/jest-dom/extend-expect';

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({
    data: {
      supportedCurrenciesMap: {},
    },
  }),
}));

test('Support component renders correctly', () => {
  // Arrange: Render the Support component within the required context
  const { getByText, asFragment } = render(
    <Provider store={store}>
      <Router>
        <Support />
      </Router>
    </Provider>,
  );

  // Act: Attempt to find the heading element
  const headingElement = getByText('Currency not found');

  // Assert: Check if the heading element is present
  expect(headingElement).toBeInTheDocument();

  expect(asFragment()).toMatchSnapshot();
});
