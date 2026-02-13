import React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';


const Herolast = () => {

  useEffect(()=>{
      gsap.to (".lastcta",{
       
      } );

  }, [] );
   useEffect(()=>{
      gsap.from (".lastcta",{
      trigger: ".selector"
      } );

  }, [] );

  return (
   <div className= "mt-14   flex flex-row justify-between  px-6">
  <div className="grid md:grid-cols-4 grid-rows-2  gap-8 text-center ">
    
    <div className= "lastcta  p-6  border-l-6 border-l-emerald-300  hover:shadow-lg transition  border-b-2 h  border-gray-300">
      <h3 className="text-xl  font-semibold mb-2">Fast Delivery</h3>
      <p className="text-gray-600 text-sm">
        From idea to production in weeks, not months.
      </p>
    </div>

    <div className="lastcta p-6 rounded border border-gray-200 hover:shadow-lg transition  border-l-6 border-l-yellow-300">
      <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
      <p className="text-gray-600 text-sm">
        Built with modern stack for long-term growth.
      </p>
    </div>

       <div className="lastcta  p-6 rounded border-l-6 border-red-200  hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
      <p className="text-gray-600 text-sm">
        Built with modern stack for long-term growth.
      </p>
    </div>


    <div className="lastcta  p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">AI-Powered Systems</h3>
      <p className="text-gray-600 text-sm">
        Intelligent automation to drive measurable results.
      </p>
    </div>

  </div>
</div>
  );
}

export default Herolast;
