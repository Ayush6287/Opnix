import React from 'react'
import SocailMediaElement from '../../../Pages/Contact/Secondvh/ContactElementSection/SocailMediaElement'

const ThirdFotterSection = () => {
  return (
    <div className='h-[35vh] w-max gap-10  flex flex-col justify-between '>
      <SocailMediaElement />
      <div className='  '>
        <h1 className='text-xl underline mb-4'>
            ContactUs
        </h1>
        <div className=' flex flex-col  gap-5 '>
            <p>📍 Jaipur , india </p> 
            <p>📩 help@admiyz.in</p>
            <p>☎︎ +91 6287636236</p>
        </div>
      </div>
      <div>
        <p className='text-center text-sm text-gray-500 mt-4'>© 2026 Your Company. All rights reserved.</p>
      </div>
    </div>
  )
}

export default ThirdFotterSection
