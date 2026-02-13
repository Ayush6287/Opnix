import React from 'react'
import FooterFirstSection from './FirstSection/FooterFirstSection'
import ThirdFotterSection from './ThirdSection/ThirdFotterSection'
import Pages from './SecondSectionFooter/Pages'

const Footer = () => {
  return (
    <div className='bg-linear-to-t from-emerald-900 to-black  text-white p-9 h-[50vh] flex flex-row  w-[100%]  justify-evenly items-center border-t-2 border-slate-400  '>
      <FooterFirstSection />
    <Pages />
      <ThirdFotterSection />
    </div>
  )
}

export default Footer
