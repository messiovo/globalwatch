import React from 'react'
import { Link } from 'react-router-dom'


const CountriesCard = (props) => {
  return (
    <div className='flex flex-wrap px-10 py-2 m-auto my-2'>
    <div className='w-60 h-50 bg-[#252F46] m-4 rounded-lg '>
      <Link to = './'><img className='w-full h-28 rounded-t-lg' src={props.country.img} alt="" />
        <h2 className='text-xl font-semibold text-white py-2 text-center'>{props.country.title}</h2>
        </Link>
    </div>
    </div>
  )
}

export default CountriesCard