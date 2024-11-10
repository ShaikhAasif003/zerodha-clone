import React from 'react'

function Hero() {
  return (
    <div className='container border-bottom '>
      <div className="row text-center mt-5 mb-5 ">
        <h1 className='mt-5 ' style={{fontSize:"3rem",fontWeight:500}}>Zerodha Products</h1>
        <h4 className='text-muted mt-2'>Sleek, modern, and intuitive trading platforms</h4>
        <p className='mt-3 mb-5'>Check out our  <a href="" style={{textDecoration:"none"}}>investment offerings  <i class="fa-solid fa-arrow-right-long"></i></a> </p>
      </div>
    </div>
  )
}

export default Hero