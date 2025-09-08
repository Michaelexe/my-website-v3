import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import MainPage from "../pages/MainPage/index.js";
import GuitarPage from "../pages/GuitarPage/index.js";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/guitar/:name" element={<GuitarPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
