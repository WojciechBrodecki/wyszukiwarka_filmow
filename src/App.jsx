import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Footer, Homepage, Movie } from './components';
import { ThemeProvider } from '@material-ui/core/styles';

import { createTheme } from '@material-ui/core/styles';

const mainBlack = '#212121';
const mainWhite = '#fafafa';
const blue = '#757ce8';
const theme = createTheme({
  palette: {
    common: {
      black: mainBlack,
      white: mainWhite,
      blue: blue,
    },
    primary: {
      main: mainBlack,
    },
    secondary: {
      main: mainWhite,
    },
    info: {
      main: blue,
    },
  },
  typography: {
    h1: {
      fontSize: '2.25rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    a: {
      color: mainBlack,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route path='/movie/:movieId'>
              <Movie />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
