import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
        );
        const data = await response.json();

        const labels = data.data.map(entry => entry.Year);
        const values = data.data.map(entry => entry.Population);

        createChart(labels, values);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();

  }, []);

  const createChart = (labels, values) => {
    new Chart(document.getElementById('line-chart-canvas'), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Population (millions)',
            backgroundColor: '#3e95cd',
            borderColor: '#3e95cd',
            fill: false,
            data: values
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'U.S. Population Chart'
        },
        legend: {
          display: false
        }
      }
    });
  };

  return (
    <div>
    <h1 className='graph-heading'>Graph Population Data</h1>
    <hr className='horizontal-line' />
    <canvas id="line-chart-canvas" width="800" height="450"></canvas>
    <hr className='horizontal-line' />
    <div className='footer'>
      <h3 className='sub-heading'>Get in depth charts in Trade</h3>
      <button className='custom-button'>Trade</button>
    </div>
    </div>
  );
};

export default LineChart;
