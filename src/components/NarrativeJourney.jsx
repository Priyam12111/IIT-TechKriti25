import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import company from "./company.json";
import FinancialDashboard from "./FinancialDashboard";

const NarrativeJourney = ({ searchTerm }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const searchTermIndex = company.findIndex((item) =>
    item.company.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  console.log(searchTermIndex, searchTerm);
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
                    {company[searchTermIndex].stats}
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
          companySymbol="AAPL"
          peers={["MSFT", "GOOGL", "AMZN"]}
        />
      </ChapterSection>

      {/* Chapter 3: The Road to Success */}
      <ChapterSection
        title="Overview"
        subtitle="Decode the Narrative"
        index={3}
      >
        <p className="text-white/80 mt-8">{company[searchTermIndex].about}</p>
      </ChapterSection>

      <ChapterSection
        title="Overview of 2024"
        subtitle="Insights and Analysis"
        index={4}
        reverse
      >
        <p className="text-white/80 mt-8">
          {company[searchTermIndex].overview}
        </p>
      </ChapterSection>
      <ChapterSection
        title="The Simple Story"
        subtitle="Layman's View"
        index={5}
        reverse
      >
        <p className="text-white/80 mt-8">
          {company[searchTermIndex].layman_story}
        </p>
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
