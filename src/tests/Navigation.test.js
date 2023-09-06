import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen } from '@testing-library/dom';
import Navigation from '../components/Navigation';
import '@testing-library/jest-dom';
// ...

it('renders correctly with navigation links', () => {
  render(
    <Router>
      <Navigation />
    </Router>,
  );

  const Currencies = screen.getByText("Currencies");
  expect(Currencies).toBeInTheDocument();
});
