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
        <SideNavHeader> Kategorien </SideNavHeader>

        {childrenCategories &&
          !!childrenCategories.length &&
          childrenCategories.map((category: ChildCategory) => {
            return (
              <ul key={category.name}>
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
