import { BrowserRouter } from "react-router-dom";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import MainPage from "./MainPage";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  </StrictMode>
);
