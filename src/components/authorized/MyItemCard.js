import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';


const useStyles = makeStyles({
  root: {
    maxWidth: 180,
  },
  media: {
    height: 120,
  },
});

export default function MediaCard({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.image}
          title={item.name}
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography> */}
          <Typography variant="body2" color="textSecondary" component="p">
            {item.condition}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites" color="secondary">
          <DeleteIcon color="secondary" />
        </IconButton>
        <IconButton aria-label="add to favorites" color="secondary">
          <EditIcon color="primary" />
        </IconButton>
        <IconButton aria-label="add to favorites" color="secondary">
          <ShareIcon style={{ color: "green" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
