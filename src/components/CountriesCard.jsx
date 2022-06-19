import React from 'react'
import { Link } from 'react-router-dom'


const CountriesCard = (props) => {
  return (
    <div className='w-60 h-28 bg-slate-200 m-4 '>
      <Link to = './'><img className='w-60 h-28' src={props.country.img} alt="" />
        <h2>{props.country.title}</h2>
        </Link>
    </div>
  )
}

export default CountriesCard