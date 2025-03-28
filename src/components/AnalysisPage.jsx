import { LineChart, Line, RadialBarChart, RadialBar } from "recharts";
import { motion } from "framer-motion";

const AnalysisPage = () => {
  const performanceData = [
    { month: "Jan", value: 45 },
    { month: "Feb", value: 68 },
    { month: "Mar", value: 75 },
    // Add more data
  ];

  const metrics = [
    { name: "P/E Ratio", value: 75, fill: "#006BFF" },
    { name: "ROI", value: 60, fill: "#00C48C" },
    { name: "Liquidity", value: 85, fill: "#FF6B00" },
  ];

  return (
    <div className="min-h-screen bg-[#0A1A2F] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Performance Chart */}
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-6">
              12-Month Performance
            </h3>
            <LineChart width={500} height={300} data={performanceData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#006BFF"
                strokeWidth={2}
                dot={{ fill: "#006BFF" }}
              />
            </LineChart>
          </div>

          {/* Key Metrics */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white">Key Metrics</h3>
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric) => (
                <div
                  key={metric.name}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm"
                >
                  <RadialBarChart
                    width={120}
                    height={120}
                    innerRadius="70%"
                    outerRadius="100%"
                    data={[metric]}
                  >
                    <RadialBar
                      background
                      dataKey="value"
                      cornerRadius={10}
                      fill={metric.fill}
                    />
                  </RadialBarChart>
                  <div className="mt-4 text-center">
                    <div className="text-2xl font-bold text-white">
                      {metric.value}
                    </div>
                    <div className="text-white/80">{metric.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-2 bg-white/5 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-4">
              Financial Summary
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white/10 rounded-lg">
                <div className="text-blue-400 text-2xl font-bold">$2.4B</div>
                <div className="text-white/80">Market Cap</div>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <div className="text-green-400 text-2xl font-bold">+24%</div>
                <div className="text-white/80">YoY Growth</div>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <div className="text-orange-400 text-2xl font-bold">1.8M</div>
                <div className="text-white/80">Transactions</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnalysisPage;
