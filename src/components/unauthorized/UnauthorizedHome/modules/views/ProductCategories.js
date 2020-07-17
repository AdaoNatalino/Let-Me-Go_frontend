import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://static.kent.ac.uk/nexus/ems/960.jpg',
      title: 'Electronics',
      width: '40%',
    },
    {
      url:
        'https://www.focus2move.com/wp-content/uploads/2020/05/Seat-Cupra_Leon_Competicion-2020.jpg',
      title: 'Autos',
      width: '20%',
    },
    {
      url:
        'https://i.ytimg.com/vi/NUUeGianTKM/maxresdefault.jpg',
      title: 'Electric',
      width: '40%',
    },
    {
      url:
        'https://www.borgonovo1930.com/e/images/home/fimar-mobili-2.jpg',
      title: 'Furniture',
      width: '38%',
    },
    {
      url:
        'https://images.pushsquare.com/d258d2ab5b78a/the-last-of-us-2-guide.original.jpg',
      title: 'Games',
      width: '38%',
    },
    {
      url:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/blakes-london-kitchen-1579780869.jpg?crop=0.607xw:0.933xh;0.295xw,0.0394xh&resize=640:*',
      title: 'Home and Kitchen ',
      width: '24%',
    },
    {
      url:
        'https://www.fairwayfurniture.co.uk/images/products/standard/13735.jpg',
      title: 'Clothing',
      width: '40%',
    },
    {
      url:
        'https://www.expatica.com/app/uploads/sites/2/2019/11/Health-Insurance-Quotes-1920x1080.jpg',
      title: 'Health',
      width: '20%',
    },
    {
      url:
        'https://i2-prod.belfastlive.co.uk/incoming/article18292338.ece/ALTERNATES/s1200d/0_Seasonal-Sports-Equipment-Storage-1024x668.jpg',
      title: 'Sports',
      width: '40%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Select the type of stuff you are looking for:
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            onClick={() => console.log(image.title)}
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
