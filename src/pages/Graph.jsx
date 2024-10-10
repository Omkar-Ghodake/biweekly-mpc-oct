import React from 'react'
import BgVideo from '../components/BgVideo'
import bgVideo from '../assets/intro_bg.mp4'
import GrowingLineGraph from '../components/Graphs/GrowingLineGraph'
import TableComponent from '../components/TableComponent'
import { TABLE_DATA } from '../data'

const Graph = () => {
  return (
    <div className='pt-10'>
      <BgVideo videoSrc={bgVideo} loop={true} />
      <GrowingLineGraph />
      <TableComponent data={TABLE_DATA} />
    </div>
  )
}

export default Graph
