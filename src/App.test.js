/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders the app', () => {
  render(<App />);

  // expect nav bar to be in the document
  expect(screen.getByRole('navigation')).toBeInTheDocument();
  // expect button to be in the document with text 'Mulai Diskusi'
  expect(
    screen.getByRole('link', { name: 'Mulai Diskusi' })
  ).toBeInTheDocument();
});
