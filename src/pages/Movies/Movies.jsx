import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FcSearch } from 'react-icons/fc';
import 'react-toastify/dist/ReactToastify.css';

import { searchQueryApi } from 'components/searchApi';
import { FilmNavigate } from '../../components/FilmNav';

const Movies = () => {
  const [Api, setApi] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = async evt => {
    evt.preventDefault();
    setSearchParams({ query: evt.currentTarget.name.value });
    if (query.trim() === '') {
      toast.error('Enter the name of the movie!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    searchQueryApi(query).then(res => {
      setApi(res.data.results);
    });
  };
  useEffect(() => {
    if (!query) {
      return;
    }
    searchQueryApi(query).then(res => {
      setApi(res.data.results);
    });
  }, [query]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <ToastContainer />
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="name"
        />
        <button type="submit">
          <FcSearch />
        </button>
      </form>

      <FilmNavigate Api={Api} />
    </>
  );
};
export default Movies;
