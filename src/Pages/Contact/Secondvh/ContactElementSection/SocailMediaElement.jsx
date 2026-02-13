import React from 'react'
import fbicon from '../../../../assets/fbicon.svg'
import instaicon from '../../../../assets/instaicon.svg'
import linkdin from '../../../../assets/linkdinicon.svg'
const SocailMediaElement = () => {
  return (
    <div className='flex flex-row gap-4 items-center  justify-between'>
      
      <div className="flex gap-4 mt-4">
        <a href="https://www.facebook.com/ayushpandey.official" target="_blank" rel="noopener noreferrer">
          <img src={fbicon} alt="Facebook" className="w-6 h-8 " />
        </a>
        <a href="https://www.instagram.com/ayushpandey.official/" target="_blank" rel="noopener noreferrer">
          <img src={instaicon} alt="Instagram" className="w-6 h-8" />
        </a>
        <a href="https://www.linkedin.com/in/ayushpandeyfounder//" target="_blank" rel="noopener noreferrer">
          <img src={linkdin} alt="LinkedIn" className="w-6 h-8 " />
        </a>
      </div>
    </div>
  )
}

export default SocailMediaElement
