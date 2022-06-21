import React from 'react'

const mediaCard = (props) => {
  return (
    <div className='w-60 rounded-lg bg-black text-white my-8 mx-4'>
        <img src={props.mediaItem.img} alt="" className='rounded-t-lg' />
        <h2 className='font-bold text-xl pl-6 py-4'>{props.mediaItem.heading}</h2>
        <p className='px-6 pb-12'>{props.mediaItem.text}</p>
    </div>
  )
}

export default mediaCard