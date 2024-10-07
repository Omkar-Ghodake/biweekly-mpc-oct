import React from 'react'
import { useLocation } from 'react-router-dom'
import NavLink from '../components/NavLink'

const Navbar = () => {
  const { pathname } = useLocation()

  const excludePath = ['/', '/intro']
  return (
    <>
      {!excludePath.includes(pathname) && (
        <div
          className='text-white flex font-mars py-4
        '
        >
          <ul className='nav-list w-fit mx-auto flex justify-center items-center space-x-20 text-xl font-bold'>
            <NavLink title={'HOME'} url={'/'} />
            <NavLink title={'ACTIVITIES'} url={'/activities'} />
            <NavLink title={'GRAPH'} url={'/graph'} />
            <NavLink title={'SCORE'} url={'/score'} />
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar
