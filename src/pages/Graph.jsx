import React from 'react'
import BgVideo from '../components/BgVideo'
import bgVideo from '../assets/intro_bg.mp4'
import GrowingLineGraph from '../components/Graphs/GrowingLineGraph'
import TableComponent from '../components/TableComponent'
import { TABLE_DATA } from '../data'

const Graph = () => {
  return (
    <div className=''>
      <BgVideo videoSrc={bgVideo} loop={true} />
      <div className='h-[100vh] pt-[13vh] flex justify-center items-center mb-6'>
        <GrowingLineGraph />
      </div>
      <div className='min-h-[100vh] flex justify-center items-center  mt-12'>
        <TableComponent data={TABLE_DATA} />
      </div>
    </div>
  )
}

export default Graph
