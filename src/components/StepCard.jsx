import React from 'react'
import './Hero.css';

const StepCard = (props) => {
  return (
    <div className="flex flex-col w-80  px-8 mx-4 py-8 rounded-xl items-center card1">
        <p className='num'>{props.item.no}</p>
        <h2 className=' font-bold pb-2 text-white'>{props.item.title}</h2>
        <p className='text-white text-center'>{props.item.content}</p>
    </div>
  )
}

export default StepCard