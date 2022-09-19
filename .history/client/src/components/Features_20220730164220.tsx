import React from 'react'

export default function Features() {
  return (
    <>
    <main>
    <section class="section-about">
                <!-- we place the section-about styles in the home.scss file -->
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        Protect your digital assets
                        <!-- h2 styles are placed in typography -->
                    </h2>
                </div>
                <div class="row">
                    <!-- grid for 1 of 2 columns -->
                    <div class="col-1-of-2 ">
                        <!-- where we are going to place the h3 and paragraphs -->
                        <h3 class="heading-tetiary u-margin-bottom-small">Why Velonic Security</h3>
                        <p class="paragraph">
                            ipsum dolor sit, amet consectetur adipisicing elit. Odit excepturi animi, commodi voluptatem sit eveniet alias nobis consequatur sequi fugiat possimus sunt assumenda ut eaque.
                        </p>
                        <!-- second paragraph contains the second content -->
                        <h3 class="heading-tetiary u-margin-bottom-small">We protect the biggest brands</h3>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus error eum doloremque.
                        </p>
                        <!-- writing the anchor button -->
                        <!-- we use an html character &rarr for directions -->
                        <a href="" class="btn-text">Learn More &rarr;</a>
                    </div>
                    <!-- grid for 2 of 2 columns -->
                    <div class="col-1-of-2 ">
                        <div class="composition">
                            <img src="images/laptop2.jpg" alt="photo 1" class="composition__photo composition__photo--p1"/>
                            <img src="images/laptop3.jpg" alt="photo 2" class="composition__photo composition__photo--p2"/>
                            <img src="images/laptop2.jpg" alt="photo 3" class="composition__photo composition__photo--p3">
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </section>
    </main>
    </>
  )
}
