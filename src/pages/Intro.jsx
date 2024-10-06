import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import TypeTextAnimate from '../components/TypingTextAnimation/TypeTextAnimate'

const Intro = () => {
  return (
    <div>
      <div className='h-[85vh] w-screen flex flex-col'>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          className='welcome flex justify-center items-center font-mars text-7xl tracking-wide w-fit h-fit mx-auto text-sky-100 py-12'
        >
          <h2 className='text-center'>WELCOME</h2>
        </motion.div>

        <motion.span
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          className='text-sky-100 text-center text-2xl font-mars'
        >
          to
        </motion.span>

        <motion.div className='product-name text-9xl flex flex-col justify-center items-center space-y-2 font-batman w-fit h-fit mx-auto text-white py-5'>
          <motion.h1
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            className='text-center drop-shadow-xl tracking-widest font-light'
          >
            MPC
          </motion.h1>
          <motion.span
            initial={{ scaleY: 0, transformOrigin: 'bottom' }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            className='text-3xl'
          >
            Member of Parliament's Corner
          </motion.span>
        </motion.div>

        <div className='w-[40%] mx-auto h-fit font-batman flex flex-col items-center space-y-5 pt-5 text-center text-2xl text-sky-400'>
          {/* <span className='text-center text-2xl text-sky-400'>
            The MP Seva Tracker
          </span> */}
          <TypeTextAnimate text={'The MP Seva Tracker'} />
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring' }}
        >
          <Link to={'/activities'} className='flex justify-center items-center'>
            <Button className='mt-16'>EXPLORE</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Intro
