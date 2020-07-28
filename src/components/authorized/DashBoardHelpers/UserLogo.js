import React from 'react';
import { useHistory } from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits( { user } ) {

  let history = useHistory()
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
        <Button variant="contained"
          style={{color: "green"}}
          onClick={() => history.push("/edit")}>
            Edit Profile
        </Button>
      </div>
    </React.Fragment>
  );
}
