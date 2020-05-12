import React from 'react';
import { CssBaseline, Paper, Typography, Grid, Button } from '@material-ui/core';
import TopBar from '../components/core/layout/DefaultTopBar';
import Footer from '../components/core/layout/Footer';
import { useStyles } from '../assets/styles/Home.style';

type Props = {};

const Home: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <div className={classes.mainRoot}>
        <Grid container justify="center">
          <Grid spacing={4} alignItems="center" justify="center" container className={classes.grid}>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography style={{ textTransform: 'uppercase' }} color="secondary" gutterBottom>
                    First title
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    A first title style <br /> with two lines
                  </Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button color="primary" variant="contained" className={classes.actionButtom}>
                    Learn more
                  </Button>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
