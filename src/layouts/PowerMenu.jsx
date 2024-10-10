import React, { useContext } from 'react'
import { PowerMenuContext } from '../context/PowerMenuProvider'
import { IoMdClose } from 'react-icons/io'
import { motion } from 'framer-motion'
import { RiRestartLine } from 'react-icons/ri'
import { RxExit } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const PowerMenu = () => {
  const { showPowerMenu, setShowPowerMenu, togglePowerMenu } =
    useContext(PowerMenuContext)

  return (
    showPowerMenu && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`z-50 fixed inset-0 w-screen h-screen blur-bg overflow-hidden flex justify-center items-center`}
      >
        <span
          className='text-3xl ml-auto p-2 fixed top-8 right-12 cursor-pointer hover:bg-blue-500/10 rounded-full duration-150'
          onClick={() => togglePowerMenu('close')}
        >
          <IoMdClose />
        </span>

        <div className='text-7xl w-full flex justify-center items-center space-x-32'>
          <Link
            to={'/'}
            className='flex justify-center items-center'
            onClick={() => togglePowerMenu('close')}
          >
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              className='rounded-full p-4 w-full cursor-pointer bg-green-500 border border-green-500 hover:bg-opacity-90'
            >
              <RiRestartLine />
            </motion.span>
          </Link>

          <Link
            to={'/exit'}
            className='flex justify-center items-center'
            onClick={() => togglePowerMenu('close')}
          >
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              className='rounded-full p-4 w-full cursor-pointer bg-red-500 border border-red-500 hover:bg-opacity-90'
            >
              <RxExit />
            </motion.span>
          </Link>
        </div>
      </motion.div>
    )
  )
}

export default PowerMenu
