import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchInput from '../SearchInput';
import userEvent from '@testing-library/user-event';

describe('SearchInput Component', () => {
  test('Should render initial blank search input value', () => {
    render(<SearchInput />);
    const inputEl = screen.getByTestId('search-input');
    userEvent.type(inputEl, '');
    expect(screen.getByTestId('search-input')).toHaveValue('');
  });
});
