import React from 'react';

const ProcessCard = () => {
    return (
        <div className='grid grid-cols-3 gap-4 mt-10 sm:flex sm:flex-col sm:gap-4 sm:mt-10 items-center text-center'>
            <div className=' rounded-2xl p-4  w-2/3 flex items-center flex-col  bg-black/5 backdrop-blur-2xl   text-black shadow-2xl hover:scale-110 hover:-translate-y-1 hover:shadow-xl transition-all duration-300'>

                <h2 className='bg-emerald-900 text-white  w-max p-3 rounded'>Step 1: Discovery</h2>

                <p className='w-2/3'>We begin by understanding your business goals, target audience, and technical requirements.</p>

            </div>
            <div className=' rounded-2xl p-4 items-center  w-2/3 flex  flex-col  bg-black/5 backdrop-blur-2xl   text-black shadow-2xl hover:scale-110 hover:-translate-y-1 hover:shadow-xl transition-all duration-300'> 
                <h2 className='bg-emerald-900 text-white  w-max p-3 rounded'>Step 2: Design</h2>
                <p className='w-2/3'>Our design team creates intuitive and visually appealing interfaces that align with your brand identity.</p>
                </div>
            <div className=' rounded-2xl p-4 w-2/3 flex items-center flex-col  bg-black/5 backdrop-blur-2xl   text-black shadow-2xl hover:scale-110 hover:-translate-y-1 hover:shadow-xl transition-all duration-300'>
                <h2 className='bg-emerald-900 text-white  w-max p-3 rounded'>Step 3: Development</h2>
                <p className='w-2/3'>Our development team builds the solution using the latest technologies and best practices.</p>
                </div>
            <div className=' rounded-2xl p-4  w-2/3 flex items-center flex-col  bg-black/5 backdrop-blur-2xl   text-black shadow-2xl hover:scale-110 hover:-translate-y-1 hover:shadow-xl transition-all duration-300'>
                <h2 className='bg-emerald-900 text-white  w-max p-3 rounded'>Step 4: Testing</h2>
                <p className='w-2/3'>We rigorously test the solution to ensure it meets quality standards and performs well under various conditions.</p>
                </div>
            <div className=' rounded-2xl p-4  w-2/3 flex items-center flex-col  bg-black/5 backdrop-blur-2xl   text-black shadow-2xl hover:scale-110 hover:-translate-y-1 hover:shadow-xl transition-all duration-300'>
                <h2 className='bg-emerald-900 text-white  w-max p-3 rounded'>Step 5: Deployment</h2>
                <p className='w-2/3'>We deploy the solution to your preferred hosting environment and ensure a smooth launch.</p>
                </div>
            <div className=' rounded-2xl p-4  w-2/3 flex items-center flex-col  bg-black/5 backdrop-blur-2xl   text-black shadow-2xl hover:scale-110 hover:-translate-y-1 hover:shadow-xl transition-all duration-300'>
                <h2 className='bg-emerald-900 text-white  w-max p-3 rounded'>Step 6: Support & Maintenance</h2>
                <p className='w-2/3'>We provide ongoing support and maintenance to keep your solution running smoothly and up-to-date.</p>
            </div>
        </div>
    );
}

export default ProcessCard;
