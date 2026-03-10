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
import ContactForm from '../../Components/Contact'
import ProcessSection from './ProcessSection/ProcessSection'
import TechStack from '../TechStack/TechStack'
import WhychooseUs from '../WhychooseUs/WhychooseUs'
import ProjectShowcase from '../Projectshowcase/ProjectShowcase'
import Cta from '../Cta/Cta'

const Home = () => {
  return (
    <div className='h-full     w-full    flex flex-col  text-black'>
      <div className='flex flex-col justify-center  mt-15 sm:mt-20 items-center  w-full h-full   text-black'>
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
     <div>
      <ProcessSection />
     </div>
     <div>
      <TechStack />
     </div>
     <div>
      <WhychooseUs />
     </div>
     <div>
      <ProjectShowcase />
     </div>
     <div>
      <Cta />
     </div>
    </div>
  )
}

export default Home
