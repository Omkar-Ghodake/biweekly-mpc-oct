import React from 'react'
import bgVideo from '../assets/intro_bg.mp4'
import BgVideo from '../components/BgVideo'

const Activities = () => {
  return (
    <div>
      <BgVideo videoSrc={bgVideo} loop={true} />
    </div>
  )
}

export default Activities
