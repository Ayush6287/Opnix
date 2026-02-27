import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'
import Pricing from './Pages/Home/ServicesVh/Price/Pricing'

const App = () => {
  return (
    <div>
      <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/pricing' element={<Pricing />} />
     </Routes>
    
    </div>
  )
}

export default App
