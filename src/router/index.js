import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppBarNew from "../screens/AppBarNew/index";
import DetailsGame from "../screens/DetailsGame";
const RoutesGame = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppBarNew />}></Route>
        <Route path="/:id" element={<DetailsGame />}></Route>
      </Routes>
    </Router>
  );
};

export default RoutesGame;
