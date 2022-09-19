import React from 'react'
import './Gallery.scss'

const Farm1 = require('../../images/farm.jpg')
const Farm2 = require('../../images/Farm2.jpg')
const Farm3 = require('../../images/Farm3.jpg')

export default function Gallery() {
  return (
    <div className='section-gallery'>
      <div>
        <h2>JLV Gallery</h2>
      </div>
      <div className="grid-container">
        <div className="grid-item grid-item__1">1</div>
        <div className="grid-item grid-item__1">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item">4</div>
        <div className="grid-item">5</div>
        <div className="grid-item">6</div>
        <div className="grid-item">7</div>
        <div className="grid-item">8</div>
</div>
    </div>
  )
}
