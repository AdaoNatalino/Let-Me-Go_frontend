import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



import Typography from '../components/HomeTheme/modules/components/Typography';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="/">
        Let Me Go!
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "#2d2d2d",
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));


export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
          <Typography variant="h6" marked="left" gutterBottom style={{color: "white"}}>
              Adao Natalino
            </Typography>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
            
              <Grid item className={classes.icons}>
                
                <Link  style={{color: "white"}} href="https://github.com/AdaoNatalino" target="_blank" >
                  <GitHubIcon /> GitHub
                </Link>
              </Grid>
              <Grid item className={classes.icons}>

                <Link style={{color: "white"}} href="https://www.linkedin.com/in/adao-natalino-9bb85a89/" target="_blank" >
                  <LinkedInIcon/> LinkedIn
                </Link>
              </Grid>

              
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom style={{color: "white"}}>
              Let Me Go!
            </Typography>
            <ul className={classes.list} style={{color: "white"}}>
              <li className={classes.listItem}>
                <span>Did you enjoy the app?</span>
              </li>
              <li className={classes.listItem}>
                <span>Get in touch, send comments and suggestions!</span>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={8} md={4} style={{color: "white"}}>
            <Typography variant="h6" marked="left" gutterBottom style={{color: "white"}}>
            About me
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}><br></br>
                <span>A Software Engineer with a Mechanical Engineer background that loves learning new things.</span>
              </li>
              <li>
              <Copyright style={{color: "white"}}/>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      
    </Typography>
  );
}
