import React from 'react'
import { FaAnglesRight } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const ActivityTitle = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      className='flex items-center w-fit text-2xl font-batman'
    >
      <span className='text-sky-300 w-[40px]'>
        <FaAnglesRight />
      </span>
      <span>{children}</span>
    </motion.div>
  )
}

export default ActivityTitle
