import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register all components
Chart.register(...registerables);

const Modal = ({ isOpen, onClose, userData }) => {
  if (!isOpen || !userData) return null;

  // Bar chart data
  const data = {
    labels: ['Current Score', 'Previous Score'],
    datasets: [
      {
        label: 'Scores Comparison',
        data: [userData.currentScore, userData.previousScore],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 text-white rounded-lg p-5 max-w-4xl w-full flex flex-col relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Name and Image */}
        <div className='flex flex-col items-center mb-4'>
          <img
            src={userData.image}
            alt={userData.name}
            className="w-24 h-24 rounded-full object-cover mb-2" // Adjust size and shape as needed
          />
          <h2 className="text-2xl font-bold text-center">{userData.name}</h2>
        </div>
        
        {/* Scores and Courses Section */}
        <div className="mt-4 flex">
          {/* Left Side: Scores and Courses */}
          <div className="flex-1">
            <div className="my-2 text-left">
              <p><strong>Current Score:</strong> {userData.currentScore}</p>
              <p><strong>Previous Score:</strong> {userData.previousScore}</p>
              <hr className="border-gray-600 my-2" />
            </div>

            <h3 className="text-lg font-semibold">Completed Courses:</h3>
            <ul className="list-disc list-inside">
              {userData.completedCourses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>

          {/* Right Side: Bar Chart */}
          <div className="flex-1">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
