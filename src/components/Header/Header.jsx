import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#212121 !important',
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Wyszukiwarka Filmów
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
