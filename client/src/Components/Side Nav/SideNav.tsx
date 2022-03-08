import React, { FC } from 'react';
import { ChildCategory } from '../../@types/types';
import { SideNavStyled, SideNavHeader } from './SideNav.styled';

interface SideNavProps {
  childrenCategories: ChildCategory[];
}

const SideNav: FC<SideNavProps> = ({ childrenCategories }) => {
  return (
    <>
      <SideNavStyled>
        <SideNavHeader aria-labelledby='categories-heading'>
          {' '}
          Kategorien{' '}
        </SideNavHeader>

        {childrenCategories &&
          !!childrenCategories.length &&
          childrenCategories.map((category: ChildCategory) => {
            return (
              <ul key={category.name} aria-labelledby='categories-heading'>
                <li>
                  <a href={`/${category.urlPath}`}>{category.name}</a>
                </li>
              </ul>
            );
          })}
      </SideNavStyled>
    </>
  );
};

export default React.memo(SideNav);
