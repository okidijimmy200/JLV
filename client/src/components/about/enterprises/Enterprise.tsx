import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { CardActionArea } from '@mui/material';

import './Enterprise.scss'

const Cottage = require('../../../images/cottage.jpg')

const useStyles = makeStyles({
  root: {
    background: '#fff',
    fontSize:'1.6rem !important'
  },
  pic: {
    borderTopRightRadius: '1rem',
    borderTopLeftRadius: '1rem'
  },
  textarea: {
    '&:hover': {
      background: '#fff',
  },
  }
});

export default function Enterprise() {
  const classes = useStyles();
  return (
    <div className='section-enterprise'>
      <div>
        <h2>Our Enterprises</h2>
      </div>
      <div>
        <div className='row'>
          <div className='col-1-of-3'>
          <Card sx={{ maxWidth: 345, height: 260 }} >
      <CardActionArea className={classes.textarea}>
        <CardMedia
          component="img"
          height="140"
          image={Cottage}
          alt="green iguana"
          className={classes.pic}
        />
        <CardContent className={classes.textarea}>
          <Typography gutterBottom variant="h5" component="h2">
            JLV Resort 5 Star Cottage Experience
          </Typography>
          <Typography variant="body2"  className={classes.root}>
            Lizards are a widespread group of squamate reptiles, ...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div className='col-1-of-3'>
          <Card sx={{ maxWidth: 345, height: 260 }} >
      <CardActionArea className={classes.textarea}>
        <CardMedia
          component="img"
          height="140"
          image={Cottage}
          alt="green iguana"
          className={classes.pic}
        />
        <CardContent className={classes.textarea}>
          <Typography gutterBottom variant="h5" component="h2">
            JLV Resort 5 Star Cottage Experience
          </Typography>
          <Typography variant="body2"  className={classes.root}>
            Lizards are a widespread group of squamate reptiles, ...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div className='col-1-of-3'>
          <Card sx={{ maxWidth: 345, height: 260 }} >
      <CardActionArea className={classes.textarea}>
        <CardMedia
          component="img"
          height="140"
          image={Cottage}
          alt="green iguana"
          className={classes.pic}
        />
        <CardContent className={classes.textarea}>
          <Typography gutterBottom variant="h5" component="h2">
            JLV Resort 5 Star Cottage Experience
          </Typography>
          <Typography variant="body2"  className={classes.root}>
            Lizards are a widespread group of squamate reptiles, ...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
