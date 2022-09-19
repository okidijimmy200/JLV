import React from 'react'
import {MdAccessTimeFilled} from 'react-icons/md'

import './Objective.scss'

const Farm1 = require('../../../images/Card-2.png')
const Cottage = require('../../../images/Card-1.png')

export default function Objective() {
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
              <img src={Cottage} alt='cottage' className='objective__root__img_pic'/>
            </div>
            <div className='objective__root__textarea'>
              <div className='objective__root__title'>
                <h4 className='objective__root__heading'>JLV Resort 5 Star Cottages Experience</h4>
                <MdAccessTimeFilled style={{color: 'green', height: '10px', width: '10px'}} /><span className='objective__root__date'>6 July 2022</span>
              </div>
              <div className={classes.paragrapgh}>
                <p>The future of innovative tourism in Africa Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

        </div>
                       
        </div>
        <div className="col-1-of-3 ">
        <div className='objective__root'>
          <div className='objective__root__content'>
            <div className='objective__root__img'>
              <img src={Farm1} alt='cottage' className='objective__root__img_pic'/>
            </div>
            <div className='objective__root__textarea'>
              <div className='objective__root__title'>
                <h4 className='objective__root__heading'>JLV Mixed Farm modern farming experience</h4>
                <MdAccessTimeFilled style={{color: 'green', height: '10px', width: '10px'}} /><span className='objective__root__date'>6 July 2022</span>
              </div>
              <div className={classes.paragrapgh}>
                <p>The future of food sustainabiliy in Africa Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

        </div>
                       
        </div>
      </div>

    </section>
  )
}
