import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  test('Should have correct header logo', () => {
    render(<Header />);
    const headerLogo = screen.getByRole('img');
    expect(headerLogo).toHaveAttribute('src', 'home24.png');
    expect(headerLogo).toHaveAttribute('alt', 'Home 24');
  });

  test('Should not have incorrect header logo', () => {
    render(<Header />);
    const headerLogo = screen.getByRole('img');
    expect(headerLogo).not.toHaveAttribute('src', 'home.png');
    expect(headerLogo).not.toHaveAttribute('alt', 'Home');
  });

  test('Should render search input', () => {
    render(<Header />);
    const inputEl = screen.getByTestId('search-input');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute('type', 'text');
  });
});
