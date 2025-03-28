import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title,
  Filler,
  Decimation,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title,
  Filler,
  Decimation
);

const FinancialDashboard = () => {
  // 1. Asset vs Liability Comparison (Grouped Bar Chart)
  const balanceSheetData = {
    labels: ["2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Assets",
        data: [45, 52, 67, 73],
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        borderRadius: 5,
      },
      {
        label: "Liabilities",
        data: [32, 38, 45, 51],
        backgroundColor: "rgba(255, 99, 132, 0.8)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        borderRadius: 5,
      },
    ],
  };

  // 2. Cash Flow Breakdown (Waterfall Chart)
  const cashFlowData = {
    labels: ["Operating", "Investing", "Financing", "Net Change"],
    datasets: [
      {
        label: "Cash Flow (USD)",
        data: [120, -45, 80, 155],
        backgroundColor: [
          "rgba(75, 192, 192, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  // 3. Peer Comparison (Radar Chart)
  const peerComparisonData = {
    labels: [
      "Revenue Growth",
      "Profit Margin",
      "ROE",
      "Debt/Equity",
      "Market Cap",
    ],
    datasets: [
      {
        label: "Your Company",
        data: [85, 75, 90, 60, 80],
        backgroundColor: "rgba(75, 192, 192, 0.4)",
        borderColor: "rgba(75, 192, 192, 1)",
        pointRadius: 5,
      },
      {
        label: "Industry Average",
        data: [70, 65, 75, 75, 70],
        backgroundColor: "rgba(255, 99, 132, 0.4)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointRadius: 5,
      },
    ],
  };

  // 4. Historical Stock Trends (Candlestick-like Line Chart)
  const stockData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Stock Price",
        data: [150, 165, 158, 172, 160, 185],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 8,
      },
    ],
  };

  // Common chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(0,0,0,0.9)",
        titleFont: { size: 16 },
        bodyFont: { size: 14 },
        padding: 12,
        callbacks: {
          label: (context) => `$${context.parsed.y}M`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        title: { display: true, text: "Fiscal Year" },
      },
      y: {
        grid: { color: "rgba(0,0,0,0.05)" },
        title: { display: true, text: "USD (Millions)" },
      },
    },
  };

  return (
    <div className="dashboard-grid">
      {/* Asset vs Liability */}
      <div className="chart-card">
        <h2>Balance Sheet Analysis</h2>
        <div className="chart-container">
          <Bar
            data={balanceSheetData}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: { display: true, text: "Assets vs Liabilities" },
              },
            }}
          />
        </div>
      </div>

      {/* Cash Flow Breakdown */}
      <div className="chart-card">
        <h2>Cash Flow Statement</h2>
        <div className="chart-container">
          <Bar
            data={cashFlowData}
            options={{
              ...chartOptions,
              indexAxis: "y",
              plugins: {
                ...chartOptions.plugins,
                title: { display: true, text: "Cash Flow Breakdown" },
              },
            }}
          />
        </div>
      </div>

      {/* Peer Comparison */}
      <div className="chart-card">
        <h2>Peer Benchmarking</h2>
        <div className="chart-container">
          <Line
            data={peerComparisonData}
            options={{
              ...chartOptions,
              scales: {
                r: {
                  beginAtZero: true,
                  grid: { color: "rgba(0,0,0,0.1)" },
                  ticks: { backdropColor: "rgba(255,255,255,0.8)" },
                },
              },
            }}
          />
        </div>
      </div>

      {/* Stock Trends */}
      <div className="chart-card">
        <h2>Price Performance</h2>
        <div className="chart-container">
          <Line
            data={stockData}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                annotation: {
                  annotations: {
                    trendLine: {
                      type: "line",
                      yMin: 160,
                      yMax: 160,
                      borderColor: "rgba(255, 99, 132, 0.8)",
                      borderWidth: 2,
                      borderDash: [5, 5],
                    },
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;
