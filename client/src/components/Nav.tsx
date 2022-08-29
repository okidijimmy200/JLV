import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const Logo = require('../images/Logo.png')
export default function Nav() {
        const [hovered, setHovered] = useState(false);

        const onMouseEnter = (e: any) => {
                setHovered(true);
              };
            
        const onMouseLeave = (e: any) => {
                setHovered(false);
              };
        const style = hovered ? { color: "#fff", borderBottom: 'none' } : {};
            
  return (
    <>
                    <div className='nav'>
                        <div className="header__logo-box">
                <div className='header__logo'>
                        <div className='header__logo__icon'><img src={Logo} alt='logo' className='header__logo__icon--size'/></div>
                        <div className='header__logo__text'>JLV Mixed Farm</div>
                </div>
                        
                </div>
                <div className='nav__bar'>
                <ul className='nav__bar__list'>
                        <li className="nav__bar__item"><NavLink className={(navData) => (navData.isActive ? 'nav__bar__active-nav' : 'nav__bar__link')} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} to='/'>Home</NavLink></li>
                        <li className="nav__bar__item"><NavLink className={(navData) => (navData.isActive ? 'nav__bar__active-nav' : 'nav__bar__link')} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} to='/about'>About</NavLink></li>
                        <li className="nav__bar__item"><NavLink className={(navData) => (navData.isActive ? 'nav__bar__active-nav' : 'nav__bar__link')} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} to='/services'>Services</NavLink></li>
                        <li className="nav__bar__item"><NavLink className={(navData) => (navData.isActive ? 'nav__bar__active-nav' : 'nav__bar__link')} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} to='/contact'>Contact Us</NavLink></li>
                </ul>

                </div>
                </div>
    </>
  )
}
