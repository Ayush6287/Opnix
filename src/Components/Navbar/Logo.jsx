import React from 'react'
import gsap from 'gsap'
import { useEffect } from 'react'


const Logo = () => {

  useEffect (()=>{
    const tl = gsap.timeline()
    tl.from('.logo', {
      y : -30,
      duration: 2,
      

    })
  })
  return (
    <div>
      <h1 className='logo text-4xl font-mono  text-emerald-100'>Opnix</h1>
    </div>
  )
}

export default Logo
