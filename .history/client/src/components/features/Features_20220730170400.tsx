import React from 'react'
import './Features.scss'

export default function Features() {
  return (
    <>
    <section className="section-about">
                <div className="row">
                <div className="col-1-of-4 ">
                        <div className="feature-box">
                            <!-- to make the boxes have little movable space -->
                            <!-- to add className to element, we use 'i' element as a convention -->
                            <i className="feature-box__icon icon-basic-world"></i>
                            <!-- we use an h3 tertiary we used before -->
                            <h3 className="heading-tetiary u-margin-bottom-small">next-level security</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}
