import React from 'react';
import ProcessSectionHead from './ProcessSectionHead';
import ProcessSectionpara from './ProcessSectionpara';
import ProcessCard from './ProcessCard';
import ProcessCta from './ProcessCta';
const ProcessSection = () => {
  return (
    <div className='h-full p-10  items-center  flex flex-col  text-black justify-center  bg-gradient-to-bl from-[#ffe4e6]  to-[#ccfbf1] sm:p-2 sm:items-center   sm:flex sm:flex-row sm:justify-center  sm:gap-10 '>
        <div className='flex flex-col w-1/2  p-4 rounded-2xl '>
      <ProcessSectionHead />
      <ProcessSectionpara />
      <div>
        <ProcessCta />
      </div>
        </div>
      
      <div>
        <ProcessCard />
      </div>
    </div>
  );
}

export default ProcessSection;
