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
    //   return () => {
    //     const controller = new AbortController();
    //     controller.abort();
    //   };
  }, [movieId]);
  console.log(api);
  return (
    <>
      {api.length !== 0 ? (
        <div>
          <h2>{api[0].author}</h2>
          <p>{api[0].content}</p>
        </div>
      ) : (
        'no rev'
      )}
    </>
  );
};
