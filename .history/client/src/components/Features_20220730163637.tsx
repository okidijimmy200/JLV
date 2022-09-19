import React from 'react'

export default function Features() {
  return (
    <>
               <section className="section-about">
                <!-- we place the section-about styles in the home.scss file -->
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Protect your digital assets
                        <!-- h2 styles are placed in typography -->
                    </h2>
                </div>
                <div className="row">
                    <!-- grid for 1 of 2 columns -->
                    <div className="col-1-of-2 ">
                        <!-- where we are going to place the h3 and paragraphs -->
                        <h3 className="heading-tetiary u-margin-bottom-small">Why Velonic Security</h3>
                        <p className="paragraph">
                            ipsum dolor sit, amet consectetur adipisicing elit. Odit excepturi animi, commodi voluptatem sit eveniet alias nobis consequatur sequi fugiat possimus sunt assumenda ut eaque.
                        </p>
                        <!-- second paragraph contains the second content -->
                        <h3 className="heading-tetiary u-margin-bottom-small">We protect the biggest brands</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus error eum doloremque.
                        </p>
                        <!-- writing the anchor button -->
                        <!-- we use an html character &rarr for directions -->
                        <a href="" className="btn-text">Learn More &rarr;</a>
                    </div>
                    <!-- grid for 2 of 2 columns -->
                    <div className="col-1-of-2 ">
                        <div className="composition">
                            <img src="images/laptop2.jpg" alt="photo 1" className="composition__photo composition__photo--p1">
                            <img src="images/laptop3.jpg" alt="photo 2" className="composition__photo composition__photo--p2">
                            <img src="images/laptop2.jpg" alt="photo 3" className="composition__photo composition__photo--p3">
                        </div>
                    </div>
                </div>
            </div>
            </section>
    </>
  )
}
