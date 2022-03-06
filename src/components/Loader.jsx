import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = ({ dataLoaded, children }) => {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    if (dataLoaded === true) {
      setSpinner(false);
    };
  }, [dataLoaded]);
  if (spinner === false) {
    return children;
  } else {
    return <CircularProgress />;
  }
};

export default Loader;