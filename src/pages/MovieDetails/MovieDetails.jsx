import { useState, useEffect } from 'react';
import { useParams, useNavigate, Outlet, Link } from 'react-router-dom';
import { detailsApi } from '../../components/searchApi';
import { Container, ContainerInfo } from './MovieDetailsStyled';

export const MovieDetails = () => {
  const navigate = useNavigate();

  const [api, setApi] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    detailsApi(movieId).then(resp => {
      setApi(resp.data);
    });
    return () => {
      const controller = new AbortController();
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
      <Container>
        <img
          src={`https://image.tmdb.org/t/p/w500/${api.poster_path}`}
          alt=""
        />
        <ContainerInfo>
          <h1>{api.original_title}</h1>
          <p>
            User score:
            {api.popularity ? api.popularity.toFixed(0) : 'no popularity'}%
          </p>
          <h2>Overview</h2>
          <p>{api.overview}</p>
          <h3>Genres</h3>
          {/* <p>{api.genres.map(genre => genre.name)}</p> */}
        </ContainerInfo>
      </Container>
      <ul>
        <li>
          <Link to="Cast">Cast</Link>
        </li>
        <li>
          <Link to="Reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
