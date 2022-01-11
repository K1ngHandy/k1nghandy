import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home link', () => {
  render(<App />);
  const button = screen.getByText(/home/i);
  expect(button).toBeInTheDocument();
});

test('renders clock link', () => {
  render(<App />);
  const button = screen.getByText(/clock/i);
  expect(button).toBeInTheDocument();
})
