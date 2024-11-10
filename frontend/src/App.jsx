import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from './landing_page/home/HomePage.jsx'
import SignupPage from "./landing_page/signup/Signup.jsx"
import AboutPage from "./landing_page/about/AboutPage.jsx"
import ProductPage from "./landing_page/products/ProductPage.jsx"
import PricingPage from "./landing_page/pricing/PricingPage.jsx"
import SupportPage from "./landing_page/support/SupportPage.jsx"
import NotFound from './landing_page/NotFound.jsx'

const router = createBrowserRouter(
  [
    {path:"/" , element:<HomePage/>},
    {path:"/signup" , element:<SignupPage/>},
    {path:"/about" , element:<AboutPage/>},
    {path:"/products" , element:<ProductPage/>},
    {path:"/pricing" , element:<PricingPage/>},
    {path:"/support" , element:<SupportPage/>},
    {path:"*" , element:<NotFound/>},
  ]
)

function App() {
  return (
    <div>

      <RouterProvider router={router}/>
    </div>
  )
}

export default App

