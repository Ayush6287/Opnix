import React from 'react'
import HeroHeading from './Herovh/HeroHeading'
import HeroPara from './Herovh/HeroPara'
import HeroCta from './Herovh/HeroCta'
import HeroLabel from './Herovh/HeroLabel'

import Services from '../Services/Services'
import Label from './Herovh/Label'
import PrImage from './Herovh/PrImage'
import ServicesSection from './ServicesVh/ServicesSection'
import Casestudies from './CaseStudies/Casestudies'

const Home = () => {
  return (
    <div className='h-full      w-full    flex flex-col  text-black'>
     <div className='flex flex-col justify-center  mt-15 sm:mt-20 items-center  w-full h-full  text-black'>
       <Label />
     <HeroHeading />
      <PrImage />
     <HeroPara />
       <HeroCta />
     
   
     <HeroLabel />
   
     </div>
    <div>
      <ServicesSection />

    </div>
    <div>
      <Casestudies />
    </div>
</div>
   
   
  )
}

export default Home
