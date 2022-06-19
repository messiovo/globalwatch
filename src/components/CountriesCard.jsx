import React from 'react'


const CountriesCard = (props) => {
  return (
    <div className='w-60 h-28 bg-slate-200 m-4 '
    style={{backgroundImage:'url(${props.country.img})'}}
    >
        <h2>{props.country.title}</h2>
    </div>
  )
}

export default CountriesCard