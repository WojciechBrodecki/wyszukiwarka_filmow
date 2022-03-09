import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = ({ dataLoaded, children }) => {
  if (dataLoaded === true) {
    return children;
  }
  return <CircularProgress />;
};

export default Loader;