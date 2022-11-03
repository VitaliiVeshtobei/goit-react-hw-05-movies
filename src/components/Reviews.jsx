import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { reviewsApi } from './searchApi';
export const Reviews = () => {
  const [api, setApi] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    reviewsApi(movieId).then(resp => {
      setApi(resp.data.results);
    });
  }, [movieId]);

  return (
    <>
      {api.length !== 0 ? (
        <div>
          {api.map(item => {
            return (
              <>
                <h2>{item.author}</h2>
                <p>{item.content}</p>
              </>
            );
          })}
        </div>
      ) : (
        'No Reviews'
      )}
    </>
  );
};
