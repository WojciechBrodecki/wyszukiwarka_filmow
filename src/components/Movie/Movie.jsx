import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';

const Movie = (props) => {
  const params = useParams();

  const [movieData, setMovieData] = useState();

  const fetchMovieData = async (apiKey, movieId) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`);
    setMovieData(response.data);
  };

  useEffect(() => {
    if (process.env.REACT_APP_TMDB_API_KEY !== undefined && params.movieId !== undefined) {
      fetchMovieData(process.env.REACT_APP_TMDB_API_KEY, params.movieId);
    }
  }, [params.movieId]);
  const loaded = movieData !== undefined;
  return (
    <Loader dataLoaded={loaded}>
      {loaded &&
        <span>{movieData.bugdet}</span>
      }
    </Loader>
  );
};

export default Movie;
