import React from 'react';
import bgVideo from '../assets/intro_bg.mp4';
import BgVideo from '../components/BgVideo';
import PieChart from '../components/ScorePieChart';
import RegressionPieChart from '../components/RegressionPieChart';

const Activities = () => {
  return (
    
    <div>
      <BgVideo videoSrc={bgVideo} loop={true} />
      {/* <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px' }}>
        <div style={{ flex: 1, marginRight: '10px' }}>
          <PieChart />
        </div>
        <div style={{ flex: 1, marginLeft: '10px' }}>
          <RegressionPieChart />
        </div>
      </div> */}
    </div>
  );
}

export default Activities;
