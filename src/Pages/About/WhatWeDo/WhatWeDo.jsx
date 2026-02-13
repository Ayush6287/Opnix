import React from 'react'
import DoHeading from './DoHeading'
import DoPara from './DoPara'
import DoCard from './DoCard'

const WhatWeDo = () => {
  return (
    <div className='h-[60vh] mt-5  flex flex-col  text-white justify-center items-center'>
     <div className='flex flex-col items-center mb-10'> 
         <DoHeading />
      <DoPara />
     </div>
      <div className='flex flex-row flex-wrap  gap-6 border-r-2  '>
        <DoCard title='Web Development' disc='We build fast, secure, and scalable websites using modern technologies. Our focus is on clean code, performance, and reliability to ensure your business runs smoothly online.'  />
      <DoCard title='Custom Web Apps' disc='We develop tailor-made web applications aligned with your business goals. From dashboards to complex platforms, our solutions are built to scale with your growth.' />
      <DoCard  title='Frontend Development'  disc='We develop fast, responsive, and interactive user interfaces using modern frameworks focused on performance and usability.
' />
      </div>
      <div className='m-10'>
        <p className='text-slate-200 text-3xl'>Explore More Services.... <span className='text-4xl animate-pulse '> ↗</span>
        </p>
      </div>
    </div>
  )
}

export default WhatWeDo
