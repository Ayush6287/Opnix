import React from 'react'
import Logo from './Logo'
import Navlink from './Navlink' 
import SocailMediaElement from '../../Pages/Contact/Secondvh/ContactElementSection/SocailMediaElement'
import MobileNavbar from './MobileNavbar'
const Navbar = () => {
  return (
    <>
    <div className=  ' hidden   bg-[whitesmoke] px-9 py-5   text-black sm:flex justify-between items-center border-b-2 border-b-gray-200 '>
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
