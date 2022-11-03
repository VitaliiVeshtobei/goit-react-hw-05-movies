import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavItem, Nav } from './SharedLayoutStyled';

export const ShraedLayout = () => {
  return (
    <>
      <Nav>
        <NavItem to="/" end>
          Home
        </NavItem>
        <NavItem to="/movies">Movies</NavItem>
      </Nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
