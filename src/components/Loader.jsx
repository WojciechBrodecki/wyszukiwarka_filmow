import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = ({ dataLoaded, children }) => {
  return <Box sx={{ display: 'flex' }}>{dataLoaded === undefined ? <CircularProgress /> : children}</Box>;
};

export default Loader;
