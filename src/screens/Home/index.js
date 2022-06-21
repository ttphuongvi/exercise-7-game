import React from "react";
import Casousel from "./Casousel";
import GridNewGame from "./GridNewGame";
// import logo from "./img/hahalolo-logo.png";
const Home = ({ navigateTabListgame }) => {
  return (
    <div>
      <Casousel />
      <GridNewGame navigateTabListgame={navigateTabListgame} />
    </div>
  );
};

export default Home;
