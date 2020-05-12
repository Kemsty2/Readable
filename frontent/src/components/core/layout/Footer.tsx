import React from 'react';
import { Typography, Container, Link } from '@material-ui/core';
import useStyles from '../../../assets/styles/Footer.style';

const Copyright: React.FC = () => (
  <Typography variant="body2" color="inherit">
    {'Copyright ©'}
    <Link color="inherit" href="/">
      Readable
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1" color="inherit">
          Readable Udacity React NanoDegree Application
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
