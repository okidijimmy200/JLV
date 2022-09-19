import React from 'react'

import './Header/scss'

export default function Header() {
  return (
    <>
            <header className="header">
            <!-- creating the logo section -->
            <!-- adding BEM structure and it should be with double underscores -->
            <div className="header__logo-box">
                <!-- alt image is to help search optimization on browser -->
                <img src="images/logo_dark.png" alt="Logo"  class="header__logo"/>
            </div>
            <!-- creating the primary heading -->
            <div class="header__text-box">
                <!-- this is a standalone block too bse we can use it as  reference -->
                    <h1 class="heading-primary">
                        <!-- here heading-primary-main and sub are modifiers of heading primary -->
                            <span class="heading-primary--main">VelonicSecurity</span>
                            <span class="heading-primary--sub">protecting systems</span>
                    </h1>

                    <!-- adding a button which is an ancher element -->
                    <a href="#" class="btn btn--white btn--animated">Learn More</a>

            </div>
            
        </header>
    </>
  )
}
