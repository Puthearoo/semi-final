import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import App from '../index';

test('renders frontend text', () => {
  render(<App />);
  expect(screen.getByText(/Hello from Frontend!/i)).toBeInTheDocument();
});
