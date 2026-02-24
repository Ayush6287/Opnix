import React from 'react'

const HeroCta = () => {

    const message = 'Hi, I would like to discuss a new project.'
    const phone = 916287636236 
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <a  href={url}
        target='_blank' 
        rel="noopener noreferrer" 
        className='px-6 py-3 bg-emerald-700  text-white   text-[18px] rounded-2xl mb-10  hover:bg-blue-400'
        >
         Launch your product faster  ➤     
       
    </a>
  )
}

export default HeroCta
