import { motion } from "framer-motion";
import { FiSearch, FiFilter, FiTrendingUp } from "react-icons/fi";

const ExplorePage = () => {
  const companies = [
    {
      name: "TechCorp",
      sector: "Technology",
      growth: "+24%",
      volatility: "Low",
    },
    {
      name: "GreenEnergy",
      sector: "Renewables",
      growth: "+42%",
      volatility: "Medium",
    },
    { name: "Finova", sector: "Finance", growth: "+15%", volatility: "High" },
    // Add more companies
  ];

  return (
    <div className="min-h-screen bg-[#0A1A2F] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-6">
            Explore Companies
          </h1>
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
              <input
                type="text"
                placeholder="Search companies..."
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button className="px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors text-white">
              <FiFilter size={20} />
            </button>
          </div>
        </motion.div>

        {/* Company Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-400/20 flex items-center justify-center">
                  <FiTrendingUp className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{company.name}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-white/80">
                  <span>Sector</span>
                  <span>{company.sector}</span>
                </div>
                <div className="flex justify-between text-green-400">
                  <span>Growth</span>
                  <span>{company.growth}</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-400 transition-all duration-500"
                    style={{
                      width:
                        company.volatility === "Low"
                          ? "30%"
                          : company.volatility === "Medium"
                          ? "60%"
                          : "90%",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ExplorePage;
