import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from '../Pagination';

describe('Pagination Component', () => {
  test('Should have render pagination component correctly with list of button', () => {
    render(
      <Pagination
        articlesLength={10}
        articlePerPage={2}
        setPageNumber={jest.fn()}
      />
    );
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(7);
  });

  test('Should have render pagination component correctly with list of button', () => {
    render(
      <Pagination
        articlesLength={10}
        articlePerPage={2}
        setPageNumber={jest.fn()}
      />
    );
    const listItems = screen.getAllByRole('listitem');

    const paginationEle = listItems.map((item) => item.textContent);
    expect(paginationEle).toEqual([
      'Previous',
      '1',
      '2',
      '3',
      '4',
      '5',
      'Next',
    ]);
  });
});
