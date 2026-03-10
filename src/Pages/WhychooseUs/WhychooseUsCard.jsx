import React from 'react';
import arct from '../../assets/arct.svg'
import dev from '../../assets/dev.svg'
import mdt from '../../assets/mdt.svg'
import uiux from '../../assets/uiux.svg'
const WhychooseUsCard = () => {
  return (
    <div className='grid grid-cols-2 gap-10 items-center justify-center p-4 mb-16 w-4/6'>
        <div className='flex flex-row gap-4 p-6 items-center bg-green-950 rounded-2xl justify-center  hover:scale-110 shadow-2xl   shadow-green-600'>
            <div className=' items-baseline  flex flex-col'>
                 
        <img src={dev} alt="Why Choose Us" className='w-96   p-2 bg-white object-contain rounded' />

      </div>
       <div>
        <h2 className='bg-lime-300 w-max mb-5  text-black p-2 rounded-xl shadow-2xl  shadow-yellow-400'>1️⃣ Fast Development</h2>
       <strong>
        <p className='mb-3'>Fast and Efficient Development</p>
        </strong>
        <p className=''>We use modern tools and streamlined workflows to build high-quality digital products quickly without compromising performance or reliability.</p>
       </div>
        </div>
        <div className='flex flex-row gap-4 p-6 items-center bg-green-950 rounded-2xl justify-center  hover:scale-110 shadow-2xl   shadow-green-600 hover:-translate-y-2
hover:shadow-xl
transition-all
duration-300'>
            <div className='justify-center items-center flex flex-col'>
                 
        <img src={mdt} alt="Why Choose Us" className='w-96   p-2 bg-white object-contain rounded-' />

      </div>
       <div>
        <h2 className='bg-lime-300 w-max mb-5  text-black p-2 rounded-xl shadow-2xl  shadow-yellow-400'>2️⃣ Scalable Architecture</h2>
       <strong>
        <p className='mb-3'>Built for Scalability</p>
        </strong>
        <p className=''>Our solutions are designed with scalable architecture so your product can handle growth, increasing users, and future expansion effortlessly.</p>
       </div>
        </div>
        <div className='flex flex-row gap-4 p-6 items-center bg-green-950 rounded-2xl justify-center  hover:scale-110 shadow-2xl   shadow-green-600 hover:-translate-y-2
hover:shadow-xl
transition-all
duration-300'>
            <div className='justify-center items-center flex flex-col'>
                 
        <img src={uiux} alt="Why Choose Us" className='w-96   p-2 bg-white object-contain rounded' />

      </div>
       <div>
        <h2 className='bg-lime-300 w-max mb-5  text-black p-2 rounded-xl shadow-2xl  shadow-yellow-400'>3️⃣ Modern Technology Stack
</h2>
       <strong>
        <p className='mb-3'>Powered by Modern Technologies
</p>
        </strong>
        <p className='w-full'>We use cutting-edge technologies like React, Node.js, MongoDB, and Tailwind to build secure, high-performance, and future-ready applications.
</p>
       </div>
        </div>
        <div className='flex flex-row gap-4 p-6 items-center bg-green-950 rounded-2xl justify-center  hover:scale-110 shadow-2xl   shadow-green-600 hover:-translate-y-2
hover:shadow-xl
transition-all
duration-300'>
            <div className='justify-center items-center flex flex-col'>
                 
        <img src={arct} alt="Why Choose Us" className='w-96   p-2 bg-white object-contain rounded' />

      </div>
       <div>
        <h2 className='bg-lime-300 w-max mb-5  text-black p-2 rounded-xl shadow-2xl  shadow-yellow-400'>4️⃣ User-Centered Design</h2>
       <strong>
        <p className='mb-3'>Focus on User Experience</p>
        </strong>
        <p className=''>Every product we build focuses on usability, performance, and intuitive design to ensure the best possible experience for your users.</p>
       </div>
        </div>
         
    </div>
  );
}

export default WhychooseUsCard;
