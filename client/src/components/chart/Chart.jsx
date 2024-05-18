import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Chart as ChartJS } from 'chart.js/auto'; // Importă ChartJS din 'chart.js/auto'

export default function Chart() {
  const { currentExpense } = useSelector(state => state.expense);

  const categories = currentExpense.map(expense => expense.category);
  const amounts = currentExpense.map(expense => expense.amount);

  const chartRef = useRef();

  useEffect(() => {
    let chartInstance = null;

    if (chartRef.current) {
      chartInstance = new ChartJS(chartRef.current, {
        type: 'line',
        data: {
          labels: categories,
          datasets: [
            {
              label: 'Amount',
              data: amounts,
              borderColor: 'rgba(255, 99, 132, 1)', // Red color
              backgroundColor: 'rgba(255, 99, 132, 0.2)', // Red color with opacity
              pointRadius: 10, // Size of the point
              pointHoverRadius: 15, // Size of the point on hover
              pointStyle: 'circle', // Default style of the point
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Spending by category',
            }
          },
          
        }
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [currentExpense]);

  return (
    <div className="chart">
      <div className="top">
        <canvas style={{height:"100%",width:"100%"}} ref={chartRef}></canvas>
      </div>
      <div className="bottom"></div>
    </div>
  );
}
