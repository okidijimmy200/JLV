import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {BiTimeFive} from 'react-icons/bi'

import './Objective.scss'

const Farm1 = require('../../../images/Card-2.png')
const Cottage = require('../../../images/Card-1.png')

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

export default function Objective() {
  const classes = useStyles();
  return (
    <section className='section-objective'>
      <div className='row'>
        <div className="col-1-of-3 ">
          <h3 className="heading-tetiary u-margin-bottom-small">An African Luxury Nature Experience With A Difference And Innovation</h3>
                <p className="paragraph">
                            ipsum dolor sit, amet consectetur adipisicing elit. Odit excepturi animi, commodi voluptatem sit eveniet alias nobis consequatur sequi fugiat possimus sunt assumenda ut eaque.
                  </p>
      <h2><strong>By Taylor Shrift</strong></h2>
      <p>(American Musician)</p>
                       
        </div>
        <div className="col-1-of-3 ">
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
          <BiTimeFive /><span>6 July 2022</span>
          <Typography variant="body2"  className={classes.root}>
            Lizards are a widespread group of squamate reptiles, ...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                       
        </div>
        <div className="col-1-of-3 ">
        <Card sx={{ maxWidth: 345, height: 260 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Farm1}
          alt="green iguana"
          className={classes.pic}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            JLV Mixed Farm Modern Farming Experience
          </Typography>
          <BiTimeFive /><span>6 July 2022</span>
          <Typography variant="body2" color="text.secondary" className={classes.root}>
            Lizards are a widespread group of squamate reptiles...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                       
        </div>
      </div>

    </section>
  )
}
