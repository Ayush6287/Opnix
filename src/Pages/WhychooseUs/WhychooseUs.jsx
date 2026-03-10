import React from 'react';
import WhychooseUsCard from './WhychooseUsCard';

const WhychooseUs = () => {
  return (
    <div className='h-screen w-full text-white  bg-[whitesmoke] flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center gap-4 pt-10'> 
            <h1 className='text-4xl font-bold text-green-950 mb-5'>Why Choose Us?</h1>
            <p className='text-black text-center w-3/5'>We are a team of passionate developers dedicated to delivering high-quality digital products that exceed our clients' expectations. Here's why you should choose us for your next project:</p>
        </div>
      <WhychooseUsCard />
    </div>
  );
}

export default WhychooseUs;
