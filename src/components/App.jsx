import { Route, Routes } from 'react-router-dom';
import { ShraedLayout } from '../components/SharedLayout';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';

import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShraedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="Cast" element={<Cast />}></Route>
            <Route path="Reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<div>NOTFound</div>} />
        </Route>
      </Routes>
    </>
  );
};
