import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[400],
  },
}));

export default function RequestCard( { item, user  } ) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card className={classes.root}>
      <CardHeader
    
        title={ item.name }
        subheader={`Condition: ${ item.condition.toUpperCase() }`}
      />
      <CardMedia
        className={classes.media}
        image={ item.image }
        title="Paella dish"
      />
  
      <CardActions disableSpacing>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph style={{ color: 'red' }} >INFO:</Typography>
          <Typography paragraph>
            {item.description}
          </Typography>
          <Typography paragraph style={{ color: 'red' }}>OWNER:</Typography>
          <Typography paragraph>
            { user.name }
          </Typography>
          <Typography paragraph style={{ color: 'red' }}>CITY:</Typography>
          <Typography paragraph>
            { user.city }

          </Typography>
          <Typography>

          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
