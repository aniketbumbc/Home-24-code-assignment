import React, { FC } from 'react';
import { FooterPara, FooterStyled } from './Footer.styled';

const Footer: FC = () => {
  return (
    <>
      <FooterStyled>
        <FooterPara>
          Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
          Versandkosten.
        </FooterPara>
      </FooterStyled>
    </>
  );
};
export default Footer;
