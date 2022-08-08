import React from 'react'
import {GiFarmTractor} from 'react-icons/gi'

export default function Nav() {
  return (
    <>
                    <div className='nav'>
                        <div className="header__logo-box">
                <div className='header__logo'>
                        <div className='header__logo__icon'><GiFarmTractor color="white" fontSize="3rem"/></div>
                        <div className='header__logo__text'>JLV Mixed Farm</div>
                </div>
                        
                </div>
                <div className='nav__bar'>
                <ul className='nav__bar__list'>
                        <li className="nav__bar__item">Home</li>
                        <li className="nav__bar__item">About</li>
                        <li className="nav__bar__item">Services</li>
                        <li className="nav__bar__item">Contact US</li>
                </ul>

                </div>
                </div>
    </>
  )
}
