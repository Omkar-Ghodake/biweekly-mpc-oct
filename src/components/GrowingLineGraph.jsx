// GrowingLineGraphWithVideo.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Title } from 'chart.js';
import 'tailwindcss/tailwind.css';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Title);

const GrowingLineGraph = () => {
  const [chartData, setChartData] = useState(null); // Start with null

  // The provided JSON data
  const jsonData = [
    {
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
        { label: "Shriyash.Thorat", y: 0 },
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
        { label: "Shriyash.Thorat", y: 0 },
      ],
    },
  ];

  useEffect(() => {
    const labels = jsonData[0].dataPoints.map((point) => point.label); // Extract labels (names)
    const previousScores = jsonData[0].dataPoints.map((point) => point.y); // Extract previous scores
    const currentScores = jsonData[1].dataPoints.map((point) => point.y); // Extract current scores

    setChartData({
      labels: labels,
      datasets: [
        {
          label: jsonData[0].name,
          data: previousScores,
          fill: false,
          backgroundColor: 'rgba(255, 99, 132, 1)',
          borderColor: 'rgba(255, 99, 132, 1)',
          tension: 0.4,
          borderWidth: 2,
          pointBackgroundColor: 'rgba(255, 99, 132, 0.7)',
          pointBorderColor: 'rgba(255, 255, 255, 1)',
          pointBorderWidth: 2,
          pointRadius: 5,
        },
        {
          label: jsonData[1].name,
          data: currentScores,
          fill: false,
          backgroundColor: 'rgba(54, 162, 235, 1)',
          borderColor: 'rgba(54, 162, 235, 1)',
          tension: 0.4,
          borderWidth: 2,
          pointBackgroundColor: 'rgba(54, 162, 235, 0.7)',
          pointBorderColor: 'rgba(255, 255, 255, 1)',
          pointBorderWidth: 2,
          pointRadius: 5,
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart',
    },
    layout: {
      padding: {
        top: 5,
        right: 20,
        bottom: 5,
        left: 20,
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Team Members',
          color: 'rgba(255, 255, 255)',
          font: {
            family: 'Automata', // Set font to Automata for x-axis label
            size: 14,
            weight : 'normal'
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        ticks: {
          color: 'rgba(255, 255, 255)',
          font: {
            family: 'Automata', // Set font to Automata for x-axis label
            size: 8,
            weight : 'normal'

          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Scores',
          color: 'rgba(255, 255, 255)',
          font: {
            family: 'Automata', // Set font to Automata for x-axis label
            size: 14,
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        ticks: {
          color: 'rgba(255, 255, 255)',
          font: {
            family: 'Automata', // Set font to Automata for x-axis label
            size: 10,
          },
        },
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'MPC Score Comparison',
        color: 'rgba(255, 255, 255)',
        font: {
            family: 'Automata', // Set font to Automata for x-axis label
            size: 18,
            weight : 5
        },
      },
      legend: {
        labels: {
          color: 'rgba(255, 255, 255)',
          font: {
            family: 'Automata', // Set font to Automata for x-axis label
          },
        },
      },
      tooltip: {
        callbacks: {
          title: (tooltipItem) => {
            return tooltipItem[0]?.label; // Show candidate name
          },
          label: (tooltipItem) => {
            return `Score: ${tooltipItem.formattedValue}`; // Show exact score
          },
        },
      },
    },
  };

  return (
    <div className="relative min-h-screen font-automata">
      {/* Graph Container */}
      <div className="absolute inset-0 flex justify-center items-center z-10 ">
        <div className="w-full max-w-4xl p-4 bg-opacity-50 bg-gray-800 border border-gray-700 rounded-lg shadow-md">
          {chartData ? (
            <>
              <Line
                data={chartData}
                options={options}
              />
              <div className="flex justify-around mt-4 text-white">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 mr-1 "></span>
                  <span className='font-automata text-sm'>Previous Score</span>
                </div>
                <div className="flex items-center text-white">
                  <span className="w-3 h-3 bg-blue-500 mr-1"></span>
                  <span className='font-automata text-sm'>Current Score</span>
                </div>
              </div>
            </>
          ) : (
            <p className="text-white">Loading chart...</p> // Display a loading message until chartData is available
          )}
        </div>
      </div>
    </div>
  );
};

export default GrowingLineGraph;
