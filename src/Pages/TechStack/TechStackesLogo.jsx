import React from 'react';
import Mernlogo from '../../assets/MERN-logo.png'
import TechStackLibabry from './TechStackLibabry';
const TechStackesLogo = () => {
  return (
    <div>
      <div className='flex flex-col'>
        <img src={Mernlogo} alt="Tech Stack Logos" className='w-[400px] h-auto  hover:scale-110' />
      
      </div>
     
    </div>
  );
}

export default TechStackesLogo;
