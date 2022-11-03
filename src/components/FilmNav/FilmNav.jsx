import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FilmLink, FilmNav } from './FilmNavStyled';

export const FilmNavigate = ({ Api }) => {
  const location = useLocation();

  return (
    <FilmNav>
      {Api.map(film => {
        return (
          <FilmLink
            key={film.id}
            to={location.pathname === '/' ? `/movies/${film.id}` : `${film.id}`}
            state={{ from: location }}
          >
            {film.name || film.title}
          </FilmLink>
        );
      })}
    </FilmNav>
  );
};

FilmNavigate.propTypes = {
  Api: PropTypes.array,
};
