import React from 'react';
import './Hero.css';

const MediaCard = (props) => {
  return (
    <div >
      <div className='w-60 h-[25rem] bg-black m-4 rounded-lg shadow-lg media-card mt-6' >
      <span><img className='w-60 h-28 rounded-t-lg' src={props.media.img} alt="" /></span>
        <div className='px-4 pt-2'>
        <h2 className='text-xl font-semibold pb-2'>{props.media.heading}</h2>
        <p>{props.media.text}</p>
        </div>
      </div>
    </div>
  )
}

export default MediaCard