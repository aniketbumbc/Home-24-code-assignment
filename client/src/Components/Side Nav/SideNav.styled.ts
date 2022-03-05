import styled from '@emotion/styled';

export const SideNavStyled = styled.div`
  left: 0;
  bottom: 0;
  float: left;
  background-color: rgb(137, 137, 204);
  top: 150px;
  height: 100%;
  a {
    padding: 6px 8px 6px 15px;
    text-decoration: none;
    font-size: 18px;
    font-weight: 400;
    color: black;
    display: block;
  }

  a:hover {
    color: rgb(80, 182, 216);
  }
  li,
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

export const SideNavHeader = styled.h3`
  text-align: center;
`;
