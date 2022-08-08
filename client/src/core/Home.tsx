import React from 'react'
import Header from '../components/home/header/Header'
import Features from '../components/home/features/Features'
import Objective from '../components/home/objective/Objective'
import Gallery from '../components/home/gallery/Gallery'
import Action from '../components/home/actions/Action'
import AboutFeature from '../components/home/about-feature/AboutFeature'
import Footer from '../components/footer/Footer'

export default function Home() {
  return (
    <>
    <Header />
    <Features />
    <AboutFeature />
    <Objective />
    <Gallery />
    <Action />
    <Footer />
    </>
  )
}
