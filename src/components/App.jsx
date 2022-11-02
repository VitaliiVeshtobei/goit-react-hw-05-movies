import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ShraedLayout } from '../components/SharedLayout';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { NotFound } from './NotFound';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
