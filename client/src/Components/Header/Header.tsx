import React, { FC } from 'react';
import { useFetch } from '../../Hooks/useFetch';
import Loader from '../../Loader/Loader';
import SearchInput from '../Search Input/SearchInput';
import SideNav from '../Side Nav/SideNav';
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
