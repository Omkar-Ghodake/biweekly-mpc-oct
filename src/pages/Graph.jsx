import React from 'react'
import BgVideo from '../components/BgVideo'
import bgVideo from '../assets/intro_bg.mp4'
import PerformanceGraph from '../components/PerformanceGraph'
import TableComponent from '../components/TableComponent'
import TableData from '../assets/TableData.json'

const jsonData = TableData
const Graph = () => {
  
  return <div>
    <BgVideo videoSrc={bgVideo} loop={true} />  
    {/* <PerformanceGraph/> */}
    <TableComponent data={jsonData}/>
    </div>
}

export default Graph
