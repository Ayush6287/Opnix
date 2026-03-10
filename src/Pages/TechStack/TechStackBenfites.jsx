import React from 'react';

const TechStackBenfites = () => {
  return (
    <div className='flex flex-row w-full gap-10 p-10 items-center justify-center  bg-gradient-to-bl from-[#ffe4e6]  to-[#ccfbf1] sm:flex-col sm:gap-4 sm:p-2 text-black rounded-2xl shadow-2xl border-4 border-emerald-600'>

       <div 
       className=
       'w-1/4 sm:w-2/5 border-b-4 border-emerald-600 pr-5 sm:border-emerald-900 p-5  sm:pr-0 '>

        <h2 className='text-3xl font-medium mb-5'>
            Benefits of Our Technology Stack

        </h2>
        <p>
            Our technology stack is built on modern technologies that enable us to create fast, scalable, and reliable digital products. By using a powerful combination of frontend and backend tools, we ensure high performance, maintainability, and efficient development workflows.
        </p>
       </div >
       <div className='flex flex-row text-left w-3/4 sm:w-full gap-10 sm:gap-4  '> 

       <div className='bg-white rounded-3xl  p-5 hover:shadow-xl
hover:-translate-y-1
transition-all
duration-300'>
         <h2 className='mb-5 font-bold text-emerald-900'>MongoDB (NoSQL Database)</h2>
        <ul className='list-disc pl-5'>
            <li className='mb-5 '>Flexible schema design for handling unstructured data.</li>
            <li className='mb-5 '>Scalable and high-performance database for modern applications.</li>
            <li className='mb-5 '>Built-in replication and sharding for data redundancy and scalability.</li>
        </ul>
       </div>
       <div className='bg-white rounded-3xl  p-5 hover:shadow-xl
hover:-translate-y-1
transition-all
duration-300'>
        <h2 className='mb-5 font-bold text-emerald-900'>React (Frontend Framework)</h2>
        <ul className='list-disc pl-5'>
            <li className='mb-5 '>Component-based architecture for building reusable UI elements.</li>
            <li className='mb-5 '>Efficient rendering and updates through virtual DOM.</li>
            <li className='mb-5 '>Large ecosystem of libraries and tools for enhanced development.</li>
        </ul>
       </div>
       <div className='bg-white rounded-3xl  p-5 hover:shadow-xl
hover:-translate-y-1
transition-all
duration-300'>
        <h2 className='mb-5 font-bold text-emerald-900'>Node.js (Backend Runtime)</h2>
        <ul className='list-disc pl-5'>
            <li className='mb-5 '>Asynchronous and event-driven architecture for high performance.</li>
            <li className='mb-5 '>Large ecosystem of libraries and tools for enhanced development.</li>
            <li className='mb-5 '>Efficient handling of I/O operations for scalable applications.</li>
        </ul>
       </div>
       <div className='bg-white rounded-3xl  p-5 hover:shadow-xl
hover:-translate-y-1
transition-all
duration-300'>
        <h2 className='mb-5 font-bold text-emerald-900'>Express.js (Web Framework)</h2>
        <ul className='list-disc pl-5'>
            <li className='mb-5 '>Minimal and flexible framework for building web applications.</li>
            <li className='mb-5 '>Robust routing and middleware support for handling requests.</li>
            <li className='mb-5 '>Seamless integration with Node.js for efficient backend development.</li>
            </ul>
       </div>
       </div>
    </div>
    
  );
}

export default TechStackBenfites;
