import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { NavItem } from './AppStyled';
import { Nav } from './AppStyled';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Nav>
        <NavItem to="/" end>
          Home
        </NavItem>
        <NavItem to="/movies">Movies</NavItem>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<div>NOTFound</div>} />
      </Routes>
    </>
  );
};
