import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits( { user } ) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="h6" variant="h6">
        {user.name}</Typography>
      <Typography component="p" variant="p">
        {user.email}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        <img src={user.avatar} alt="" width="110px"/>
      </Typography>
      <div>
        <Link color="primary" to="/edit" >
          Edit Profile
        </Link>
      </div>
    </React.Fragment>
  );
}
