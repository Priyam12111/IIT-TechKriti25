import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NarrativeJourney from "./components/NarrativeJourney";
import Explore from "./components/Explore";
import AnalysisPage from "./components/AnalysisPage";
import ContactPage from "./components/ContactPage";
import "./App.css";

const App = () => {
  const [hasCompany, setHasCompany] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection
                hasCompany={hasCompany}
                setHasCompany={setHasCompany}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              {hasCompany && <NarrativeJourney searchTerm={searchTerm} />}
            </>
          }
        />
        <Route
          path="/Explore"
          element={
            <>
              <Navbar />
              <Explore />
            </>
          }
        />
        <Route
          path="/Analysis"
          element={
            <>
              <Navbar />
              <AnalysisPage />
            </>
          }
        />
        <Route
          path="/Contact"
          element={
            <>
              <Navbar />
              <ContactPage />
            </>
          }
        />
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
