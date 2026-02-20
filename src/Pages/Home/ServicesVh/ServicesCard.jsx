import React from 'react';

const ServicesCard = (props) => {
    return (
        <div className='bg-white/30
         backdrop-blur-xl  
         w-full
         h-full
         flex flex-col 
         gap-18 border-2 border-sky/20 
         rounded-2xl 
         px-2 py-2
         text-black 
      
        
         hover:scale-110  
         mb-10 hover:bg-emerald-900
          hover:text-white hover:border-4 hover:border-yellow-300'> 

            <div className='flex flex-row items-center ' >

                <div className='w-[40%] flex flex-col justify-between  gap-5 items-center'>

                     <img className='w-full h-max rounded-2xl'  src={props.img} alt="" />

                       <button className='px-5 py-2   rounded bg-black w-max text-white text-[16px] hover:scale-110'>Learn More....</button>

                </div>

                    <div className='w-[60%]  h-max rounded-3xl leading-relaxed p-4'>

                <h1 className='mb-4 text-emerald-900  font-semibold'>{props.head}</h1>

                <p>{props.para}</p>

            </div>
                 </div>
           
          
        </div>
    );
}

export default ServicesCard;
