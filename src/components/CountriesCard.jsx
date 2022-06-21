import React from 'react'
import { Link } from 'react-router-dom'


const CountriesCard = ({ country }) => {
  const { img, title } = country;
  return (
    <div className='w-60 h-40 bg-[#252F46] m-4 rounded-lg'>
      <Link to = './'><img className='w-60 h-28 rounded-t-lg' src={img} alt="" />
        <h2 className='p-2 text-white text-center font-bold'>{title}</h2>
        </Link>
    </div>
  )
}

export default CountriesCard