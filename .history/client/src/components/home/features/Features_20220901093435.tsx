import React from 'react'
import './Features.scss'
import { Link } from 'react-router-dom'

const Cow = require('../../../images/icon-1.png')
const Diary = require('../../../images/icon-2.jpg')
const Resort = require('../../../images/icon-3.png')

export default function Features() {
  return (
    <>

    <section className="section-about">
                <div className="row">
                    <div className='feature-box__position'>
                    <div className="col-1-of-3 ">
                        <div className="feature-box">
                            <img src={Cow} alt='cow' className='feature-box__icon'/>
                            <h3 className="heading-tetiary">JLV Mixed Farm</h3>
                            <p className="feature-box__text u-margin-bottom-small">
                                Center for Agri Excellence 
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-3 ">
                        <div className="feature-box">
                            <img src={Diary} alt='cow' className='feature-box__icon icon-basic-world' />
                            <h3 className="heading-tetiary">JLV Diary</h3>
                            <p className="feature-box__text u-margin-bottom-small">
                                Eat Healthy, Be 
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-3 ">
                        <div className="feature-box">
                        <img src={Resort} alt='cow' className='feature-box__icon'/>
                            <h3 className="heading-tetiary">JLV Resort</h3>
                            <p className="feature-box__text u-margin-bottom-small">
                                5 Star Experience
                            </p>
                        </div>
                    </div>

                    </div>
                    <div className="wraper">
  <h1 className='heading-secondary heading-title'>Why Choose Us?</h1>

<div className='text'>
    <div className='text__box'><h2 className='text__paragraph1'>Modern Farming Experience</h2></div>
    <div className='text__box'><h2>Highland Nature Experience</h2></div>
    <div className='text__box'><h2 className='text__paragraph2'>Causey Luxury Experience</h2></div>
</div>
  <ul className="container">

    <li className="link"><Link to=''></Link></li>
    <li className="link active"><a href=""></a></li>
    <li className="link"><a href=""></a></li>
  </ul>

 
</div>

                </div>
            </section>
    </>
  )
}
