import React from 'react'

function LeftSection({imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
  return (
    <div className='container '>
      <div className="row p-5">
        <div className="col-7 p-5">
          <img src={imageUrl} alt="image" />
        </div>
        <div className="col-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p className='lh-lg'>{productDescription}</p>
          <div className='mt-3'>
           <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a> 
           <a href={learnMore} style={{marginLeft:"4rem",textDecoration:"none"}}>Learn more <i class="fa-solid fa-arrow-right-long"></i></a> 
          </div>
         <div className='mt-4'>
          <a href={googlePlay}><img src="Assets/googlePlayBadge.svg" alt="" /></a> 
          <a href={appStore} style={{marginLeft:"3rem"}}><img src="/Assets/appstoreBadge.svg" alt="" /></a> 
         </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection