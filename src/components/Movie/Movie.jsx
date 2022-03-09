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
  return (
    <Loader dataLoaded={movieData !== undefined}>
      {console.log(movieData)}
      <div className='singleMovieContainer'
        style={{
          backgroundImage: `url("https://themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieData?.backdrop_path}")`
        }}>
          <img alt='poster' className='singleMoviePoster' src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movieData?.poster_path}`}/>
        <div className='singleMovieData'>
          <div className='movieTitle'>{movieData?.original_title} ({movieData?.release_date?.split('-')[0]})</div>
          <div>{movieData?.release_date}</div>
          <div className='overviewTitle'>Overview:</div>
          <div>{movieData?.overview}</div>
        </div>
      </div>
    </Loader>
  );
};

export default Movie;
