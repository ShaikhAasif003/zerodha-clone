import React from 'react'

function RightSection({productName, productDescription ,learnMore , imageUrl}) {
  return (
    <div className='container '>
      <div className="row p-5">
        <div className="col-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p className='lh-lg'>{productDescription}</p>
          <div className='mt-3'>
           <a href={learnMore} style={{textDecoration:"none"}}>Learn more <i class="fa-solid fa-arrow-right-long"></i></a> 
          </div>
        </div>
          <div className="col-7  ">
           <img src={imageUrl} alt="image" style={{}} />
          </div>
      </div>
    </div>
  )
}

export default RightSection