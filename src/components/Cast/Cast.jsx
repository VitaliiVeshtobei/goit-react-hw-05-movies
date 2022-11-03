import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { creditsApi } from '../searchApi';
import { CastList, CastItem, Image } from './CastStyled';
import { Text } from './CastStyled';
export const Cast = () => {
  const [api, setApi] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    creditsApi(movieId).then(resp => {
      setApi(resp.data.cast);
    });
  }, [movieId]);

  return (
    <CastList>
      {api.length !== 0 ? (
        api.map(cast => {
          return (
            <CastItem>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                alt=""
              />
              <h2>{cast.original_name}</h2>
              <p>Character: {cast.character}</p>
            </CastItem>
          );
        })
      ) : (
        <Text>No Cast</Text>
      )}
    </CastList>
  );
};
