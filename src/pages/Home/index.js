import React from "react";
import GridNewGame from "../../Atomic/organisms/GridNewGame";
import Slider from "../../Atomic/organisms/Slider";
import TemplateHome from "../../Atomic/templates/TemplateHome";
// import logo from "./img/hahalolo-logo.png";
const Home = ({ navigateTabListgame }) => {
  return (
    <TemplateHome
      slider={<Slider />}
      gridNewGame={<GridNewGame navigateTabListgame={navigateTabListgame} />}
    ></TemplateHome>
  );
};

export default Home;
