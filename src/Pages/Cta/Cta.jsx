import React from 'react';

const Cta = () => {
    return (
        <div className='h-126 w-full 
bg-[radial-gradient(125%_125%_at_50%_10%,#000000_25%,#022c22_45%,#065f46_65%,#047857_85%,#10b981_100%)] text-black flex flex-col items-center justify-center   gap-4 p-6'>

<div className='w-4/6 bg-white/90
backdrop-blur items-center justify-center flex  flex-col  text-black border-2  rounded-2xl   h-76 p-6'>

            <h2 className='font-bold text-4xl mb-6'> Ready to Build  Your <br />  Next Digital Product?</h2>

            <p className='text-[16px]'>Turn your idea into a scalable digital solution.
                We build modern web apps, <br />  SaaS platforms, and
                high-performance products that help businesses grow faster.</p>

            <div className='flex flex-row h-24 items-center justify- justify-evenly w-full  ' >

                <div className='gap-4 flex flex-row items-center justify-center  '>
                    <input   type='tel' placeholder='Enter Your Whatsaap Number' className='px-6 py-3 max-w-sm rounded-lg border-2 border-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent  '  />

                    <button className='bg-lime-300 text-black px-6 py-2 rounded-lg ml-1  hover:bg-green-900 transition duration-300 hover:scale-105 hover:text-white
transition
duration-300'>
                        Get Started Now
                    </button>
                    </div>
                  
                
            </div>
            <div >
                <small>
                    <p className='gap-2 flex flex-row'>
                        <input className='gap-2'  type="checkbox" name="" id="" />
                         <span>
                             By clicking "Get Started Now", you agree to our Terms of Service and Privacy Policy.
                         </span>
                    </p>
                </small>
            </div>
</div>


        </div>
    );
}

export default Cta;
