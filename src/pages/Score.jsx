import React, { useEffect, useState } from 'react'
import Cards from '../components/score/Cards'
import { CARDS_DATA } from '../data'

const Score = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {}, [])

  const sortedCardData = [...CARDS_DATA].sort(
    (a, b) => b.score_count - a.score_count
  )

  const rankedCardData = sortedCardData.map((item, index) => ({
    ...item,
    rank: index < 3 ? index + 1 : null, // Only top three get ranks
  }))
  return (
    <>
      <div className='card-container pt-36'>
        {rankedCardData.map((item) => (
          <Cards
            key={item.id}
            id={item.emp_id}
            prev_team={item.prev_team}
            body={item.body}
            image={item.image}
            name={item.name}
            score_count={item.score_count}
            rank={item.rank}
            pre_score={item.pre_score}
            courses={item.courses}
          />
        ))}
      </div>
    </>
  )
}

export default Score
