import { motion } from 'framer-motion'
import React from 'react'
import { VscDebugStart } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const Exit = () => {
  return (
    <div className='h-screen w-screen overflow-hidden relative flex flex-col justify-center items-center space-y-10'>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='font-mars text-8xl text-sky-100'
      >
        THANK YOU
      </motion.span>

      <span className='flex flex-col justify-center items-center'>
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className='text-3xl font-automata'
        >
          Regards,
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className='text-8xl font-batman'
        >
          MPC
        </motion.span>
      </span>

      <Link to={'/intro'}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className='text-3xl border-2 border-transparent hover:border-sky-500/50 hover:bg-sky-500/10 p-2 rounded-md cursor-pointer duration-150'
        >
          <VscDebugStart />
        </motion.div>
      </Link>
    </div>
  )
}

export default Exit
