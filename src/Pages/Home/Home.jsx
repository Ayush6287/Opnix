import React from 'react'
import HeroHeading from './Herovh/HeroHeading'
import HeroPara from './Herovh/HeroPara'
import HeroCta from './Herovh/HeroCta'
import HeroLabel from './Herovh/HeroLabel'
import Herolast from './Herovh/Herolast'
import Services from '../Services/Services'

const Home = () => {
  return (
    <div className='h-screen   bg-[whitesmoke] w-full    flex flex-col items-center justify-center  text-black'>
      <HeroLabel />
     <HeroHeading />
     <HeroPara />
     <HeroCta />
     <Herolast />
    
    </div>
  )
}

export default Home
