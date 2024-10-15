import React from 'react'
import { Link } from 'react-router-dom'

const BlackScreen = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-black z-[1000] overflow-hidden flex justify-center items-center'>
      <Link to={'/'} className='w-full h-full'></Link>
    </div>
  )
}

export default BlackScreen
