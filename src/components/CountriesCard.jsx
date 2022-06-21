import React from 'react'
import { Link } from 'react-router-dom'


const CountriesCard = ({ country }) => {
  const { img, title } = country;
  return (
    <div className='w-60 h-28 bg-slate-200 m-4 '>
      <Link to = './'><img className='w-60 h-28' src={img} alt="" />
        <h2>{title}</h2>
        </Link>
    </div>
  )
}

export default CountriesCard