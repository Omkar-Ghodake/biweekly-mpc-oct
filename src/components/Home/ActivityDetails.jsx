import { motion } from 'framer-motion'
import React from 'react'

const ActivityDetails = ({ children }) => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'tween' }}
      className='flex flex-col justify-between space-y-5 h-full w-2/3 px-10 py-5 rounded-lg border border-sky-500/50 bg-sky-500/20 backdrop-blur-md'
    >
      {children}
    </motion.div>
  )
}

export default ActivityDetails
