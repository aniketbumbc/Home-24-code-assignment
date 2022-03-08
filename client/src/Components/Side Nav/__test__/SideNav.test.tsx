import React from 'react';
import { render } from '@testing-library/react';
import { childrenCategories } from '../../../Test Data/testData';
import SideNav from '../SideNav';

describe('SideNav Component', () => {
  test('Should have render correct children categories length', () => {
    const { getAllByRole } = render(
      <SideNav childrenCategories={childrenCategories} />
    );
    const listItems = getAllByRole('listitem');

    expect(listItems).toHaveLength(2);
  });

  test('Should  not render incorrect children categories  length', () => {
    const { getAllByRole } = render(
      <SideNav childrenCategories={childrenCategories} />
    );
    const listItems = getAllByRole('listitem');

    expect(listItems).not.toHaveLength(4);
  });

  test('Should have render correct children categories', () => {
    const { getAllByRole } = render(
      <SideNav childrenCategories={childrenCategories} />
    );
    const listItems = getAllByRole('listitem');
    const categoriesNames = listItems.map((item) => item.textContent);

    expect(categoriesNames).toEqual(['Wohnzimmer', 'Schlafzimmer']);
  });

  test('Should have render correct length links of categories', () => {
    const { getAllByRole } = render(
      <SideNav childrenCategories={childrenCategories} />
    );
    const linksItems = getAllByRole('link');
    expect(linksItems).toHaveLength(2);
  });
});
