import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavLink from '../components/Navlink'

const Navbar = () => {
  const { pathname } = useLocation()

  const excludePath = ['/', '/intro']
  return (
    <>
      {!excludePath.includes(pathname) && (
        <div
          className='text-white flex font-mars fixed top-10 left-1/2 -translate-x-1/2
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
