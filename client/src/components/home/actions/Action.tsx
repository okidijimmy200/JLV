import React from 'react'
import {TbBeach} from 'react-icons/tb'
import {MdNaturePeople, MdModelTraining} from 'react-icons/md'
import {GiCow, GiGrass} from 'react-icons/gi'

import './Action.scss'

export default function Action() {
  return (
    <div className='section-action'>
              <div className="grid-container-action">
              <div className="grid-item-action box-1">
              <div className='grid-item-action__1'>
                <h2>Unmatched Services. Unmatched Excellence</h2>
              </div>
              </div>
              <div className="grid-item-action">
                <div className='grid-item-action__icon'>
                  <TbBeach fontSize='5rem'/></div>
                  <div className='grid-item-action__heading heading-tetiary u-margin-bottom-small'>
                    <h2>5 Star Resort</h2>
                  </div>
                  <div className='grid-item-action__box'>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h4>
                  </div>

              </div>
              <div className="grid-item-action">
              <div className='grid-item-action__icon'>
                  <MdNaturePeople fontSize='5rem'/></div>
                  <div className='grid-item-action__heading heading-tetiary u-margin-bottom-small'>
                    <h2>Nature Walks</h2>
                  </div>
                  <div className='grid-item-action__box'>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h4>
                  </div>
              </div>
              <div className="grid-item-action">
              <div className='grid-item-action__icon'>
                  <GiCow fontSize='5rem'/></div>
                  <div className='grid-item-action__heading heading-tetiary u-margin-bottom-small'>
                    <h2>Cattle Breeding</h2>
                  </div>
                  <div className='grid-item-action__box'>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h4>
                  </div>
              </div>
              <div className="grid-item-action">
              <div className='grid-item-action__icon'>
                  <MdModelTraining fontSize='5rem'/></div>
                  <div className='grid-item-action__heading heading-tetiary u-margin-bottom-small'>
                    <h2>Internship & Training</h2>
                  </div>
                  <div className='grid-item-action__box'>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h4>
                  </div>
              </div>
              <div className="grid-item-action">
              <div className='grid-item-action__icon'>
                  <GiGrass fontSize='5rem'/></div>
                  <div className='grid-item-action__heading heading-tetiary u-margin-bottom-small'>
                    <h2>Hay & Silage Preparation</h2>
                  </div>
                  <div className='grid-item-action__box'>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h4>
                  </div>
              </div>
</div>
    </div>
  )
}
