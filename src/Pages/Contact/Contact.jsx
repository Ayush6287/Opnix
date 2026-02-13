import React from 'react'
import ContactFirstSec from '../Contact/FirstSection/ContactFirstSec'
import ContactForm from '../Contact/Secondvh/FormSection/ContactForm'
import ContactElement from './Secondvh/ContactElementSection/ContactElement'
const Contact = () => {
  return (
    <div className='h-full   bg-white'>
     <ContactFirstSec />
     <div className='w-full h-full flex flex-row justify-center items-center gap-10 py-10'>
        <ContactForm />
        <ContactElement />
     </div>
    </div>
  )
}

export default Contact
