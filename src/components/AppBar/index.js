import React from "react";
import { NavLink } from "react-router-dom";
import data from "./data";
import "./styles.css";

const Nabar = () => {
  return (
    <nav className="navbar__container">
      {data.map((value) => (
        <NavLink
          className="navlink"
          to={value.link}
          exact={value.exact}
          // activeStyle={{ fontWeight: "900", color: "#FFF338" }}
          style={({ isActive }) => ({
            fontWeight: isActive ? "400" : "400",
            color: isActive ? "rgb(240, 20, 20)" : "#000",
          })}
        >
          {value.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nabar;
