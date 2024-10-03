import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  var pathname = window.location.pathname

  return (
    <>
      <div className='text-white flex mt-10 font-mars'>
        <ul className='nav-list w-fit mx-[37vw] flex justify-center items-center space-x-20 text-xl font-bold'>
          <li className='nav-item'>
            <Link to='/activities' className='nav-link text-center'>
              ACTIVITIES
              {pathname === '/activities' && (
                <div
                  className={`h-[2px] w-[12vw] bg-white mt-2 ${
                    pathname === '/activities' ? 'scale-100' : 'scale-0'
                  } origin-center`}
                ></div>
              )}
            </Link>
          </li>
          <Link to='/score' className='nav-link text-center`'>
            <li className='nav-item peer text-center'>SCORE</li>
            <div
              className={`h-[2px] w-[12vw] bg-white mt-2 ${
                pathname === '/score'
                  ? 'scale-100 peer-hover:scale-100'
                  : 'scale-0 peer-hover:scale-100'
              } origin-center duration-300`}
            ></div>
          </Link>
          <Link to='/graph' className='nav-link text-center'>
            <li className='nav-item'>GRAPH</li>
            {pathname === '/graph' && (
              <div
                className={`h-[2px] w-[12vw] bg-white mt-2 ${
                  pathname === '/graph' ? 'scale-100' : 'scale-0'
                } origin-center`}
              ></div>
            )}
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Navbar
