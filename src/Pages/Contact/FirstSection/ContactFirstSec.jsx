import React from 'react'
import ContactHero from './ContactHero'
import ContactPara from './ContactPara'
const ContactFirstSec = () => {
  return (
    <div className='w-full h-[50vh] flex flex-col justify-center items-center gap-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white'>
      <ContactHero />
      <ContactPara />
    </div>
  )
}

export default ContactFirstSec
