import React from 'react'
import ActivitiesListItem from './ActivitiesListItem'
import { ACTIVITIES_DATA } from '../../data'
import { motion } from 'framer-motion'

const ActivitiesList = ({ setSelectedActivity, selectedActivity }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'tween' }}
      className='w-1/3 text-xl relative flex flex-col justify-between h-full'
    >
      {ACTIVITIES_DATA.map((item, index) => (
        <ActivitiesListItem
          key={item.title}
          title={item.title}
          optionNumber={index}
          selectedActivity={selectedActivity}
          setSelectedActivity={setSelectedActivity}
        />
      ))}
    </motion.div>
  )
}

export default ActivitiesList
