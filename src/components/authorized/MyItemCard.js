import React from 'react';
import { useHistory } from "react-router-dom";

import {
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  FacebookIcon,
} from "react-share";

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

  const shareUrl = 'http://github.com';
  const title = 'GitHub';
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.image}
          title={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
          <IconButton aria-label="add to favorites" color="secondary">
            <FacebookShareButton
              url={shareUrl}
              quote={title}
              className="share-button"
            >
              <FacebookIcon size={23} round />
            </FacebookShareButton>
          </IconButton>

          <IconButton aria-label="add to favorites" color="secondary">
          {/* <ShareIcon style={{ color: "green" }} /> */}
            <WhatsappShareButton
              url={shareUrl}
              title={title}
              // separator=":: "
              className="share-button"
            >
              <WhatsappIcon size={23} round />
            </WhatsappShareButton>
          </IconButton>

          <IconButton aria-label="add to favorites" color="secondary">

            <TwitterShareButton
              url={shareUrl}
              title={title}
              className="share-button"
            >
              <TwitterIcon size={23} round />
            </TwitterShareButton>
          </IconButton>

          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {item.condition}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <IconButton 
          onClick={() => { if(window.confirm('Delete the item?')) { handleDeleteItem() }; }}
          aria-label="delete" color="secondary">
          <DeleteIcon color="secondary" />
        </IconButton>

        <IconButton aria-label="edit item" color="secondary">
          {/* <Link color="primary" href={`/itemEdit/${item.id}`} >
            <EditIcon color="primary" />
          </Link> */}
        </IconButton>
        <IconButton aria-label="edit item" color="secondary">
          {/* <Link color="primary" href={`/itemEdit/${item.id}`} >
            <EditIcon color="primary" />
          </Link> */}
        </IconButton>

       <IconButton aria-label="edit item" color="secondary">
          <Link color="primary" href={`/itemEdit/${item.id}`} >
            <EditIcon color="primary" />
          </Link>
        </IconButton>          

      </CardActions>
    </Card>
  );
}
