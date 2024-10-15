import { motion } from 'framer-motion'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavLink = ({ title, url }) => {
  var { pathname } = useLocation()
  return (
    <>
      <Link to={url} className='nav-link text-center`'>
        <motion.li
          whileHover={{ scale: pathname === url ? 1 : 1.1 }}
          className='nav-item peer text-center w-[15vw] py-2'
        >
          {title}
        </motion.li>
        {/* <div
          className={`h-[2px] w-[10vw] mx-auto bg-white mt-2 ${
            pathname === url
              ? 'scale-100 peer-hover:scale-100'
              : 'scale-0 peer-hover:scale-100'
          } origin-center duration-300`}
        ></div> */}
      </Link>
    </>
  )
}

export default NavLink
