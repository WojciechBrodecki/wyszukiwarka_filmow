import React, { useEffect, useState } from 'react';
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Container,
  Box,
  Typography,
  Pagination,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Loader';

const useStyles = makeStyles((theme) => ({
  pagination: {
    // backgroundColor: theme.palette.primary.main,
  },
  movieItem: {
    height: '100% !important',
  },
}));

const Homepage = () => {
  const classes = useStyles();
  const [moviesData, setMoviesData] = useState([]);
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const fetchMovies = async (apiKey, page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pl-PL&page=${page}`
    );
    setMoviesData(response.data);
  };

  useEffect(() => {
    if (process.env.REACT_APP_TMDB_API_KEY !== undefined) {
      fetchMovies(process.env.REACT_APP_TMDB_API_KEY, page);
    }
  }, [page]);
  return (
    <Container maxWidth={'xl'}>
      <Box mt={5}>
        {process.env.REACT_APP_TMDB_API_KEY !== undefined ? (
          <>
            <ImageList cols={5} sx={{ margin: 'auto' }}>
              <Loader dataLoaded={moviesData.length !== 0}>
                {moviesData.results?.map((item, idx) => (
                  <Link key={idx} to={`movie/${item.id}`}>
                    <ImageListItem className={classes.movieItem} key={item.id}>
                      <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} loading='lazy' />
                      <ImageListItemBar
                        title={item.title}
                        subtitle={item.vote_average}
                        actionIcon={
                          <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${item.title}`}>
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  </Link>
                ))}
              </Loader>
            </ImageList>
            <Box
              sx={{
                '& > *': {
                  marginTop: 2,
                  marginBottom: 2,
                  justifyContent: 'center',
                  display: 'flex',
                },
              }}
            >
              <Pagination
                className={classes.pagination}
                count={moviesData.total_pages > 500 ? 500 : moviesData.total_pages}
                page={page}
                onChange={handlePageChange}
                showFirstButton
                showLastButton
              />
            </Box>
          </>
        ) : (
          <Typography sx={{ color: '#ff0000' }}>
            Prosze ustawic REACT_APP_TMDB_API_KEY w twoich zmiennych środowiskowych
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Homepage;
