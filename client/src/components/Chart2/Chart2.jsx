import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import './chart2.scss'; // Import the CSS file for styling

// Register the necessary components with ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Chart2() {
    const { currentExpense } = useSelector(state => state.expense);
    const chartRef = useRef(null);

    // Aggregate data by date
    const aggregatedData = currentExpense.reduce((acc, expense) => {
        const date = expense.date.split('T')[0]; // Assuming 'date' is in ISO format
        if (!acc[date]) {
            acc[date] = 0;
        }
        acc[date] += expense.amount;
        return acc;
    }, {});

    // Extract dates and amounts
    const dates = Object.keys(aggregatedData).sort();
    const amounts = dates.map(date => aggregatedData[date]);

    const data = {
        labels: dates,
        datasets: [
            {
                label: 'Historical Spending',
                data: amounts,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
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
                text: 'Historical Spending Trends',
            },
        },
    };

    useEffect(() => {
        const chart = chartRef.current;

        if (chart) {
            chart.update();
        }
    }, [dates, amounts]);

    return (
        <div className="chart-container">
            <Line ref={chartRef} data={data} options={options} />
        </div>
    );
}
