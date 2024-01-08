/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage.jsx";
import LandingPage from "./views/LandingPage/LandingPage.jsx";
import DetailPage from "./views/DetailPage/DetailPage.jsx"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
