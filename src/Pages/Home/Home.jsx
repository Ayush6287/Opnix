import React from 'react'
import HeroHeading from './Herovh/HeroHeading'
import HeroPara from './Herovh/HeroPara'
import HeroCta from './Herovh/HeroCta'
import HeroLabel from './Herovh/HeroLabel'

import Services from '../Services/Services'
import Label from './Herovh/Label'
import PrImage from './Herovh/PrImage'
import ServicesSection from './ServicesVh/ServicesSection'

const Home = () => {
  return (
    <div className='h-full bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_60%),whitesmoke]   w-full    flex flex-col  text-black'>
     <div className='flex flex-col mt-15 sm:mt-20 items-center bg-[whitesmoke] w-full h-full  text-black'>
       <Label />
     <HeroHeading />
     <HeroPara />
      <PrImage />
     <HeroCta />
     <HeroLabel />
   
     </div>
    <div>
      <ServicesSection />

    </div>
    
</div>
   
   
  )
}

export default Home
