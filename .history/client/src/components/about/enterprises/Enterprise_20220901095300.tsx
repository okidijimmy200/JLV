import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { CardActionArea } from '@mui/material';

import './Enterprise.scss'

const Img1 = require('../../../images/about-img-1.png')
const Img2 = require('../../../images/about-img-2.png')
const Img3 = require('../../../images/about-img-3.png')

const useStyles = makeStyles({
  root: {
    background: '#fff',
    fontSize:'1.6rem !important',
    height: '376px',
    width: '374px',
    borderRadius: '10px'
  },
  pic: {
    borderTopRightRadius: '1rem',
    borderTopLeftRadius: '1rem',
    width: '350px',
    height: '293.4px',
    padding: '15px'
  },
  img: {
    width: '350px',
    height: '293.4px',
  },
  textarea: {
    padding: '15px'
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
            <div className={classes.root}>
              <div className={classes.pic}>
                <img src={Img1} alt='img-1' className={classes.img}/>
              </div>
              <div className={classes.textarea}>
                <h3>JLV Mixed Farm</h3>
                <h4>Uganda</h4>
              </div>

            </div>
          </div>
          <div className='col-1-of-3'>
          <div className={classes.root}>
              <div className={classes.pic}>
                <img src={Img2} alt='img-2' className={classes.img}/>
              </div>
              <div className={classes.textarea}>
                <h3>JLV Diary</h3>
                <h4>Uganda, Kenya, Tanzania</h4>
              </div>

            </div>
          </div>
          <div className='col-1-of-3'>
          <div className={classes.root}>
              <div className={classes.pic}>
                <img src={Img3} alt='img-3' className={classes.img}/>
              </div>
              <div className={classes.textarea}>
                <h3>JLV Diary</h3>
                <h4>Uganda, Kenya, Tanzania</h4>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
