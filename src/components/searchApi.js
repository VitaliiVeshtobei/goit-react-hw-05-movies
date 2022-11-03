import axios from 'axios';
import PropTypes from 'prop-types';

export const searchTrendApi = async () => {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
  const params = {
    api_key: '7f524807c48f906ff0108130fa25f727',
  };

  const resolve = await axios(BASE_URL, { params });
  return resolve;
};
export const searchQueryApi = async query => {
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
  const params = {
    api_key: '7f524807c48f906ff0108130fa25f727',
    query: `${query}`,
  };

  const resolve = await axios(BASE_URL, { params });
  return resolve;
};

export const detailsApi = async id => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${id}`;
  const params = {
    api_key: '7f524807c48f906ff0108130fa25f727',
  };

  const resolve = await axios(BASE_URL, { params });
  return resolve;
};
export const creditsApi = async id => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${id}/credits`;
  const params = {
    api_key: '7f524807c48f906ff0108130fa25f727',
  };

  const resolve = await axios(BASE_URL, { params });
  return resolve;
};
export const reviewsApi = async id => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  const params = {
    api_key: '7f524807c48f906ff0108130fa25f727',
  };

  const resolve = await axios(BASE_URL, { params });
  return resolve;
};

searchQueryApi.propTypes = {
  query: PropTypes.string,
};
detailsApi.propTypes = {
  id: PropTypes.number,
};
creditsApi.propTypes = {
  id: PropTypes.number,
};
reviewsApi.propTypes = {
  id: PropTypes.number,
};
