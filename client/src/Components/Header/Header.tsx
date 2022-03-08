import React, { FC } from 'react';
import SearchInput from '../Search Input/SearchInput';
import { HeaderStyled, HomeLogoStyled } from './Header.styled';
const homeImage = require('../../assets/images/home24.png');

const Header: FC = () => {
  return (
    <>
      <HeaderStyled>
        <HomeLogoStyled src={homeImage} alt='Home 24' />
        <SearchInput />
      </HeaderStyled>
    </>
  );
};
export default Header;
