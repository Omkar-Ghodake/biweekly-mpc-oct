import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//let CanvasJSReact = require('@canvasjs/react-charts');
 
let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class App extends Component {
    render() {
        const options = {
            animationEnabled: true,
            theme: "dark1",
            backgroundColor: "transparent", 
            title: {
                text: "MPC Performance"
            },
            axisX: {
                title: "Names",
                includeZero: true,
                interval: 1
            },
            axisY: {
                title: "Score",
            },
            toolTip: {
                shared: true
            },
            legend: {
                cursor: "pointer",
                itemclick: function (e) {
                    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                        e.dataSeries.visible = false;
                    } else {
                        e.dataSeries.visible = true;
                    }
                    e.chart.render();
                }
            },
            data: [{lineColor: "red",},{
                type: "line",
                name: "Previous Score",
                showInLegend: true,
                dataPoints: [
                    { label: "Vishnu1 Menon", y: 41 },
                    { label: "Anushree1 Shukla", y: 44 },
                    { label: "Anagha Shinde", y: 43 },
                    { label: "Dhiraj Kunder", y: 39 },
                    { label: "Bhavya Momaya", y: 79 },
                    { label: "Avinash10 Gupta", y: 50 },
                    { label: "Simran Surve", y: 77 },
                    { label: "Umakant Patil", y: 0 },
                    { label: "Mridul Upadhya", y: 0 },
                    { label: "Pratik Joshi", y: 0 },
                    { label: "Omkar Ghodake", y: 0 },
                    { label: "Shubham Joshi", y: 0 },
                    { label: "Devraj Singh", y: 0 },
                    { label: "Jaypal Koli", y: 0 },
                    { label: "Sanjeev2 Prajapati", y: 0 },
                    { label: "Sakshi1 Rai", y: 0 },
                    { label: "Rishabh.Kanaujiya", y: 0 },
                    { label: "Prathwikumar.S", y: 0 },
                    { label: "Nikita.Sonawane", y: 0 },
                    { label: "Manoj.Inbarajan", y: 0 },
                    { label: "Nikita.Suhane", y: 0 },
                    { label: "Shriyash.Thorat", y: 0 }
                ],
            },
            {
                type: "line",
                name: "Current Score",
                showInLegend: true,
                dataPoints: [
                    { label: "Vishnu1 Menon", y: 69 },
                    { label: "Anushree1 Shukla", y: 58 },
                    { label: "Anagha Shinde", y: 57 },
                    { label: "Dhiraj Kunder", y: 39 },
                    { label: "Bhavya Momaya", y: 34 },
                    { label: "Avinash10 Gupta", y: 30 },
                    { label: "Simran Surve", y: 27 },
                    { label: "Umakant Patil", y: 20 },
                    { label: "Mridul Upadhya", y: 19 },
                    { label: "Pratik Joshi", y: 8 },
                    { label: "Omkar Ghodake", y: 5 },
                    { label: "Shubham Joshi", y: 5 },
                    { label: "Devraj Singh", y: 3 },
                    { label: "Jaypal Koli", y: 3 },
                    { label: "Sanjeev2 Prajapati", y: 3 },
                    { label: "Sakshi1 Rai", y: 1 },
                    { label: "Rishabh.Kanaujiya", y: 0 },
                    { label: "Prathwikumar.S", y: 0 },
                    { label: "Nikita.Sonawane", y: 0 },
                    { label: "Manoj.Inbarajan", y: 0 },
                    { label: "Nikita.Suhane", y: 0 },
                    { label: "Shriyash.Thorat", y: 0 }
                ],
            }]
        };
 
        return (
            <div>
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}
export default App;  