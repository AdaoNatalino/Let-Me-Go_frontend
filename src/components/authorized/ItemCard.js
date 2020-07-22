import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import SwapVerticalCircleIcon from '@material-ui/icons/SwapVerticalCircle';
import SaveIcon from '@material-ui/icons/Save';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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

export default function RecipeReviewCard( { item } ) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [traded, setTraded] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleTradingClick = () => {
    setTraded(!traded);
  }


  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            { item.category.title.charAt(0).toUpperCase() }
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={ item.name }
        subheader={`Condition: ${ item.condition.toUpperCase() }`}
      />
      <CardMedia
        className={classes.media}
        image={ item.image }
        title="Paella dish"
      />
      {/* <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         { item.description }
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>

        <IconButton 
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleTradingClick}
          aria-expanded={expanded}
          aria-label="show more"
          aria-label="add to favorites" color="secondary">

          <SwapVerticalCircleIcon color="secondary" />
        </IconButton>

        <IconButton aria-label="share" color="primary">
          <SaveIcon color="primary"/>
        </IconButton>
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
            { item.user.name }
          </Typography>
          <Typography paragraph style={{ color: 'red' }}>CITY:</Typography>
          <Typography paragraph>
            { item.user.city }

          </Typography>
          <Typography>

          </Typography>
        </CardContent>
      </Collapse>

      <Collapse in={traded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph style={{ color: 'red' }} >INFO:</Typography>
          <Typography paragraph>
            {item.description}
          </Typography>
        
        </CardContent>
      </Collapse>
    </Card>
  );
}
