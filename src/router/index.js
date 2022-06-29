import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsGame from "../Atomic/pages/DetailsGame";
import AppBarNew from "../Atomic/organisms/AppBarNew/index";

const RoutesGame = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppBarNew />}></Route>
        <Route path="/:params" element={<DetailsGame />}></Route>
      </Routes>
    </Router>
  );
};

export default RoutesGame;
