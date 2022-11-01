import { Outlet } from 'react-router-dom';
import { NavItem, Nav } from './AppStyled';

export const ShraedLayout = () => {
  return (
    <>
      <Nav>
        <NavItem to="/" end>
          Home
        </NavItem>
        <NavItem to="/movies">Movies</NavItem>
      </Nav>
      <Outlet />
    </>
  );
};
