import React from 'react'
import ElementContactCard from './ElementContactCard'
import SocailMediaElement from './SocailMediaElement'
import ElementHero from './ElementHero'
import ElementPara from './ElementPara'
const ContactElement = () => {
  return (
    <div className='flex flex-col gap-10 '>
      <div className="flex flex-col gap-4 ">
        <ElementHero />
        <ElementPara />
      </div>
      <div>
        <ElementContactCard />
      </div>
      <div>
        <SocailMediaElement />
      </div>
    </div>
  )
}

export default ContactElement
