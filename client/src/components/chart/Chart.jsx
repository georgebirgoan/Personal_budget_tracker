import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './chart.scss'; // Import the CSS file for styling

// Register the necessary components with ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Chart() {
  const { currentExpense } = useSelector(state => state.expense);
  const chartRef = useRef(null);

  const categories = currentExpense.map(expense => expense.category);
  const amounts = currentExpense.map(expense => expense.amount);

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses',
        data: amounts,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // This allows the chart to adapt better to different screen sizes
    plugins: {
      legend: {
        position: 'top',

      },
      title: {
        display: true,
        text: 'Expenses Chart',
        color: '#FFFFFF',
      },
    },
  };

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      chart.update();
    }
  }, [categories, amounts]);

  return (
    <div className="chart-container">
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
}
