import React from 'react'
import Logo from './Logo'
import Navlink from './Navlink' 
import SocailMediaElement from '../../Pages/Contact/Secondvh/ContactElementSection/SocailMediaElement'
import MobileNavbar from './MobileNavbar'
const Navbar = () => {
  return (
    <>
    <div className=  ' hidden  px-9 py-5   text-white sm:flex justify-between items-center  bg-white/5 backdrop-blur-xl border border-white/10 '>
      <Logo />
      <Navlink />
      <SocailMediaElement />
    </div>
    <div className=''>
    <MobileNavbar />
    </div>
    </>
  )
}

export default Navbar
