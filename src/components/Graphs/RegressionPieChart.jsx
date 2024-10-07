import React, { useEffect } from 'react'
import Chart from 'chart.js/auto'
import { Pie } from 'react-chartjs-2'

const labels = ['Failed', 'Blocked', 'Not Applicable', 'Other']
const data = {
  labels,
  datasets: [
    {
      label: 'Regression Testcases',
      data: [122, 80, 44, 76],
    },
  ],
  // backgroundColor: [
  //   'rgba(75,192,192,1)',
  //   '#ecf0f1',
  //   '#50AF95',
  //   '#f3ba2f',
  //   '#2a71d0',
  // ],
  borderWidth: 1,
}

const RegressionPieChart = () => {
  return (
    <div className='text-white'>
      <Pie data={data} />
    </div>
  )
}

export default RegressionPieChart
