import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Matches from "./components/Matches";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MatchDetails from "./components/MatchDetails";

function App() {
  const [data, setData] = useState({});
  const [selectedTab, setSelectedTab] = useState("today");

  // جلب البيانات من data.json
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  return (
    <Router>
      <Header />
      <main>
        <h2 className="text-3xl font-bold text-center mt-3">
          Welcome to <span className="text-green-600">YallaGoal ⚽</span>
        </h2>
      </main>

      <Routes>
        {/* ✅ Pass props here */}
        <Route
          path="/"
          element={
            <Matches
              data={data}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          }
        />
        <Route path="/match/:id" element={<MatchDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
