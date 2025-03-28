import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiClock, FiMap, FiTrendingUp, FiUsers } from "react-icons/fi";
import company from "./company.json";
import FinancialDashboard from "./FinancialDashboard";

const NarrativeJourney = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const milestones = [
    {
      year: 2010,
      title: "Foundation",
      icon: <FiMap />,
      content:
        "Founded with a vision to revolutionize the financial industry through technology",
      color: "#006BFF",
    },
    {
      year: 2014,
      title: "First Breakthrough",
      icon: <FiTrendingUp />,
      content: "Launched flagship product achieving 500k users in first year",
      color: "#00C48C",
    },
    {
      year: 2018,
      title: "Global Expansion",
      icon: <FiUsers />,
      content: "Opened offices in 3 continents, team grew to 200+ members",
      color: "#FF6B00",
    },
    {
      year: 2022,
      title: "Market Leadership",
      icon: <FiClock />,
      content: "Recognized as industry leader serving over 5 million clients",
      color: "#FFD700",
    },
  ];

  return (
    <section className="relative bg-[#0A1A2F] py-20" ref={sectionRef}>
      {/* Progress Indicator */}
      <div className="fixed top-1/2 right-8 -translate-y-1/2 z-50">
        <div className="h-64 w-1 bg-white/20 rounded-full">
          <motion.div
            className="w-full bg-blue-400 rounded-full"
            style={{ scaleY: scrollYProgress }}
          />
        </div>
      </div>

      {/* Chapter 1: The Foundation */}
      <ChapterSection
        title="The Foundation"
        subtitle="Understand the Financial Blueprint"
        index={1}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-96"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <motion.path
                d="M50 350 L200 50 L350 350"
                fill="none"
                stroke="#E8E9EB"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />
              <motion.rect
                x="175"
                y="325"
                width="50"
                height="25"
                fill="#006BFF"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
              />
            </svg>
          </motion.div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Core Elements</h3>
            <div className="grid grid-cols-1 gap-4 max-h-64 overflow-y-auto scrollable-element">
              {[
                "income_statement",
                "cash_flow_metrics",
                "balance_sheet_metrics",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  className="p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <h4 className="text-blue-400 text-lg font-semibold">
                    {item
                      .replaceAll("_", " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                  </h4>
                  <p className="text-white/80 mt-2">
                    {Object.values(company[0].stats[item]).join("\n\n")}
                  </p>
                </motion.div>
              ))}
            </div>
            <p className="text-white/80 mt-2">Scroll to see more...</p>
          </div>
        </div>
      </ChapterSection>

      {/* Chapter 2: The Learning Curve */}
      <ChapterSection
        title="Graph Visualization"
        subtitle="Decode the Trends"
        index={2}
        reverse
      >
        <FinancialDashboard
          companySymbol="NASDAQ:AAPL"
          peers={["MSFT", "GOOGL", "AMZN"]}
        />
      </ChapterSection>

      {/* Chapter 3: The Road to Success */}
      <ChapterSection
        title="Overview"
        subtitle="Decode the Narrative"
        index={3}
      >
        <p className="text-white/80 mt-8">
          {Object.values(company[0].about).join(", ")}
        </p>
      </ChapterSection>

      <ChapterSection
        title="Overview of 2024"
        subtitle="Insights and Analysis"
        index={4}
        reverse
      >
        <p className="text-white/80 mt-8">
          {Object.values(company[0].about).join(", ")}
        </p>
      </ChapterSection>
      <ChapterSection
        title="Company Story"
        subtitle="A Journey of Innovation and Growth"
        index={4}
        reverse
      >
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Text Content */}
          <motion.div
            className="space-y-8 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white"></h3>

            <p className="text-white/80 text-lg leading-relaxed"></p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                <div className="text-blue-400 text-2xl mb-2">15M+</div>
                <div className="text-white/80">Monthly Users</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                <div className="text-green-400 text-2xl mb-2">200%</div>
                <div className="text-white/80">YoY Growth</div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Timeline */}
          <div className="relative h-full pl-8 border-l-2 border-white/10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="relative mb-12 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
              >
                <div
                  className="absolute -left-[29px] top-0 w-12 h-12 rounded-full flex items-center justify-center border-2 backdrop-blur-sm"
                  style={{
                    backgroundColor: `${milestone.color}20`,
                    borderColor: milestone.color,
                  }}
                >
                  <span className="text-white">{milestone.icon}</span>
                </div>
                <div className="ml-8">
                  <div className="flex items-center gap-4 mb-2">
                    <div
                      className="text-xl font-bold"
                      style={{ color: milestone.color }}
                    >
                      {milestone.year}
                    </div>
                    <div className="text-white/80 text-sm">
                      {milestone.title}
                    </div>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {milestone.content}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Animated Progress Line */}
            <motion.div
              className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-blue-400 to-green-400"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </ChapterSection>
    </section>
  );
};

const ChapterSection = ({ title, subtitle, index, reverse, children }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${reverse ? "lg:bg-white/5" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div
        className={`max-w-7xl mx-auto ${
          reverse ? "lg:flex-row-reverse" : ""
        } flex flex-col lg:flex-row gap-12`}
      >
        {/* Chapter Header */}
        <div className="lg:w-1/3 space-y-6">
          <div className="text-blue-400 text-lg">Chapter {index}</div>
          <h2 className="text-4xl font-bold text-white">{title}</h2>
          <p className="text-xl text-white/80">{subtitle}</p>
        </div>

        {/* Content */}
        <div className="lg:w-2/3">{children}</div>
      </div>
    </motion.div>
  );
};

export default NarrativeJourney;
