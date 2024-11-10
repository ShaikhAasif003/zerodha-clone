import React from 'react'

function Universe() {
  return (
    <div className='container'>
      <div className="row text-center p-5 mt-5">
        <h1>The Zerodha Universe</h1>
        <p className='mt-4'>Extend your trading and investment experience even further with our partner platforms</p>
        <div className="col-4 p-5 mt-5">
          <img src="Assets/zerodhaFundhouse.png"alt="" style={{width:"13rem"}}/>
          <p className='text-small text-muted mt-4'>our assets management venture that is creating simple and transparent index.funds to help you save for your goals.          </p>
        </div>
        <div className="col-4 p-5 mt-5">
          <img src="Assets/sensibullLogo.svg"alt=""  style={{width:"15rem"}}/>
          <p className='text-small text-muted mt-4'>Options trading platform that lets youcreate strategies, analyze positions, and examinedata points like open interest, FII/DII, and more.</p>
        </div>
        <div className="col-4 p-5 mt-5">
          <img src="Assets/goldenpiLogo.png"alt="" style={{width:"13rem"}} />
          <p className='text-small text-muted mt-4'>Investment research platformthat offers detailed insights on stocks,sectors, supply chains, and more.</p>
        </div>
        <div className="col-4 p-5 mt-5">
          <img src="Assets/streakLogo.png"alt=""  style={{width:"11rem"}}/>
          <p className='text-small text-muted mt-4'>Systematic trading platformthat allows you to create and backteststrategies without coding.</p>
        </div>
        <div className="col-4 p-5 mt-5">
          <img src="Assets/smallcaseLogo.png"alt="" style={{width:"13rem"}} />
          <p className='text-small text-muted mt-4'>Thematic investing platformthat helps you invest in diversifiedbaskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-5 mt-5">
          <img src="Assets/dittoLogo.png"alt=""  style={{width:"10rem"}}/>
          <p className='text-small text-muted mt-4'>Personalized advice on lifeand health insurance. No spamand no mis-selling.</p>
        </div>
        <button style={{width:"20%", margin:" 0 auto",}} className='btn btn-primary btn-lg fw-medium mb-5 mt-4'>Sign up for free</button>
      </div>
    </div>
  )
}

export default Universe