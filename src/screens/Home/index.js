import React from "react";
import Casousel from "./Casousel";
import GridNewGame from "./GridNewGame";
import Slider from "./Slider";
// import logo from "./img/hahalolo-logo.png";
const Home = ({ navigateTabListgame }) => {
  return (
    <div>
      <Slider />
      <GridNewGame navigateTabListgame={navigateTabListgame} />
    </div>
  );
};

export default Home;
