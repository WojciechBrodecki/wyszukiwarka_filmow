import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import { Box } from '@mui/material';

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
  console.log(movieData);
  return (
    <Loader dataLoaded={undefined}>
      <Box>{movieData?.bugdet}</Box>
    </Loader>
  );
};

export default Movie;
