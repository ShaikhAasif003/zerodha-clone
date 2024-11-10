import React from 'react'

function Pricing() {
  return (
    <div className='container mb-5 '  >
      <div className="row">
        <div className="col-5">
          <h1 className='fs-2'>Unbeatable pricing</h1>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href="" style={{textDecoration:"none"}}>See pricing  <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
        <div className="col-7 d-flex mb-5">
          <div className='col-2.50  d-flex '>
          <img src="Assets/pricing-0.svg" alt=""  style={{width:"60%"}}/>
          <div className='text-muted' style={{width:"30%", fontSize:"10px",paddingTop:"60px"}}>Free account
          opening</div>
          </div>
          
          <div  className='col-2.50 d-flex'>
          <img src="Assets/pricing-0.svg" alt="" style={{width:"50%"}} />
          <div  className='text-muted' style={{width:"30%", fontSize:"10px",paddingTop:"60px"}}>Free equity delivery 
          and direct mutual funds</div>
          </div>
          
          <div  className='col-2.50 d-flex'>
          <img src="Assets/price-20.svg" alt="" style={{width:"50%"}}/>
          <div className='text-muted' style={{width:"30%", fontSize:"10px",paddingTop:"60px"}}>Intraday and 
          F&O</div>
          </div>
         
          
        </div>
      </div>
    </div>
  )
}

export default Pricing