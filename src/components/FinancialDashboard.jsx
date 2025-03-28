import React from "react";
import { SymbolOverview, AdvancedChart } from "react-tradingview-embed";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FinancialDashboard = ({
  companySymbol = "NASDAQ:AAPL",
  peers = ["MSFT", "GOOGL"],
}) => {
  // Cash Flow Data
  const cashFlowData = {
    labels: ["Operating", "Investing", "Financing"],
    datasets: [
      {
        label: "Cash Flow (Millions)",
        data: [120, -45, 80],
        backgroundColor: ["#4CAF50", "#F44336", "#2196F3"],
      },
    ],
  };

  return (
    <div className="container-fluid mt-4">
      <h2 className="mb-4">Financial Analysis Dashboard</h2>

      {/* First Row */}
      <div className="row mb-4">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-header">Asset vs Liability Comparison</div>
            <div className="card-body">
              <SymbolOverview
                widgetProps={{
                  symbols: [[companySymbol, "Your Company"]],
                  chartOnly: false,
                  width: "100%",
                  height: 300,
                  locale: "en",
                  colorTheme: "light",
                  gridLineColor: "#F0F3FA",
                  fontColor: "#787B86",
                }}
              />
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-header">Cash Flow Breakdown</div>
            <div className="card-body">
              <Bar
                data={cashFlowData}
                options={{ responsive: true, maintainAspectRatio: false }}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Peer Comparison</div>
            <div className="card-body">
              <AdvancedChart
                widgetProps={{
                  symbols: [
                    [companySymbol, "Your Company"],
                    ...peers.map((peer) => [`NASDAQ:${peer}`, peer]),
                  ],
                  interval: "1M",
                  width: "100%",
                  height: 400,
                  hide_side_toolbar: false,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Third Row */}
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Historical Stock Price Trends</div>
            <div className="card-body">
              <AdvancedChart
                widgetProps={{
                  symbol: companySymbol,
                  interval: "D",
                  timezone: "Etc/UTC",
                  theme: "light",
                  style: "1",
                  width: "100%",
                  height: 500,
                  hide_side_toolbar: true,
                  allow_symbol_change: false,
                  details: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;
