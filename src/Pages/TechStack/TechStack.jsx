import React from 'react';
import TechStackHead from './TechStackHead';
import TechStackPara from './TechStackPara';
import TechStackesLogo from './TechStackesLogo';
import TechStackBenfites from './TechStackBenfites';
import TechStackLibabry from './TechStackLibabry';

const TechStack = () => {
    return (
        <div className='h-full w-full flex flex-col items-center  gap-10 text-center text-white bg-white backdrop-blur-2xl   p-10 sm:p-2'>
           

            <div className='flex flex-row justify-center justify-evenly  items-center  gap-10 ' >
                  <div className=' w-2/5 border-r-4 border-emerald-900 p-4  '>
                <h1 className='text-4xl font-bold text-green-950 mb-5 max-w-xl
mx-auto'>Technologies We   Use  to <br />  Build  Scalable Products</h1>
                <p className='text-black text-left max-w-xl
mx-auto'>
                    Our modern technology stack enables us to build scalable, high-performance digital products that are reliable, maintainable, and ready for future growth.
                </p>
                
                 <button className=" mt-5  group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50"><span class="z-10 pr-2">Start Your Project </span><div class="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-green-700 transition-[width] group-hover:w-[calc(100%-8px)]"><div class="mr-3.5 flex items-center justify-center"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-50"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></div></button>
            </div>
               
                   
                   <div className='flex flex-col gap-10 items-center p-5'>
                     <TechStackesLogo />
                     <TechStackLibabry />
                  
                </div>
               
            </div>

            <div>
                <TechStackBenfites />
            </div>
        </div>
    );
}

export default TechStack;
