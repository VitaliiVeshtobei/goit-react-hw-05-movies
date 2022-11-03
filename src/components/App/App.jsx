import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ShraedLayout } from '../SharedLayout/SharedLayout';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));

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
