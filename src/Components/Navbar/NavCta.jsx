import React from 'react'

const NavCta = () => {
  
 const word = 'Hey , i want Start this project'
    const Phone = 916287636236 
    const url = `https://wa.me/${Phone}?text=${encodeURIComponent(word)}`;
  return (
    <a  href={url}
        target='_blank' 
        rel="noopener noreferrer"  
        className='text-white'
        >
          Contact
       
    </a>
  )
}

export default NavCta
