import React from 'react'
import BgVideo from '../components/BgVideo'
import bgVideo from '../assets/intro_bg.mp4'

const Score = () => {
  return (
    <div>
      <BgVideo videoSrc={bgVideo} loop={true} />
    </div>
  )
}

export default Score
