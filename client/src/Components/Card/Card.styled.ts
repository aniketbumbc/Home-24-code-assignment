import styled from '@emotion/styled';

export const CardContainerStyled = styled.div`
  margin-left: 12%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: initial;
`;

export const CardStyled = styled.div`
  position: relative;
  width: 280px;
  height: 350px;
  background: rgb(137, 137, 204);
  border-radius: 20px;
  overflow: hidden;
  margin: 55px;
  &:before {
    content: '';
    position: absolute;
    top: -50%;
    width: 100%;
    height: 100%;
    background: rgb(80, 182, 216);
    transform: skewY(345deg);
    transition: 0.5s;
  }
  &:hover:before {
    transform: skewY(390deg);
    top: -70%;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    font-weight: 600;
    font-size: 8em;
    color: rgba(0, 0, 0, 0.1);
  }
  &:hover img {
    max-width: 50%;
    margin: 2px;
  }

  &:hover h3 {
    margin: 10px;
  }
`;

export const CardImageStyled = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  z-index: 1;
  img {
    max-width: 100%;
    transition: 0.5s;
    width: 80%;
    height: 50%;
    border-radius: 5px;
  }
`;

export const CardContentBxStyled = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  flex-direction: column;
  & h3 {
    margin-top: 0;
    margin-bottom: 25%;
    font-size: 18px;
    color: black;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1px;
  }
  & p {
    font-size: 24px;
    color: black;
    font-weight: 700;
    margin: 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const BuyButtonStyled = styled.button`
  position: relative;
  cursor: pointer;
  margin: 5px;
  padding: 10px 30px;
  font-size: 15px;
  background: rgb(80, 182, 216);
  color: black;
  border-radius: 30px;
  border: 2px solid rgb(80, 182, 216);
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.5s;
`;

export const CardHeaderStyled = styled.h1`
  margin-left: 15%;
`;

export const CardNotFound = styled.h1`
  margin: 0 auto;
  color: rgb(137, 137, 204);
  font-size: 20px;
  text-transform: uppercase;
  padding: 10px 30px;
  font-weight: 500;
`;
