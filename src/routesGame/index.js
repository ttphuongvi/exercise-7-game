import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsGame from "../pages/DetailsGame";
import Container from "../Atomic/templates/Container";
import AppBarNew from "../Atomic/organisms/AppBarNew";
import dataRoutes from "./dataRoutes";
import ListGame from "../pages/ListGame";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const RoutesGame = () => {
  return (
    <Router>
      <AppBarNew></AppBarNew>
      {/* <Route path="/" element={<Container />}></Route> */}
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
        <Route path="/menu  " element={<Contact />}></Route>
        {/* <Route path="/:params" element={<DetailsGame />}></Route> */}
      </Routes>
    </Router>
  );
};

export default RoutesGame;
