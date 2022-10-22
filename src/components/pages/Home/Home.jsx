import { useEffect, useState } from 'react';
import { searchTrendApi } from 'components/searchApi';
import { FilmLink, FilmNav } from './HomeStyled';

export const Home = () => {
  const [trendApi, setTrendApi] = useState([]);
  useEffect(() => {
    searchTrendApi().then(res => {
      setTrendApi(res.data.results);
    });
  }, []);
  console.log(trendApi);

  return (
    (<h1>Trending today</h1>),
    (
      <FilmNav>
        {trendApi.map(film => {
          return (
            <FilmLink to="" key={film.id}>
              {film.name || film.title}
            </FilmLink>
          );
        })}
      </FilmNav>
    )
  );
};
