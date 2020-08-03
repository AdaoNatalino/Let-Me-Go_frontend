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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import API from "../../API"


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
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

export default function ItemCard( { item, user } ) {

  const shareUrl = 'https://let-me-go.netlify.app/';
  const title = 'LET ME GO!';
  let history = useHistory();

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [traded, setTraded] = React.useState(false);
  const [item2_id, setItem2_id] = React.useState(null);

  const item1_id = item.id
  const requested_by = user.id
  const tradeData = { item1_id, item2_id, requested_by }

  const handleTradeClick = () => {
    API.requestNewTrade(tradeData)
    history.push("/profile")
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleTradingClick = () => {
    setTraded(!traded);
  }

  const itemsOptions = () =>  user.available_for_trade.map(i => <option key={i.id} value={i.id}>{i.name}</option> )


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
 
 
      <CardActions disableSpacing>

        {user.username === item.user.username ? null : 
          <>
            <IconButton 
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleTradingClick}
                aria-expanded={expanded}
                color="secondary">

              <SwapVerticalCircleIcon color="secondary" style={{fontSize: "27px"}}/>
            </IconButton> 

         </>
        }
        
        <IconButton  color="secondary">
            <FacebookShareButton
              url={shareUrl}
              quote={title}
              className="share-button"
            >
              <FacebookIcon size={21} round />
            </FacebookShareButton>
          </IconButton>

          <IconButton  color="secondary">
            <WhatsappShareButton
              url={shareUrl}
              title={title}
              className="share-button"
            >
              <WhatsappIcon size={21} round />
            </WhatsappShareButton>
          </IconButton>

          <IconButton  color="secondary">
            <TwitterShareButton
              url={shareUrl}
              title={title}
              className="share-button"
            >
              <TwitterIcon size={21} round />
            </TwitterShareButton>
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
          <Typography paragraph style={{ color: 'red' }} >Which Item would you like to Swap?:</Typography>
          <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.form}>
                    <InputLabel htmlFor="outlined-category-native-simple">Item</InputLabel>
                    <Select
                    native
                    onChange={ (e) => setItem2_id(e.target.value) }            
                    label="Item"
                    inputProps={{
                        name: 'item',
                        id: 'outlined-item-native-simple',
                    }}
                    > 
                    <option aria-label="None" value="" />
                    { itemsOptions() }
                    </Select>
                </FormControl>
                { item2_id ? 
          
                  <Button
                  onClick={handleTradeClick}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  >
                  Request a Trade!
                  </Button>  

                  : null}
            </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
