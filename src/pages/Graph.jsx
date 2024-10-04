import React from 'react'
import BgVideo from '../components/BgVideo'
import bgVideo from '../assets/intro_bg.mp4'
import PerformanceGraph from '../components/PerformanceGraph'
const Graph = () => {
  
  return <div>
    <BgVideo videoSrc={bgVideo} loop={true} />
    
    <PerformanceGraph/>
    </div>
}

export default Graph
