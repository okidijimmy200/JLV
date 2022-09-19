import React from 'react'
import './Features.scss'

const Farm1 = require('../../images/farm.jpg')
const Farm2 = require('../../images/Farm2.jpg')
const Farm3 = require('../../images/Farm3.jpg')

export default function Features() {
  return (
    <>
    <section className="section-about">
                <div className="row">
                    <div className='feature-box__position'>
                    <div className="col-1-of-3 ">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-world"></i>
                            <h3 className="heading-tetiary u-margin-bottom-small">next-level security</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-3 ">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-world"></i>
                            <h3 className="heading-tetiary u-margin-bottom-small">next-level security</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-3 ">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-world"></i>
                            <h3 className="heading-tetiary u-margin-bottom-small">next-level security</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Why choose us?
                    </h2>
                </div>
                {/* <div className="col-1-of-2">

                    </div> */}
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={Farm1} alt="photo 1" className="composition__photo composition__photo--p1"/>
                            <img src={Farm2} alt="photo 2" className="composition__photo composition__photo--p2"/>
                            <img src={Farm3} alt="photo 3" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                    <div className='col-1-of-2'>
                    <h3 className="heading-tetiary u-margin-bottom-small">Why Velonic Security</h3>
                        <p className="paragraph">
                            ipsum dolor sit, amet consectetur adipisicing elit. Odit excepturi animi, commodi voluptatem sit eveniet alias nobis consequatur sequi fugiat possimus sunt assumenda ut eaque.
                        </p>
                        <h3 className="heading-tetiary u-margin-bottom-small">We protect the biggest brands</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus error eum doloremque.
                        </p>
                        <a href="" className="btn-text">Learn More &rarr;</a>
                    </div>

                </div>
            </section>
    </>
  )
}
