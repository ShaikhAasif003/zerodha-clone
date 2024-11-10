import React from 'react'

function Awards() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 p-5'>
          <img src="Assets/largestBroker.svg" alt="" />
        </div>
        <div className='col-6 p-5 mt-3'>
          <h1>Largest stock broker in india</h1>
          <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in.</p>
          <div className='row'>
            <div className='col-6'>
             <ul>
               <li><p>Futures and Options</p></li>
               <li><p>Commodity derivatives</p></li>
               <li><p>Currency derivatives</p></li>
             </ul>
            </div>
            <div className='col-6 '>
            <ul>
               <li><p>Stock and IPOs</p></li>
               <li><p>Direct mutual funds</p></li>
               <li><p>Bonds and Govt. Securities </p></li>
             </ul>
            </div>
          </div>
          <img src="Assets/pressLogos.png" alt="" style={{width:"90%"}} />
        </div>
      </div>
    </div>
  )
}

export default Awards