import React from "react";
import { NavLink, Link } from "react-router-dom";
import data from "./data";
import "./styles.css";
// import logo from "./img/hahalolo-logo.png";

const Nabar = () => {
  return (
    <section>
      {/* <img alt="logo" src={logo}></img> */}
      <nav className="navbar__container">
        <div>
          {data.map((value) => (
            <NavLink
              className="navlink"
              to={value.link}
              exact={value.exact}
              // activeStyle={{ fontWeight: "900", color: "#FFF338" }}
              style={({ isActive }) => ({
                fontWeight: isActive ? "400" : "400",
                color: isActive ? "#74DEED" : "#fff",
              })}
            >
              {value.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default Nabar;
