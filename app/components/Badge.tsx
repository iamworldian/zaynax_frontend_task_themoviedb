import React from 'react'

const Badge = ({ value }) => {
  return (
    <p className='w-auto text-xs bg-pink-500 text-white px-0.5 py-1 m-2 rounded-3xl text-center'> { value }</p>
  )
}

export default Badge