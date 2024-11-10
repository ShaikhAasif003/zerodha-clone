import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'
import Navbar from '../Navbar'
import Footer from '../Footer'

function ProductPage() {
  return (
    <div>
       <Navbar/>
        <Hero/>
        <LeftSection 
         imageUrl="Assets/kite.png"
         productName="Kite" 
         productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
         tryDemo="" 
         learnMore="" 
         googlePlay="" 
         appStore=""  />
         <RightSection 
         imageUrl="Assets/coin.png"
         productName="Console" 
         productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
         learnMore="" 
          />
        <LeftSection 
         imageUrl="Assets/coin.png"
         productName="Coin" 
         productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
         tryDemo="" 
         learnMore="" 
         googlePlay="" 
         appStore=""  />
         <RightSection 
         imageUrl="Assets/kiteconnect.png"
         productName="Kite Connect API" 
         productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
         learnMore="" />
        <LeftSection 
         imageUrl="Assets/varsity.png"
         productName="Varsity mobile" 
         productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
         tryDemo="" 
         learnMore="" 
         googlePlay="" 
         appStore=""  />
         <p className='text-center fs-5'>Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech</a>Zerodha.tech blog.</p>
        <Universe/>
        <Footer/>
    </div>
  )
}

export default ProductPage