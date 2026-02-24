import React from 'react';
import demo from '../../../assets/ecom.svg'
import { motion } from "motion/react"; 

const CaseStudiesCard = ({head , para}) => {
  return (
    <div className='flex flex-col items-center  border-white/80 border-2   bg-white/90 justify-between   p-2 rounded-2xl'>
      <div>
        <img src={demo} alt="" />
      </div>
      <div className='flex flex-col  text-center items-center'>
        <div className='flex flex-col text-black '>
            <h1 className='mb-4 '>{head} </h1>
            <p>{para}</p>
        </div>
        <div className='flex flex-row justify-between w-full p-2 cursor-pointer border-t-2 border-gray-600'>
            <button className='cursor-pointer text-black underline'>Explore More </button>
            <motion.button
      className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Click Me!
    </motion.button>
        </div>
        
      </div>
      
    </div>
  );
}

export default CaseStudiesCard;
