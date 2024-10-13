import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import { IoPower } from 'react-icons/io5'
import { useLocation } from 'react-router-dom'
import NavLink from '../components/NavLink'
import { PowerMenuContext } from '../context/PowerMenuProvider'

const Navbar = () => {
  const { pathname } = useLocation()

  const { togglePowerMenu } = useContext(PowerMenuContext)

  const getActiveNavlinkPosition = () => {
    const length = 15

    if (pathname === '/intro') return length * 0
    if (pathname === '/activities') return length * 1
    if (pathname === '/score') return length * 2
    if (pathname === '/graph') return length * 3
  }

  const excludePath = ['/', '/intro', '/exit']
  return (
    <>
      {!excludePath.includes(pathname) && (
        <motion.div
          initial={{ x: '-50%', y: -100, opacity: 0 }}
          animate={{ x: '-50%', y: 0, opacity: 1 }}
          className='text-white flex font-mars fixed left-1/2 backdrop-blur-md  w-full z-40 border-b border-b-sky-800/60 py-9 px-10'
        >
          <ul className='nav-list relative w-fit mx-auto flex justify-center items-center text-xl font-bold'>
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: `${getActiveNavlinkPosition()}vw` }}
              transition={{ type: 'tween', duration: 0.2 }}
              className={`h-[2px] w-[15vw] absolute left-0 bottom-0 duration-150 `}
            >
              <div className='bg-white h-full w-[80%] mx-auto'></div>
            </motion.div>
            <NavLink title={'HOME'} url={'/intro'} />
            <NavLink title={'ACTIVITIES'} url={'/activities'} />
            <NavLink title={'SCORE'} url={'/score'} />
            <NavLink title={'GRAPH'} url={'/graph'} />
          </ul>

          <span
            className='flex justify-center items-center cursor-pointer hover:bg-blue-500/10 border border-blue-500/20 w-12 h-12 p-2 rounded-full duration-300'
            onClick={() => togglePowerMenu('open')}
          >
            <IoPower />
          </span>
        </motion.div>
      )}
    </>
  )
}

export default Navbar
