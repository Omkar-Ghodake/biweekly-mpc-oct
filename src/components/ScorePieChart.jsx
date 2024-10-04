import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      backgroundColor: "transparent",
      theme: "dark2", // Change this to "light1", "dark1", or "dark2"
      title: {
        text: "MPC Issues"
      },
      data: [{
        type: "pie",
        indexLabel: "{name}: {y}",
        startAngle: -90,
        dataPoints: [
          { y: 6, name: "Blocker" },
          { y: 24, name: "Critical" },
          { y: 32, name: "Major" },
          { y: 13, name: "Minor" },
          { y: 27, name: "Normal" }
        ]
      }]
    };

    const chartStyle = {
      width: 'auto',   // This allows the chart to adjust its width automatically
      maxWidth: '600px', // Limit the maximum width of the chart
      margin: '0 auto'  // Center the chart horizontally
    };

    return (
      <div style={chartStyle}>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

export default PieChart;
