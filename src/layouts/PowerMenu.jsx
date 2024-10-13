import React, { useContext } from 'react'
import { PowerMenuContext } from '../context/PowerMenuProvider'
import { motion } from 'framer-motion'
import { RiRestartLine } from 'react-icons/ri'
import { RxExit } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import ModalCloseButton from '../components/ModalCloseButton'

const PowerMenu = () => {
  const { showPowerMenu, togglePowerMenu } = useContext(PowerMenuContext)

  return (
    showPowerMenu && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`z-50 fixed inset-0 w-screen h-screen blur-bg overflow-hidden flex justify-center items-center`}
      >
        <ModalCloseButton handler={() => togglePowerMenu('close')} />
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
              className='rounded-full p-4 w-full cursor-pointer bg-green-500 border border-green-500 hover:bg-opacity-90 shadow-md hover:shadow-lg shadow-black/60 hover:shadow-black/60'
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
              className='rounded-full p-4 w-full cursor-pointer bg-red-500 border border-red-500 hover:bg-opacity-90 shadow-md hover:shadow-lg shadow-black/60 hover:shadow-black/60'
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
