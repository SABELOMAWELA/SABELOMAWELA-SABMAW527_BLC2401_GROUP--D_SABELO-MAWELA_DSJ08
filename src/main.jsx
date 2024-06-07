import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Vans from "./vans"
import "./server" 
import Vandetail from "./vandetail" 
import Layout from "/components/layout"


function App() {
    return (
      <BrowserRouter>
     
      <Routes>
        <Route element={<Layout />}>
        <Route path='/vans' element={<Vans />}/>
        <Route path='/vans/:id' element={<Vandetail />}/>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);