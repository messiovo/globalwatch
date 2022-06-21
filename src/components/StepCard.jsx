import React from 'react'

// import { LinearProgress } from 'react-native-elements';

const StepCard = ({ item } ) => {
  const { no,title,content} = item;
  return (
    <div className=" w-80  px-8 m-4 py-8 rounded-xl text-center  card1">
        <span className='bg-[#e2e2e2] w-10 h-8 rounded-full block m-auto pt-1 mb-4 font-bold'>{no}</span>
        <h2 className=' font-bold pb-2 text-white'>{title}</h2>
        <p className='text-white '>{content}</p>
    </div>
  )
}

export default StepCard