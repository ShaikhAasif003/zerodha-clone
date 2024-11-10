import React from 'react'
import Hero from './Hero'
import Team from './Team'
import Navbar from '../Navbar'
import Footer from '../Footer'

function AboutPage() {
  return (
    <div>
      <Navbar/>
        <Hero/>
        <Team/>
       <Footer/>
    </div>
  )
}

export default AboutPage