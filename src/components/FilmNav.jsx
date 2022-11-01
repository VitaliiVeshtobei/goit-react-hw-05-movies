import { FilmLink, FilmNav } from '../pages/Home/HomeStyled';

export const FilmNavigate = ({ Api, query }) => {
  return Api.map(film => {
    return (
      <FilmNav key={film.id}>
        <FilmLink to={query ? `${film.id}` : `/movies/${film.id}`}>
          {film.name || film.title}
        </FilmLink>
      </FilmNav>
    );
  });
};
