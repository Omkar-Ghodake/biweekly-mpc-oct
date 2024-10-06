import React from 'react'
import { motion } from 'framer-motion'

const ActivitiesListItem = ({
  title,
  optionNumber,
  selectedActivity,
  setSelectedActivity,
}) => {
  return (
    <div
      className={`relative mx-auto text-white w-full py-2 text-2xl flex items-center`}
      onClick={() => setSelectedActivity(optionNumber)}
    >
      <motion.div
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={{
          scaleX: optionNumber === selectedActivity ? 1 : 0,
          originX: 0,
        }}
        transition={{ type: 'spring', duration: 0.7 }}
        className='absolute w-full h-full bg-sky-500/40 border-l-4'
      ></motion.div>

      <p className='cursor-pointer w-full hover:scale-105 hover:text-sky-50 drop-shadow-lg hover:drop-shadow-xl duration-150 px-5'>
        {title}
      </p>
    </div>
  )
}

export default ActivitiesListItem
