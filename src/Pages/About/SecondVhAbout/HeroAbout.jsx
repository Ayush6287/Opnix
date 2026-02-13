import React from 'react'
import About from '../../../assets/About.jpg'
const HeroAbout = () => {
  return (
    <div className='flex w-full h-[60vh] text-black   bg-white  flex-row  items-center'>
      <div className='w-1/2 flex justify-center  '>
        <img className='h-full w-[450px] object-contain'  src={About} alt="" />
      </div>
      <div className='flex flex-col w-1/2'>
        <h1 className='text-8xl mb-5'>
         About Us <span className=''>.</span>
        </h1>
        
     <p>We are a modern web development agency dedicated to creating high-quality, scalable, and performance-driven digital solutions. Our focus is on building websites and web applications that are not only visually clean but also technically strong and business-oriented. By combining strategy, design, and development, we help brands establish a powerful online presence and grow with confidence.</p>
      </div>
    </div>
  )
}

export default HeroAbout
