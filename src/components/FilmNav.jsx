import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FilmLink, FilmNav } from '../pages/Home/HomeStyled';

export const FilmNavigate = ({ Api }) => {
  const location = useLocation();

  return Api.map(film => {
    return (
      <FilmNav key={film.id}>
        <FilmLink
          to={location.pathname === '/' ? `/movies/${film.id}` : `${film.id}`}
          state={{ from: location }}
        >
          {film.name || film.title}
        </FilmLink>
      </FilmNav>
    );
  });
};

FilmNavigate.propTypes = {
  Api: PropTypes.array,
};
