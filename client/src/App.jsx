/* eslint-disable no-unused-vars */
import React from "react";

import { Route, Routes } from "react-router-dom";

import NotFound from "./components/NotFound";
import HomePage from "./components/HomePage.jsx";
import PokemonFormPage from "./components/PokemonFormPage.jsx";
import DetailPage from "./components/DetailPage/DetailPage.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/pokemonForm" element={<PokemonFormPage />} />
      <Route element={<NotFound />} />
    </Routes>
  );
}

export default App;
