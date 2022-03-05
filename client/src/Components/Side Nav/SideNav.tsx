import React, { FC } from 'react';
import Card from '../Card/Card';
import { SideNavStyled, SideNavHeader } from './SideNav.styled';

interface SideNavProps {
  childrenCategories: any;
}

const SideNav: FC<SideNavProps> = ({ childrenCategories }) => {
  return (
    <>
      <SideNavStyled>
        <SideNavHeader> Kategorien </SideNavHeader>

        {childrenCategories &&
          true &&
          childrenCategories.map((category: any) => {
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
