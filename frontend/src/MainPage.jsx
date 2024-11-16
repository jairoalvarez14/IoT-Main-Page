import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import InfoHowPlantsGrow from "./components/InfoHowPlantsGrow";

const MainPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/pages/how-plants-grow-info"
          element={<InfoHowPlantsGrow />}
        />
      </Routes>
    </div>
  );
};

export default MainPage;
