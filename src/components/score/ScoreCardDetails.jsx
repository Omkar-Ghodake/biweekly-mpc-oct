import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import { ScoreCardContext } from '../../context/ScoreCardProvider'
import ModalCloseButton from '../ModalCloseButton'
import { Bar } from 'react-chartjs-2'

const ScoreCardDetails = () => {
  const { selectedScoreCard, toggleScoreCardModal, selectedScoreCardDetails } =
    useContext(ScoreCardContext)

  const getMedalImgSrc = () => {
    switch (selectedScoreCard) {
      case '0':
        return '/images/medals/gold.png'
      case '1':
        return '/images/medals/silver.png'
      case '2':
        return '/images/medals/bronze.png'
    }
  }

  const data = {
    labels: ['Previous Score', 'Current Score'],
    datasets: [
      {
        data: [
          selectedScoreCardDetails?.pre_score,
          selectedScoreCardDetails?.score_count,
        ],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
        borderWidth: 1,
        label: `Previous Score: ${selectedScoreCardDetails?.pre_score} Vs Current Score: ${selectedScoreCardDetails?.score_count}`,
      },
    ],
  }

  const options = {
    scales: {
      x: {
        ticks: {
          color: 'white',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
      title: {
        display: true,
        text: 'Performance Graph',
        color: 'White',
      },
    },
  }

  return (
    selectedScoreCard &&
    selectedScoreCardDetails && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='z-50 fixed inset-0 w-screen h-screen blur-bg overflow-hidden flex justify-center items-center font-automata text-lg'
      >
        <ModalCloseButton handler={() => toggleScoreCardModal('close')} />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className='h-4/5 w-1/2 bg-sky-700/80 border border-gray-400 rounded-md shadow-xl shadow-black/30 flex flex-col'
        >
          <div className='bg-sky-700 py-2 px-4 flex items-center text-2xl font-batman space-x-5 rounded-t-md'>
            <img src={getMedalImgSrc()} alt='' className='w-8' />
            <span>{selectedScoreCardDetails.name}</span>
          </div>

          <div className='flex justify-evenly items-center flex-1 p-2'>
            <div className='left w-2/5 h-full p-2 flex flex-col items-center space-y-5'>
              <img
                src={selectedScoreCardDetails.image}
                alt=''
                className='rounded-lg'
              />

              <div className='font-batman text-xl bg-sky-700 p-2 border-2 border-white text-white text-center rounded-md'>
                <span>Emp ID: </span>
                <span>{selectedScoreCardDetails.emp_id}</span>
              </div>
            </div>

            <div className='right w-1/2 h-full p-2 flex flex-col items-center'>
              <div className='w-full flex flex-col space-y-2'>
                <div className='font-batman text-xl bg-sky-700 p-2 border-2 border-white text-white text-center rounded-md'>
                  {selectedScoreCardDetails.domain_name}
                </div>
                <div className='bg-sky-100 text-m text-black p-2 rounded-md w-full'>
                  fisrt send: 23
                </div>
                <div className='bg-sky-100 text-m text-black p-2 rounded-md w-full'>
                  fisrt send: 23
                </div>
                <div className='bg-sky-100 text-m text-black p-2 rounded-md w-full'>
                  fisrt send: 23
                </div>
                <div className='bg-sky-100 text-m text-black p-2 rounded-md w-full'>
                  fisrt send: 23
                </div>
              </div>

              <Bar className='my-3' data={data} options={options} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  )
}

export default ScoreCardDetails
