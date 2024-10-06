import React, { useState } from 'react';
import ActivitiesList from '../components/Home/ActivitiesList';
import ActivityDetails from '../components/Home/ActivityDetails';
import PieChart from '../components/ScorePieChart';
import RegressionPieChart from '../components/RegressionPieChart';

const Activities = () => {
  const [selectedActivity, setSelectedActivity] = useState(0)

  console.log('selectedActivity', selectedActivity)

  return (
    <div className='w-full px-10 mx-auto font-automata font-thin max-h-[100vh] h-[100vh] overflow-hidden flex items-end justify-start pb-10'>
      <div className='flex items-center space-x-5 w-full h-[75vh]'>
        <ActivitiesList
          setSelectedActivity={setSelectedActivity}
          selectedActivity={selectedActivity}
        />

        <ActivityDetails selectedActivity={selectedActivity} />
      </div>
    </div>
  );
}

export default Activities;
