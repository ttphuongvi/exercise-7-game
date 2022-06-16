import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppBar from "../components/AppBar/index";
import Home from "../screens/Home/index";
import Contact from "../screens/Contact/index";
import ListGame from "../screens/ListGame/index";
import AppBarNew from "../components/AppBarNew/index";
const RoutesGame = () => {
  return (
    <Router>
      <AppBarNew />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<ListGame />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default RoutesGame;
