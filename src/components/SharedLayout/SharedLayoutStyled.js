import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Nav = styled('nav')`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;

export const NavItem = styled(NavLink)`
  color: black;
  &.active {
    color: orange;
  }
`;
