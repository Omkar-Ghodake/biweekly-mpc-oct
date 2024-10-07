import React from "react";
import BgVideo from "../components/BgVideo";
import bgVideo from "../assets/intro_bg.mp4";
import TableComponent from "../components/TableComponent";
import TableData from "../assets/TableData.json";
import GrowingLineGraph from "../components/GrowingLineGraph";

const jsonData = TableData;
const Graph = () => {
  return (
    <div>
      <BgVideo videoSrc={bgVideo} loop={true} />
      <GrowingLineGraph />
      <TableComponent data={jsonData} />
    </div>
  );
};

export default Graph;
