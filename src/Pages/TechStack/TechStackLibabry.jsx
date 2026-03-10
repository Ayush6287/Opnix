import React from 'react';
import js from '../../assets/javascript.svg'
import tailwind from '../../assets/tailwind-css.svg'
import motion from '../../assets/Motion_Logo_0.svg'
import gsap from '../../assets/gsap.jpeg'
const TechStackLibabry = () => {
  return (
    <div className='flex flex-row gap-6 mt-10 '>
      <img className='w-16 hover:scale-125 animate-pulse'  src={js} alt="JavaScript" />
        <img className='w-16 hover:scale-125 animate-pulse' src={tailwind} alt="Tailwind CSS" />
        <img className='w-16 hover:scale-125 animate-pulse' src={motion} alt='motion'/>
        <img className='w-16 hover:scale-125  object-contain animate-pulse'  src={gsap} alt="gsap" />
    </div>
  );
}

export default TechStackLibabry;
