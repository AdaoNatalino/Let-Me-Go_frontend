import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar>

          <Typography variant="h6" className={classes.title} align="justify">
                <Link href="/" style={{ color: 'white' }}> 
                Let Me Go!</Link>
          </Typography>
          <Link href="/login" style={{ color: 'white' }} >
            <Button color="inherit">Sign In</Button>
          </Link>
          <Link href="/signup" style={{ color: 'white' }} >
            <Button color="inherit">Sign Up</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
