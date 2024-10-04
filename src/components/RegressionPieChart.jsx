import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class App extends Component {
  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      backgroundColor: "transparent",
      theme: "dark2", // "light1", "dark1", "dark2"
      title: {
        text: "Regression Testcases",
      },
      data: [
        {
          type: "pie",
          indexLabel: "{label}: {y}",
          startAngle: -90,
          dataPoints: [
            { y: 122, label: "Failed" },
            { y: 80, label: "Blocked" },
            { y: 44, label: "Not applicable" },
            { y: 76, label: "Other" },
          ],
        },
      ],
    };
    const chartStyle = {
      width: "auto", // This allows the chart to adjust its width automatically
      maxWidth: "600px", // Limit the maximum width of the chart
      margin: "0 auto", // Center the chart horizontally
    };
    return (
      <div style={chartStyle}>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
export default App;
