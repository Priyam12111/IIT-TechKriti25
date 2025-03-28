import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useEffect, useState } from "react";
import Chatbot from "./Chatbot";
const HeroSection = ({
  hasCompany,
  setHasCompany,
  searchTerm,
  setSearchTerm,
}) => {
  const Globe = () => {
    return (
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshPhongMaterial
          color="#006BFF"
          transparent
          opacity={0.6}
          emissive="#006BFF"
          emissiveIntensity={0.1}
        />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
      </mesh>
    );
  };

  const companies = [
    "Reliance Industries Limited",
    "Indian Oil Corporation",
    "Life Insurance Corporation of India (LIC)",
    "Oil and Natural Gas Corporation (ONGC)",
    "State Bank of India (SBI)",
    "Tata Motors",
    "Tata Steel",
    "Tata Consultancy Services (TCS)",
    "HDFC Bank",
    "Infosys",
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (companies.includes(value)) {
      setHasCompany(true);
      setTimeout(() => {
        const container = document.querySelector(".hero-section");
        if (container.style.position === "static") {
          container.style.position = "relative";
        }
        window.scrollTo({
          top: container.scrollHeight,
          behavior: "smooth",
        });
      }, 2000);
    } else {
      setHasCompany(false);
    }
  };
  const filteredCompanies = companies.filter((company) =>
    company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="hero-section relative h-screen w-full overflow-hidden">
      {/* Animated Gradient Background */}
      {/* 3D Globe */}
      <div className="absolute flex right-10 top-1/4 h-96 w-320 z-20">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Globe />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
      <Chatbot />

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 py-16">
        <div>
          <h1 className="text-5xl font-bold mb-6 text-white max-w-2xl mx-auto">
            Every Company Has a Story.
            <span className="block mt-3 text-blue-400">
              Uncover Its Financial Journey
            </span>
          </h1>
          <div className="w-full max-w-xl mt-8 relative">
            <input
              type="text"
              placeholder="Enter a company name to start exploring..."
              className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              onChange={handleSearch}
              value={searchTerm}
            />

            {searchTerm && (
              <div className="absolute w-full mt-2 max-h-60 overflow-y-auto bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg">
                {filteredCompanies.length > 0 ? (
                  filteredCompanies.map((company) => (
                    <div
                      key={company}
                      onClick={() => {
                        setSearchTerm(company);
                        setHasCompany(true);
                      }}
                      className="px-6 py-3 cursor-pointer hover:bg-blue-400/20 transition-colors text-white/90 hover:text-white"
                    >
                      {company}
                    </div>
                  ))
                ) : (
                  <div className="px-6 py-3 text-white/50">
                    No companies found
                  </div>
                )}
              </div>
            )}
          </div>
          <p className="mt-6 text-white/80 text-lg">
            Start with TCS, SBI and Reliance industries
          </p>
          {hasCompany && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
              <div className="animate-bounce w-6 h-10 border-4 border-white/50 rounded-full">
                <div className="w-2 h-2 bg-white/80 rounded-full mt-2 mx-auto"></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
    </div>
  );
};

export default HeroSection;
