import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HistoryChart = ({ historyData }) => {
  // Filtrar y sumar los montos por fecha para ingresos y gastos
  const incomeData = {};
  const expenseData = {};
  
  historyData.forEach(item => {
    const date = item.fecha;
    if (item.tipo === 'ingreso') {
      incomeData[date] = (incomeData[date] || 0) + item.monto;
    } else {
      expenseData[date] = (expenseData[date] || 0) + item.monto;
    }
  });

  const chartData = {
    labels: Object.keys(incomeData),
    datasets: [
      {
        label: 'Ingresos',
        data: Object.values(incomeData),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Gastos',
        data: Object.values(expenseData),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Historial de Ingresos y Gastos'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

	return <Line data={chartData} options={options} className='bg-blue-950 rounded-xl'/>;
};

export default HistoryChart;
