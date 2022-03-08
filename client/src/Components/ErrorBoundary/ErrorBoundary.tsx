import React, { FC } from 'react';
import { ErrorStyled } from './ErrorBoundary.styled';

interface ErrorBoundaryProps {
  error: string;
}

const ErrorBoundary: FC<ErrorBoundaryProps> = ({ error }) => {
  return (
    <>
      <ErrorStyled>{error} Please try again!!</ErrorStyled>
    </>
  );
};
export default ErrorBoundary;
