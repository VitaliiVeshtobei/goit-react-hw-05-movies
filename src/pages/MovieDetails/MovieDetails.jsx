import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { detailsApi } from '../../components/searchApi';
import { Container, ContainerInfo } from './MovieDetailsStyled';
export const MovieDetails = () => {
  const [api, setApi] = useState([]);
  const { movieId } = useParams();
  const navigate = useNavigate();
  detailsApi(movieId).then(resp => {
    setApi(resp.data);
  });
  return (
    <>
      <button
        type="button"
        onClick={() => {
          navigate('/movies');
        }}
      >
        Back
      </button>
      <Container>
        <img
          src={`https://image.tmdb.org/t/p/w500/${api.poster_path}`}
          alt=""
        />
        <ContainerInfo>
          <h1>{api.original_title}</h1>
          <p>User score: {api.popularity.toFixed(0)}%</p>
          <h2>Overview</h2>
          <p>{api.overview}</p>
          <h2>Genres</h2>
          {/* <p>{api.genres.map(genre => genre.name)}</p> */}
        </ContainerInfo>
      </Container>
    </>
  );
};
