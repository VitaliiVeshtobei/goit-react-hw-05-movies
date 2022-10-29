import { useEffect, useState } from 'react';
import { searchTrendApi } from 'components/searchApi';
import { FilmNavigate } from '../../components/FilmNav';

export const Home = () => {
  const [Api, setApi] = useState([]);
  useEffect(() => {
    searchTrendApi().then(res => {
      setApi(res.data.results);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <FilmNavigate Api={Api} />
    </>
  );
};
