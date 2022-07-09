import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsGame from "../Atomic/pages/DetailsGame";
import Container from "../Atomic/templates/Container";

const RoutesGame = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />}></Route>
        <Route path="/:params" element={<DetailsGame />}></Route>
      </Routes>
    </Router>
  );
};

export default RoutesGame;
