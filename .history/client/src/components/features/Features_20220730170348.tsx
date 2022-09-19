import React from 'react'
import './Features.scss'

export default function Features() {
  return (
    <>
    <section className="section-about">
                <div className="row">
                <div class="col-1-of-4 ">
                        <div class="feature-box">
                            <!-- to make the boxes have little movable space -->
                            <!-- to add class to element, we use 'i' element as a convention -->
                            <i class="feature-box__icon icon-basic-world"></i>
                            <!-- we use an h3 tertiary we used before -->
                            <h3 class="heading-tetiary u-margin-bottom-small">next-level security</h3>
                            <p class="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}
