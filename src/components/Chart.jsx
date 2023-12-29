import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

const LineChart = () => {
  const chartContainer = useRef(null);
  let lineChart = null;

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const data = {
        labels: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7'],
        datasets: [
          {
            label: 'Problems Solved',
            data: [5, 8, 6, 10, 7, 12, 9], 
            fill: false,
            borderColor: 'rgba(59, 130, 246)',
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            tension: 0.4,
          },
        ],
      };

      const config = {
        type: 'line',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: ' Problems Solved',
              },
            },
            x: {
              title: {
                display: true,
                text: 'Date',
              },
            },
          },
        },
      };

      if (lineChart) {
        lineChart.destroy();
      }

      lineChart = new Chart(chartContainer.current, config);
    }
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="md:text-2xl text-xl font-bold mb-4 text-black">Problems Solved Over Time</h2>
      <div className="flex justify-center">
        <canvas className="w-full max-w-md" ref={chartContainer} />
      </div>
    </div>
  );
};

export default LineChart;
