// GrowingLineGraphWithVideo.js
import React, { useState, useEffect } from 'react'
import { Bar, Line } from 'react-chartjs-2'
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Title,
} from 'chart.js'
import 'tailwindcss/tailwind.css'

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Title
)

const data = {
  labels: ['Blocker', 'Critical', 'Major', 'Minor', 'Normal'],
  datasets: [
    {
      label: 'Issue Count',
      data: [6, 25, 34, 16, 32],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)', // Blocker
        'rgba(54, 162, 235, 0.8)', // Critical
        'rgba(255, 206, 86, 0.8)', // Major
        'rgba(75, 192, 192, 0.8)', // Minor
        'rgba(255, 159, 64, 0.8)', // Normal
      ],
      borderColor: [
        '#ff6384', // Blocker
        '#36a2eb', // Critical
        '#ffce56', // Major
        '#4bc0c0', // Minor
        '#ff9f40', // Normal
      ],
      borderWidth: 2,
      borderRadius: 10, // Rounded edges for bars
      hoverBackgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      hoverBorderColor: ['#ff4c4c', '#1d9bd1', '#ffb74d', '#39b48b', '#ff7e2c'],
      hoverBorderWidth: 3, // Increased border width on hover
    },
  ],
}

const options = {
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: 'rgba(255, 255, 255)', // Change Y-axis text color
      },
    },
    x: {
      ticks: {
        color: 'rgba(255, 255, 255)', // Change X-axis text color
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: 'rgba(255, 255, 255)', // Change legend text color
        boxWidth: 0,
        font: {
          size: 0,
        },
      },
    },

    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)', // Tooltip background color
      titleColor: 'white', // Tooltip title color
      bodyColor: 'white', // Tooltip body color
    },
  },
}

const GrowingLineGraph = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full font-batman'>
      <h2 className='mt-8 text-white text-3xl'>Issue Count Breakdown</h2>
      <h5 className='mb-4 text-white text-xl'>(04/07/2024 - 15/10/2024)</h5>
      <div className='h-full flex flex-col justify-center items-center w-[70%]'>
        <Bar data={data} options={options} />
        <h3 className='mt-4 text-white text-center text-xl'>
          Detailed Overview of Issue Severity
        </h3>
      </div>
    </div>
  )
}

export default GrowingLineGraph
