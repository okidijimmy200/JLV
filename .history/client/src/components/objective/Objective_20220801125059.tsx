import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@mui/styles';

import './Objective.scss'

const Farm1 = require('../../images/farm.jpg')

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    fontSize:'1.6rem'
  },
});

export default function Objective() {
  const classes = useStyles();
  return (
    <section className='section-objective'>
      <div className='row'>
        <div className="col-1-of-3 ">
          <h3 className="heading-tetiary u-margin-bottom-small">Why Velonic Security</h3>
                <p className="paragraph">
                            ipsum dolor sit, amet consectetur adipisicing elit. Odit excepturi animi, commodi voluptatem sit eveniet alias nobis consequatur sequi fugiat possimus sunt assumenda ut eaque.
                  </p>
                       
        </div>
        <div className="col-1-of-3 ">
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Farm1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary" className={classes.root}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                       
        </div>
        <div className="col-1-of-3 ">
          <h3 className="heading-tetiary u-margin-bottom-small">Why Velonic Security</h3>
                <p className="paragraph">
                            ipsum dolor sit, amet consectetur adipisicing elit. Odit excepturi animi, commodi voluptatem sit eveniet alias nobis consequatur sequi fugiat possimus sunt assumenda ut eaque.
                  </p>
                       
        </div>
      </div>

    </section>
  )
}
