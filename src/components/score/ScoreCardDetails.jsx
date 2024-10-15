import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import { ScoreCardContext } from '../../context/ScoreCardProvider'
import ModalCloseButton from '../ModalCloseButton'
import { Bar } from 'react-chartjs-2'
import { span } from 'framer-motion/client'
import { IoMdClose } from 'react-icons/io'

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
          boxWidth: 0,
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
        className='z-50 fixed inset-0 w-screen h-screen blur-bg overflow-hidden backdrop-blur-2xl flex justify-center items-center font-automata text-lg'
      >
        {/* <ModalCloseButton handler={() => toggleScoreCardModal('close')} /> */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className='h-fit w-1/2 bg-sky-700/80 border border-gray-400 rounded-md shadow-xl shadow-black/30 flex flex-col'
        >
          <div className='bg-sky-700 px-4 py-2 flex justify-between items-center text-2xl font-batman space-x-5 rounded-t-md'>
            <div className='flex items-center space-x-5'>
              <img src={getMedalImgSrc()} alt='' className='w-8' />
              <span>{selectedScoreCardDetails.name}</span>
            </div>

            <IoMdClose
              className='text-3xl cursor-pointer hover:bg-sky-600/40 p-1 rounded-full duration-150'
              onClick={() => toggleScoreCardModal('close')}
            />
          </div>

          <div className='flex justify-evenly items-center flex-1 px-2 py-10'>
            <div className='left w-2/5 h-full p-2 flex flex-col items-center space-y-5'>
              <img
                src={selectedScoreCardDetails.image}
                alt=''
                className='rounded-lg'
              />

              <div className='font-batman text-xl bg-black/30 text-sky-100 p-2 border-2 border-sky-100  text-center rounded-md w-full'>
                <span>Emp ID: </span>
                <span>{selectedScoreCardDetails.emp_id}</span>
              </div>
            </div>

            <div className='right w-1/2 h-full p-2 flex flex-col items-center font-automata'>
              <div className='w-full flex flex-col space-y-2'>
                <div className='font-batman text-xl bg-black/30 text-sky-100 p-2 border-2 border-sky-100  text-center rounded-md'>
                  {selectedScoreCardDetails.domain_name}
                </div>
                <div className='bg-sky-100 text-m text-black p-2 rounded-md w-full'>
                  <span>Current Score: </span>
                  <span>{selectedScoreCardDetails.score_count}</span>
                </div>
                <div className='bg-sky-100 text-m text-black p-2 rounded-md w-full'>
                  <span>Previous Score: </span>
                  <span>{selectedScoreCardDetails.pre_score}</span>
                </div>
                <div className='bg-sky-100 text-m text-black p-2 rounded-md w-full'>
                  <span>Previous Team: </span>
                  <span>{selectedScoreCardDetails.prev_team}</span>
                </div>
                <div className='relative bg-sky-100 text-m text-black p-2 rounded-md w-full cursor-pointer hover:bg-sky-200 duration-150 group'>
                  <span>No. of Courses Completed: </span>
                  <span>{selectedScoreCardDetails?.courses?.length}</span>

                  <div className='absolute bg-gray-800 text-white group-hover:flex flex-col space-y-2 text-base p-5 rounded-md left-1/2 w-full -translate-x-1/2 shadow-lg shadow-black/50 hidden opacity-0 group-hover:opacity-100 duration-300'>
                    {selectedScoreCardDetails?.courses?.map((course) => (
                      <span>{course}</span>
                    ))}
                  </div>
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
