import { useEffect, useState } from 'react';

import { searchTrendApi } from '../../api/searchApi';
import { FilmNavigate } from '../../components/FilmNav/FilmNav';

import { Title } from './HomeStyled';

const Home = () => {
  const [Api, setApi] = useState([]);
  useEffect(() => {
    searchTrendApi().then(res => {
      setApi(res.data.results);
    });
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <FilmNavigate Api={Api} />
    </>
  );
};
export default Home;
