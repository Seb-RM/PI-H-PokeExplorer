/* eslint-disable no-unused-vars */
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./views/HomePage/HomePage.jsx";
import DetailPage from "./views/DetailPage/DetailPage.jsx"
import LandingPage from "./views/LandingPage/LandingPage.jsx";
import PokemonFormPage from "./views/PokemonFormPage/PokemonFormPage.jsx"

import "./App.css";
function App() {
  return (
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/pokemonForm" element={<PokemonFormPage />} />
      </Routes>
  );
}

export default App;
