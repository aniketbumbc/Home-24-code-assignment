import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const LoadingAnimation = keyframes` 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;

export const LoaderStyled = styled.div`
  animation: ${LoadingAnimation} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid white;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  border-left: 4px solid rgb(137, 137, 204);
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Overlay = styled.div`
  background: none repeat scroll 0 0 black;
  position: fixed;
  display: block;
  opacity: 0.5;
  z-index: 100001;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
`;
