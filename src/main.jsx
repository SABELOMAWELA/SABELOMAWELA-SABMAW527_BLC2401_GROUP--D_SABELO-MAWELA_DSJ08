import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Vans from "./vans"
import "./server" 
import Vandetail from "./vandetail" 
import Layout from "/components/layout"
import Dashboard from './Host/dashboard';
import Income from './Host/Income';
import Reviews from './Host/Reviews';
import { HostLayout } from './Host/HostLayout';


function App() {
    return (
      <BrowserRouter>
     
      <Routes>
        <Route element={<Layout />}>
        <Route path="vans">
        <Route index element={<Vans />}/>
        <Route path='/vans/:id' element={<Vandetail />}/>
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/host' element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='Income' element={<Income />} />
        <Route path='reviews' element={<Reviews/>} />
        </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);