import React from 'react'

const DoCard = (props) => {
    return (
        <div className='w-[50vh] flex item flex-col justify-between bg-emerald-100 text-black '>
            <img src={props.img} alt="" />
            <h1 className='text-2xl mb-5 px-4'>{props.title}</h1>
            <p className='text-lg mb-5 px-4 '>{props.disc}</p>
            <div className='flex flex-row justify-between bg-slate-700 p-4 items-center'>
                <p>
                    Learn More...
                </p>

                <p>
                    <button className='px-4 py-2 rounded-full bg-emerald-400 text-black animate-pulse hover:scale-110'>↗</button>
                </p>

            </div>

        </div>
    )
}

export default DoCard
