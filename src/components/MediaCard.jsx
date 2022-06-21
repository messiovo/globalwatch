import React from 'react';

const MediaCard = (props) => {
  return (
    <div >
      <div className='w-60 h-50 bg-[#252F46] m-4 rounded-lg ' >
      <span><img className='w-60 h-28' src={props.media.img} alt="" /></span>
        <h2>{props.media.heading}</h2>
        <p>{props.media.text}</p>
      </div>
    </div>
  )
}

export default MediaCard