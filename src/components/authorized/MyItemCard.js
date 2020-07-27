import React from 'react';
import { useHistory } from "react-router-dom";


import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';
import Link from '@material-ui/core/Link';

import API from "../../API"



const useStyles = makeStyles({
  root: {
    maxWidth: 180,
  },
  media: {
    height: 120,
  },
});

export default function MyItemCard({ item, setComponent }) {
  const classes = useStyles();

  let history = useHistory();

  const handleDeleteItem = () => {
    API.deleteItem(item.id)
    .then(resp => handleDeleteResp(resp))
    history.push("/profile")
  }


  const handleDeleteResp = (resp) => {
    if (resp.error) {
      alert(resp.error)
    } else {
      setComponent()
      alert("Item Deleted!")
    } 
  }

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

        <IconButton 

          onClick={() => { if(window.confirm('Delete the item?')) { handleDeleteItem() }; }}
          aria-label="add to favorites" color="secondary">
          <DeleteIcon color="secondary" />
        </IconButton>

        <IconButton aria-label="add to favorites" color="secondary">
          <Link color="primary" href={`/itemEdit/${item.id}`} >
            <EditIcon color="primary" />
          </Link>
        </IconButton>

        <IconButton aria-label="add to favorites" color="secondary">
          {/* <ShareIcon style={{ color: "green" }} /> */}
          <FacebookIcon/>
        </IconButton>

      </CardActions>
    </Card>
  );
}
