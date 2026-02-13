import React from 'react'

const ElementContactCard = (props) => {
  return (
    <div className='w-[35vw] p-9 justify-between   bg-white text-black ml-24  flex flex-col rounded-2xl mt-5 shadow-lg shadow-emerald-300 mb-8 border-2 border-emerald-300 '>
      <div className='flex flex-col  gap-4'>
        <p className="text-3xl">{props.icon}</p>
        <h2 className="text-2xl font-bold">{props.title}</h2>
        <p className="text-lg">{props.description}</p>
      </div>
    </div>
  )
}

export default ElementContactCard
