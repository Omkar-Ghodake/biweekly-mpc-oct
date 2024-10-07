import React, { useEffect } from 'react'
import Chart from 'chart.js/auto'
import { Pie } from 'react-chartjs-2'

const labels = ['Blocker', 'Critical', 'Major', 'Minor', 'Normal']
const data = {
  labels,
  datasets: [
    {
      label: 'MPC Issues',
      data: [6, 24, 32, 13, 27],
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

const ScorePieChart = () => {
  useEffect(() => {
    Chart.defaults.color = '#fff'
    // Chart.defaults.plugins.legend.display = false
  }, [])

  return (
    <div className='text-white'>
      <Pie data={data} />
    </div>
  )
}

export default ScorePieChart
