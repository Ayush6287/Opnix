import React from 'react'

const HowWeWorkCard = (props) => {
  return (
    <div>
        <p>{props.icon}</p>
      <h1>{props.title}</h1>
      <p>{props.disc}</p>
      <p>Contact uS </p>
    </div>
  )
}

export default HowWeWorkCard
