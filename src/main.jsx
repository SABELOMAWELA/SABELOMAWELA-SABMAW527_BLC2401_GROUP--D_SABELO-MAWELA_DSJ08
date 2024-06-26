import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link,} from "react-router-dom"
import Home from "./home"
import About from "./about"
import Vans from "./vans"
import "./server" 
import Vandetail from "./vandetail" 
import Layout from "/components/layout"
import Dashboard from './Host/dashboard'
import Income from './Host/Income'
import Reviews from './Host/Reviews'
import HostLayout  from './Host/HostLayout'
import Hostvans from './Host/vans'
import Hostvandetail from './Host/Hostvandetail'
import HostVanInfo from "./Host/Hostvaninfo"
import HostVanPhotos from "./Host/Hostvanphotos"
import HostVanPricing from "./Host/Hostvanpricing"
import NotFound from './Host/404Error'
import Login from './Host/login';
import AuthRequired from '../components/Authrequired'


function App() {
    return (
      <BrowserRouter>
     
      <Routes>
        
        <Route path="/"  element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />}/>
        <Route path="vans">
          <Route index element={<Vans />}/>
          <Route path=':id' element={<Vandetail />}/>
        </Route>
        <Route path="login" element={<Login />} />
       
        <Route path="about" element={<About />} />
        
        <Route element={<AuthRequired />}>
          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews/>} />
            <Route path='vans' element={<Hostvans/>} />
            <Route path="vans/:id" element={<Hostvandetail />}>
                  <Route index element={<HostVanInfo />} />
                  <Route path="pricing" element={<HostVanPricing />} />
                  <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        
        </Route>
        

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);