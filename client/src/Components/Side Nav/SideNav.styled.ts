import styled from '@emotion/styled';

export const SideNavStyled = styled.div`
  float: left;
  top: 95px;
  position: absolute;
  width: 16%;

  a {
    padding: 6px 8px 6px 15px;
    text-decoration: none;
    font-size: 18px;
    font-weight: 400;
    color: black;
    display: block;
    color: rgb(80, 182, 216);
    font-weight: 800;
  }

  a:hover {
    color: rgb(137, 137, 204);
  }
  li,
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

export const SideNavHeader = styled.h3`
  margin-left: 6%;
  font-weight: 800;
  color: rgb(137, 137, 204);
`;
