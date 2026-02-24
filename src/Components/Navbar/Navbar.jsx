import React from 'react'
import Logo from './Logo'
import Navlink from './Navlink' 
import SocailMediaElement from '../../Pages/Contact/Secondvh/ContactElementSection/SocailMediaElement'
import MobileNavbar from './MobileNavbar'
const Navbar = () => {
  return (
    <>
    <div className=  ' hidden    px-9 py-5   text-white sm:flex justify-between items-center shadow-[0_8px_32px_rgba(0,0,0,0.6)]  '>
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
