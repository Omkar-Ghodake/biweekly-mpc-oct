// src/Card.js

import React from 'react';
import '../Css/cards.css' // Import the CSS file for styling
// import { Carousel } from 'bootstrap';

// import Row from 'bootstrap'
// { body, image, name,score_count,rank }
const Cards = (props) => {
    const renderMedal = () => {
        switch (rank) {
          case 1:
            return <img src="/images/Medals/gold.png" style={{width:"60px"}}alt="Gold Medal" className="medal" />;
          case 2:
            return <img src="/images/Medals/silver.png"style={{width:"40px"}} alt="Silver Medal" className="medal" />;
          case 3:
            return <img src="/images/Medals/bronze.png"style={{width:"38px"}} alt="Bronze Medal" className="medal" />;
          default:
            return null;
        }
    }
    const{ id,body, image, name,score_count,rank }=props
  return (
   <>
   
    <div className="card ">
      {rank && <div className="medal-container">{renderMedal()}</div>}
      <div className='card-author emp-id'>{id}</div>
      <img src={image} style={{ imageRendering: 'crisp-edges' }} alt={name} className="card-image" />
      <div className="card-content">
        
        {/* <p className="card-body">{body}</p> */}
        <p className="card-author">{name}</p>
        <hr className='divider'></hr>
        <p className="card-author">Score Count : {score_count}</p>
      </div>
    </div>
    </>
  );
};

export default Cards;
