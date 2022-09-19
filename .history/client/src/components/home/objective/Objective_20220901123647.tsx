import React from 'react'
import { makeStyles } from '@mui/styles';
import {MdAccessTimeFilled} from 'react-icons/md'

import './Objective.scss'

const Farm1 = require('../../../images/Card-2.png')
const Cottage = require('../../../images/Card-1.png')

const useStyles = makeStyles({
  root: {
    height: 360,
    width: 360,
    background: 'rgba(255, 255, 255, 0.75)',
    borderRadius: 5
  },
  content: {
    padding: 13,

  },
  img: {
    height: 210,
    width: 330
  },

  paragrapgh: {
    fontSize:'1.6rem !important'
  },
  textarea: {
    marginTop: 5
  },
  title: {

  },
  heading: {
    marginTop: '5px',
    marginBottom: '5px',
    color: '#348403',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: '15px',
    lineHeight: '18px'
  },
  img_pic: {
    maxWidth: 330, 
    height: 200
  },
  date: {
    marginLeft: 5,
    marginBotton: 4,
    color: 'green'
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
        <div className='objective__root'>
          <div className='objective__root__content'>
            <div className='objective__root__img'>
              <img src={Cottage} alt='cottage' className={classes.img_pic}/>
            </div>
            <div className={classes.textarea}>
              <div className={classes.title}>
                <h4 className={classes.heading}>JLV Resort 5 Star Cottages Experience</h4>
                <MdAccessTimeFilled style={{color: 'green', height: '10px', width: '10px'}} /><span className={classes.date}>6 July 2022</span>
              </div>
              <div className={classes.paragrapgh}>
                <p>The future of innovative tourism in Africa Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

        </div>
                       
        </div>
        <div className="col-1-of-3 ">
        <div className={classes.root}>
          <div className={classes.content}>
            <div className={classes.img}>
              <img src={Farm1} alt='farm1' className={classes.img_pic}/>
            </div>
            <div className={classes.textarea}>
              <div className={classes.title}>
                <h4 className={classes.heading}>JLV Mixed Farm modern farming experience</h4>
                <MdAccessTimeFilled style={{color: 'green', height: '10px', width: '10px'}} /><span className={classes.date}>6 July 2022</span>
              </div>
              <div className={classes.paragrapgh}>
                <p>The future of innovative tourism in Africa Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

        </div>
                       
        </div>
      </div>

    </section>
  )
}
