import React from 'react'
import {useParams} from 'react-router-dom/index';
const Country = () => {
    const {countryId } = useParams();
  return (
      <div>
          {countryId }
    </div>
  )
}

export default Country;