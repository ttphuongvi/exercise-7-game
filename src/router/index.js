import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppBar from "../components/AppBar/index";
import Home from "../screens/Home/index";
import Contact from "../screens/Contact/index";
import Menu from "../screens/Menu/index";
const RoutesGame = () => {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default RoutesGame;
