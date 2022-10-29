import { FilmLink, FilmNav } from '../pages/Home/HomeStyled';
import { useSearchParams } from 'react-router-dom';

export const FilmNavigate = ({ Api }) => {
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  return Api.map(film => {
    return (
      <FilmNav key={film.id}>
        <FilmLink to={`${film.id}`}>{film.name || film.title}</FilmLink>
      </FilmNav>
    );
  });
};
