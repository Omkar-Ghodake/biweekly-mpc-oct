import React, { useEffect, useState } from 'react'
import ActivitiesList from '../components/Home/ActivitiesList'
import ActivityDetails from '../components/Home/ActivityDetails'
import { ACTIVITIES_DATA } from '../data'
import ActivityTitle from '../components/Home/ActivityTitle'
import ActivityInfo from '../components/Home/ActivityInfo'
import ScorePieChart from '../components/Graphs/ScorePieChart'

const Activities = () => {
  const [selectedActivity, setSelectedActivity] = useState(0)
  const [selectedActivityDetails, setSelectedActivityDetails] = useState(null)

  useEffect(() => {
    setSelectedActivityDetails(ACTIVITIES_DATA[selectedActivity])
  }, [selectedActivity])

  return (
    <div className='w-full px-10 mx-auto font-automata font-thin max-h-[100vh] h-[100vh] overflow-hidden flex items-end justify-start pb-10'>
      <div className='flex items-center space-x-5 w-full h-[75vh]'>
        <ActivitiesList
          setSelectedActivity={setSelectedActivity}
          selectedActivity={selectedActivity}
        />

        <ActivityDetails>
          <div className='activity-head flex flex-col space-y-2 h-fit'>
            <ActivityTitle>{selectedActivityDetails?.title}</ActivityTitle>

            {selectedActivityDetails?.activityInfo && (
              <ActivityInfo>
                {selectedActivityDetails?.activityInfo}
              </ActivityInfo>
            )}
          </div>

          <div className='w-full h-[.5px] bg-sky-500'></div>

          <div className='activity-body h-[50vh] flex space-x-5 text-xl'>
            <>
              <div className='left w-1/2 border border-sky-800 rounded-md flex justify-center items-center'>
                {selectedActivityDetails?.chartComponent}
              </div>

              <div className='right w-1/2 p-5 border border-sky-800 rounded-md flex flex-col'>
                <div className='flex flex-col space-y-5'>
                  {selectedActivityDetails?.otherData.length > 0 &&
                    selectedActivityDetails?.otherData.map((obj) => {
                      return (
                        <>
                          <div className='flex' key={obj.key}>
                            <p className='text-orange-400 w-2/5'>{obj.key}</p>
                            <p className=''>{obj.value}</p>
                          </div>
                          <div className='h-[.5px] w-[20rem] bg-white/50'></div>
                        </>
                      )
                    })}

                  {/* <div className='h-[.5px] w-[20rem] bg-white/50'></div> */}

                  {selectedActivityDetails?.members.length > 0 &&
                    selectedActivityDetails?.members.map((obj) => {
                      return (
                        <div className='flex' key={obj.value}>
                          <p className='text-orange-400 w-2/5'>{obj.key}</p>
                          <p className='flex flex-col space-y-2'>
                            {obj.value.map((elem, index) => {
                              return (
                                <span className=''>
                                  {elem}
                                  {index < obj.value.length - 1 && ','}
                                </span>
                              )
                            })}
                          </p>
                        </div>
                      )
                    })}
                </div>
              </div>
            </>
          </div>
        </ActivityDetails>
      </div>
    </div>
  )
}

export default Activities
