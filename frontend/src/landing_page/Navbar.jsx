import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#FFF"}}>
  <div class="container p-2">
    <Link class="navbar-brand " style={{paddingLeft:"60px"}} to="/"> <img src="Assets/logo.svg" alt="" style={{width:"22%"}}/> </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form class="d-flex" role="search">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/products">Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/support">Support</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="#"><i class="fa-solid fa-bars fs-5 " style={{paddingTop:"3px"}}></i></Link>
        </li>
      </ul>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar