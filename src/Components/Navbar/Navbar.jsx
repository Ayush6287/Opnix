import React from 'react'
import Logo from './Logo'
import Navlink from './Navlink' 
import SocailMediaElement from '../../Pages/Contact/Secondvh/ContactElementSection/SocailMediaElement'
const Navbar = () => {
  return (
    <div className='bg-[whitesmoke] px-9 py-5   text-black flex justify-between items-center '>
      <Logo />
      <Navlink />
      <SocailMediaElement />
    </div>
  )
}

export default Navbar
