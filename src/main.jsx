import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import Header from "./components/Header.jsx";
import Welcome from "./components/Welcome.jsx";
import Gallery from "./components/Gallery.jsx";
import Farms from "./components/Farms.jsx";
import HowPlantsGrow from "./components/HowPlantsGrow.jsx";
import AboutUs from "./components/AboutUs.jsx";

// Testing
import InfoMainPage from "./components/InfoMainPage.jsx";

import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Welcome />
    <InfoMainPage />
    <Gallery />
    <Farms />
    <HowPlantsGrow />
    <AboutUs className="hidden" />

    {/* <Footer /> */}
  </StrictMode>
);
