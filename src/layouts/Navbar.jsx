import React from 'react'
import { useLocation } from 'react-router-dom'
import NavLink from '../components/NavLink'
import { motion } from 'framer-motion'

const Navbar = () => {
  const { pathname } = useLocation()

  const excludePath = ['/', '/intro']
  return (
    <>
      {!excludePath.includes(pathname) && (
        <motion.div
          initial={{ x: '-50%', y: -100, opacity: 0 }}
          animate={{ x: '-50%', y: 0, opacity: 1 }}
          className='text-white flex font-mars fixed top-10 left-1/2'
        >
          <ul className='nav-list w-fit mx-auto flex justify-center items-center space-x-10 text-xl font-bold'>
            <NavLink title={'HOME'} url={'/intro'} />
            <NavLink title={'ACTIVITIES'} url={'/activities'} />
            <NavLink title={'GRAPH'} url={'/graph'} />
            <NavLink title={'SCORE'} url={'/score'} />
          </ul>
        </motion.div>
      )}
    </>
  )
}

export default Navbar
