import React from 'react'
import './AboutFeature.scss'

const Farm1 = require('../../../images/Slide-1.png')
const Farm2 = require('../../../images/Slide-2.png')
const Farm3 = require('../../../images/Slide-3.png')


export default function AboutFeature() {
  return (
    <section className='section-aboutFeatures'>
        <div className='row'>
        <div className="col-1-of-2">
                        <div className="composition">
                            <img src={Farm1} alt="farm-1" className="composition__photo composition__photo--p1"/>
                            <img src={Farm2} alt="photo 2" className="composition__photo composition__photo--p2"/>
                            <img src={Farm3} alt="photo 3" className="composition__photo composition__photo--p3"/>
                        </div>
                        part 1
                    </div>
                    <div className='col-1-of-2'>
                    <h3 className="heading-tetiary u-margin-bottom-small">JLV Mixed Farm</h3>
                        <p className="paragraph">
                            ipsum dolor sit, amet consectetur adipisicing elit. Odit excepturi animi, commodi voluptatem sit eveniet alias nobis consequatur sequi fugiat possimus sunt assumenda ut eaque.
                        </p>
                        <h3 className="heading-tetiary u-margin-bottom-small">We protect the biggest brands</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus error eum doloremque.
                        </p>
                    </div>
        </div>
                            
    </section>
  )
}
