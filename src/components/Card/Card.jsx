import React from 'react'
import './Card.css'

const Card = ({name,city}) => {
  return (
    <div className='card'>
        {name}
        {city}
    </div>
  )
}

export default Card