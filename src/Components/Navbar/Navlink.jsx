import React from 'react'
import { Link } from 'react-router-dom'
import HeroCta from '../../Pages/Home/Herovh/HeroCta'
import NavCta from './NavCta'
import gsap from 'gsap'
import { useEffect } from 'react'
const Navlink = () => {

  useEffect(() => {

    const tl = gsap.timeline();

    tl.from(".Home", {
      y: -20,
      opacity: 0,
      duration: 0.7
    })
    .from(".About", {
      y: -20,
      opacity: 0,
      duration: 0.7
    })
    .from(".Services", {
       y: -20,
      opacity: 0,
      duration: 0.7
    });

  }, []);

  return (
    <div className='flex justify-between bg-white/0 backdrop-blur-xl border border-white/20 shadow-lg px-5 py-4 rounded-4xl  flex-row gap-7  items-center hover:text-white/90 transition-colors duration-200'>
      <Link className='Home'  to="/">Home</Link>
      <Link className='About'  to="/about">About</Link>
      <Link className='Services'  to="/services">Services</Link>
     <Link className='Pricing'to="/pricing">Pricing</Link>
      <NavCta />

    </div>
  )
}

export default Navlink
