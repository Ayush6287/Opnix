import React from 'react'

const FooterFirstSection = () => {
  return (
    <div>
      <div className='  '  >

       <div className='w-[30vw] h-[35vh] flex justify-between flex-col p-2   '> 

        <div> <h1 className=' mb-5 text-2xl font-bold'>Admiyz</h1> 

        <p className=' text-sm'>Building digital products with purpose. We help brands grow through scalable technology, clean design , <br />  and data-driven decisions. From idea to execution, we turn vision into reliable software that creates real impact.</p></div>
           <div className='flex flex-col gap-4'>
            <h1 className='text-xl '>Stay Upadate </h1>
            <div>
                <input type="text" placeholder='Enter Your Email ' className='px-7 py-3 border-emerald-700 outline-none  border-2 rounded-xl' />
             <button className='px-6 py-3 border-none bg-emerald-600 text-black  rounded-2xl ml-5 cursor-pointer'   type='Submit'>Subscribe</button>
            </div>
           </div>
        
        
       </div>
       
      </div>
    </div>
  )
}

export default FooterFirstSection
