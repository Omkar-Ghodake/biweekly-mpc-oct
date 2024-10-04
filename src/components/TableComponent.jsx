import React from "react";

const TableComponent = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  // Get the column headers from the keys of the first object in the JSON array
  const columns = Object.keys(data[0]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg font-automata my-16"> 
    <h1 className="text-white text-center text-2xl mb-5">MPC Score Count</h1>
    <table className="w-min mx-auto text-base text-left text-gray-500 dark:text-white">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-blue-500 dark:text-white">
        <tr>
          {columns.map((col, index) => (
            <th key={index} className="text-base px-6 py-3">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={`border-b border-gray-200 dark:border-white ${rowIndex === data.length - 1 ? 'bg-gray-50 dark:bg-blue-500' : ''}`}
          >
            {columns.map((col, colIndex) => (
              <td key={colIndex} className="px-6 py-4">
                {row[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  );
};

export default TableComponent;
