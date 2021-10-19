import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: `100%`,
    position: 'relative',
    overflow: 'hidden',
    marginTop: '6em',
    padding: '2em 0 ',
  },
  copyRight: {
    color: '#fff',
    fontSize: '1em',
  },
  socialLink: {
    color: '#fff',
    padding: '1em'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth='lg'>
        <Grid container justifyContent='center'>
          <Link className={classes.socialLink} to={`https://github.com/WojciechBrodecki`}>
            <GitHubIcon />
          </Link>
          <Link className={classes.socialLink} to={`https://www.linkedin.com/in/wojciech-brodecki-5bb98121a/`}>
            <LinkedInIcon />
          </Link>
        </Grid>
        <Grid item container justifyContent='center'>
          <Typography className={classes.copyRight}>&copy;Wojciech Brodecki</Typography>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
