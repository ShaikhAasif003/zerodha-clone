import React from "react";
import ReactDOM from "react-dom/client";
// import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./components/Home";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

export default App;
