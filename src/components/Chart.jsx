import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

const LineChart = () => {
  const chartContainer = useRef(null);
  let lineChart = null;

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
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
    <div>
      <h2>Line Chart</h2>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default LineChart;
