import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { reviewsApi } from '../searchApi';
import { ReviewsList, ReviewsItem } from './ReviewsStyled';
import { Text } from './ReviewsStyled';
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
        <ReviewsList>
          {api.map(item => {
            return (
              <ReviewsItem>
                <h2>{item.author}</h2>
                <p>{item.content}</p>
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      ) : (
        <Text>No Reviews</Text>
      )}
    </>
  );
};
