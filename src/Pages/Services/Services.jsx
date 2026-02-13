import React from 'react'
import gsap from 'gsap'
import { useEffect } from 'react'
const Services = () => {
  useEffect(()=>{
    gsap.from('.btn', { 
      rotate : 360,
      repeat : -1
    
    })
  })
  return (
    <div  id="services"  className=  '  h-screen bg-[whitesmoke] text-9xl text-black'>
        <h1>Our Services</h1>
        <button className='btn text-[14px]  bg-emerald-800 rounded-full  h-max'>  </button>
    </div>
  )
}

export default Services
