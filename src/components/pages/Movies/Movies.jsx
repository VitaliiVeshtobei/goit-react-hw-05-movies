import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcSearch } from 'react-icons/fc';
import { searchQueryApi } from 'components/searchApi';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeSearchQuery = evt => {
    setSearchQuery(evt.currentTarget.value);
  };
  const handleSubmit = async evt => {
    evt.preventDefault();
    if (searchQuery.trim() === '') {
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
    searchQueryApi(searchQuery).then(res => {
      console.log(res);
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleChangeSearchQuery}
      />
      <button type="submit">
        <FcSearch />
      </button>
    </form>
  );
};
