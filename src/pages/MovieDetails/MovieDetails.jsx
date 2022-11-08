import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';

import { detailsApi } from '../../api/searchApi';

import {
  Container,
  ContainerInfo,
  LinkBack,
  LinkMoreDetails,
  LinkList,
} from './MovieDetailsStyled';

const MovieDetails = () => {
  const [api, setApi] = useState([]);
  const location = useLocation();
  const backPage = useRef(location.state?.from ?? null);
  const { movieId } = useParams();

  useEffect(() => {
    detailsApi(movieId).then(resp => {
      setApi(resp.data);
    });
  }, [movieId]);
  const backLinkHref = location.state?.from ?? backPage.current;

  return (
    <>
      <LinkBack to={backLinkHref}>Back</LinkBack>
      <Container>
        <img
          src={`https://image.tmdb.org/t/p/w500/${api.poster_path}`}
          alt=""
        />
        <ContainerInfo>
          <h1>{api.original_title}</h1>
          <p>
            User score:
            {api.vote_average
              ? api.vote_average.toFixed(1) * 10
              : 'no popularity'}
            %
          </p>
          <h2>Overview</h2>
          <p>{api.overview}</p>
          <h3>Genres</h3>
          <p>
            {api.genres
              ? api.genres.map((genre, idx) => {
                  if (api.genres.length - 1 !== idx) {
                    return `${genre.name}, `;
                  }
                  return `${genre.name}`;
                })
              : 'no genres'}
          </p>
        </ContainerInfo>
      </Container>
      <LinkList>
        <li>
          <LinkMoreDetails to="Cast">Cast</LinkMoreDetails>
        </li>
        <li>
          <LinkMoreDetails to="Reviews">Reviews</LinkMoreDetails>
        </li>
      </LinkList>
      <Outlet />
    </>
  );
};

export default MovieDetails;
