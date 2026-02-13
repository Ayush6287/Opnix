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
    <div className='flex justify-between flex-row gap-7 hover:text-emerald-400 items-center'>
      <Link className='Home'  to="/">Home</Link>
      <Link className='About'  to="/about">About</Link>
      <Link className='Services'  to="/services">Services</Link>
    <NavCta />
    </div>
  )
}

export default Navlink
