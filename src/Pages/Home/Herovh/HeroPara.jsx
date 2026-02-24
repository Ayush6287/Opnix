import React from 'react'
import gsap from 'gsap'
import { useEffect } from 'react'
const HeroPara = () => {
     
  useEffect(()=>{
    gsap.from(".hero-para-text", {
      y: -50,
      scale: 2,
      duration: 1
    });
  },[]);

  return (
    <div>
      <p className='hero-para-text text-[18px] mb-14 mt-7  text-center  text-gray-300'>We Engineer AI-Driven Websites and Applications That Help  Startups and SMEs <br />  Execute Faster and Grow Strategically.</p>
    </div>
  )
}

export default HeroPara
