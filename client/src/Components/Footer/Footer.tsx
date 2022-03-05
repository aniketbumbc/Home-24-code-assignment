import React from 'react';
import { FooterPara, FooterStyled } from './Footer.styled';

const Footer = () => {
  return (
    <>
      <FooterStyled>
        <FooterPara>
          All prices are in euros (€) including statutory sales tax and shipping
          costs.
        </FooterPara>
      </FooterStyled>
    </>
  );
};

export default Footer;
