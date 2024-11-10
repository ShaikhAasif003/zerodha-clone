import React from 'react'


function Hero() {
  return (
     <div className=' '  style={{paddingInline:"20rem",backgroundColor:"#387ed1", height:"28rem"}}>
      <div className=" row p-3  ">
        <div className='col-6'><h3 className='text-light fs-4 mt-3'>Support Portal</h3></div>
        <div className='col-6 text-end '><a href="" className='text-light fs-5 '>Track tickets</a></div>
      </div>

      <div className='row p-3   '>
        <div className="col-6 ">
          <h1 className='fs-4 text-light '>Search for an answer or browse help topics to create a ticket</h1>
          <input type="text" className='mb-4 mt-4 rounded-1 fs-6 p-3' placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' style={{width:"100%", height:"4rem",border:"none" }} /> <br />
         <ul className='list-unstyled d-flex gap-4'>
          <li className='border-bottom'> <a href="" className='text-light fw-medium' style={{textDecoration:"none"}}>Track account opening</a></li>
          <li className='border-bottom'> <a href="" className='text-light fw-medium' style={{textDecoration:"none"}}>Track account opening</a></li>
          <li className='border-bottom'> <a href="" className='text-light fw-medium' style={{textDecoration:"none"}}>Track account opening</a></li>
         </ul>
         <ul className='list-unstyled d-flex  '>
         <li className='border-bottom'> <a href="" className='text-light fw-medium' style={{textDecoration:"none"}}>Kite user manual</a></li>
         </ul>
        </div>
        <div className="col-6">
          <h1 className='fs-4 text-light mt-5 ms-5 mb-3'>Featured</h1>
          <ol className='ms-5'>
            <li className='text-light mt-3 ms-3  fs-5' ><a href="" className='text-light'>Rights Entitlements listing in October 2024</a></li>
            <li className='text-light mt-3 ms-3  fs-5 ' ><a href="" className='text-light'>Surveillance measure on scrips - October 2024</a></li>
          </ol>
        </div>
      </div>
     </div>
  )
}



export default Hero