import React from 'react'
import { Link } from 'react-router-dom'
const Pages = () => {
  return (
    <div className='flex flex-col w-[35vh] h-[35vh]  justify-between  gap-5 items-center  text-white text-lg'> 
    <h1>Our Pages  </h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Pages
