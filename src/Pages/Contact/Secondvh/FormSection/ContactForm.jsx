import React from 'react'
import FormHero from './FormHero'
import FormNameInput from './FormNameInput'
import FormEmail from './FormEmail'
import FormSubjectInput from './FormSubjectInput'
import FormMessage from './FormMessage'
import FormAgree from './FormAgree'
import FormSubmitBtn from './FormSubmitBtn'

const ContactForm = () => {
  return (
    <div className='w-[35vw] p-9 justify-between   bg-white text-black ml-24  flex flex-col rounded-2xl mt-5 shadow-lg shadow-emerald-300 mb-8 border-2 border-emerald-300 '>
      <div>
      
        <div>   
            <FormHero />
        </div>
        <div className='flex  m-4  flex-row gap-4 '>
            <FormNameInput />
            <FormEmail />
        </div>
        <div className='m-4'>
            <FormSubjectInput />
        </div>
        <div className='m-4'>
            <FormMessage />
        </div>
        <div className='m-4 flex flex-row justify-between gap-4'>
            <FormAgree />
            <FormSubmitBtn />
        </div>
      </div>
    </div>
  )
}

export default ContactForm
