import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const FilmNav = styled('nav')`
  margin-top: 20px;
  margin-left: 10px;
`;

export const FilmLink = styled(NavLink)`
  display: block;

  padding: 5px;
  list-style: none;
  color: black;
  &.hover {
    color: orange;
  }
`;
