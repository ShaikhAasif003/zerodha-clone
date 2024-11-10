import React from 'react'
import Hero from './Hero'
import Brokerage from './Brokerage'
import Navbar from '../Navbar'
import Footer from '../Footer'
import OpenAccount from "../OpenAccount"

function PricingPage() {
  return (
    <div>
       <Navbar/>
        <Hero/>
        <OpenAccount/>
        <Brokerage/>
        <Footer/>
    </div>
  )
}

export default PricingPage