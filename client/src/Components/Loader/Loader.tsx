import React, { FC } from 'react';
import { Overlay, LoaderStyled } from './Loader.styled';

const Loader: FC = () => {
  return (
    <>
      <Overlay>
        <LoaderStyled></LoaderStyled>
      </Overlay>
    </>
  );
};

export default Loader;
