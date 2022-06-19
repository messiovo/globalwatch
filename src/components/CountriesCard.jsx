import React from 'react'

const CountriesCard = (props) => {
  return (
    <div className='w-80rem h-28'
    style={{backgroundImage: 'url({props.country.bgImg})'}}
    >
        <h2>{props.country.name}</h2>
    </div>
  )
}

export default CountriesCard