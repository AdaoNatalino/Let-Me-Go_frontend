import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";


import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TableChartIcon from '@material-ui/icons/TableChart';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ListItemText from '@material-ui/core/ListItemText';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import PeopleIcon from '@material-ui/icons/People';
import MyItemsContainer from "./MyItemsContainer"
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

import UserLogo from './DashBoardHelpers/UserLogo';
import MyTrades from './DashBoardHelpers/MyTrades';
import MyFriends from './DashBoardHelpers/MyFriends';

import API from "../../API"
import Request from "./Request"


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Let me Go!
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard({ logOut, userInfo }) {
  let history = useHistory();

  const [user, setUser] = useState(userInfo)
  const [trade, setTrade] = useState(null)


  useEffect(() => {
    if (localStorage.getItem('jwt')) 
    API.validateToken().then(resp => setUser(resp.user))
  }, [])

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const RENDER = {
    ITEMS: "items",
    TRADES: "trades",
    FRIENDS: "friends",
    REQUEST: "request"
  }

  const setRequestToRender = (trade) => { 
    setTrade(trade)
    setRender(RENDER.REQUEST)
  }

  const comeBackToTrades = () => {
    setRender(RENDER.TRADES)
  }

  const [render, setRender] = useState(RENDER.ITEMS)

  const renderMyItemsContainer = () => <MyItemsContainer  user={user}/>
  const renderMyTrades = () => <MyTrades user={ user } setRequestToRender={ setRequestToRender } />
  const renderMyFriends = () => <MyFriends  friends={ user }/>
  const renderRequest = () => <Request comeBackToTrades={comeBackToTrades} user={user} trade={trade} />

  const whatComponentToRender = () => {
    if(render === RENDER.ITEMS) return renderMyItemsContainer();
    if(render === RENDER.TRADES) return renderMyTrades();
    if(render === RENDER.FRIENDS) return renderMyFriends();
    if(render === RENDER.REQUEST) return renderRequest();

  }
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={ handleDrawerOpen }
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden,
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={1} color="secondary">
                <MailIcon />
              </Badge>
          </IconButton>
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={1} color="secondary">
                <NotificationsIcon />
              </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={()=> {
            logOut()
            history.push("/")
            }}>
            
              <ExitToAppIcon />
           
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
          <List>
            
            <div>
              <Link color="inherit" href="/newItem">
              <ListItem button>
                <ListItemIcon>
                  <AddToPhotosIcon />
                </ListItemIcon>
                <ListItemText primary="Add Item" />
              </ListItem>
              </Link>

              <ListItem button onClick={ ()=> setRender(RENDER.TRADES) }>
                <ListItemIcon>
                  <BusinessCenterIcon />
                </ListItemIcon>
                <ListItemText primary="My Trades" />
              </ListItem>

              <ListItem button onClick={ ()=> setRender(RENDER.FRIENDS) }>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Friends" />
              </ListItem>

              <ListItem button onClick={ ()=> setRender(RENDER.ITEMS) }>
                <ListItemIcon>
                  <TableChartIcon />
                </ListItemIcon>
                <ListItemText primary="My Items" />
              </ListItem>

              <ListItem button onClick={()=> {
                logOut()
                history.push("/")
                }}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Log Out" />
              </ListItem>
          </div>


          </List>
        {/* <List>{mainListItems}</List> */}
        <Divider />
        {/* <List>{secondaryListItems}</List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>

            <Grid item xs={12} md={8} lg={9}>
           
              { whatComponentToRender() }

            </Grid>


            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <UserLogo user={user} />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {/* <Orders /> */}
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
