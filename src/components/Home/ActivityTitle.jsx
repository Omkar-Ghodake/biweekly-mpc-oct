import React from 'react'
import { FaAnglesRight } from 'react-icons/fa6'

const ActivityTitle = ({ children }) => {
  return (
    <div className='flex items-center w-fit text-2xl font-batman'>
      <span className='text-sky-300 w-[40px]'>
        <FaAnglesRight />
      </span>
      <span>{children}</span>
    </div>
  )
}

export default ActivityTitle
