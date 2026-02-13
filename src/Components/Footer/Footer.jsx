import React from 'react'
import FooterFirstSection from './FirstSection/FooterFirstSection'
import ThirdFotterSection from './ThirdSection/ThirdFotterSection'
import Pages from './SecondSectionFooter/Pages'

const Footer = () => {
  return (
    <div className='hidden   sm:bg-linear-to-t from-emerald-900 to-black  text-white sm:p-9 sm:h-[50vh] sm:flex sm:flex-row sm:w-[100%] sm:justify-evenly sm:items-center sm:border-t-2 sm:border-slate-400   '>
      <FooterFirstSection />
    <Pages />
      <ThirdFotterSection />
    </div>
  )
}

export default Footer
