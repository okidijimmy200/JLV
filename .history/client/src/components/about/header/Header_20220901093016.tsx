import React from 'react'
import Nav from '../../Nav'
import './Header.scss'

export default function Header() {
  return (
    <header className="header-about">
      <div className='header-about__section'>
        <Nav />
      <div className='header-about__detail'>
        <div className='header-about__detail__paragraph'>
          <div><h2>Who are we?</h2></div>
        <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima corrupti dolorum eaque 
                ipsum quibusdam tenetur, nobis labore sequi maxime, reiciendis voluptate at sint 
                totam harum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima corrupti dolorum eaque 
                ipsum quibusdam tenetur, nobis labore sequi maxime, reiciendis voluptate at sint 
                totam harum 
            </p>
            <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima corrupti dolorum eaque 
                ipsum quibusdam tenetur, nobis labore sequi maxime, reiciendis voluptate at sint 
                totam harum 
            </p>
        </div>
        <div className='header-about__detail__picture'>
          {/* <h2></h2> */}
        </div>

      </div>
      </div>

    
</header>
  )
}
