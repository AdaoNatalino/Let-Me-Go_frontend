import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Let Me Go!
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [city, setCity] = useState("")
  const [avatar, setAvatar] = useState("")
  const [bio, setBio] = useState("")

  const handleSignUp = (e) => {
    e.preventDefault();
    const userData = { fullName, email, username, password, city, avatar, bio }
    console.log(userData);
    clearForm();
  };

  const clearForm = () => {
      console.log("hello");
    // setFullName(""), 
    // setEmail(""), 
    // setUsername(""), 
    // setPassword(""), 
    // setCity(""), 
    // setAvatar(""), 
    // setBio("");
  }



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={ handleSignUp }>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField onChange={ (e) => setFullName(e.target.value) }
                value={fullName}
                autoComplete="fname"
                name="fullName"
                variant="outlined"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={ (e) => setEmail(e.target.value) }
                value={email}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={ (e) => setUsername(e.target.value) }
                value={username}
                autoComplete="uname"
                name="userName"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="UserName"
                autoFocus
              />
            </Grid>
           
            <Grid item xs={12}>
              <TextField onChange={ (e) => setPassword(e.target.value) }
                value={password}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={ (e) => setCity(e.target.value) }
                value={city}
                variant="outlined"
                required
                fullWidth
                name="city"
                label="City"
                type="city"
                id="city"
                autoComplete="city"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={ (e) => setAvatar(e.target.value) }
                value={avatar}
                variant="outlined"
                required
                fullWidth
                name="avatar"
                label="Avatar"
                type="avatar"
                id="avatar"
                autoComplete="avatar"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={ (e) => setBio(e.target.value) }
                value={bio}
                variant="outlined"
                required
                fullWidth
                name="bio"
                label="Bio"
                type="bio"
                id="bio"
                autoComplete="bio"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}