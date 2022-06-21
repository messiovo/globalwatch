import React from 'react'
import './Hero.css';
// import { LinearProgress } from 'react-native-elements';

const StepCard = ({ item } ) => {
  const { no,title,content} = item;
  return (
    <div className="flex flex-col w-80  px-8 mx-4 py-8 rounded-xl items-center card1">
        <p className='num'>{no}</p>
        <h2 className=' font-bold pb-2 text-white'>{title}</h2>
        <p className='text-white text-center'>{content}</p>
    </div>
  )
}

export default StepCard