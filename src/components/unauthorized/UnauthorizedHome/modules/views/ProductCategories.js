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
        'data:image/jpeg;base64,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',
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
