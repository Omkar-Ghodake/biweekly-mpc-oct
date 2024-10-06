import React from 'react'
import ActivitiesListItem from './ActivitiesListItem'
import { ACTIVITIES_DATA } from '../../data'

const ActivitiesList = ({ setSelectedActivity, selectedActivity }) => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7]

  return (
    <div className='w-1/3 text-xl relative flex flex-col justify-between h-full'>
      {ACTIVITIES_DATA.map((item) => (
        <ActivitiesListItem
          key={item.title}
          title={item.title}
          optionNumber={item.id}
          selectedActivity={selectedActivity}
          setSelectedActivity={setSelectedActivity}
        />
      ))}
    </div>
  )
}

export default ActivitiesList
