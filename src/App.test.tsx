import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Test basic rendering
test('renders home screen page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
