import React from 'react'

import './Header/scss'

export default function Header() {
  return (
    <>
            <header className="header">
            <div className="header__logo-box">
                <img src="images/logo_dark.png" alt="Logo"  className="header__logo"/>
            </div>
            <div className="header__text-box">
                    <h1 className="heading-primary">
                            <span className="heading-primary--main">VelonicSecurity</span>
                            <span className="heading-primary--sub">protecting systems</span>
                    </h1>

                    <!-- adding a button which is an ancher element -->
                    <a href="#" className="btn btn--white btn--animated">Learn More</a>

            </div>
            
        </header>
    </>
  )
}
