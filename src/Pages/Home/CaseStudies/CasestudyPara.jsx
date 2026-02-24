import React from 'react';
import {motion} from 'motion/react'
const CasestudyPara = () => {
  return (
    <motion.div 
    animate={{
      x:20,
     
    }}
    transition={{
      duration:5,
      delay:2
    }}
    >
      <p className='text-center mt-4 mb-4 text-gray-200'>We deliver digital products that drive real business impact — from startups to enterprise solutions. <br />  Here are some of the projects we’ve built.</p>
    </motion.div>
  );
}

export default CasestudyPara;
