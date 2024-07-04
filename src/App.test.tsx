import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Should have title', () => {
  render(<App />);
  const titulo = screen.getByText("DaniDev")
  expect(titulo).toBeInTheDocument();
});
