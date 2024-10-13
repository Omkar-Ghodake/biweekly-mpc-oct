import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import { ScoreCardContext } from '../../context/ScoreCardProvider'
import { addLeadingZeros } from '../../utils'

const ScoreCard = ({ index, emp_id, name, score_count, image }) => {
  const { setSelectedScoreCard, toggleScoreCardModal } =
    useContext(ScoreCardContext)

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className='h-[50vh] flex flex-col  items-center w-1/4 p-4 font-automata group'
      onClick={() => toggleScoreCardModal('open', index)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.09 * index }}
        className='relative w-full h-full p-5 flex flex-col justify-between bg-sky-500/10 border border-gray-500 backdrop-blur-sm hover:backdrop-blur-md cursor-pointer group-hover:border-gray-300 rounded-md duration-150 shadow-md hover:shadow-xl shadow-black/30 hover:shadow-black/30'
      >
        <div className='badge'></div>

        <div className='emp-id absolute inset-0 h-fit ml-auto tracking-widest underline-offset-8 text-[#E3F5E1] w-full flex justify-between items-center p-2'>
          <span>#{addLeadingZeros(parseInt(index) + 1, 2)}</span>
          <span>{emp_id}</span>
        </div>

        <div className='card-image '>
          <img
            src={image}
            alt=''
            className='w-[180px] h-[180px] mx-auto object-cover rounded-full'
            loading='lazy'
          />
        </div>

        <div className='name text-center text-[#E3F5E1]'>{name}</div>

        <div className='score-count text-center'>
          <span>Score Count: </span>
          <span>{score_count}</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ScoreCard
