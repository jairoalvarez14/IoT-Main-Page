import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import Header from "./components/Header.jsx";
import App from "./App.jsx";
import Button from "./components/Button.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Header /> */}
    <Button />
    <App />
    {/* <Footer /> */}
  </StrictMode>
);
