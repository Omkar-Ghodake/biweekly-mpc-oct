import React from 'react'
import ScoreCard from '../components/score/ScoreCard'
import { CARDS_DATA as SCORE_CARD_DATA } from '../data'
import ScoreCardDetails from '../components/score/ScoreCardDetails'

const Score = () => {
  let sortedArrayData = SCORE_CARD_DATA.sort((a, b) =>
    a.score_count > b.score_count ? -1 : 1
  )

  return (
    <div className='pt-36'>
      <div className='w-[90%] mx-auto flex items-center justify-center flex-wrap'>
        {sortedArrayData &&
          sortedArrayData.map((item, index) => (
            <ScoreCard
              key={index}
              index={index.toString()}
              emp_id={item.emp_id}
              name={item.name}
              score_count={item.score_count}
              image={item.image}
            />
          ))}
      </div>

      <ScoreCardDetails />
    </div>
  )
}

export default Score
