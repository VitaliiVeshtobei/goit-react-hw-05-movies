import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { creditsApi } from './searchApi';
export const Cast = () => {
  const [api, setApi] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    creditsApi(movieId).then(resp => {
      setApi(resp.data.cast);
    });
    //   return () => {
    //     const controller = new AbortController();
    //     controller.abort();
    //   };
  }, [movieId]);
  console.log(api);
  return (
    <ul>
      {api.map(cast => {
        return (
          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
              alt=""
              width={'120px'}
            />
            <h2>{cast.original_name}</h2>
            <p>Character: {cast.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
