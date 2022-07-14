import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppBarNew from "../Atomic/organisms/AppBar";
import dataRoutes from "./dataRoutes";
import DetailsGame from "../pages/DetailGame";

const RoutesGame = () => {
  return (
    <Router>
      <AppBarNew></AppBarNew>
      <Routes>
        {dataRoutes.map((route) => {
          return (
            <Route
              path={route.path}
              element={route.component}
              key={route.path}
            ></Route>
          );
        })}
        <Route path="/:params" element={<DetailsGame />}></Route>
      </Routes>
    </Router>
  );
};

export default RoutesGame;
