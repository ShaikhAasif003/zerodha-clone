import React from 'react'

function Hero() {
  return (
    <div className='container'>
      <div className="row text-center mt-5">
        <h1 className='mt-5 '>Charges</h1>
        <p className='text-muted fs-5'>List of all charges and taxes</p>
      </div>
      <div className="row d-flex mb-5 mt-5 p-5">
          <div className='col-4 text-center mt-5 p-3'>
          <img src="Assets/pricing-0.svg" alt=""  style={{width:"70%"}}/>
          <h3 className='mt-4 mb-4'>Free equity delivery</h3>
          <p className='text-muted lh-base'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
          </div>
          
          <div  className='col-4 text-center mt-5 p-3'>
          <img src="Assets/price-20.svg" alt="" style={{width:"70%"}} />
          <h3 className='mt-4 mb-4'>Intraday and F&O trades</h3>
          <p className='text-muted lh-base'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>
          
          <div  className='col-4 text-center mt-5 p-3'>
          <img src="Assets/pricing-0.svg" alt="" style={{width:"70%"}}/>
          <h3 className='mt-4 mb-4'>Free direct MF</h3>
          <p className='text-muted lh-base'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
         
          
        </div>
    </div>
  )
}

export default Hero