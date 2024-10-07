import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavLink = ({ title, url }) => {
  var { pathname } = useLocation()
  return (
    <>
      <Link to={url} className='nav-link text-center`'>
        <li className='nav-item peer text-center'>{title}</li>
        <div
          className={`h-[2px] w-[12vw] bg-white mt-2 ${
            pathname === url
              ? 'scale-100 peer-hover:scale-100'
              : 'scale-0 peer-hover:scale-100'
          } origin-center duration-300`}
        ></div>
      </Link>
    </>
  )
}

export default NavLink
