import React from "react";
import GridNewGame from "../../organisms/GridNewGame";
import Slider from "../../organisms/Slider";
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
