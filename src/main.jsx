import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import Header from "./components/Header.jsx";
import Welcome from "./components/Welcome.jsx";
import Gallery from "./components/Gallery.jsx";
import Farms from "./components/Farms.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Welcome />
    <Gallery />
    <Farms />
    <AboutUs />
    {/* <Footer /> */}
  </StrictMode>
);
